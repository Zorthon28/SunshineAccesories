"use client"; // This component needs to be a Client Component for state (mobile menu) and interactivity

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button'; // Assuming you still want to use Shadcn Button
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react'; // Icons for mobile menu, cart, search, user

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Collections', href: '/collections' },
    { name: 'Shop', href: '/shop' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' }, // Assuming a contact page might be added later
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-sm border-b border-zinc-200 dark:border-zinc-700">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png" // Replace with your actual logo path
            alt="Sunshine Accessories Logo"
            width={40} // Adjust as needed
            height={40} // Adjust as needed
            priority // Load logo eagerly
          />
          <span className="text-xl md:text-2xl font-serif font-bold text-yellow-800 dark:text-yellow-300">
            Sunshine Accessories
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 lg:space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-zinc-700 hover:text-yellow-700 dark:text-zinc-300 dark:hover:text-yellow-200 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Utility Icons (Desktop & Mobile) */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Button variant="ghost" size="icon" className="text-zinc-600 hover:text-yellow-700 dark:text-zinc-400 dark:hover:text-yellow-200">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-zinc-600 hover:text-yellow-700 dark:text-zinc-400 dark:hover:text-yellow-200">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden lg:inline-flex text-zinc-600 hover:text-yellow-700 dark:text-zinc-400 dark:hover:text-yellow-200">
            <User className="h-5 w-5" />
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-zinc-600 hover:text-yellow-700 dark:text-zinc-400 dark:hover:text-yellow-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-700 py-4"
        >
          <ul className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-xl font-semibold text-zinc-800 hover:text-yellow-700 dark:text-zinc-200 dark:hover:text-yellow-300 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;