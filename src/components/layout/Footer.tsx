import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Prospeera. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="GitHub">
              <Github className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
