
'use client';

import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, MapPin, CalendarDays, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Get In Touch</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Have a question or want to get started? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {/* Left Column: Contact Form */}
        <motion.div
          className="lg:col-span-3"
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="h-full bg-background/20 backdrop-blur-sm shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <CardDescription>We'll get back to you shortly.</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Column: Contact Info & Schedule Meeting */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* Contact Information Card */}
          <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className="h-full bg-background/20 backdrop-blur-sm shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>Direct contact details.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-2">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-muted-foreground" />
                  <a href="mailto:hello@prospeera.com" className="hover:underline">hello@prospeera.com</a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-muted-foreground" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-muted-foreground" />
                  <span>123 Finance St, Moneyville, USA</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Schedule a Meeting Card */}
          <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className="h-full bg-background/20 backdrop-blur-sm shadow-xl transition-all duration-300 flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-2xl">Schedule a Meeting</CardTitle>
                <CardDescription>Book a free consultation call with our experts at your convenience.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center text-center">
                 <CalendarDays className="h-16 w-16 text-primary mb-6" />
                 <Button asChild size="lg" className="w-full rounded-full">
                  <Link href="#">
                    Book Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
