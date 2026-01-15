import CtaSection from '@/components/shared/cta-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const processSteps = [
  {
    step: 1,
    title: 'Discovery & Strategy',
    description: "We'll start by discussing your business goals, challenges, and requirements. This helps us define the project scope and what success looks like for you.",
  },
  {
    step: 2,
    title: 'Architecture & Design',
    description: "We'll design a practical and scalable architecture for your needs, creating a clear blueprint for the data platform or AI model before development begins.",
  },
  {
    step: 3,
    title: 'Iterative Development',
    description: "We use an agile approach, often starting with a smaller-scale version to demonstrate value quickly. This allows for feedback and adjustments along the way.",
  },
  {
    step: 4,
    title: 'Deployment',
    description: "Once the solution is validated, we'll deploy it to your production environment, following best practices for a smooth rollout.",
  },
  {
    step: 5,
    title: 'Support & Handover',
    description: "After deployment, we provide support and documentation to ensure your team can manage and get the most value from the new system.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Our Process
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground">
            Our 5-step process for delivering practical AI & data solutions.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 -ml-px h-full w-0.5 bg-border" aria-hidden="true"></div>
          <div className="space-y-16">
            {processSteps.map((item, index) => (
              <div key={item.title} className="relative flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                     <span className="text-xl font-bold">{item.step}</span>
                  </div>
                </div>
                <div className={`ml-8 flex-1 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className="transform-gpu transition-transform hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  );
}
