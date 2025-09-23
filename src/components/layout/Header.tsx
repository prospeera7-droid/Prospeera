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
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className={cn(
      "fixed top-4 z-50 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl transition-all duration-300 rounded-xl",
      "bg-background/80 backdrop-blur-sm shadow-lg border border-border/50 bg-gradient-to-b from-border/20 to-transparent"
    )}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
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
        <div className="md:hidden bg-background/95 border-t">
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