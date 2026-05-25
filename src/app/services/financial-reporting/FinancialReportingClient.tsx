
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function FinancialReportingClient() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Financial Reporting</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We support CPA firms by transforming accounting data into clear, structured, and decision-ready financial reports.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-background/20 backdrop-blur-sm shadow-xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Our Approach</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="text-lg">
                Our financial reporting support helps simplify complex financial information into well-organized statements and dashboards that are easy to interpret and review. Whether for internal analysis or client-facing reporting, we ensure reports are consistent, accurate, and aligned with CPA firm standards—enabling faster insights and stronger advisory conversations.
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
                  "Monthly, quarterly, and annual financial reporting support",
                  "Comparative analysis against budgets or prior periods",
                  "Profit & loss statements, balance sheets, and cash flow reports",
                  "KPI dashboards and trend analysis",
                  "Custom visualizations using Power BI, Excel, or Google Sheets",
                  "Periodic financial summary snapshots",
                  "White-labeled reports prepared for client presentations",
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
                <p className="mb-2">📊 Improve visibility into firm and client financial performance</p>
                <p className="mb-2">⏱️ Reduce internal reporting preparation time</p>
                <p>🤝 Strengthen client confidence through clear and transparent reporting</p>
              </CardContent>
            </Card>
            <Card className="bg-background/20 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Why It Matters</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Effective financial reporting turns data into clarity. By presenting structured and well-interpreted financial information, we help CPA firms move beyond manual reporting and deliver insights that support better decisions, stronger client relationships, and higher-value advisory services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
