
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function BusinessAdvisoryClient() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Business Advisory Support</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We provide business advisory support exclusively for small and mid-sized firms in India, helping business owners strengthen their financial, operational, and compliance foundations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-background/20 backdrop-blur-sm shadow-xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Our Approach</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="text-lg">
                Our services support firms at different growth stages—from setup and process structuring to performance improvement and operational planning. Alongside advisory support, we also offer digital service combinations that help businesses streamline systems, reporting, and decision-making.
              </p>
              <p className="text-lg mt-4">
                All advisory and digital support is delivered in a structured, practical manner—focused on execution, clarity, and long-term sustainability.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/20 backdrop-blur-sm shadow-xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">What’s Included</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  "Business structure and operational advisory support",
                  "Financial process and system setup guidance",
                  "Compliance and regulatory coordination support (India-focused)",
                  "Cash flow and working capital planning assistance",
                  "Performance tracking and management reporting support",
                  "Growth and expansion readiness analysis",
                  "Digital service combinations (reporting tools, dashboards, process automation support)",
                  "Ongoing advisory assistance for business owners and management teams",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-background/20 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Operational Impact</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-2">📈 Help small and mid-sized firms operate with better financial clarity</p>
                <p className="mb-2">⏱️ Reduce manual effort through structured processes and digital support</p>
                <p className="mb-2">💼 Enable informed decision-making for sustainable business growth</p>
                <p>💡 Improve operational efficiency and management visibility</p>
              </CardContent>
            </Card>
            <Card className="bg-background/20 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Why It Matters</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Small and mid-sized firms need more than compliance—they need structured guidance and practical tools to grow. Our business advisory and digital support services help Indian businesses build strong foundations, improve operational control, and make confident, data-driven decisions as they scale.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
