import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ['400', '500'],
  variable: '--font-poppins',
  subsets: ['devanagari']
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clinic system",
  description: "A simple system for health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Inter&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`${geistSans.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}