import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/navbar/navbar";

import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
export const metadata: Metadata = {
  title: "Gigee",
  description: "An application to get every gig job around u",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className=" w-full min-w-screen ">
          <Navbar />
        </div>
        <main> {children}</main>
        <Toaster />
        
        <Footer />
      </body>
    </html>
  );
}
