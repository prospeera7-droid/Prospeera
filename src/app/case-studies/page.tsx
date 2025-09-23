'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";


export default function CaseStudiesPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Success Stories</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Real results for freelancers just like you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <motion.div
            key={index}
            layoutId={`card-${index}`}
            whileHover={{ y: -8, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setExpandedIndex(index)}
            className="cursor-pointer"
          >
            <Card className="bg-background/60 backdrop-blur-sm shadow-xl transition-all duration-300 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{study.description}</CardDescription>
              </CardContent>
              <CardFooter>
                 <Button variant="link" className="p-0">
                    Read Full Story &rarr;
                  </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId={`card-${expandedIndex}`}
              className="w-full max-w-2xl mx-auto"
            >
              <Card className="bg-background/60 backdrop-blur-sm shadow-2xl relative">
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
                  <CardTitle className="text-2xl font-bold">{caseStudies[expandedIndex].title}</CardTitle>
                  <CardDescription>{caseStudies[expandedIndex].description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{caseStudies[expandedIndex].fullStory}</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
