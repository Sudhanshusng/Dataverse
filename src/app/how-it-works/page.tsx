import CtaSection from '@/components/shared/cta-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const processSteps = [
  {
    step: 1,
    title: 'Discovery & Strategy',
    description: "We start by understanding your business goals, challenges, and requirements. This phase involves workshops and in-depth discussions to define the project scope, KPIs, and success criteria.",
  },
  {
    step: 2,
    title: 'Architecture & Design',
    description: "Our experts design a robust and scalable architecture tailored to your needs. We create detailed blueprints for the data platform, AI models, and security framework, ensuring a solid foundation for development.",
  },
  {
    step: 3,
    title: 'MVP Development (2-4 weeks)',
    description: "We build a Minimum Viable Product (MVP) or Proof of Concept (PoC) to quickly demonstrate value and validate our approach. This agile process allows for rapid feedback and iteration.",
  },
  {
    step: 4,
    title: 'Production Deployment',
    description: "Once the MVP is approved, we develop the full-scale solution and deploy it to your production environment. We follow CI/CD best practices for a smooth and reliable rollout.",
  },
  {
    step: 5,
    title: 'Support & Optimization',
    description: "Our partnership doesn't end at deployment. We provide ongoing support, monitoring, and optimization to ensure your system performs at its best and continues to deliver value as your business evolves.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            How It Works
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground">
            Our proven 5-step process for delivering production-grade AI & data solutions.
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
