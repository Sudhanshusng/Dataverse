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
  Play,
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
  { icon: <FastForward className="h-6 w-6 text-primary" />, text: 'Agile development process' },
  { icon: <ShieldCheck className="h-6 w-6 text-primary" />, text: 'Security-focused approach' },
  { icon: <BrainCircuit className="h-6 w-6 text-primary" />, text: 'Experienced data engineering' },
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

const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your goals and challenges.',
    },
    {
      step: '02',
      title: 'Design',
      description: 'We create a blueprint for a scalable solution.',
    },
    {
      step: '03',
      title: 'Develop',
      description: 'We build and test your system iteratively.',
    },
    {
      step: '04',
      title: 'Deploy',
      description: 'We roll out the solution into your production environment.',
    },
  ];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-abstract');

  return (
    <div className="flex flex-col items-center">
      <section className="relative w-full overflow-hidden bg-background">
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: 'linear-gradient(to right, hsla(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsla(var(--border)) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.3,
          }}
        ></div>
        <div className="relative z-10 container mx-auto flex flex-col items-center justify-center space-y-8 px-4 py-20 text-center sm:py-24 lg:px-8 min-h-[60vh]">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary animate-in fade-in-up duration-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/75 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Enterprise-Grade Solutions
            </div>
            <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl animate-in fade-in slide-in-from-top-8 duration-1000 ease-out">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">AI, Data & Cybersecurity</span>
              <br />
              Solutions for Modern Businesses
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl animate-in fade-in slide-in-from-top-8 duration-1000 ease-out delay-200">
              We build secure, intelligent data platforms and AI-powered solutions that help companies automate, scale, and make smarter decisions.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start animate-in fade-in slide-in-from-top-8 duration-1000 ease-out delay-300">
              <Button asChild size="lg" className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700">
                <Link href="/contact">
                  Book Free Consultation <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-blue-400/50 hover:bg-accent hover:border-accent-foreground/50">
                <Link href="/solutions">
                  <Play className="mr-2 h-4 w-4 fill-current" />
                  See Our Solutions
                </Link>
              </Button>
            </div>
        </div>
      </section>

      <section id="offerings" className="w-full py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center animate-in fade-in-up duration-500">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Core Offerings</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Simple, clear, and built for business impact.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreOfferings.map((offering, i) => (
              <div key={offering.title} className="animate-in fade-in-up duration-500" style={{ animationDelay: `${i * 100 + 200}ms`}}>
                <Link href={offering.href} className="flex">
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
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="process" className="w-full py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center animate-in fade-in-up duration-500">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Process</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">A straightforward approach to delivering value.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={step.title} className="animate-in fade-in-up duration-500" style={{ animationDelay: `${i * 100 + 200}ms`}}>
                <Card className="text-center h-full transition-transform duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                      {step.step}
                    </div>
                    <CardTitle className="pt-4 font-headline text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
           <div className="mt-12 text-center animate-in fade-in-up duration-500 delay-500">
            <Button asChild variant="outline">
              <Link href="/how-it-works">
                Learn More About Our Process
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="why-us" className="w-full bg-secondary/20 py-24">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 lg:px-8">
          <div className="space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Why Work With Us?</h2>
            <p className="text-lg text-muted-foreground">We build practical and maintainable data solutions that solve real business problems.</p>
            <ul className="space-y-4">
              {whyDataverse.map((item, i) => (
                <li key={item.text} className="flex items-center gap-4 animate-in fade-in-up duration-500" style={{ animationDelay: `${i * 100 + 400}ms`}}>
                  {item.icon}
                  <span className="text-lg">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
           <div className="relative h-80 w-full animate-in fade-in slide-in-from-right-10 duration-700">
             <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-4">
                <div className="relative rounded-lg bg-card p-4 shadow-lg transition-transform duration-300 hover:scale-105 animate-in zoom-in-50 duration-500 delay-200">
                  <h3 className="font-headline text-4xl font-bold text-primary">4+ years</h3>
                  <p className="text-muted-foreground">Of Data Engineering Experience</p>
                </div>
                <div className="relative rounded-lg bg-card p-4 shadow-lg transition-transform duration-300 hover:scale-105 animate-in zoom-in-50 duration-500 delay-400">
                  <h3 className="font-headline text-4xl font-bold text-primary">100%</h3>
                  <p className="text-muted-foreground">Focus on Deliverable Solutions</p>
                </div>
                <div className="relative col-span-2 rounded-lg bg-card p-4 shadow-lg transition-transform duration-300 hover:scale-105 animate-in zoom-in-50 duration-500 delay-600">
                  <h3 className="font-headline text-4xl font-bold text-primary">Proven</h3>
                  <p className="text-muted-foreground">Track Record of Project Success</p>
                </div>
             </div>
           </div>
        </div>
      </section>

      <section id="industries" className="w-full py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center animate-in fade-in-up duration-500">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Industries We Serve</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Delivering specialized solutions for your unique challenges.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {industries.map((industry, i) => (
              <div key={industry.name} className="flex flex-col items-center gap-4 text-center animate-in fade-in-up duration-500" style={{ animationDelay: `${i * 100 + 200}ms`}}>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-card shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-primary/20">
                  {industry.icon}
                </div>
                <p className="font-semibold">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="w-full bg-secondary/20 py-24">
        <div className="container mx-auto text-center animate-in fade-in-up duration-700">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Ready to improve your data & AI systems?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">Let's discuss how we can help you achieve your goals. Your first strategy call is on us.</p>
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
