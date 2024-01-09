import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/app/providers";
import "./globals.css";
import { cn } from "@/utils/tw";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Discuss App",
  description: "App for various discussion topics",
  icons: {
    icon: {
      url: "/images/favicon.ico",
      href: "/images/favicon.ico"
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <Providers>
          <div className="fixed w-full flex justify-center z-50">
            <Navbar />
          </div>
          <div className="pt-16">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
