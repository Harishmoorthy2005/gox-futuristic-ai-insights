import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-background/20" />
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-10 animate-float" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-primary rounded-full opacity-5 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-gradient-primary rounded-full opacity-20 animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-primary animate-glow mr-3" />
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              Ready to Transform Your Meetings?
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Start Your <span className="bg-gradient-primary bg-clip-text text-transparent">AI Journey</span> Today
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of organizations already using Go-X to revolutionize their virtual interactions. 
            Experience the future of meetings and recruitment with our advanced AI platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="group shadow-glow">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="premium" size="xl" className="group">
              <Play className="mr-2 h-5 w-5" />
              Book a Demo
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">No Setup Required</div>
              <div className="text-sm text-muted-foreground">Get started instantly with your existing meeting platforms</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary mb-2">14-Day Free Trial</div>
              <div className="text-sm text-muted-foreground">Full access to all features, no credit card required</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">24/7 Support</div>
              <div className="text-sm text-muted-foreground">Expert assistance whenever you need help</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}