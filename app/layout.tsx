import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { ThemeProvider } from "@/components/theme/darktheme";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";


export const metadata: Metadata = {
  title: "GIGBNB",
  description: "An application to get every gig job around u",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <div className=" ">
          <Navbar />
        </div>
        <main> {children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
