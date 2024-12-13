import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Praktijk Het Bergsken",
  description: "Portfolio website voor Praktijk Het Bergsken",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-neutral-100 w-full min-h-[100vh]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
