import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})


export const metadata: Metadata = {
  title: "Calculadora",
  description: "nil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontHeading.className}>
        {children}</body>
    </html>
  );
}
