import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache on server for 1 hour

const LANG_COLORS = {
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  HTML: "#E34F26",
  CSS: "#38BDF8",
  Python: "#3776AB",
  SQL: "#22C55E",
  PostgreSQL: "#22C55E",
  Shell: "#89E051",
  Other: "#64748B",
};

export async function GET() {
  const currentYear = new Date().getFullYear();
  
  // Sensible fast fallbacks in case GitHub APIs rate-limit or fail
  let fallbackData = {
    publicRepos: 24,
    totalContributions: 1650,
    lastYearContributions: 1220,
    currentYearContributions: 1218,
    commits: 1650,
    projects: 24,
    languages: [
      { name: "TypeScript", percent: 42, color: "#3178C6" },
      { name: "JavaScript", percent: 35, color: "#F7DF1E" },
      { name: "Python", percent: 14, color: "#3776AB" },
      { name: "CSS", percent: 9, color: "#38BDF8" },
    ],
  };

  try {
    const userPromise = fetch("https://api.github.com/users/AbdullahAhmed903", {
      headers: { "User-Agent": "Portfolio-App" },
      next: { revalidate: 3600 },
    }).then((r) => (r.ok ? r.json() : null)).catch(() => null);

    const contribPromise = fetch("https://github-contributions-api.jogruber.de/v4/AbdullahAhmed903", {
      next: { revalidate: 3600 },
    }).then((r) => (r.ok ? r.json() : null)).catch(() => null);

    const reposPromise = fetch("https://api.github.com/users/AbdullahAhmed903/repos?per_page=100&sort=updated", {
      headers: { "User-Agent": "Portfolio-App" },
      next: { revalidate: 3600 },
    }).then((r) => (r.ok ? r.json() : null)).catch(() => null);

    const [userData, contribData, reposData] = await Promise.all([
      userPromise,
      contribPromise,
      reposPromise,
    ]);

    if (userData?.public_repos) {
      fallbackData.publicRepos = userData.public_repos;
      fallbackData.projects = userData.public_repos;
    }

    if (contribData?.total) {
      if (contribData.total.lastYear) {
        fallbackData.lastYearContributions = contribData.total.lastYear;
      }
      if (contribData.total[currentYear]) {
        fallbackData.currentYearContributions = contribData.total[currentYear];
      }
      const allYearsSum = Object.entries(contribData.total)
        .filter(([key]) => key !== "lastYear")
        .reduce((acc, [, val]) => acc + (typeof val === "number" ? val : 0), 0);
      if (allYearsSum > 0) {
        fallbackData.totalContributions = allYearsSum;
        fallbackData.commits = allYearsSum;
      } else if (contribData.total.lastYear) {
        fallbackData.commits = contribData.total.lastYear;
      }
    }

    if (Array.isArray(reposData) && reposData.length > 0) {
      const langCounts = {};
      let totalCount = 0;
      reposData.forEach((repo) => {
        if (repo.language) {
          langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
          totalCount++;
        }
      });

      if (totalCount > 0) {
        const sortedLangs = Object.entries(langCounts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 4);

        const computed = sortedLangs.map(([name, count]) => ({
          name,
          percent: Math.round((count / totalCount) * 100),
          color: LANG_COLORS[name] || "#00D2FF",
        }));

        if (computed.length > 0) {
          fallbackData.languages = computed;
        }
      }
    }
  } catch (err) {
    console.error("Error in /api/github-stats route:", err);
  }

  return NextResponse.json(fallbackData, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
