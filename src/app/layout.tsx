import Providers from "@/Components/Providers";
import Header from "@/Components/Header";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEXT.JS 14 Parallel Routes",
  description: "NEXT.JS 14 Parallel Routes"
};

export default function RootLayout({
  children,
  team,
  dashboard
}: Readonly<{
  team: React.ReactNode
  dashboard: React.ReactNode
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="container mx-auto">
            <section className="py-6">
              {children}
            </section>

            <section className="flex gap-6 mt-4 mb-8">
              {team}
              {dashboard}
            </section>
          </main>
        </Providers>
      </body>
    </html>
  );
};