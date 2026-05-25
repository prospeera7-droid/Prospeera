
import { Metadata } from 'next';
import AccountingClient from './AccountingClient';

export const metadata: Metadata = {
  description: "Our comprehensive accounting support transforms financial data into actionable insights, enabling you to deliver greater strategic value to your clients."
};

export default function AccountingPage() {
  return <AccountingClient />;
}
