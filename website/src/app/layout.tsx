import './globals.css';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Blyx — AI-Native Systems Programming Language',
  description: 'Blyx is a memory-safe, GPU-native, actor-concurrent systems language designed for the AI era. Created by Rahul Chaube.',
  keywords: ['programming language', 'systems programming', 'AI', 'tensor', 'actor', 'GPU', 'compiler', 'Blyx'],
  authors: [{ name: 'Rahul Chaube', url: 'https://github.com/Rahulchaube1' }],
  openGraph: {
    title: 'Blyx Programming Language',
    description: 'AI-native systems language. Memory-safe. GPU-native. Actor-concurrent.',
    url: 'https://blyx-lang.space',
    siteName: 'Blyx',
    images: [{ url: '/blyx.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blyx Programming Language',
    description: 'AI-native systems language created by Rahul Chaube.',
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
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#05080f] text-[#e8edf5] min-h-screen flex flex-col antialiased selection:bg-[#00e5ff]/20 selection:text-[#00e5ff]">
        <Navbar />
        <main className="flex-1 w-full relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
