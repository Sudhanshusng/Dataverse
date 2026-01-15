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
            About Me
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-muted-foreground">
            My background and my approach to building effective data solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">My Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  As a data engineer with four years of experience, I've seen how companies can struggle to turn their data into a real asset. Too often, projects get stuck in the prototype phase or become too complex to maintain.
                </p>
                <p>
                  I focus on building practical, secure, and maintainable AI and data systems. My goal is to deliver solutions that are not just technically sound, but that also provide clear business value.
                </p>
                <p>
                  I believe in a collaborative approach, working closely with you to understand your challenges and build a solution that fits your needs.
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
            <h3 className="mt-6 font-headline text-xl font-semibold">Data Engineer</h3>
            <p className="text-sm text-muted-foreground">AI & Data Specialist</p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">My Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To help businesses make better, data-driven decisions through reliable and secure systems. I aim to make data and AI accessible and effective, no matter the size of your company.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">My Tech Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I believe in building robust and scalable systems using modern, cloud-native technologies. I focus on practical, production-ready solutions over quick-and-dirty prototypes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <CtaSection />
    </>
  );
}
