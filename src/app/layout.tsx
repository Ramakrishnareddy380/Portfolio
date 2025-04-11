import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - G RAMA KRISHNA REDDY",
  description: "Full Stack Developer portfolio showcasing skills and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <Script id="theme-switcher" strategy="beforeInteractive">
        {`
          if (localStorage.getItem('theme') === 'light') {
            document.documentElement.classList.remove('dark');
          }
        `}
      </Script>
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        {children}
      </body>
    </html>
  );
} 