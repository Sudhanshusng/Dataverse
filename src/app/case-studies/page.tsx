import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CtaSection from '@/components/shared/cta-section';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    client: "Global HR Tech Firm",
    title: "AI Knowledge Bot for HR Team Reduces Support Tickets by 40%",
    problem: "A major HR technology company was struggling with a high volume of repetitive internal support queries about company policies, benefits, and procedures.",
    solution: "Dataverse developed a secure, RAG-based AI Knowledge Assistant trained on the company's internal documentation, including PDFs and Confluence pages.",
    impact: "Reduced internal support tickets by 40%, freed up HR staff for strategic tasks, and provided employees with instant, 24/7 answers.",
    techStack: ["RAG", "LLM", "AWS", "LangChain", "Vector DB"],
    image: PlaceHolderImages.find((img) => img.id === 'case-study-hr'),
  },
  {
    client: "B2B SaaS Company",
    title: "Centralized Data Warehouse for Sales Analytics Drives 15% Increase in Deal Closures",
    problem: "Sales data was fragmented across multiple systems (CRM, spreadsheets, billing), making it impossible to get a unified view of performance.",
    solution: "We designed and implemented a modern cloud data warehouse on Snowflake, creating ETL pipelines to consolidate data from all sources into a single source of truth.",
    impact: "Provided a 360-degree view of sales performance, enabled accurate forecasting, and led to a 15% increase in deal closure rates through data-driven insights.",
    techStack: ["Snowflake", "dbt", "Fivetran", "Power BI", "Azure"],
    image: PlaceHolderImages.find((img) => img.id === 'case-study-sales'),
  },
  {
    client: "Logistics Provider",
    title: "AI Invoice Automation Processes 10,000 Invoices Monthly with 99% Accuracy",
    problem: "Manual invoice processing was slow, error-prone, and required a dedicated team of 5 full-time employees.",
    solution: "Dataverse built an AI automation workflow that uses OCR and a custom-trained model to extract, validate, and enter invoice data into their accounting system.",
    impact: "Achieved 99% accuracy, reduced processing time from days to minutes, and enabled the company to re-allocate the entire manual data entry team.",
    techStack: ["AI/ML", "OCR", "Python", "AWS Lambda", "API Integration"],
    image: PlaceHolderImages.find((img) => img.id === 'case-study-invoice'),
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Case Studies
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground">
            Real-world examples of how we solve complex data challenges and deliver business value.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-1">
          {caseStudies.map((study, index) => (
            <Card key={study.title} className="overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/20">
              <div className={`grid grid-cols-1 md:grid-cols-2 items-center`}>
                <div className={`relative h-80 w-full ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                  {study.image && (
                    <Image
                      src={study.image.imageUrl}
                      alt={study.title}
                      fill
                      className="object-cover"
                      data-ai-hint={study.image.imageHint}
                    />
                  )}
                </div>
                <div className="p-8">
                  <CardHeader className="p-0">
                    <p className="text-sm font-semibold text-primary">{study.client}</p>
                    <CardTitle className="pt-1 font-headline text-2xl">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="mt-4 space-y-4 p-0">
                    <div>
                        <h4 className="font-semibold text-foreground">Problem</h4>
                        <p className="text-muted-foreground">{study.problem}</p>
                    </div>
                     <div>
                        <h4 className="font-semibold text-foreground">Solution</h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                     <div>
                        <h4 className="font-semibold text-foreground">Business Impact</h4>
                        <p className="text-muted-foreground font-bold text-foreground/90">{study.impact}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="mt-6 flex flex-wrap gap-2 p-0">
                    {study.techStack.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground">More case studies are being prepared and will be published soon.</p>
        </div>
      </div>
      <CtaSection />
    </>
  );
}
