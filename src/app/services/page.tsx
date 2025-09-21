import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, FileText, PiggyBank, Briefcase, BarChart, ShieldCheck } from "lucide-react";

const allServices = [
  {
    icon: <Calculator className="h-8 w-8" />,
    title: "Bookkeeping & Accounting",
    description: "Meticulous and timely bookkeeping to keep your finances in perfect order.",
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Tax Planning & Preparation",
    description: "Expert tax strategies and preparation to maximize your returns and minimize stress.",
  },
  {
    icon: <PiggyBank className="h-8 w-8" />,
    title: "Financial Advisory",
    description: "Personalized advice on savings, investments, and long-term financial planning.",
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: "Business Formation",
    description: "Guidance on choosing and setting up the right business structure (LLC, S-Corp, etc.).",
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: "Financial Reporting",
    description: "Clear, insightful financial reports (P&L, Balance Sheet) to track your business health.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "IRS Representation",
    description: "Professional representation in case of audits or inquiries from tax authorities.",
  },
];

export default function ServicesPage() {
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
          <Card key={index} className="bg-transparent border shadow-sm hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              {service.icon}
              <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
