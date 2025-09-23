
'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Github, MoveUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { navLinks, serviceLinks } from '@/lib/links';

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setYear(new Date().getFullYear());
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
              Prospeera
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">
              Financial clarity for freelancers.
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold tracking-wider uppercase">Navigation</h3>
              <ul className="mt-4 space-y-2">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
             <div>
              <h3 className="font-semibold tracking-wider uppercase">Services</h3>
              <ul className="mt-4 space-y-2">
                {serviceLinks.map(({ label }, index) => (
                  <li key={`${label}-${index}`}>
                    <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold tracking-wider uppercase">Follow Us</h3>
              <div className="mt-4 flex space-x-4">
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="#" aria-label="GitHub">
                  <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1 flex md:justify-end items-center gap-4">
            <div className="text-right">
              <span className="text-2xl font-bold block">Prospeera</span>
              <span className="text-2xl font-bold block">Means</span>
              <span className="text-2xl font-bold block">Progress</span>
            </div>
            <Button variant="outline" size="icon" onClick={scrollToTop} aria-label="Back to top">
              <MoveUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8">
          <p className="text-sm text-muted-foreground text-center">
            {isMounted && `© ${year} Prospeera. All rights reserved.`}
          </p>
        </div>

      </div>
    </footer>
  );
}
