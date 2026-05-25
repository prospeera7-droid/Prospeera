
import { Metadata } from 'next';
import FinancialReportingClient from './FinancialReportingClient';

export const metadata: Metadata = {
  description: "Turn data into decision-ready insights. Our financial reporting support helps you deliver clear, structured, and impactful reports for stronger client advisory."
};

export default function FinancialReportingPage() {
  return <FinancialReportingClient />;
}
