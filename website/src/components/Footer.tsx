import React from "react";
import Link from "next/link";

/* ── Rust-style SVG social icons (white, no external deps) ── */
function IconGitHub() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-label="GitHub">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  );
}
function IconX() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-label="X (Twitter)">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-label="LinkedIn">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "#2a2a2a", color: "#d1d5db" }}>

      {/* ── 3-column grid (Get help! / Terms and policies / Social) ── */}
      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "clamp(48px,6vw,80px) clamp(20px,5vw,80px) clamp(32px,4vw,48px)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,260px),1fr))",
        gap: "clamp(32px,4vw,64px)",
      }}>

        {/* Column 1 — Get help! */}
        <div>
          <h4 style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 700,
            fontSize: "clamp(16px,1.8vw,20px)", color: "#ffffff",
            marginBottom: "24px", letterSpacing: "-0.3px",
          }}>
            Get help!
          </h4>
          {[
            ["Documentation", "/docs"],
            ["The Blyx Book", "/learn/book"],
            ["Playground (blyxplay)", "/play"],
            ["Ask on GitHub Discussions", "https://github.com/Blyx-lang-space/blyx/discussions"],
          ].map(([label, href]) => {
            const isExternal = href.startsWith("http");
            return isExternal ? (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{
                display: "block", fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(14px,1.5vw,16px)", color: "#e05d44",
                textDecoration: "none", marginBottom: "14px",
              }}>{label}</a>
            ) : (
              <Link key={href} href={href} style={{
                display: "block", fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(14px,1.5vw,16px)", color: "#e05d44",
                textDecoration: "none", marginBottom: "14px",
              }}>{label}</Link>
            );
          })}
        </div>

        {/* Column 2 — Terms and policies */}
        <div>
          <h4 style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 700,
            fontSize: "clamp(16px,1.8vw,20px)", color: "#ffffff",
            marginBottom: "24px", letterSpacing: "-0.3px",
          }}>
            Terms and policies
          </h4>
          {[
            ["Code of Conduct", "/community"],
            ["Licenses: MIT + Apache 2.0", "/community"],
            ["Security Disclosures", "/security"],
            ["Logo Policy", "/community"],
            ["Privacy Notice", "/community"],
          ].map(([label, href]) => (
            <Link key={label} href={href} style={{
              display: "block", fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(14px,1.5vw,16px)", color: "#e05d44",
              textDecoration: "none", marginBottom: "14px",
            }}>{label}</Link>
          ))}
        </div>

        {/* Column 3 — Social (icon buttons like Rust) */}
        <div>
          <h4 style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 700,
            fontSize: "clamp(16px,1.8vw,20px)", color: "#ffffff",
            marginBottom: "24px", letterSpacing: "-0.3px",
          }}>
            Social
          </h4>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {[
              { Icon: IconGitHub, href: "https://github.com/Blyx-lang-space", label: "GitHub" },
              { Icon: IconX,      href: "https://x.com/RahulChaube_",        label: "X" },
              { Icon: IconLinkedIn, href: "https://linkedin.com/in/rahulchaube1", label: "LinkedIn" },
            ].map(({ Icon, href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: "48px", height: "48px",
                  background: "#3d3d3d",
                  color: "#ffffff",
                  borderRadius: "4px",
                  transition: "background 0.15s",
                  textDecoration: "none",
                }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar with left copyright and right credit ── */}
      <div style={{
        borderTop: "1px solid #3d3d3d",
        padding: "clamp(16px,2vw,24px) clamp(20px,5vw,80px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        flexWrap: "wrap",
      }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(13px,1.4vw,15px)",
          color: "#9ca3af",
          margin: 0,
        }}>
          Copyright © {new Date().getFullYear()} Blyx-lang. Dual MIT + Apache 2.0 License.
        </p>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(13px,1.4vw,15px)",
          color: "#d1d5db",
          margin: 0,
          marginLeft: "auto",
          textAlign: "right",
          fontWeight: 600,
        }}>
          Co-created with <span style={{ color: "#ffffff" }}>MrQ Dev</span> (everestqai)
        </p>
      </div>
    </footer>
  );
}
