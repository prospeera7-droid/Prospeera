
'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Github, MoveUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { navLinks, serviceLinks } from '@/lib/links';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
    <footer className="border-t bg-background/80 backdrop-blur-lg relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="md:col-span-1">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image src="/logo.png" alt="Prospeera Logo" width={150} height={40} className="mix-blend-color-burn dark:mix-blend-lighten" />
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">
              Your Backdoor Financial Partner.
            </p>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
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
            <div className="flex flex-col gap-4">
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
              <h3 className="text-4xl font-bold">
                Prospeera Means Progress
              </h3>
            </div>
          </div>
          
        </div>
        
        <div className="mt-12 border-t pt-8 flex justify-between items-center">
            <div className="text-left">
                <p className="text-sm text-muted-foreground">
                    {isMounted && `© ${year} Prospeera. All rights reserved.`}
                </p>
            </div>
            <div className="flex items-center gap-8">
                <Button variant="outline" size="icon" onClick={scrollToTop} aria-label="Back to top">
                    <MoveUp className="h-5 w-5" />
                </Button>
            </div>
        </div>
      </div>
      <div className="w-full text-center py-4">
        <span className="font-headline text-[16rem] font-black text-foreground/5 leading-none select-none tracking-tighter transition-colors hover:text-[#0D9488]">
            PROSPEERA
        </span>
      </div>
    </footer>
  );
}
