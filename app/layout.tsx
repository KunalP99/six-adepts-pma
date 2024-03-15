import type { Metadata } from "next";
import { inter } from './font';
import Navbar from "@/components/Navbar/Navbar";
import "./global.scss"
import "./reset.scss";


export const metadata: Metadata = {
  title: "George King & Six Adepts PMA",
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
