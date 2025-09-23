import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Schedule a Meeting</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Have a question or want to get started? We'd love to hear from you.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="bg-background/10 backdrop-blur-sm shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] p-4 sm:p-6 lg:p-8">
           <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12">
              <div>
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                  <CardDescription>We'll get back to you shortly.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </div>

              <div className="flex flex-col justify-center mt-8 md:mt-0">
                 <CardHeader>
                    <CardTitle className="text-xl">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Mail className="h-6 w-6 text-muted-foreground" />
                      <a href="mailto:hello@prospeera.com" className="hover:underline">hello@prospeera.com</a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="h-6 w-6 text-muted-foreground" />
                      <span>(555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="h-6 w-6 text-muted-foreground" />
                      <span>123 Finance St, Suite 100, Moneyville, USA</span>
                    </div>
                  </CardContent>
              </div>
           </div>
        </Card>
      </div>
    </div>
  );
}
