import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CtaSection from '@/components/shared/cta-section';

export default function AboutPage() {
  const founderImage = PlaceHolderImages.find((img) => img.id === 'about-founder');

  return (
    <>
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            About Dataverse
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-muted-foreground">
            The story behind our mission to help businesses unlock the power of their data securely and intelligently.
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
                  Dataverse was founded by data engineers and AI specialists with over a decade of experience building enterprise-scale platforms for global organizations. We witnessed firsthand how companies struggled to bridge the gap between raw data and actionable intelligence.
                </p>
                <p>
                  Many solutions were either too complex, too insecure, or failed to deliver real business value. They were often just prototypes that couldn't handle the rigors of production environments. We knew there had to be a better way.
                </p>
                <p>
                  Our mission became clear: to build a company that delivers secure, production-grade AI and data systems. We combine deep technical expertise with a business-focused mindset to create solutions that not only work but drive tangible results.
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
            <h3 className="mt-6 font-headline text-xl font-semibold">The Founding Team</h3>
            <p className="text-sm text-muted-foreground">Data Engineers & AI Specialists</p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To empower every business to make intelligent, data-driven decisions with confidence and security. We envision a future where AI and data are not just tools, but core drivers of innovation and efficiency for companies of all sizes.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Our Tech Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We believe in building robust, scalable, and secure systems from the ground up. Our approach is cloud-native, leveraging the best of modern data stack technologies while remaining vendor-agnostic to fit our clients' needs. We prioritize production-readiness over quick hacks.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <CtaSection />
    </>
  );
}
