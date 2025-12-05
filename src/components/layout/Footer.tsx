'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  companyName: 'AutoFlow',
  tagline: 'Streamline your business operations with intelligent automation and analytics',
  description:
    'Empowering businesses with cutting-edge automation solutions and real-time analytics to drive growth and efficiency.',

  // Company Links
  companyLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
  ],

  // Legal Links
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],

  // Social Links
  socialLinks: [
    { platform: 'Twitter', href: 'https://twitter.com/autoflow', icon: 'twitter' },
    { platform: 'LinkedIn', href: 'https://linkedin.com/company/autoflow', icon: 'linkedin' },
    { platform: 'GitHub', href: 'https://github.com/autoflow', icon: 'github' },
  ],

  // Contact Info
  contactEmail: 'hello@autoflow.com',
  contactPhone: '+1 (555) 123-4567',
  address: '123 Innovation Drive, Tech Valley, CA 94025',

  // Newsletter
  newsletterTitle: 'Stay Updated',
  newsletterDescription: 'Get the latest updates on automation trends and product releases.',
  newsletterPlaceholder: 'Enter your email',
  newsletterButtonText: 'Subscribe',

  // Copyright
  copyrightText: '© 2024 AutoFlow. All rights reserved.',

  // CTA
  ctaTitle: 'Ready to automate your workflow?',
  ctaButtonText: 'Start Free Trial',
  ctaHref: '/signup',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleNavigation = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(href);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'github':
        return <Github className="h-5 w-5" />;
      default:
        return <Mail className="h-5 w-5" />;
    }
  };

  return (
    <footer id="footer" className="bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">
                  <span data-editable="companyName">{config.companyName}</span>
                </h3>
                <p className="text-lg text-muted-foreground mb-4">
                  <span data-editable="tagline">{config.tagline}</span>
                </p>
                <p className="text-muted-foreground max-w-md">
                  <span data-editable="description">{config.description}</span>
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span data-editable="contactEmail">{config.contactEmail}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span data-editable="contactPhone">{config.contactPhone}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span data-editable="address">{config.address}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-6">Company</h4>
              <ul className="space-y-4">
                {config.companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <Button
                      variant="ghost"
                      className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start"
                      onClick={() => handleNavigation(link.href)}
                      data-editable-href={`companyLinks[${idx}].href`}
                      data-href={link.href}
                    >
                      <span data-editable={`companyLinks[${idx}].label`}>{link.label}</span>
                    </Button>
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold mb-6 mt-8">Legal</h4>
              <ul className="space-y-4">
                {config.legalLinks.map((link, idx) => (
                  <li key={idx}>
                    <Button
                      variant="ghost"
                      className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start"
                      onClick={() => handleNavigation(link.href)}
                      data-editable-href={`legalLinks[${idx}].href`}
                      data-href={link.href}
                    >
                      <span data-editable={`legalLinks[${idx}].label`}>{link.label}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-2">
                <span data-editable="newsletterTitle">{config.newsletterTitle}</span>
              </h4>
              <p className="text-muted-foreground mb-6">
                <span data-editable="newsletterDescription">{config.newsletterDescription}</span>
              </p>

              <form
                onSubmit={handleNewsletterSubmit}
                className="space-y-4"
                data-form-id="6932dbf908be4cc787f4f05d"
              >
                <input
                  type="email"
                  placeholder={config.newsletterPlaceholder}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <span data-editable="newsletterButtonText">{config.newsletterButtonText}</span>
                </Button>
              </form>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-muted-foreground text-sm">
              <span data-editable="copyrightText">{config.copyrightText}</span>
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {config.socialLinks.map((social, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="sm"
                  className="h-10 w-10 p-0 text-muted-foreground hover:text-foreground hover:bg-accent"
                  onClick={() => handleNavigation(social.href)}
                  data-editable-href={`socialLinks[${idx}].href`}
                  data-href={social.href}
                  aria-label={social.platform}
                >
                  {getSocialIcon(social.icon)}
                </Button>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground hidden sm:block">
                <span data-editable="ctaTitle">{config.ctaTitle}</span>
              </span>
              <Button
                onClick={() => handleNavigation(config.ctaHref)}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <span data-editable="ctaButtonText">{config.ctaButtonText}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
