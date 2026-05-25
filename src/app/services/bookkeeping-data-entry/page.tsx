
import { Metadata } from 'next';
import BookkeepingClient from './BookkeepingClient';

export const metadata: Metadata = {
  description: "Our meticulous bookkeeping and data entry services ensure your financial records are accurate and audit-ready, freeing you to focus on strategic advisory."
};

export default function BookkeepingPage() {
  return <BookkeepingClient />;
}
