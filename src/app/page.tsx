'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calculator, FileText, PiggyBank } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Btn03 from '@/components/ui/Btn03';

const services = [
  {
    icon: <Calculator className="w-8 h-8 mb-4" />,
    title: 'Bookkeeping & Accounting',
    description: 'We handle your books so you can focus on your craft. Meticulous, accurate, and always on time.',
  },
  {
    icon: <FileText className="w-8 h-8 mb-4" />,
    title: 'Tax Planning & Preparation',
    description: 'Navigate tax season with ease. We specialize in tax strategies for freelancers to maximize your returns.',
  },
  {
    icon: <PiggyBank className="w-8 h-8 mb-4" />,
    title: 'Financial Advisory',
    description: 'Plan for your future with expert advice on savings, investments, and retirement for the self-employed.',
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
            className="text-xl md:text-2xl text-muted-foreground mb-10"
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
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-background/60 backdrop-blur-sm shadow-xl transition-shadow duration-300 flex flex-col text-center items-center p-6">
                <CardHeader>
                  {service.icon}
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
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
