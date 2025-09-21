import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const caseStudies = [
  {
    title: "Scaling a Design Agency",
    description: "How we helped a freelance graphic designer transition into a full-fledged agency by optimizing their financial structure, leading to a 150% increase in profitability.",
    link: "#",
  },
  {
    title: "Tax Savings for a Tech Consultant",
    description: "We identified over $20,000 in annual tax savings for an independent IT consultant through strategic expense tracking and business structure advice.",
    link: "#",
  },
  {
    title: "Financial Roadmap for a Writer",
    description: "A freelance writer secured a mortgage and started a retirement fund within two years after we developed a personalized financial roadmap and bookkeeping system.",
    link: "#",
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Success Stories</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Real results for freelancers just like you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <Card key={index} className="bg-transparent border shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{study.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{study.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="p-0">
                <Link href={study.link}>
                  Read Full Story &rarr;
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
