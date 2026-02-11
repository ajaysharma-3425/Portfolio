// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Background from '@/components/Background';
import ScrollRing from '@/components/ScrollRing';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ajay Dev - MERN Stack Developer',
  description: 'Portfolio of Ajay Dev, a MERN Stack and Next.js Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white `}>
        <Background />
        <div className="relative z-10 overflow-x-hidden">
          <Navbar />
          <main>
             <ScrollRing />
             {children}</main>
          {/* Add Footer component here if you have one */}
        </div>
      </body>
    </html>
  );
}