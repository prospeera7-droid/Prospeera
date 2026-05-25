
import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
    title: "Services | Prospeera",
    description: "Explore our full suite of outsourced CPA support services. From bookkeeping and tax prep to financial reporting and payroll, we empower your accounting firm to thrive."
};

export default function ServicesPage() {
    return <ServicesClient />;
}
