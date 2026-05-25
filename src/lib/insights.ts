import data from './insights.json';

export type Insight = {
  id: number;
  title: string;
  description: string;
  fullStory: string;
};

export const insights: Insight[] = data.insights;