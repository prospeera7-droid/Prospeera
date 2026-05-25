
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function BookkeepingClient() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Bookkeeping & Data Entry</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We provide meticulous bookkeeping and data entry services, ensuring your financial records are accurate, up-to-date, and audit-ready.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-background/20 backdrop-blur-sm shadow-xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Our Approach</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="text-lg">
                We handle the day-to-day financial record-keeping, from transaction entry to reconciliations, so you can focus on strategic, high-value advisory services. By ensuring data accuracy and consistency, we provide a reliable foundation for all your accounting and reporting needs, giving you full confidence in your clients’ financial data.
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
                  "Transaction recording and categorization",
                  "Bank and credit card reconciliations",
                  "Accounts payable and receivable management",
                  "Chart of accounts maintenance",
                  "Expense and income tracking",
                  "Data entry for financial statements",
                  "Journal entry processing",
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
                <p className="mb-2">✅ Ensure accurate and compliant financial records</p>
                <p className="mb-2">⏱️ Free up internal resources from manual data entry</p>
                <p>📊 Provide a reliable foundation for reporting and analysis</p>
              </CardContent>
            </Card>
            <Card className="bg-background/20 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Why It Matters</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Accurate bookkeeping is the backbone of financial integrity. With our support, you can trust that your clients’ financial data is consistently managed, providing a clear and reliable picture that supports smart business decisions, simplifies audits, and strengthens client relationships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
