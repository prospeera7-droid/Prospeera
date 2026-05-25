
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, HeartHandshake, Users, ThumbsUp, Briefcase, CheckCircle } from 'lucide-react';
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

export default function AboutUsPage() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <motion.div {...fadeIn} className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Prospeera</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Empowering Partnership to achieve financial clarity and prosperity.
          </p>
        </motion.div>

        <motion.div {...fadeIn} className="mb-20">
          <Card className="bg-background/20 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8 text-center text-lg text-muted-foreground">
              <p>
                Prospeera provides dedicated back-office support to US CPA firms and small accounting practices seeking operational efficiency and scalable growth. We assist accounting firms with structured bookkeeping, tax preparation support, accounting and financial reporting—working quietly behind the scenes to strengthen day-to-day operations and reduce internal workload. As your backdoor partner, Prospeera integrates into your existing workflows, enabling your team to focus on advisory services, client relationships, and firm expansion.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div {...fadeIn}>
            <Card className="bg-background/20 backdrop-blur-sm shadow-xl h-full">
              <CardHeader className="flex-row items-center gap-4">
                <Users className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl font-semibold">Who We Are?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Prospeera was established to support CPA firms that require dependable operational support without increasing internal headcount. We understand the complexities of accounting operations—regulatory requirements, seasonal demand, and precision-driven processes. Our role is to provide consistent, process-aligned back-office services that complement your firm’s standards and timelines.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div {...fadeIn}>
            <Card className="bg-background/20 backdrop-blur-sm shadow-xl h-full">
              <CardHeader className="flex-row items-center gap-4">
                <ThumbsUp className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl font-semibold">Why us:</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Prospeera is purpose-built to support US CPA firms and small accounting practices with dependable, process-driven back-office services. We focus on operational consistency, compliance alignment, and scalable support—so firms can grow without increasing internal complexity.
                </p>
                <ul className="space-y-2">
                  {[
                    'CPA-Focused Expertise',
                    'Process-Driven Delivery',
                    'Seamless Workflow Integration',
                    'Scalable Back-Office Support',
                    'Confidentiality & Compliance Mindset',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div whileHover={{ y: -8, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className="bg-background/20 backdrop-blur-sm shadow-xl h-full text-center">
              <CardHeader className="items-center">
                <Target className="h-10 w-10 mb-4 text-primary" />
                <CardTitle className="text-2xl font-semibold">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>To support US CPA firms with structured back-office services that enable confident scaling, streamlined operations, and long-term firm growth.</p>
                <ul className="mt-4 space-y-2">
                  {['🤝 CPA-Focused Support', '🎯 Process-Driven Accuracy', '⚙️ Operational Efficiency', '📈 Scalable Firm Growth', '🧩 Invisible Back-Office Partner'].map((item, index) => (
                     <li key={index} className="flex items-center justify-center"><span className="text-muted-foreground">{item}</span></li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ y: -8, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className="bg-background/20 backdrop-blur-sm shadow-xl h-full text-center">
              <CardHeader className="items-center">
                <Eye className="h-10 w-10 mb-4 text-primary" />
                <CardTitle className="text-2xl font-semibold">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>To become a trusted long-term back-office partner for CPA firms by supporting operational excellence, scalability, and consistent service delivery</p>
                <ul className="mt-4 space-y-2">
                  {['🔒 Trust & Data Security', '⚙️ Process-Driven Support', '📊 Modern Accounting Workflows', '👓 Client-Centric Operations', '🚀 Sustainable Firm Growth'].map((item, index) => (
                     <li key={index} className="flex items-center justify-center"><span className="text-muted-foreground">{item}</span></li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ y: -8, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className="bg-background/20 backdrop-blur-sm shadow-xl h-full text-center">
              <CardHeader className="items-center">
                <HeartHandshake className="h-10 w-10 mb-4 text-primary" />
                <CardTitle className="text-2xl font-semibold">Our Promise</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>We commit to delivering consistent, secure, and process-aligned back-office support that CPA firms can depend on with confidence.</p>
                <ul className="mt-4 space-y-2">
                  {['🔐 Confidentiality & Data Security', '📋 Process Consistency & Quality Control', '🧩 Seamless Workflow Integration', '📞 Clear & Reliable Communication', '🤝 Long-Term Partnership Focus'].map((item, index) => (
                     <li key={index} className="flex items-center justify-center"><span className="text-muted-foreground">{item}</span></li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div {...fadeIn} className="text-center">
            <Card className="bg-background/20 backdrop-blur-sm shadow-xl">
                <CardHeader className="items-center">
                    <Briefcase className="h-10 w-10 mb-4 text-primary" />
                    <CardTitle className="text-3xl md:text-4xl font-bold tracking-tight">Our People & Expertise</CardTitle>
                </CardHeader>
                <CardContent className="max-w-3xl mx-auto text-lg text-muted-foreground">
                    <p>
                        Prospeera is supported by a dedicated team of accounting and operations professionals experienced in supporting CPA firm workflows, compliance standards, and reporting requirements.
                    </p>
                </CardContent>
            </Card>
        </motion.div>
      </div>
    </div>
  );
}
