import type { Metadata } from "next";
import {Atkinson_Hyperlegible} from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  title: "Aidan Chapman - Home",
  description: "Home",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const atkinson_hyperlegible = Atkinson_Hyperlegible({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: "swap"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={atkinson_hyperlegible.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
