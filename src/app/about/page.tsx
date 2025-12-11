
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Eye } from 'lucide-react';
import { ProfileCard, type ProfileProps } from "@/components/ProfileCard";
import { motion } from "framer-motion";

const teamMembers: ProfileProps[] = [
  {
    imageUrl: "https://picsum.photos/seed/emily/200/200",
    imageHint: "woman portrait",
    name: "Jane Doe",
    title: "Chief Financial Officer",
    followers: "2,100 followers",
    linkedinUrl: "https://www.linkedin.com/in/janedoe",
  },
  {
    imageUrl: "https://picsum.photos/seed/liam/200/200",
    imageHint: "man portrait glasses",
    name: "Liam Thompson",
    title: "Lead Financial Analyst",
    followers: "1,800 followers",
    linkedinUrl: "https://www.linkedin.com/in/liamthompson",
  },
  {
    imageUrl: "https://picsum.photos/seed/sophia/200/200",
    imageHint: "woman portrait smiling",
    name: "Sophia Chen",
    title: "Head of Client Relations",
    followers: "1,950 followers",
    linkedinUrl: "https://www.linkedin.com/in/sophiachen",
  },
];


export default function AboutUsPage() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Prospeera</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Empowering Partnership to achieve financial clarity and prosperity.
          </p>
        </div>

        <div className="text-justify mb-16 max-w-6xl mx-auto text-lg text-muted-foreground">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-8 text-primary">Why us:</h2>
          <p className="mt-4">
            The world of money can become challenging, terrifying and filled with complexity. The goal of our company is to simplify and strengthen finance for individuals.
            We aim to substitute stress with knowledge, ambiguity with assurance.
          </p>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight mt-8 text-primary">Our How – What Makes Us Different :</h3>
          <ul className="mt-4 list-disc list-inside">
            <li>Innovation integration with expertise human: We will employ highly intelligent tools and analytics, but always with genuine human direction.</li>
            <li>Honesty over confusion: There are no extra expenses or unclear conditions—only clear, genuine recommendations.</li>
            <li>Focus on your Target: Every approach is unique to your present situation, desires, and prospects.</li>
          </ul>
          <p className="mt-8">
            Mark us your financial GPS; we're here to assist you navigate the hurdles, obstacles, and chances to shine on your path towards achievement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div whileHover={{ y: -8, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className="bg-background/20 backdrop-blur-sm shadow-xl h-full">
              <CardHeader className="items-center text-center">
                <Target className="h-10 w-10 mb-4 text-primary" />
                <CardTitle className="text-2xl font-semibold">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                Our mission is to empower CPA firms across the U.S. to scale confidently — by delivering accurate, reliable, and cost-effective financial back-office solutions that free up their time, reduce overhead, and maximize profitability. We aim to be the invisible partner driving their long-term growth.
                <br /><br />
                🤝 Empower CPAs 
                <br />
                🎯 Precision & Accuracy 
                <br />
                💰 Cost Efficiency 
                <br />
                📈 Growth & Profitability 
                <br />
                👤 Invisible Partner 
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ y: -8, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className="bg-background/20 backdrop-blur-sm shadow-xl h-full">
              <CardHeader className="items-center text-center">
                <Eye className="h-10 w-10 mb-4 text-primary" />
                <CardTitle className="text-2xl font-semibold">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  We don't just manage finances; we as a species build Financial Liberty Stories of Success.
                  At Prospeera, we agree that finances need to be about people, ambitions, and a confident future.
                  <br /><br />
                  🔒 Trust & Backbone 
                  <br />
                  ⚙️ Human + Automation 
                  <br />
                  📊 Future of Accounting 
                  <br />
                  👓 Focus on Clients 
                  <br />
                  🚀 Future Growth 
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Meet Our Team</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              The visionaries behind Prospeera's success.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {teamMembers.map((member, index) => (
            <ProfileCard key={index} {...member} />
          ))}
        </div>

      </div>
    </div>
  );
}
