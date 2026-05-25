
import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: "Contact | Prospeera",
    description: "Contact Prospeera at +91 7046292214 to discuss our outsourced CPA support. Schedule your free consultation today to see how we can help your firm scale efficiently."
};

export default function ContactPage() {
    return <ContactClient />;
}
