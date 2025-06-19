// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer"; // Assuming Footer is now found.
// import { Toaster } from "@/components/ui/toaster"; // REMOVE THIS LINE
import { Toaster } from "sonner"; // NEW: Import Toaster from sonner

import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sunshine Accessories",
  description: "Crafted for moments that last forever. Discover the art of fine jewelry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          playfair.variable
        )}
      >
        <CartProvider>
          <Header />
          {children}
          <Footer />
          <Toaster /> {/* This remains the same, but it's now from sonner */}
        </CartProvider>
      </body>
    </html>
  );
}