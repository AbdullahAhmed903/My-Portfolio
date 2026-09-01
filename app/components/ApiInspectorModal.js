"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ApiInspectorModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("endpoints");
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleCopyJson = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-backdrop-wrap">
          {/* Backdrop */}
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="modal-window"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
          >
            {/* Header */}
            <div className="modal-header">
              <div className="header-meta">
                <div className="status-dot"></div>
                <div>
                  <h3 className="modal-title">{project.title}</h3>
                  <p className="modal-subtitle">Backend Architecture & API Schema Inspector</p>
                </div>
              </div>
              <button onClick={onClose} className="btn-close" aria-label="Close modal">
                ✕
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="modal-tabs">
              <button
                className={`modal-tab ${activeTab === "endpoints" ? "active" : ""}`}
                onClick={() => setActiveTab("endpoints")}
              >
                REST Endpoints
              </button>
              <button
                className={`modal-tab ${activeTab === "architecture" ? "active" : ""}`}
                onClick={() => setActiveTab("architecture")}
              >
                System Architecture
              </button>
              <button
                className={`modal-tab ${activeTab === "schema" ? "active" : ""}`}
                onClick={() => setActiveTab("schema")}
              >
                Sample Payload (JSON)
              </button>
            </div>

            {/* Modal Body Content */}
            <div className="modal-body">
              {activeTab === "endpoints" && (
                <div className="endpoints-list">
                  {project.endpoints?.map((ep, i) => (
                    <div key={i} className="endpoint-item">
                      <div className="endpoint-header">
                        <span className={`method-badge method-${ep.method.toLowerCase()}`}>
                          {ep.method}
                        </span>
                        <code className="endpoint-path">{ep.path}</code>
                        <span className="status-code">200 OK</span>
                      </div>
                      <p className="endpoint-desc">{ep.description}</p>
                    </div>
                  )) || (
                    <div className="endpoint-item">
                      <div className="endpoint-header">
                        <span className="method-badge method-get">GET</span>
                        <code className="endpoint-path">/api/v1/health</code>
                        <span className="status-code">200 OK</span>
                      </div>
                      <p className="endpoint-desc">System health check & metrics monitoring</p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "architecture" && (
                <div className="arch-info">
                  <div className="arch-card">
                    <h4 className="arch-card-title">Core Backend Highlights</h4>
                    <ul className="arch-list">
                      <li>⚡ High throughput connection pooling with optimized PostgreSQL indices</li>
                      <li>🛡️ JWT-based authentication & strict Role-Based Access Control (RBAC)</li>
                      <li>🔄 Rate limiting & Redis caching layer preventing abuse & reducing DB load</li>
                      <li>📦 Asynchronous background workers for notifications & webhook events</li>
                    </ul>
                  </div>

                  <div className="tech-tags-cloud">
                    {project.tags.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "schema" && (
                <div className="schema-view">
                  <div className="schema-toolbar">
                    <span className="schema-label">response_schema.json</span>
                    <button
                      className="btn-copy-code"
                      onClick={() =>
                        handleCopyJson(
                          JSON.stringify(
                            project.samplePayload || {
                              status: "success",
                              code: 200,
                              data: {
                                project: project.title,
                                rateLimit: "100req/min",
                                latency: "14ms",
                                cache: "HIT"
                              }
                            },
                            null,
                            2
                          )
                        )
                      }
                    >
                      {copied ? "Copied!" : "Copy JSON"}
                    </button>
                  </div>
                  <pre className="schema-code">
                    {JSON.stringify(
                      project.samplePayload || {
                        status: "success",
                        code: 200,
                        data: {
                          project: project.title,
                          rateLimit: "100req/min",
                          latency: "14ms",
                          cache: "HIT"
                        }
                      },
                      null,
                      2
                    )}
                  </pre>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-view-repo"
              >
                <span>{project.link?.includes("github.com") ? "View Source Code on GitHub" : "Visit Live Platform"}</span>
                <span>↗</span>
              </a>
            </div>
          </motion.div>

          <style jsx>{`
            .modal-backdrop-wrap {
              position: fixed;
              inset: 0;
              z-index: 99999;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 20px;
            }

            .modal-backdrop {
              position: absolute;
              inset: 0;
              background: rgba(4, 6, 10, 0.75);
              backdrop-filter: blur(10px);
            }

            .modal-window {
              position: relative;
              width: 100%;
              max-width: 680px;
              background: #0f1117;
              border: 1px solid rgba(0, 210, 255, 0.3);
              border-radius: 20px;
              box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 210, 255, 0.15);
              overflow: hidden;
              z-index: 2;
              display: flex;
              flex-direction: column;
              max-height: 88vh;
            }

            .modal-header {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 20px 24px;
              border-bottom: 1px solid rgba(255, 255, 255, 0.08);
              background: rgba(255, 255, 255, 0.02);
            }

            .header-meta {
              display: flex;
              align-items: center;
              gap: 12px;
            }

            .status-dot {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: #00d2ff;
              box-shadow: 0 0 10px #00d2ff;
            }

            .modal-title {
              font-size: 1.15rem;
              font-weight: 700;
              color: #f1f5f9;
              margin: 0;
            }

            .modal-subtitle {
              font-size: 0.8rem;
              color: #94a3b8;
              font-family: var(--font-mono);
              margin-top: 2px;
            }

            .btn-close {
              background: rgba(255, 255, 255, 0.06);
              border: 1px solid rgba(255, 255, 255, 0.1);
              color: #94a3b8;
              width: 32px;
              height: 32px;
              border-radius: 8px;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.2s;
            }

            .btn-close:hover {
              background: rgba(239, 68, 68, 0.2);
              border-color: rgba(239, 68, 68, 0.4);
              color: #ef4444;
            }

            .modal-tabs {
              display: flex;
              gap: 8px;
              padding: 12px 24px;
              background: rgba(0, 0, 0, 0.2);
              border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            }

            .modal-tab {
              background: transparent;
              border: 1px solid transparent;
              color: #94a3b8;
              padding: 6px 14px;
              border-radius: 8px;
              font-size: 0.82rem;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.2s;
            }

            .modal-tab:hover {
              color: #f1f5f9;
              background: rgba(255, 255, 255, 0.04);
            }

            .modal-tab.active {
              background: rgba(0, 210, 255, 0.12);
              border-color: rgba(0, 210, 255, 0.35);
              color: #00d2ff;
            }

            .modal-body {
              padding: 24px;
              overflow-y: auto;
              flex: 1;
            }

            .endpoints-list {
              display: flex;
              flex-direction: column;
              gap: 12px;
            }

            .endpoint-item {
              background: rgba(255, 255, 255, 0.03);
              border: 1px solid rgba(255, 255, 255, 0.06);
              border-radius: 10px;
              padding: 14px 16px;
            }

            .endpoint-header {
              display: flex;
              align-items: center;
              gap: 10px;
              margin-bottom: 6px;
            }

            .method-badge {
              font-size: 0.72rem;
              font-weight: 800;
              padding: 3px 8px;
              border-radius: 6px;
              font-family: var(--font-mono);
            }

            .method-get {
              background: rgba(59, 130, 246, 0.18);
              color: #60a5fa;
              border: 1px solid rgba(59, 130, 246, 0.3);
            }

            .method-post {
              background: rgba(34, 197, 94, 0.18);
              color: #4ade80;
              border: 1px solid rgba(34, 197, 94, 0.3);
            }

            .method-patch {
              background: rgba(249, 115, 22, 0.18);
              color: #fb923c;
              border: 1px solid rgba(249, 115, 22, 0.3);
            }

            .method-delete {
              background: rgba(239, 68, 68, 0.18);
              color: #f87171;
              border: 1px solid rgba(239, 68, 68, 0.3);
            }

            .endpoint-path {
              font-family: var(--font-mono);
              font-size: 0.85rem;
              color: #f1f5f9;
              flex: 1;
            }

            .status-code {
              font-family: var(--font-mono);
              font-size: 0.75rem;
              color: #22c55e;
              background: rgba(34, 197, 94, 0.1);
              padding: 2px 6px;
              border-radius: 4px;
            }

            .endpoint-desc {
              font-size: 0.82rem;
              color: #94a3b8;
              margin: 0;
            }

            .arch-card {
              background: rgba(255, 255, 255, 0.03);
              border: 1px solid rgba(255, 255, 255, 0.06);
              border-radius: 12px;
              padding: 18px 20px;
              margin-bottom: 16px;
            }

            .arch-card-title {
              font-size: 0.95rem;
              color: #00d2ff;
              margin-bottom: 12px;
            }

            .arch-list {
              list-style: none;
              padding: 0;
              margin: 0;
              display: flex;
              flex-direction: column;
              gap: 10px;
              font-size: 0.86rem;
              color: #cbd5e1;
            }

            .tech-tags-cloud {
              display: flex;
              flex-wrap: wrap;
              gap: 8px;
            }

            .tech-badge {
              font-size: 0.75rem;
              font-family: var(--font-mono);
              background: rgba(0, 210, 255, 0.08);
              border: 1px solid rgba(0, 210, 255, 0.2);
              color: #38bdf8;
              padding: 4px 10px;
              border-radius: 6px;
            }

            .schema-view {
              background: #090a0f;
              border: 1px solid rgba(255, 255, 255, 0.08);
              border-radius: 10px;
              overflow: hidden;
            }

            .schema-toolbar {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 8px 14px;
              background: rgba(255, 255, 255, 0.03);
              border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            }

            .schema-label {
              font-family: var(--font-mono);
              font-size: 0.78rem;
              color: #94a3b8;
            }

            .btn-copy-code {
              background: rgba(0, 210, 255, 0.12);
              border: 1px solid rgba(0, 210, 255, 0.25);
              color: #00d2ff;
              padding: 3px 10px;
              border-radius: 5px;
              font-size: 0.72rem;
              cursor: pointer;
            }

            .schema-code {
              padding: 16px;
              font-family: var(--font-mono);
              font-size: 0.8rem;
              color: #38bdf8;
              margin: 0;
              overflow-x: auto;
              line-height: 1.5;
            }

            .modal-footer {
              padding: 16px 24px;
              border-top: 1px solid rgba(255, 255, 255, 0.08);
              display: flex;
              justify-content: flex-end;
              background: rgba(255, 255, 255, 0.02);
            }

            .btn-view-repo {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              background: linear-gradient(135deg, #00d2ff 0%, #2563eb 100%);
              color: #08090c;
              font-weight: 700;
              font-size: 0.85rem;
              padding: 8px 18px;
              border-radius: 8px;
              transition: opacity 0.2s;
            }

            .btn-view-repo:hover {
              opacity: 0.9;
            }

            @media (max-width: 640px) {
              .modal-backdrop-wrap {
                padding: 12px;
              }
              .modal-window {
                border-radius: 16px;
                max-height: 90vh;
              }
              .modal-header {
                padding: 16px 18px;
              }
              .modal-title {
                font-size: 1rem;
              }
              .modal-subtitle {
                font-size: 0.74rem;
              }
              .modal-tabs {
                padding: 8px 12px;
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
              }
              .modal-tab {
                padding: 6px 10px;
                font-size: 0.75rem;
                white-space: nowrap;
              }
              .modal-body {
                padding: 16px;
              }
              .endpoint-header {
                flex-wrap: wrap;
                gap: 6px;
              }
              .endpoint-path {
                word-break: break-all;
                font-size: 0.75rem;
              }
              .modal-footer {
                padding: 12px 16px;
              }
              .btn-view-repo {
                width: 100%;
                justify-content: center;
              }
            }
          `}</style>
        </div>
      )}
    </AnimatePresence>
  );
}
