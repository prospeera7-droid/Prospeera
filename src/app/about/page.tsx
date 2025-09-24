
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
            Empowering freelancers to achieve financial clarity and prosperity.
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
                  To provide accessible, expert financial services tailored specifically for the unique challenges and opportunities faced by freelancers and independent professionals. We simplify accounting so you can focus on what you do best.
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
                  To be the leading financial partner for freelancers worldwide, fostering a global community of financially savvy and independent professionals. We envision a future where every freelancer has the tools and confidence to build a prosperous and sustainable career.
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
