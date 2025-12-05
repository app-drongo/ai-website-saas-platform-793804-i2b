'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_NAVIGATION = {
  brandName: 'AutoFlow',
  brandIcon: 'zap',
  navItems: [
    { label: 'Hero', href: '#hero' },
    { label: 'Pricing', href: '#pricing' },
  ],
  ctaText: 'Get Started',
  ctaHref: '/signup',
  mobileMenuLabel: 'Open navigation menu',
  closeMenuLabel: 'Close navigation menu',
} as const;

type NavigationProps = Partial<typeof DEFAULT_NAVIGATION>;

export default function Navigation(props: NavigationProps) {
  const config = { ...DEFAULT_NAVIGATION, ...props };
  const navigate = useSmartNavigation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsMobileMenuOpen(false);
  };

  const handleCtaClick = () => {
    navigate(config.ctaHref);
    setIsMobileMenuOpen(false);
  };

  const IconComponent = config.brandIcon === 'zap' ? Zap : Zap;

  return (
    <section
      id="navigation"
      className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <IconComponent className="h-5 w-5" />
            </div>
            <span
              className="text-xl font-bold text-foreground cursor-pointer hover:text-primary transition-colors"
              onClick={() => navigate('/')}
              data-editable="brandName"
            >
              {config.brandName}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {config.navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                data-editable-href={`navItems[${idx}].href`}
                data-href={item.href}
              >
                <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={handleCtaClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
            >
              <span data-editable="ctaText">{config.ctaText}</span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground hover:bg-accent hover:text-accent-foreground"
                  aria-label={config.mobileMenuLabel}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-card text-card-foreground">
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Mobile Brand */}
                  <div className="flex items-center space-x-2 pb-4 border-b border-border">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span
                      className="text-xl font-bold text-card-foreground"
                      data-editable="brandName"
                    >
                      {config.brandName}
                    </span>
                  </div>

                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col space-y-4">
                    {config.navItems.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleNavClick(item.href)}
                        className="text-left text-lg text-muted-foreground hover:text-card-foreground transition-colors py-2"
                        data-editable-href={`navItems[${idx}].href`}
                        data-href={item.href}
                      >
                        <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
                      </button>
                    ))}
                  </nav>

                  {/* Mobile CTA */}
                  <div className="pt-4 border-t border-border">
                    <Button
                      onClick={handleCtaClick}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                      data-editable-href="ctaHref"
                      data-href={config.ctaHref}
                    >
                      <span data-editable="ctaText">{config.ctaText}</span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
}
