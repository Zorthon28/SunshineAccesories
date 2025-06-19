// src/app/layout.tsx
import type { Metadata } from "next";
// --- START CHANGES HERE ---
import { Inter, Playfair_Display } from "next/font/google"; // Use Google Fonts instead of Geist
// --- END CHANGES HERE ---
import "./globals.css";
import Header from "@/components/layout/Header";

// --- START CHANGES HERE ---
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair-display" });
// --- END CHANGES HERE ---

export const metadata: Metadata = {
  title: "Sunshine Accessories - Exquisite Jewelry",
  description: "Discover timeless and brilliant jewelry crafted with passion and ethical sourcing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // --- START CHANGES HERE ---
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`} // Apply Google Font variables and Tailwind utility class
        // --- END CHANGES HERE ---
      >
        <Header />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}