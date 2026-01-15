import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  ArrowRight,
  BrainCircuit,
  Cloud,
  Database,
  Factory,
  FastForward,
  HeartPulse,
  Landmark,
  Rocket,
  Scale,
  ShieldCheck,
  ShoppingCart,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const coreOfferings = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'AI Knowledge Assistants (RAG Agents)',
    description: 'Custom AI assistants trained on your business data.',
    href: '/solutions#ai-assistants',
  },
  {
    icon: <Database className="h-8 w-8 text-primary" />,
    title: 'Data Engineering & Analytics Platforms',
    description: 'Modern data platforms that scale with your business.',
    href: '/solutions#data-platforms',
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'AI Automation for Business',
    description: 'Automate your business processes with AI.',
    href: '/solutions#ai-automation',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Secure Cloud & Data Systems',
    description: 'Secure your data, AI, and cloud infrastructure.',
    href: '/solutions#cloud-security',
  },
];

const whyDataverse = [
  { icon: <FastForward className="h-6 w-6 text-primary" />, text: 'Fast delivery (PoC in 2 weeks)' },
  { icon: <ShieldCheck className="h-6 w-6 text-primary" />, text: 'Enterprise-grade security' },
  { icon: <BrainCircuit className="h-6 w-6 text-primary" />, text: 'Deep data engineering expertise' },
  { icon: <Cloud className="h-6 w-6 text-primary" />, text: 'Cloud-native architecture' },
  { icon: <Zap className="h-6 w-6 text-primary" />, text: 'Business-focused solutions' },
];

const industries = [
  { icon: <Rocket className="h-8 w-8" />, name: 'SaaS & Startups' },
  { icon: <Landmark className="h-8 w-8" />, name: 'FinTech' },
  { icon: <HeartPulse className="h-8 w-8" />, name: 'Healthcare' },
  { icon: <Scale className="h-8 w-8" />, name: 'Legal' },
  { icon: <Factory className="h-8 w-8" />, name: 'Manufacturing' },
  { icon: <ShoppingCart className="h-8 w-8" />, name: 'E-commerce' },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-abstract');

  return (
    <div className="flex flex-col items-center">
      <section className="relative w-full overflow-hidden bg-secondary/20">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 py-20 md:grid-cols-2 md:py-32 lg:px-8">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Dataverse — AI, Data & Cybersecurity Solutions for Modern Businesses
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              We build secure, intelligent data platforms and AI-powered solutions that help companies automate, scale, and make smarter decisions.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Book Free Consultation <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/solutions">See Our Solutions</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 w-full md:h-auto md:w-full">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                priority
                className="rounded-lg object-cover shadow-2xl"
                data-ai-hint={heroImage.imageHint}
              />
            )}
          </div>
        </div>
      </section>

      <section id="offerings" className="w-full py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Core Offerings</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Simple, clear, and built for business impact.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreOfferings.map((offering) => (
              <Link key={offering.title} href={offering.href} className="flex">
                <Card className="flex w-full transform-gpu flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/20 hover:shadow-lg">
                  <CardHeader className="items-center">
                    {offering.icon}
                    <CardTitle className="pt-4 text-center text-lg">{offering.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-center text-muted-foreground">{offering.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="w-full bg-secondary/20 py-20 md:py-28">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 lg:px-8">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Why Dataverse?</h2>
            <p className="text-lg text-muted-foreground">We build secure, production-grade AI & data systems — not just prototypes. This separates you from freelancers.</p>
            <ul className="space-y-4">
              {whyDataverse.map((item) => (
                <li key={item.text} className="flex items-center gap-4">
                  {item.icon}
                  <span className="text-lg">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
           <div className="relative h-80 w-full">
             <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-4">
                <div className="relative rounded-lg bg-card p-4 shadow-lg">
                  <h3 className="font-headline text-4xl font-bold text-primary">2 weeks</h3>
                  <p className="text-muted-foreground">Average time to Proof of Concept</p>
                </div>
                <div className="relative rounded-lg bg-card p-4 shadow-lg">
                  <h3 className="font-headline text-4xl font-bold text-primary">100%</h3>
                  <p className="text-muted-foreground">Enterprise-Grade Security Focus</p>
                </div>
                <div className="relative col-span-2 rounded-lg bg-card p-4 shadow-lg">
                  <h3 className="font-headline text-4xl font-bold text-primary">10+ years</h3>
                  <p className="text-muted-foreground">Expertise in Data Engineering</p>
                </div>
             </div>
           </div>
        </div>
      </section>

      <section id="industries" className="w-full py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Industries We Serve</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Delivering specialized solutions for your unique challenges.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {industries.map((industry) => (
              <div key={industry.name} className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-card shadow-md">
                  {industry.icon}
                </div>
                <p className="font-semibold">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="w-full bg-secondary/20 py-20 md:py-28">
        <div className="container mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Ready to modernize your data & AI systems?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">Let's discuss how Dataverse can help you achieve your goals. Your first strategy call is on us.</p>
          <Button asChild size="lg" className="group mt-8">
            <Link href="/contact">
              Schedule a Free Strategy Call <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
