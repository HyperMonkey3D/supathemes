import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./views/Footer";
import Nav from "./views/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Website themes for Framer",
  description: "Beautiful and practical themes built with Framer for Framer",
  verification: {
    google: "google09338f57c9123055.html"
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
