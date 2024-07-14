"use client";
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import { usePathname } from 'next/navigation';


const inter = Inter({ subsets: ['latin'] });

const noNavbarPaths = ['/login', '/register'];  

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();  

  const showNavbar = !noNavbarPaths.includes(pathname);  

  return (
    <html lang="en">
      <body className={inter.className}>
        {showNavbar && <Navbar />} 
        {children}
      </body>
    </html>
  );
}
