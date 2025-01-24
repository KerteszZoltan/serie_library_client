import type { Metadata } from "next";
import "./styles/globals.scss";

import { Roboto_Mono } from 'next/font/google'
import Navigation from "@/common/componenets/navigation/navigation";
import Footer from "@/common/componenets/footer/footer";
 

 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Serie Library",
  description: "An app where series live",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_mono}`}>
        <Navigation></Navigation>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
