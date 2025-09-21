import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Eye } from 'lucide-react';
import { ProfileCard } from "@/components/ProfileCard";

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Prospeera</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Empowering freelancers to achieve financial clarity and prosperity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card className="bg-background/80 backdrop-blur-sm shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <CardHeader className="items-center text-center">
            <Target className="h-10 w-10 mb-4 text-primary" />
            <CardTitle className="text-2xl font-semibold">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground">
              To provide accessible, expert financial services tailored specifically for the unique challenges and opportunities faced by freelancers and independent professionals. We simplify accounting so you can focus on what you do best.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-background/80 backdrop-blur-sm shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <CardHeader className="items-center text-center">
            <Eye className="h-10 w-10 mb-4 text-primary" />
            <CardTitle className="text-2xl font-semibold">Our Vision</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground">
              We envision a world where every freelancer has the financial literacy and support to build a sustainable, thriving business and secure their financial future with confidence and peace of mind.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Meet Our Founder</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            The visionary behind Prospeera's success.
          </p>
      </div>
      <div className="flex justify-center">
        <ProfileCard />
      </div>

    </div>
  );
}
