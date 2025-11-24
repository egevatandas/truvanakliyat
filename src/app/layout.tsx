import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingSidebar from "./components/FloatingSidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Truva Nakliyat - Güvenilir Taşımacılık Hizmetleri",
  description: "Profesyonel evden eve nakliyat, ofis taşıma ve şehirlerarası taşımacılık hizmetleri",
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <FloatingSidebar />
        <Footer />
      </body>
    </html>
  );
}
