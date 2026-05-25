
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BarChart, Briefcase, Calculator, FileText, PiggyBank, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Btn03 from '@/components/ui/Btn03';

const servicesWithLinks = [
  {
    href: '/services/bookkeeping-data-entry',
    icon: <Calculator className="h-8 w-8" />,
    title: 'Bookkeeping & Data entry',
    description: 'Maintain clean, compliant, and audit-ready books. We manage bookkeeping and data entry with precision—so your CPA firm can focus on advisory work and growth.',
    linkText: 'Explore Bookkeeping Services',
  },
  {
    href: '/services/accounting',
    icon: <Briefcase className="h-8 w-8" />,
    title: 'Accounting',
    description: 'Turn financial data into meaningful insights. Our accounting support helps CPA firms maintain control, clarity, and confidence across every financial statement.',
    linkText: 'View our Accounting Solutions',
  },
  {
    href: '/services/tax-planning-preparation-support',
    icon: <FileText className="h-8 w-8" />,
    title: 'Tax Planning & Preparation Support',
    description: 'Structured tax planning and preparation support that helps CPA firms manage compliance, optimize outcomes, and meet deadlines with confidence.',
    linkText: 'Discover Tax Support Options',
  },
  {
    href: '/services/payroll-management',
    icon: <PiggyBank className="h-8 w-8" />,
    title: 'Payroll Management',
    description: 'Structured payroll management support that helps CPA firms ensure accurate processing, regulatory compliance, and timely payroll delivery.',
    linkText: 'Learn about Payroll Management',
  },
  {
    href: '/services/financial-reporting',
    icon: <BarChart className="h-8 w-8" />,
    title: 'Financial Reporting',
    description: 'Clear, structured financial reporting that helps CPA firms deliver timely insights and support informed decision-making.',
    linkText: 'See Financial Reporting Services',
  },
  {
    href: '/services/business-advisory-support',
    icon: <ShieldCheck className="h-8 w-8" />,
    title: 'Business Advisory Support',
    description: 'Advisory and digital support services designed for small and mid-sized firms in India—helping businesses build structure, improve operations, and scale sustainably.',
    linkText: 'View Advisory Support Details',
  },
];

export default function ServicesClient() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Outsourced CPA Support Services</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A complete suite of financial tools designed for the modern Firms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesWithLinks.map((service, index) => (
          <Link href={service.href} key={index} className="flex flex-col">
            <Card className="bg-background/60 backdrop-blur-sm shadow-xl h-full flex flex-col">
              <div className="flex-grow">
                <CardHeader className="flex flex-row items-center gap-4">
                  {service.icon}
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </div>
              <div className="p-4 mt-auto">
                <span className="text-primary font-semibold hover:underline">
                  {service.linkText}
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="text-center mt-16">
        <Btn03 asChild size="lg" className="rounded-full">
          <Link href="https://calendly.com/prospeera7" target="_blank">
            Schedule meeting <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Btn03>
      </div>
    </div>
  );
}
