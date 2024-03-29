import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbars/Navbar";
import MobileNav from "@/components/navbars/MobileNav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="md:block hidden">
          <Navbar />
        </div>
        <div className="md:hidden block">
          <MobileNav />
        </div>
        <div className="md:mx-20">
         {children}
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
