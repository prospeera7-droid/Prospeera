
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <header className={cn(
      "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl transition-all duration-300 rounded-lg z-50",
      isScrolled ? "bg-background/80 backdrop-blur-sm shadow-lg border" : "bg-transparent border-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div onClick={handleLogoClick} className="inline-block cursor-pointer">
          <Image src="/logo.png" alt="Prospeera Logo" width={300} height={58} priority className="mix-blend-color-burn dark:mix-blend-lighten" />
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="text-sm font-medium hover:underline underline-offset-4 transition-colors">
              {label}
            </Link>
          ))}
          <Button asChild>
            <Link href="https://calendly.com/prospeera7" target="_blank">Schedule a Call</Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 w-full md:hidden bg-background/95 border-t">
            <nav className="flex flex-col space-y-4 p-4">
              {navLinks.map(({ href, label }) => (
                <Link key={href} href={href} className="text-lg font-medium hover:bg-accent p-2 rounded-md" onClick={() => setIsOpen(false)}>
                  {label}
                </Link>
              ))}
              <Link href="https://calendly.com/prospeera7" target="_blank" className="text-lg font-medium hover:bg-accent p-2 rounded-md" onClick={() => setIsOpen(false)}>
                Schedule a Call
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
