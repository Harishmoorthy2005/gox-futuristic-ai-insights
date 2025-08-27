import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import dashboardHero from "@/assets/dashboard-hero.png";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(240_100%_70%/0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(260_100%_65%/0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI-Powered Insights
              </span>
              <br />
              for Smarter Meetings & Recruitment
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Go-X decodes non-verbal cues, tracks physiological signals, generates instant summaries, 
              and provides deep insights into virtual interactions. Integrated with Zoom, Meet, and Teams, 
              it transforms collaboration to the next level.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button variant="hero" size="xl" className="group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="premium" size="xl" className="group">
                <Play className="mr-2 h-5 w-5" />
                Book a Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">90%+</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary">130+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
          
          {/* Dashboard Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="relative">
              <img
                src={dashboardHero}
                alt="Go-X Dashboard"
                className="w-full h-auto rounded-lg shadow-card border border-border/20 animate-float"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-glow" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-glow" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-glow" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-20 left-20 w-4 h-4 bg-accent rounded-full animate-glow" style={{ animationDelay: "3s" }} />
    </section>
  );
}