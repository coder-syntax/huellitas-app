import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://huellitas.org';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Huellitas — Adopción y Rescate Animal en Buenos Aires',
    template: '%s | Huellitas',
  },
  description:
    'Encontrá tu compañero ideal. Adoptá perros y gatos rescatados en Buenos Aires. También podés ser hogar de tránsito, donar o voluntariar.',
  keywords: ['adopción animal', 'adoptar perro', 'adoptar gato', 'rescate animal', 'Buenos Aires', 'tránsito animal'],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'Huellitas',
    title: 'Huellitas — Adopción y Rescate Animal',
    description: 'Encontrá tu compañero ideal. Adoptá perros y gatos rescatados en Buenos Aires.',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'Huellitas — Adopción y Rescate Animal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Huellitas — Adopción y Rescate Animal',
    description: 'Encontrá tu compañero ideal. Adoptá perros y gatos rescatados en Buenos Aires.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased font-sans`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
