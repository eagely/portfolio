import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const mapleMono = Fira_Code({
  display: "swap",
});

export const metadata: Metadata = {
  title: "eagely.dev",
  description: "big floppa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mapleMono.className} antialiased`}>{children}</body>
    </html>
  );
}
