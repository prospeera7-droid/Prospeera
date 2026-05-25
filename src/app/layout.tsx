
import type { Metadata } from 'next';
import { Source_Code_Pro } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { BackgroundPaths } from '@/components/BackgroundPaths';
import Script from 'next/script';

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
  weight: ['400', '600', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Prospeera: Accounting Firm',
  description: 'Prospeera provides professional accounting, bookkeeping, AR/AP, and payroll management services to U.S. CPA firms, delivering accurate, secure, and scalable back-office support.',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Prospeera",
      "url": "https://www.prospeera.com",
      "logo": "https://www.prospeera.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "PLEASE_UPDATE_YOUR_STREET_ADDRESS",
        "addressLocality": "PLEASE_UPDATE_YOUR_CITY",
        "addressRegion": "PLEASE_UPDATE_YOUR_STATE",
        "postalCode": "PLEASE_UPDATE_YOUR_ZIP_CODE",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "PLEASE_UPDATE_YOUR_PHONE_NUMBER",
        "contactType": "customer service"
      }
    },
    { "@type": "Service", "serviceType": "Bookkeeping & Data entry", "provider": { "@type": "Organization", "name": "Prospeera" } },
    { "@type": "Service", "serviceType": "Accounting", "provider": { "@type": "Organization", "name": "Prospeera" } },
    { "@type": "Service", "serviceType": "Tax Planning & Preparation Support", "provider": { "@type": "Organization", "name": "Prospeera" } },
    { "@type": "Service", "serviceType": "Payroll Management", "provider": { "@type": "Organization", "name": "Prospeera" } },
    { "@type": "Service", "serviceType": "Financial Reporting", "provider": { "@type": "Organization", "name": "Prospeera" } },
    { "@type": "Service", "serviceType": "Business Advisory Support", "provider": { "@type": "Organization", "name": "Prospeera" } }
  ]
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
       <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script>
          {`
            function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
            o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
            o.onload=function(){window.trackingFunctions.onLoad({appId:"6961117a632df8000da560e3"})},
            document.head.appendChild(o)}initApollo();
          `}
        </script>
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          sourceCodePro.variable
        )}
      >
        <BackgroundPaths />
        <Header />
        <main className="flex-grow pt-28 relative z-10">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
