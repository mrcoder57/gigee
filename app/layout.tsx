import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/navbar/navbar";

import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { Poppins, Montserrat } from "next/font/google";
import MobileNavbar from "@/components/navbar/mobileNavbar";
import ReactQueryProvider from "@/utils/provider/ReactQueryProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gigee",
  description: "An Ai driven platform for events and enclusive career building",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Navbar />
        <MobileNavbar />
        <ReactQueryProvider>
          <main> {children}</main>
          <Toaster />
        </ReactQueryProvider>
        <Footer />
      </body>
    </html>
  );
}
