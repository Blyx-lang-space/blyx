import React from 'react';

export const metadata = {
  title: 'Download Blyx Toolchain — blyx-lang.space',
  description: 'Download the official Blyx compiler driver (blyxc), package manager (blyxpkg), and ecosystem toolchain for Windows, Linux, and macOS.',
};

export default function DownloadPage() {
  return (
    <div style={{ background: '#07090e', color: '#f8fafc', minHeight: '100vh', padding: '4rem 2rem', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', background: 'linear-gradient(135deg, #00f2fe, #7f00ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>
          Download Blyx Toolchain
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem', marginBottom: '3rem' }}>
          Install <code>blyxc</code>, <code>blyxpkg</code>, and the complete Blyx developer suite on Windows, Linux, or macOS using <code>blyxup</code>.
        </p>

        <div style={{ background: '#0f141d', border: '1px solid rgba(0, 242, 254, 0.2)', borderRadius: '12px', padding: '2rem', textAlign: 'left', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#00f2fe', marginBottom: '1rem' }}>Install via <code>blyxup</code> (Recommended)</h2>
          <pre style={{ background: '#07090e', padding: '1rem', borderRadius: '8px', color: '#38bdf8', fontFamily: 'monospace', fontSize: '1rem' }}>
            blyxup install stable
          </pre>
        </div>

        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Portable Standalone Binaries</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div style={{ background: '#0f141d', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#f8fafc' }}>🪟 Windows</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: '0.5rem 0' }}>x86_64-pc-windows-msvc (14.2 MB)</p>
            <p style={{ color: '#64748b', fontSize: '0.8rem', fontFamily: 'monospace' }}>SHA256: ca978112ca1...48bb</p>
          </div>
          <div style={{ background: '#0f141d', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#f8fafc' }}>🐧 Linux</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: '0.5rem 0' }}>x86_64-unknown-linux-gnu (13.8 MB)</p>
            <p style={{ color: '#64748b', fontSize: '0.8rem', fontFamily: 'monospace' }}>SHA256: e3b0c44298f...8555</p>
          </div>
          <div style={{ background: '#0f141d', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#f8fafc' }}>🍎 macOS</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: '0.5rem 0' }}>aarch64-apple-darwin (12.9 MB)</p>
            <p style={{ color: '#64748b', fontSize: '0.8rem', fontFamily: 'monospace' }}>SHA256: d41d8cd98f0...847</p>
          </div>
        </div>
      </div>
    </div>
  );
}
