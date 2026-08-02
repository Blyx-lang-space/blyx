import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import MarqueSection from "@/components/MarqueSection";
import Footer from "@/components/Footer";

const AUTHORS = [
  {
    photo: "/rahul.png",
    name: "Rahul Chaube",
    role: "Core Author & Lead Architect",
    bio: "Designer of the Blyx language specification, BIR SSA intermediate format, and lead maintainer of the compiler toolchain. Created Blyx to bring GPU-native, memory-safe programming to every developer.",
    github: "https://github.com/Rahulchaube1",
    x: "https://x.com/RahulChaube_",
    linkedin: "https://linkedin.com/in/rahulchaube1",
  },
  {
    photo: "/ujjwal.png",
    name: "Ujjwal Chaudhury",
    role: "Core Contributor & Systems Engineer",
    bio: "Core systems engineer contributing to the Blyx standard library, actor runtime, and package manager. Expert in low-level memory systems and concurrency primitives.",
    github: "https://github.com/Blyx-lang-space",
    x: null,
    linkedin: null,
  },
];

export default function CommunityPage() {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <main style={{ flex: 1 }}>

        {/* ── Hero ── */}
        <section style={{
          background: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          padding: "clamp(56px,7vw,96px) clamp(20px,5vw,80px)",
        }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{
              fontFamily: "'Inter', sans-serif", fontSize: "14px",
              color: "#6b7280", marginBottom: "20px",
            }}>
              <Link href="/" style={{ color: "#e05d44", textDecoration: "none" }}>Home</Link>
              {" / "} Community &amp; Governance
            </div>
            <h1 style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 900,
              fontSize: "clamp(36px,5vw,60px)", color: "#111827",
              letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: "20px",
            }}>
              Community &amp; Governance
            </h1>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: "clamp(17px,2vw,21px)",
              color: "#6b7280", lineHeight: 1.7, margin: 0,
            }}>
              Blyx is an open-source project built by a global community of compiler engineers, systems programmers, and AI researchers.
            </p>
          </div>
        </section>

        {/* ── Core Team ── */}
        <section style={{
          padding: "clamp(56px,7vw,96px) clamp(20px,5vw,80px)",
          background: "#f9fafb",
          borderBottom: "1px solid #e5e7eb",
        }}>
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 900,
              fontSize: "clamp(28px,4vw,44px)", color: "#111827",
              letterSpacing: "-1px", marginBottom: "56px",
            }}>
              Core Team
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,400px),1fr))",
              gap: "clamp(28px,4vw,48px)",
            }}>
              {AUTHORS.map((author) => (
                <div key={author.name} style={{
                  background: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderTop: "5px solid #e05d44",
                  borderRadius: "0",
                  padding: "clamp(28px,3vw,40px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}>
                  {/* Photo + name row */}
                  <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <div style={{
                      width: "clamp(72px,8vw,96px)",
                      height: "clamp(72px,8vw,96px)",
                      borderRadius: "50%",
                      overflow: "hidden",
                      flexShrink: 0,
                      border: "3px solid #e05d44",
                    }}>
                      <Image
                        src={author.photo}
                        alt={author.name}
                        width={96}
                        height={96}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div>
                      <div style={{
                        fontFamily: "'Source Code Pro', monospace",
                        fontSize: "12px", color: "#e05d44", fontWeight: 700,
                        textTransform: "uppercase", letterSpacing: "0.1em",
                        marginBottom: "6px",
                      }}>
                        {author.role}
                      </div>
                      <div style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "13px",
                        color: "#6b7280",
                        fontWeight: 600,
                        marginBottom: "6px",
                      }}>
                        Author
                      </div>
                      <h3 style={{
                        fontFamily: "'Inter', sans-serif", fontWeight: 800,
                        fontSize: "clamp(20px,2.5vw,26px)", color: "#111827",
                        letterSpacing: "-0.5px", margin: 0,
                      }}>
                        {author.name}
                      </h3>
                    </div>
                  </div>

                  {/* Bio */}
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(15px,1.6vw,17px)", color: "#4b5563",
                    lineHeight: 1.7, margin: 0,
                  }}>
                    {author.bio}
                  </p>

                  {/* Links */}
                  <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                    <a href={author.github} target="_blank" rel="noopener noreferrer"
                      style={{
                        fontFamily: "'Inter', sans-serif", fontWeight: 700,
                        fontSize: "15px", color: "#e05d44", textDecoration: "none",
                      }}>
                      GitHub →
                    </a>
                    {author.x && (
                      <a href={author.x} target="_blank" rel="noopener noreferrer"
                        style={{
                          fontFamily: "'Inter', sans-serif", fontWeight: 700,
                          fontSize: "15px", color: "#6b7280", textDecoration: "none",
                        }}>
                        X (Twitter) →
                      </a>
                    )}
                    {author.linkedin && (
                      <a href={author.linkedin} target="_blank" rel="noopener noreferrer"
                        style={{
                          fontFamily: "'Inter', sans-serif", fontWeight: 700,
                          fontSize: "15px", color: "#6b7280", textDecoration: "none",
                        }}>
                        LinkedIn →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Community Links ── */}
        <section style={{
          padding: "clamp(56px,7vw,80px) clamp(20px,5vw,80px)",
          background: "#ffffff",
        }}>
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 900,
              fontSize: "clamp(24px,3vw,36px)", color: "#111827",
              letterSpacing: "-0.8px", marginBottom: "40px",
            }}>
              Get Involved
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,260px),1fr))",
              gap: "clamp(20px,3vw,32px)",
            }}>
              {[
                {
                  title: "GitHub Repository",
                  body: "Inspect source code, submit bug reports, and create pull requests.",
                  href: "https://github.com/Rahulchaube1/blyxxxx",
                  linkLabel: "Visit Repository →",
                  color: "#e05d44",
                },
                {
                  title: "GitHub RFCs",
                  body: "Propose language features, syntax changes, and compiler APIs.",
                  href: "https://github.com/Blyx-lang-space/blyx/tree/blyx-main/RFC",
                  linkLabel: "Browse RFCs →",
                  color: "#2563eb",
                },
                {
                  title: "Code of Conduct",
                  body: "Our community is welcoming and inclusive. Read our standards for participation.",
                  href: "/community",
                  linkLabel: "Read CoC →",
                  color: "#16a34a",
                },
                {
                  title: "Security Disclosures",
                  body: "Found a security vulnerability? Report it responsibly to the core team.",
                  href: "/security",
                  linkLabel: "Report Issue →",
                  color: "#7c3aed",
                },
              ].map((card) => (
                <div key={card.title} style={{
                  padding: "clamp(24px,3vw,36px)",
                  background: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  borderRadius: "0",
                  borderLeft: `4px solid ${card.color}`,
                }}>
                  <h3 style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 700,
                    fontSize: "clamp(17px,2vw,22px)", color: "#111827",
                    marginBottom: "10px", letterSpacing: "-0.3px",
                  }}>{card.title}</h3>
                  <p style={{
                    fontFamily: "'Inter', sans-serif", fontSize: "clamp(14px,1.5vw,16px)",
                    color: "#6b7280", lineHeight: 1.6, marginBottom: "18px",
                  }}>{card.body}</p>
                  <a href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{ color: card.color, fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>
                    {card.linkLabel}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <MarqueSection />
      <Footer />
    </div>
  );
}
