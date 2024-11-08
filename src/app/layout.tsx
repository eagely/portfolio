import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});
const inter = localFont({
    src: './fonts/Inter.ttf',
    variable: '--font-inter',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'eagely.dev',
    description: 'big floppa',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}>{children}</body>
        </html>
    );
}
