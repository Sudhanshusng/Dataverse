import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="w-full bg-secondary/20 py-20 md:py-28">
      <div className="container mx-auto text-center">
        <h2 className="font-headline text-3xl font-bold md:text-4xl">Ready to modernize your data & AI systems?</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Let's discuss how Dataverse can help you achieve your goals. Your first strategy call is on us.
        </p>
        <Button asChild size="lg" className="group mt-8">
          <Link href="/contact">
            Schedule a Free Strategy Call
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
