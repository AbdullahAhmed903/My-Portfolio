import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Abdullah Ahmed Fathy - Backend Developer",
  description: "Backend Developer specializing in Node.js, Next.js, and scalable systems. Currently at Tensorik building educational platforms.",
  icons: {
    icon: "https://i.ibb.co/3592vhkV/384A7585.jpg",
    shortcut: "https://i.ibb.co/3592vhkV/384A7585.jpg",
    apple: "https://i.ibb.co/3592vhkV/384A7585.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="https://i.ibb.co/3592vhkV/384A7585.jpg" type="image/jpeg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
