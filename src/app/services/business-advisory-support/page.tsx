
import { Metadata } from 'next';
import BusinessAdvisoryClient from './BusinessAdvisoryClient';

export const metadata: Metadata = {
  description: "Strengthen your firm’s foundations with our business advisory support, designed for small and mid-sized firms in India seeking clarity and sustainable growth."
};

export default function BusinessAdvisoryPage() {
  return <BusinessAdvisoryClient />;
}
