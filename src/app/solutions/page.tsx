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
    description: 'Empower your team with secure, intelligent AI assistants that have a deep understanding of your internal knowledge. Our RAG (Retrieval-Augmented Generation) solutions allow you to chat with your documents, databases, and applications in natural language.',
    useCases: [
      'HR policy assistant for employees',
      'Legal document search and summarization',
      'Customer support automation bot',
      'Technical documentation Q&A for developers',
    ],
    features: [
      'Chat with PDFs, docs, and databases',
      'Secure internal knowledge access',
      'Role-based access control',
      'Private cloud or on-prem deployment',
    ],
    cta: 'Get an AI Assistant Demo',
    ctaLink: '/contact',
    image: PlaceHolderImages.find((img) => img.id === 'ai-assistant'),
  },
  {
    id: 'data-platforms',
    title: 'Modern Data Platforms That Scale With Your Business',
    description: 'We build end-to-end data engineering and analytics platforms that turn your raw data into a strategic asset. From data ingestion to BI dashboards, we create a single source of truth that powers your business decisions.',
    services: [
      'Cloud data lake & warehouse setup (Snowflake, Databricks)',
      'Custom ETL/ELT pipeline development',
      'Real-time data streaming and processing',
      'Business Intelligence (BI) dashboard creation',
      'Legacy system migration to the cloud',
    ],
    techStack: ['AWS', 'Azure', 'Databricks', 'Spark', 'Snowflake', 'Power BI', 'dbt'],
    cta: 'Discuss Your Data Platform',
    ctaLink: '/contact',
    image: PlaceHolderImages.find((img) => img.id === 'data-engineering'),
  },
  {
    id: 'ai-automation',
    title: 'Automate Your Business With AI',
    description: 'Free up your team from repetitive, manual tasks by leveraging AI automation. We identify high-impact automation opportunities in your workflow and build intelligent systems to handle them, increasing efficiency and reducing errors.',
    examples: [
      'Automated invoice data extraction and processing',
      'Intelligent resume screening for HR',
      'Automatic email classification and routing',
      'Customer support ticket categorization and assignment',
      'Scheduled generation of business reports',
    ],
    cta: 'Automate Your Workflow',
    ctaLink: '/contact',
    image: PlaceHolderImages.find((img) => img.id === 'ai-automation'),
  },
  {
    id: 'cloud-security',
    title: 'Secure Your Data, AI & Cloud Infrastructure',
    description: 'In the modern data landscape, security is not optional. We implement robust cybersecurity measures to protect your data, AI models, and cloud infrastructure from threats, ensuring compliance and peace of mind.',
    services: [
      'Cloud security posture audit and hardening',
      'Data encryption and protection strategies',
      'Identity and Access Management (IAM) implementation',
      'Compliance readiness for GDPR, HIPAA, etc.',
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
            Production-grade AI and data systems designed to solve real business problems.
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
                    <h4 className="font-semibold">Tech Stack:</h4>
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
