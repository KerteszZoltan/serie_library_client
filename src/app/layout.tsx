import type { Metadata } from "next";
import "./styles/globals.scss";

import { Roboto_Mono } from 'next/font/google'
 

 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

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
      <body className={`${roboto_mono}`}>
        {children}
      </body>
    </html>
  );
}
