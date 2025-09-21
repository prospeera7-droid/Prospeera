'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, FileText, PiggyBank, Briefcase, BarChart, ShieldCheck, X } from 'lucide-react';

const allServices = [
  {
    icon: <Calculator className="h-8 w-8" />,
    title: 'Bookkeeping & Accounting',
    description: 'Meticulous and timely bookkeeping to keep your finances in perfect order.',
    fullDescription: 'We provide comprehensive bookkeeping services that include recording daily transactions, reconciling bank statements, and managing your general ledger. Our goal is to ensure your financial records are always accurate, organized, and ready for tax time, giving you a clear picture of your financial health at all times.',
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: 'Tax Planning & Preparation',
    description: 'Expert tax strategies and preparation to maximize your returns and minimize stress.',
    fullDescription: 'Tax season doesn\'t have to be a headache. We specialize in tax strategies tailored for freelancers and small businesses. We\'ll help you identify all eligible deductions, navigate complex tax laws, and file your returns accurately and on time, ensuring you keep more of your hard-earned money.',
  },
  {
    icon: <PiggyBank className="h-8 w-8" />,
    title: 'Financial Advisory',
    description: 'Personalized advice on savings, investments, and long-term financial planning.',
    fullDescription: 'Plan for a secure future with our expert financial advisory services. We\'ll work with you to understand your goals and create a personalized roadmap for retirement planning, investment strategies, and debt management, empowering you to make smart financial decisions for long-term prosperity.',
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: 'Business Formation',
    description: 'Guidance on choosing and setting up the right business structure (LLC, S-Corp, etc.).',
    fullDescription: 'Starting your freelance career on the right foot is crucial. We offer expert guidance on selecting the most advantageous business structure for your situation, whether it\'s a Sole Proprietorship, LLC, or S-Corp. We will handle the necessary paperwork to get your business officially registered.',
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: 'Financial Reporting',
    description: 'Clear, insightful financial reports (P&L, Balance Sheet) to track your business health.',
    fullDescription: 'Understand your business performance with our detailed financial reports. We provide easy-to-read Profit & Loss statements, Balance Sheets, and Cash Flow statements that give you actionable insights into your revenue, expenses, and overall financial health, helping you make data-driven decisions.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: 'IRS Representation',
    description: 'Professional representation in case of audits or inquiries from tax authorities.',
    fullDescription: 'Facing an IRS audit can be intimidating. Our experienced team can represent you before the IRS, handling all communications and providing the necessary documentation to resolve the issue. We\'re here to ensure your rights are protected and to navigate the process on your behalf.',
  },
];

export default function ServicesPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Services</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A complete suite of financial tools designed for the modern freelancer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allServices.map((service, index) => (
          <motion.div
            key={index}
            layoutId={`card-${index}`}
            whileHover={{ y: -8, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => setExpandedIndex(index)}
            className="cursor-pointer"
          >
            <Card className="bg-background/80 backdrop-blur-sm shadow-xl h-full flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4">
                {service.icon}
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId={`card-${expandedIndex}`}
              className="w-full max-w-2xl mx-auto"
            >
              <Card className="bg-background/80 backdrop-blur-sm shadow-2xl relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setExpandedIndex(null)}
                  className="absolute top-2 right-2 z-10 rounded-full"
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close</span>
                </Button>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{allServices[expandedIndex].title}</CardTitle>
                  <CardDescription>{allServices[expandedIndex].description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{allServices[expandedIndex].fullDescription}</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
