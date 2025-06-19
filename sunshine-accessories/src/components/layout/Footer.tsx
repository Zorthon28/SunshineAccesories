// src/components/layout/Footer.tsx
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 px-4 dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto flex flex-col items-center justify-between text-center md:flex-row md:text-left">
        {/* Left Section: Copyright */}
        <div className="mb-4 md:mb-0">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Sunshine Accessories. All rights reserved.
          </p>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-4 mb-4 md:mb-0">
          <Link href="/about" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors text-sm">
            About Us
          </Link>
          <Link href="/collections" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors text-sm">
            Collections
          </Link>
          <Link href="/contact" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors text-sm">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors text-sm">
            Privacy Policy
          </Link>
        </div>

        {/* Right Section: Social Media Icons (placeholders) */}
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
            {/* Replace with actual social media icons (e.g., from Lucide React or simple SVGs) */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.4 3 4l-1-1c1.6 2.8 5 4.3 8 4.6-1.5-1.7-2.7-4.6-2-7 .3 2 2 3.2 4 3.3-2.8-1.7-4.9-5.2-2.7-9C9 3.5 13 6 16 6.3c-2-.7-4-2-6-3s.6-2.5 2-3c2 2.1 4.5 3 7 3.2c-2 1.3-4 2-6 2.2 2 0 4-1 6-2s2-2 2-2z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;