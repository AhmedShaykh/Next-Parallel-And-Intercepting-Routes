import Providers from "@/Components/Providers";
import Header from "@/Components/Header";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEXT.JS Parallel Routes & Intercepting Routes!"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="container mx-auto my-6">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
};