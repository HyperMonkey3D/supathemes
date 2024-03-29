import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./views/Footer";
import Nav from "./views/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Framer Themes for the Web",
  description: "Beautiful Framer Themes For Your Website",
  verification: {
    google: "PYDf0moaNQFxm2UOFEeIapSusgLiHZ-uJPPIvf-m_9U"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`inter.className py-0 my-0`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
