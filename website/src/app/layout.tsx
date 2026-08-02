import './globals.css';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Announcement from '@/components/Announcement';

export const metadata = {
  title: 'Blyx — A Systems Programming Language for AI & Parallel Computing',
  description: 'Blyx is a modern systems programming language featuring memory safety, native tensor types, actor-based concurrency, and direct GPU compilation. Created by Rahul Chaube.',
  keywords: [
    'Blyx', 'programming language', 'systems programming', 'AI native', 
    'tensor', 'actor model', 'GPU compiler', 'BIR SSA', 'Rahul Chaube'
  ],
  authors: [{ name: 'Rahul Chaube', url: 'https://github.com/Rahulchaube1' }],
  metadataBase: new URL('https://blyx-lang.space'),
  openGraph: {
    title: 'Blyx Programming Language',
    description: 'Empowering systems programmers with memory safety, native tensor types, and GPU acceleration.',
    url: 'https://blyx-lang.space',
    siteName: 'Blyx',
    images: [{ url: '/blyx.png', width: 1200, height: 630, alt: 'Blyx Programming Language' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blyx Programming Language',
    description: 'AI-native systems language with memory safety, actor concurrency, and GPU compilation.',
    creator: '@RahulChaube_',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                  document.documentElement.classList.remove('dark')
                } else {
                  document.documentElement.classList.add('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen flex flex-col antialiased selection:bg-[#0284c7]/20 selection:text-[#0284c7] transition-colors duration-200">
        <Announcement />
        <Navbar />
        <main className="flex-1 w-full relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
