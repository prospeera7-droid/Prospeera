
import { Metadata } from 'next';

export const metadata: Metadata = {
  description: "Ensure accurate and compliant payroll processing with our dedicated support for CPA firms. We manage the details so you can deliver timely and reliable payroll services."
};

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function PayrollManagementPage() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Payroll Management</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We provide dependable payroll management support to CPA firms, helping them manage payroll operations with precision, consistency, and compliance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-background/20 backdrop-blur-sm shadow-xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Our Approach</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="text-lg">
                From processing payroll cycles to managing deductions, filings, and year-end reporting, our team supports payroll workflows under your firm’s oversight. By handling operational payroll tasks behind the scenes, we help CPA firms reduce administrative burden while maintaining audit readiness and client trust.
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
                  "Payroll processing support (weekly, bi-weekly, and monthly cycles)",
                  "Employee setup, updates, and payroll data management",
                  "Payroll tax withholdings and benefit deduction support",
                  "Direct deposit processing and pay slip generation",
                  "Federal, state, and local payroll tax filing assistance",
                  "Year-end payroll reporting support (W-2, 1099, etc.)",
                  "Alignment with U.S. payroll regulations and compliance standards",
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
                <p className="mb-2">⏱️ Free up significant time previously spent on payroll administration</p>
                <p className="mb-2">✅ Reduce compliance risk through structured payroll processes</p>
                <p>💼 Improve client satisfaction through accurate and timely payroll support</p>
              </CardContent>
            </Card>
            <Card className="bg-background/20 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Why It Matters</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Payroll accuracy directly impacts employee trust and regulatory compliance. By supporting payroll operations with disciplined processes and attention to detail, we help CPA firms deliver dependable payroll outcomes while focusing on advisory and client-facing responsibilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
