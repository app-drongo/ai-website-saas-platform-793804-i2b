'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, CheckCircle, Zap, BarChart3, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  title: 'Streamline Your Business Operations',
  subtitle: 'Intelligent Automation & Analytics',
  description:
    'Transform your workflow with AI-powered automation that scales with your business. Get real-time insights and reduce manual tasks by up to 80%.',
  primaryCtaText: 'Start Free Trial',
  primaryCtaHref: '/signup',
  secondaryCtaText: 'Watch Demo',
  secondaryCtaHref: '/demo',
  badge: '🚀 New: Advanced Analytics Dashboard',
  features: [
    'Automated workflow optimization',
    'Real-time performance analytics',
    'Enterprise-grade security',
  ],
  stats: [
    { label: 'Time Saved', value: '80%' },
    { label: 'Efficiency Boost', value: '3x' },
    { label: 'ROI Increase', value: '250%' },
  ],
  trustText: 'Trusted by 10,000+ businesses worldwide',
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrimaryClick = () => {
    navigate(config.primaryCtaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section id="hero" className="bg-background text-foreground py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className={`mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium"
            >
              <span data-editable="badge">{config.badge}</span>
            </Badge>
          </div>

          {/* Main Heading */}
          <div
            className={`mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-4">
              <span
                data-editable="title"
                className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
              >
                {config.title}
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary mb-6">
              <span data-editable="subtitle">{config.subtitle}</span>
            </h2>
          </div>

          {/* Description */}
          <div
            className={`mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <span data-editable="description">{config.description}</span>
            </p>
          </div>

          {/* Features List */}
          <div
            className={`mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {config.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground"
                >
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span data-editable={`features[${idx}]`}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                data-editable-href="primaryCtaHref"
                data-href={config.primaryCtaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold group"
              >
                <span data-editable="primaryCtaText">{config.primaryCtaText}</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="border-border text-foreground hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg font-semibold group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div
            className={`mb-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {config.stats.map((stat, idx) => (
                <Card
                  key={idx}
                  className="bg-card text-card-foreground border-border hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Trust Indicator */}
          <div
            className={`transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <p className="text-sm text-muted-foreground">
              <span data-editable="trustText">{config.trustText}</span>
            </p>
          </div>

          {/* Floating Icons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <Zap className="absolute top-20 left-10 h-6 w-6 text-primary/20 animate-pulse" />
            <BarChart3 className="absolute top-32 right-16 h-8 w-8 text-primary/20 animate-bounce" />
            <Shield className="absolute bottom-40 left-20 h-7 w-7 text-primary/20 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
