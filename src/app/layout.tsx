import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import { cn } from "@/lib/helpers";
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
    <html
      lang="en"
      className={cn(`${GeistSans.variable} ${GeistMono.variable}`, "h-full")}
    >
      <body className="bg-stone-50 w-full min-h-[100vh] flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
