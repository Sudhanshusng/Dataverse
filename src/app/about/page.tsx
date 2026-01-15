import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CtaSection from '@/components/shared/cta-section';
import { CheckCircle } from 'lucide-react';

const coreValues = [
    {
        title: 'Pragmatism',
        description: 'We focus on what works, delivering practical solutions that provide real-world value over theoretical perfection.',
    },
    {
        title: 'Partnership',
        description: 'We work with you, not just for you. Your business context is key to building a successful solution.',
    },
    {
        title: 'Security by Design',
        description: 'Security is not an afterthought. It is a foundational component of every system we build.',
    },
    {
        title: 'Maintainability',
        description: 'We build systems that are easy to understand, manage, and scale, ensuring long-term success.',
    }
]

export default function AboutPage() {
  const founderImage = PlaceHolderImages.find((img) => img.id === 'about-founder');

  return (
    <>
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            About Us
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-muted-foreground">
            Our background and our approach to building effective data solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Our Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  With a background in building complex systems, we saw a gap where companies struggled to integrate their data, secure their infrastructure, and leverage AI effectively. Too often, projects lose momentum, become overly complex, or fail to address security from the start.
                </p>
                <p>
                  Dataverse was founded to change that. We focus on building practical, secure, and maintainable systems across AI, data, and cybersecurity. Our goal is to deliver integrated solutions that are not just technically sound, but that also provide clear, measurable business value.
                </p>
                <p>
                  We believe in a collaborative approach, working closely with you to understand your challenges and build a solution that fits your needs.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col items-center">
            {founderImage && (
              <Image
                src={founderImage.imageUrl}
                alt={founderImage.description}
                width={300}
                height={300}
                className="rounded-full object-cover shadow-lg"
                data-ai-hint={founderImage.imageHint}
              />
            )}
            <h3 className="mt-6 font-headline text-xl font-semibold">Our Team</h3>
            <p className="text-sm text-muted-foreground">AI, Data & Cybersecurity Specialists</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
            <h2 className="font-headline text-3xl font-bold">Our Core Values</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">The principles that guide our work.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
                <Card key={value.title}>
                    <CardHeader className='items-center'>
                        <CheckCircle className="h-8 w-8 text-primary" />
                        <CardTitle className="pt-2 font-headline text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-center text-muted-foreground">{value.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To help businesses make better, data-driven decisions through reliable and secure systems. We aim to make data and AI accessible and effective, no matter the size of your company.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Our Tech Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We believe in building robust and scalable systems using modern, cloud-native technologies. We focus on practical, production-ready solutions over quick-and-dirty prototypes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <CtaSection />
    </>
  );
}
