
import { Metadata } from 'next';
import TaxClient from './TaxClient';

export const metadata: Metadata = {
  description: "Streamline your tax season with our expert preparation support. We handle the details, from data gathering to work papers, so you can focus on strategic tax planning."
};

export default function TaxPage() {
  return <TaxClient />;
}
