"use client";
import "./ApiInspectorModal.css";
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

          </div>
      )}
    </AnimatePresence>
  );
}
