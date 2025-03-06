import type { Metadata } from "next";
import {Fira_Code} from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  title: "Aidan Chapman - Work in Progress",
  description: "Coming soon",
  icons: "/favicon.ico"
};

const fira_code = Fira_Code({
  subsets: ['latin'],
  display: "swap"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fira_code.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
