import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shayan Ahmed | Full-Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Shayan Ahmed — MERN Stack Developer, AI/ML enthusiast, and Computer Science student at COMSATS University. Building scalable web applications with modern technologies.",
  keywords: [
    "Shayan Ahmed",
    "Full-Stack Developer",
    "MERN Stack",
    "React",
    "Node.js",
    "Next.js",
    "AI",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Shayan Ahmed" }],
  openGraph: {
    title: "Shayan Ahmed | Full-Stack Developer & AI Enthusiast",
    description:
      "MERN Stack Developer & AI Enthusiast building scalable, production-grade web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
