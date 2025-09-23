import data from './case-studies.json';

export type CaseStudy = {
  title: string;
  description: string;
  fullStory: string;
};

export const caseStudies: CaseStudy[] = data.caseStudies;
