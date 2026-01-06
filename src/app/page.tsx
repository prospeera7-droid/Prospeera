
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calculator, FileText, PiggyBank } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Btn03 from '@/components/ui/Btn03';

const services = [
  {
    icon: <Calculator className="w-8 h-8" />,
    title: 'Bookkeeping & Data Entry',
    description: 'Stay audit-ready, always. We manage your books with precision so you can focus on growth, not data entry.',
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'Tax Planning & Preparation',
    description: 'From planning to filing ready — we make taxes stress-free, compliant, and optimized for every client’s financial advantage.',
  },
  {
    icon: <PiggyBank className="w-8 h-8" />,
    title: 'Accounting',
    description: 'Transform raw data into strategic financial insights. Our accounting solutions bring clarity, control, and confidence to every number.',
  },
];

const title = "Prospeera";
const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function Home() {
  return (
    <>
      <section className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
        <div className="max-w-4xl">
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-foreground"
          >
            {title.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-slate-600 mb-10"
          >
            Your Backdoor Financial Partner.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
           >
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">
                Get Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section id="services" className="w-full py-20 lg:py-32 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Core Support Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-background/10 backdrop-blur-sm shadow-xl transition-shadow duration-300 flex flex-col p-6">
                <CardHeader className="flex flex-row items-center gap-4">
                  {service.icon}
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0">
                    <Link href="/services">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Btn03 asChild>
                <Link href="/services">
                    Explore all services
                </Link>
            </Btn03>
          </div>
        </div>
      </section>
    </>
  );
}
