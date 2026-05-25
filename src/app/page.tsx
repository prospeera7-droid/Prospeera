
import { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  description: "Prospeera offers reliable outsourced accounting and CPA support for firms. We handle bookkeeping, tax prep, and payroll so you can focus on growth. Get a free consultation."
};

export default function Home() {
  return <HomePageClient />;
}
