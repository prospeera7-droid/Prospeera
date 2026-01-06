
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, FileText, PiggyBank, Briefcase, BarChart, ShieldCheck, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Btn03 from '@/components/ui/Btn03';

const allServices = [
  {
    icon: <Calculator className="h-8 w-8" />,
    title: 'Bookkeeping & Data entry',
    description: 'Stay audit-ready, always. We manage your books with precision so you can focus on growth, not data entry.',
    fullDescription: 'We handle the financial backbone of your CPA firm — maintaining, cleaning, and reconciling client books with unmatched accuracy. From daily transaction updates to monthly closings, our team ensures that every figure is reliable, audit-ready, and compliant with U.S. accounting standards. <br /><br /> <b>🔍 What’s Included:</b> <br /> Daily/Weekly/Monthly Bookkeeping Support <br /> Bank & Credit Card Reconciliation <br /> Journal Entry Posting & Adjustment <br /> Accounts Payable/Receivable Tracking <br /> Month-End and Year-End Closing <br /> Custom Financial Reporting for Clients <br /><br /> <b>🚀 Profit Impact:</b> <br /> ⏱️ Save 60–80% of bookkeeping hours <br /> 💵 Reduce overhead by up to 30% <br /> 📈 Increase client satisfaction with faster turnaround <br /><br /> <b>✨ Why It Matters:</b> <br /> Accurate books are the foundation of smart decisions. We make sure your numbers tell the real story — instantly, securely, and stress-free.',
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: 'Accounting',
    description: 'Transform raw data into strategic financial insights. Our accounting solutions bring clarity, control, and confidence to every number.',
    fullDescription: '<br /> Our accounting services go beyond data entry — we deliver financial clarity for your CPA practice and your clients. From general ledger management to full-cycle financial reporting, we ensure your numbers are not just compliant, but insightful. <br /><br /> <b>🔍 What’s Included:</b> <br /> General Ledger Maintenance <br /> Trial Balance Preparation <br /> Monthly/Quarterly/Annual Financial Statements <br /> Adjusting Journal Entries <br /> Fixed Asset & Depreciation Schedules <br /> Payroll Accounting & Expense Categorization <br /> KPI Dashboards for CPA Insights <br /><br /> <b>🚀 Profit Impact:</b> <br /> 💵 Cut back-office costs by 40% <br /> ⏱️ Free up 25+ hours per month for client advisory <br /> 📈 Empower better decision-making with real-time data <br /><br /> <b>✨ Why It Matters:</b> <br /> Accuracy drives trust — and trust drives profit. Our accounting team keeps your firm’s financial data transparent, timely, and always audit-ready, so you can confidently focus on strategy and growth.',
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: 'Tax Planning & Preparation',
    description: 'From planning to filing ready — we make taxes stress-free, compliant, and optimized for every client’s financial advantage.',
    fullDescription: 'We simplify tax season by turning complexity into clarity. From strategic planning to precise filing support, our tax experts ensure your clients’ returns are compliant, optimized, and delivered ahead of deadlines — all under your CPA firm’s brand. <br /><br /><b> 🔍 What’s Included:</b> <br /> Federal & State Tax Return Preparation <br /> Corporate, Partnership & Individual Filings <br /> Quarterly & Annual Tax Planning <br /> Tax Compliance Checklists (IRS & GAAP) <br /> Deduction & Credit Optimization <br /> Filing Documentation Management <br /> Secure e-Filing Assistance & Review <br /><br /> <b>🚀 Profit Impact:</b> <br /> 💵 Reduce tax-season stress by 70% <br /> ⏱️ Accelerate turnaround with streamlined documentation <br /> ✅ Avoid costly penalties with proactive compliance <br /><br /> <b>✨ Why It Matters:</b> <br /> Tax management is more than a task — it’s an opportunity to add value. We help your CPA firm deliver accurate, on-time, and optimized returns that strengthen your client relationships and improve their bottom line.',
  },
  {
    icon: <PiggyBank className="h-8 w-8" />,
    title: 'Payroll Management',
    description: 'We simplify payroll for CPA firms by ensuring every payment is accurate, compliant, and stress-free.',
    fullDescription: '<br /> We simplify payroll for CPA firms by ensuring every payment is accurate, compliant, and stress-free. From processing pay runs to managing deductions and filing taxes, our payroll experts handle every detail — so your clients’ teams stay satisfied and your firm stays audit-ready. <br /><br /><b> 🔍 What’s Included:</b> <br /> End-to-End Payroll Processing (Weekly/Bi-Weekly/Monthly) <br /> Employee Setup & Data Management <br /> Tax Withholdings & Benefit Deductions <br /> Direct Deposit & Pay Slip Generation <br /> Payroll Tax Filing (Federal, State & Local) <br /> Year-End Reporting (W-2, 1099, etc.) <br /> Compliance with U.S. Payroll Regulations <br /><br /> <b>🚀 Profit Impact:</b> <br /> ⏱️ Free up 25+ hours monthly from payroll tasks <br /> ✅ Zero compliance errors with automated accuracy <br /> 💵 Improve client satisfaction and retention <br /><br /><b> ✨ Why It Matters:</b> <br /> Payroll is about people — and trust. We ensure that every paycheck is accurate and compliant, so your CPA firm can focus on advising, not admin work. Our precision ensures your clients’ employees get paid correctly and on time, every time.',
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: 'Financial Reporting',
    description: 'Turn numbers into narratives. We deliver clear, visual, and actionable financial reports that drive smarter decisions',
    fullDescription: ' <br /> We transform raw accounting data into visually clear and insightful financial reports. Whether it’s for your internal team or your clients, our reports simplify complex figures into actionable intelligence — helping CPAs make strategic, data-backed decisions faster. <br /><br /> <b>🔍 What’s Included:</b> <br /> Monthly/Quarterly/Annual Financial Reports <br /> Comparative Analysis (vs. Budgets or Prior Periods) <br /> Profit & Loss, Balance Sheet, and Cash Flow Statements <br /> KPI Dashboards & Trend Analysis <br /> Custom Visualizations (Power BI, Excel, Google Sheets) <br /> Real-Time Financial Summary Snapshots <br /> White-Labeled Reports for Client Presentations <br /><br /> <b>🚀 Profit Impact:</b> <br /> 📈 100% visibility into firm and client performance <br /> ⏱️ Reduce report preparation time by 60% <br /> 💡 Boost client trust through transparent, visual data <br /><br /> <b>✨ Why It Matters:</b> <br /> Numbers alone don’t tell the story — interpretation does. Our financial reporting services help CPAs shift from manual data crunching to meaningful financial storytelling that adds measurable value.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: 'IRS Representation',
    description: 'Professional representation in case of audits or inquiries from tax authorities.',
    fullDescription: 'Facing an IRS audit can be intimidating. Our experienced team can represent you before the IRS, handling all communications and providing the necessary documentation to resolve the issue. We\'re here to ensure your rights are protected and to navigate the process on your behalf.',
  },
];

