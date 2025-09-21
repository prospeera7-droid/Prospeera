'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/contact', label: 'Contact Us' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // For the homepage, the header should become opaque only after scrolling past the hero section (100vh)
      // For other pages, it should become opaque after scrolling a little bit (10px)
      const scrollThreshold = pathname === '/' ? window.innerHeight : 10;
      setIsScrolled(window.scrollY > scrollThreshold);
    };
    window.addEventListener('scroll', handleScroll);
    // Also call it once to set initial state
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      isScrolled || pathname !== '/' ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent border-b-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
            Prospeera
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="text-sm font-medium hover:underline underline-offset-4 transition-colors">
                {label}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="flex flex-col space-y-4 p-4">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="text-lg font-medium hover:bg-accent p-2 rounded-md" onClick={() => setIsOpen(false)}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
