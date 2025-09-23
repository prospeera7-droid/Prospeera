import type { Metadata } from 'next';
import { Source_Code_Pro, Permanent_Marker } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { BackgroundPaths } from '@/components/BackgroundPaths';

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
  weight: ['400', '600', '700'],
});

const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  variable: '--font-permanent-marker',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Prospeera: Freelancer Financial Services',
  description: 'Accounting & Financial Services for Freelancers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-body antialiased', sourceCodePro.variable, permanentMarker.variable)}>
        <BackgroundPaths />
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
