import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import CtaSection from '@/components/shared/cta-section';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const solutions = [
  {
    id: 'ai-assistants',
    title: 'Custom AI Assistants Trained on Your Business Data',
    description: 'We build secure, intelligent AI assistants that understand your internal knowledge. Using RAG (Retrieval-Augmented Generation), you can chat with your documents and data sources in natural language.',
    useCases: [
      'Internal knowledge base search',
      'Customer support question answering',
      'Document summarization and analysis',
      'Onboarding and training support',
    ],
    features: [
      'Chat with PDFs, docs, and other data',
      'Focused on secure data access',
      'Can be deployed to your cloud environment',
    ],
    cta: 'Get an AI Assistant Demo',
    ctaLink: '/contact',
    image: PlaceHolderImages.find((img) => img.id === 'ai-assistant'),
  },
  {
    id: 'data-platforms',
    title: 'Modern Data Platforms That Scale With Your Business',
    description: "We build end-to-end data engineering platforms that turn raw data into a strategic asset. From data ingestion to BI dashboards, we create a single source of truth to power your business decisions.",
    services: [
      'Cloud data warehouse setup (e.g., BigQuery, Snowflake)',
      'Custom ETL/ELT pipeline development',
      'Data modeling and architecture',
      'Business Intelligence (BI) dashboard creation',
    ],
    techStack: ['GCP', 'AWS', 'BigQuery', 'Spark', 'dbt', 'Looker'],
    cta: 'Discuss Your Data Platform',
    ctaLink: '/contact',
    image: PlaceHolderImages.find((img) => img.id === 'data-engineering'),
  },
  {
    id: 'ai-automation',
    title: 'Automate Your Business With AI',
    description: 'We can help identify and automate repetitive, manual tasks in your workflows using AI. This can increase efficiency and reduce errors, freeing up your team for more valuable work.',
    examples: [
      'Automated data extraction from documents',
      'Intelligent routing of support tickets or emails',
      'Scheduled generation of business reports',
      'Workflow triggers based on data events',
    ],
    cta: 'Automate Your Workflow',
    ctaLink: '/contact',
    image: PlaceHolderImages.find((img) => img.id === 'ai-automation'),
  },
  {
    id: 'cloud-security',
    title: 'Secure Your Data, AI & Cloud Infrastructure',
    description: "Security is a critical part of any data system. We implement security best practices to protect your data, AI models, and cloud infrastructure from threats.",
    services: [
      'Cloud security posture review',
      'Data encryption and protection strategies',
      'Identity and Access Management (IAM) setup',
      'Following compliance guidelines (e.g., for GDPR, HIPAA)',
    ],
    cta: 'Request a Security Assessment',
    ctaLink: '/contact',
    image: PlaceHolderImages.find((img) => img.id === 'cybersecurity'),
  },
];

export default function SolutionsPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Our Solutions
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-muted-foreground">
            Practical AI and data systems designed to solve real business problems.
          </p>
        </div>

        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <div key={solution.title} id={solution.id} className="grid scroll-mt-24 grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">
              <div className={index % 2 === 1 ? 'md:order-last' : ''}>
                <h2 className="font-headline text-3xl font-bold">{solution.title}</h2>
                <p className="mt-4 text-lg text-muted-foreground">{solution.description}</p>
                
                <div className="mt-6 space-y-4">
                  {(solution.useCases || solution.services || solution.examples || solution.features)?.map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {solution.techStack && (
                  <div className="mt-6">
                    <h4 className="font-semibold">Common Tech Stack:</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {solution.techStack.map(tech => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                <Button asChild size="lg" className="group mt-8">
                  <Link href={solution.ctaLink}>
                    {solution.cta}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              <div className="relative h-96 w-full">
                {solution.image && (
                  <Image
                    src={solution.image.imageUrl}
                    alt={solution.image.description}
                    fill
                    className="rounded-lg object-cover shadow-2xl"
                    data-ai-hint={solution.image.imageHint}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <CtaSection />
    </>
  );
}
