import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const font = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "A.S Bygg AS | Takvask og takvedlikehold",
    template: "%s | A.S Bygg AS",
  },
  description:
    "Profesjonell takvask og vedlikehold. Vi fjerner mose, alger og smuss, og forlenger levetiden på taket ditt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={`${font.className} scroll-smooth`}>
      <body className="min-h-full bg-background text-foreground antialiased flex flex-col">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:shadow"
        >
          Hopp til innhold
        </a>
        <Navbar />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
