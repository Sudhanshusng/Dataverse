import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import CtaSection from '@/components/shared/cta-section';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'RAG vs. Fine-Tuning: Which is Right for Your Business AI?',
    description: 'A deep dive into Retrieval-Augmented Generation and fine-tuning, helping you choose the best approach for your custom AI assistants.',
    category: 'RAG Systems',
    image: PlaceHolderImages.find((img) => img.id === 'blog-ai'),
    author: 'Jane Doe',
    date: 'October 26, 2023',
    href: '#',
  },
  {
    title: '5 Data Engineering Best Practices for Building Scalable Platforms',
    description: 'Learn the foundational principles our team uses to build robust, scalable, and maintainable data engineering platforms on the cloud.',
    category: 'Data Engineering',
    image: PlaceHolderImages.find((img) => img.id === 'blog-data'),
    author: 'John Smith',
    date: 'October 22, 2023',
    href: '#',
  },
  {
    title: 'Is Your Cloud Secure? A 10-Point Checklist for AWS and Azure',
    description: 'Cybersecurity is not an afterthought. Use this checklist to conduct a basic security audit of your cloud infrastructure and protect your data.',
    category: 'Cloud Security',
    image: PlaceHolderImages.find((img) => img.id === 'blog-security'),
    author: 'Alex Johnson',
    date: 'October 18, 2023',
    href: '#',
  },
];

export default function BlogPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Insights & Blog
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground">
            Our analysis on AI in business, data engineering best practices, and cloud security.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.title} className="flex flex-col overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/20">
              {post.image && (
                <div className="relative h-56 w-full">
                  <Image
                    src={post.image.imageUrl}
                    alt={post.description}
                    fill
                    className="object-cover"
                    data-ai-hint={post.image.imageHint}
                  />
                </div>
              )}
              <CardHeader>
                <Badge variant="secondary" className="w-fit">{post.category}</Badge>
                <CardTitle className="pt-2 font-headline">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{post.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  <p>{post.author}</p>
                  <p>{post.date}</p>
                </div>
                <Link href={post.href} className="group flex items-center font-semibold text-primary">
                  Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground">More articles coming soon...</p>
        </div>
      </div>
      <CtaSection />
    </>
  );
}
