"use client";

import { useState } from 'react';
import { insights } from '@/lib/insights';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';

export function InsightsClient() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedInsight = selectedId !== null ? insights.find((i) => i.id === selectedId) : null;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Insights</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {insights.map((insight) => (
          <motion.div
            key={insight.id}
            layoutId={`insight-card-${insight.id}`}
            onClick={() => setSelectedId(insight.id)}
            className="cursor-pointer rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{insight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">{insight.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedInsight && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`insight-card-${selectedInsight.id}`}
              className="w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="max-h-[90vh] flex flex-col">
                <CardHeader>
                  <CardTitle className="text-3xl">{selectedInsight.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow overflow-y-auto">
                  <p className="text-lg text-muted-foreground mb-6">{selectedInsight.description}</p>
                  <div className="border-t pt-6">
                    <p className="whitespace-pre-line">{selectedInsight.fullStory}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
