import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vaishnavi Khatri | Full Stack Developer",
  description: "Premium interactive developer portfolio showcasing projects, skills, and achievements in web development.",
  keywords: ["Vaishnavi Khatri", "Full Stack Developer", "Web Developer", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Vaishnavi Khatri" }],
  openGraph: {
    title: "Vaishnavi Khatri | Full Stack Developer",
    description: "Premium interactive developer portfolio showcasing projects, skills, and achievements in web development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0f]">{children}</body>
    </html>
  );
}
