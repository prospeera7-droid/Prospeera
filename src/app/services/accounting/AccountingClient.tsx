
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function AccountingClient() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Accounting Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We provide comprehensive accounting support that transforms raw financial data into clear, actionable insights, helping you deliver strategic value to your clients.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-background/20 backdrop-blur-sm shadow-xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Our Approach</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="text-lg">
                We move beyond basic bookkeeping to provide a full-service accounting solution. From financial statement preparation to in-depth analysis and reporting, our team works as an extension of your firm, ensuring that all financial information is accurate, compliant, and ready for strategic review. We give you the reliable financial intelligence you need to guide your clients effectively.
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
                  "Financial statement preparation (P&L, Balance Sheet, Cash Flow)",
                  "General ledger maintenance and reconciliation",
                  "Month-end and year-end closing support",
                  "Fixed asset and depreciation management",
                  "Budgeting and forecasting support",
                  "Variance analysis and financial performance reviews",
                  "Adherence to GAAP and other accounting standards",
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
                <p className="mb-2">💡 Transform data into strategic, decision-ready insights</p>
                <p className="mb-2">📈 Enhance financial visibility and control for your clients</p>
                <p>🤝 Strengthen your role as a trusted strategic advisor</p>
              </CardContent>
            </Card>
            <Card className="bg-background/20 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Why It Matters</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Great accounting turns numbers into a narrative. By providing you with clear, accurate, and insightful financial analysis, we empower you to tell a compelling story about your clients’ businesses, helping them make smarter, more strategic decisions that drive growth and profitability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
