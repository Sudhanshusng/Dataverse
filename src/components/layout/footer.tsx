import Link from 'next/link';
import { BrainCircuit } from 'lucide-react';

const navLinks = [
  { href: '/solutions', label: 'Solutions' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2">
              <BrainCircuit className="h-7 w-7 text-primary" />
              <span className="font-headline text-xl font-bold">Dataverse</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              AI, Data & Cybersecurity Solutions for Modern Businesses.
            </p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="font-headline font-semibold text-foreground">Services</h3>
                <ul className="mt-4 space-y-2">
                  {navLinks.slice(0, 4).map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href} className="text-muted-foreground hover:text-primary">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-headline font-semibold text-foreground">Company</h3>
                <ul className="mt-4 space-y-2">
                    <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                    <li><Link href="/case-studies" className="text-muted-foreground hover:text-primary">Case Studies</Link></li>
                    <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-headline font-semibold text-foreground">Legal</h3>
                <ul className="mt-4 space-y-2">
                    <li><Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                    <li><Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Dataverse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
