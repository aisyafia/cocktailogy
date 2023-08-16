import { Navbar } from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cocktailogy",
  description: "Find your favorite drinks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        <div className="container max-w-7xl mx-auto h-full pt-8 pb-8">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
