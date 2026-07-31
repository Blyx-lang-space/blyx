import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import './globals.css';

export const metadata = {
  title: 'The Blyx Programming Language — blyx-lang.space',
  description: 'Official web portal for the Blyx Programming Language. AI-native, high-performance systems language with static tensors, actors, and inline GPU acceleration.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#07090e] text-[#f8fafc] font-sans antialiased min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
