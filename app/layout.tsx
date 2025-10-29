import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BottomMenu from "./components/bottonMenu";
import Aurora from "./components/Aurora";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: "--font-poppins",
})


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Music UI",
  description: "App de musicas ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Aurora
                colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                blend={0.5}
                amplitude={1.0}
                speed={0.3}
              />

        {children}

        <BottomMenu />
      </body>
    </html>
  );
}