export default function ServicesPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Services</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A complete suite of financial tools designed for the modern Firms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allServices.map((service, index) => (
          <motion.div
            key={index}
            layoutId={`card-${index}`}
            whileHover={{ y: -8, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="flex flex-col"
          >
            <Card
              onClick={() => setExpandedIndex(index)}
              className="bg-background/60 backdrop-blur-sm shadow-xl h-full flex flex-col cursor-pointer"
            >
              <div className="flex-grow">
                <CardHeader className="flex flex-row items-center gap-4">
                  {service.icon}
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Btn03 asChild size="lg" className="rounded-full">
          <Link href="https://calendly.com/prospeera7" target="_blank">
            Schedule meeting <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Btn03>
      </div>

      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedIndex(null)}
          >
            <motion.div
              layoutId={`card-${expandedIndex}`}
              className="w-full max-w-2xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="bg-background shadow-2xl relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setExpandedIndex(null)}
                  className="absolute top-2 right-2 z-10 rounded-full"
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close</span>
                </Button>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{allServices[expandedIndex].title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: allServices[expandedIndex].fullDescription.replace(/\n/g, '<br />') }} />
                  <Button asChild className="mt-6 w-full rounded-full">
                    <Link href="https://calendly.com/prospeera7" target="_blank">
                        Schedule meeting <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
