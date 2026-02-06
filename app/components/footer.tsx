import Link from 'next/link';
import { Music, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Logo } from './ui/logo';
import { Container } from './ui/container';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <Container>
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-4" />
            <p className="text-muted-foreground max-w-sm">
              The first blockchain-powered streaming platform that pays you to
              listen. Building the fair future of music.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/economics"
                  className="text-muted-foreground hover:text-primary transition-colors">
                  Economics
                </Link>
              </li>
              <li>
                <Link
                  href="/token-sale"
                  className="text-muted-foreground hover:text-primary transition-colors">
                  Token Sale
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
          <div className="text-sm text-muted-foreground">
            © 2026 SMASH AI STREAMING. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
