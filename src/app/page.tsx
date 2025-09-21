import { RotatingSphere } from '@/components/RotatingSphere';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calculator, FileText, PiggyBank } from 'lucide-react';
import Link from 'next/link';

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

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4">
        <RotatingSphere />
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-primary dark:text-primary-foreground">
            Prospeera
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10">
            Accounting & Financial Services for Freelancers.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contact">
              Get Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section id="services" className="w-full py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-transparent border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col text-center items-center p-6">
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
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/services">
                Explore All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
