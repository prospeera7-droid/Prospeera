
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function TaxClient() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Tax Planning & Preparation Support</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We provide comprehensive support for tax planning and preparation, helping CPA firms streamline workflows, ensure accuracy, and deliver timely, compliant tax services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-background/20 backdrop-blur-sm shadow-xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Our Approach</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="text-lg">
                Our team assists with everything from gathering and organizing client tax data to preparing work papers and supporting tax return finalization. By handling the operational aspects of tax preparation, we free up your firm’s experts to focus on strategic tax planning and client advisory, ensuring you can maximize value and minimize stress during tax season.
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
                  "Tax work paper preparation for individuals and businesses",
                  "Gathering and organizing client tax documents",
                  "Data entry for tax returns (1040, 1120, 1065, etc.)",
                  "Reconciliation of tax data to financial statements",
                  "Support for estimated tax calculations",
                  "Tax research and documentation support",
                  "Coordination with your firm’s tax review process",
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
                <p className="mb-2">⚙️ Streamline tax season with efficient workflow support</p>
                <p className="mb-2">🎯 Ensure accuracy and consistency in tax preparation</p>
                <p>⏳ Free up your team to focus on high-value tax advisory</p>
              </CardContent>
            </Card>
            <Card className="bg-background/20 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Why It Matters</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Tax season is a high-stakes period for CPA firms. Our support helps you navigate the pressure with confidence, ensuring that all tax work is prepared efficiently and accurately. By handling the foundational work, we empower you to deliver exceptional, timely tax services that reinforce client trust and loyalty.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
