'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calendar, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  company: z.string().min(2, {
    message: 'Company name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  problem: z.string().min(10, {
    message: 'Please describe your problem in at least 10 characters.',
  }),
});

export default function ContactPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      problem: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      <div className="mb-12 text-center animate-in fade-in slide-in-from-top-5 duration-700">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground">
          Ready to get started? Let's talk about how we can help your business.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <div className="animate-in fade-in-up duration-500 delay-200">
            <Card className="transition-shadow duration-300 hover:shadow-xl">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                            <Input placeholder="Your Company" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input type="email" placeholder="your.email@company.com" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="problem"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Problem Description</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Tell us a bit about your project or challenge..." {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit" className="w-full">
                    Send Message
                    </Button>
                </form>
                </Form>
            </CardContent>
            </Card>
        </div>

        <div className="space-y-8 animate-in fade-in-up duration-500 delay-400">
            <Card className="transition-shadow duration-300 hover:shadow-xl">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Book a Free Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-6">The fastest way to get your questions answered. Schedule a 30-minute strategy call directly with our team.</p>
                    <Button asChild size="lg" className="w-full group">
                        <Link href="#" target="_blank" rel="noopener noreferrer">
                            <Calendar className="mr-2 h-5 w-5" />
                            Book with Calendly
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </CardContent>
            </Card>

            <div className="space-y-4 text-lg">
                <div className="flex items-center gap-4 transition-colors duration-300 hover:text-primary">
                    <Mail className="h-6 w-6 text-primary" />
                    <a href="mailto:contact@dataverse.com" className="hover:text-primary">contact@dataverse.com</a>
                </div>
                <div className="flex items-center gap-4 transition-colors duration-300 hover:text-primary">
                    <Phone className="h-6 w-6 text-primary" />
                    <a href="tel:+919784672507" className="hover:text-primary">+91-9784672507</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
