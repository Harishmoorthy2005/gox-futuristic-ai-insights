import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Zap, Users, ArrowRight } from "lucide-react";
import aiAvatar from "@/assets/ai-avatar.png";

export function HumAInsSection() {
  const features = [
    {
      icon: Globe,
      title: "130+ Languages",
      description: "Communicate naturally in over 130 languages with perfect pronunciation and cultural context.",
      stat: "130+"
    },
    {
      icon: Zap,
      title: "Emotionally Aware",
      description: "Advanced emotional intelligence that adapts responses based on context and sentiment.",
      stat: "AI"
    },
    {
      icon: Users,
      title: "Enterprise Ready",
      description: "Scalable solutions designed for organizations of any size, from startups to Fortune 500.",
      stat: "∞"
    }
  ];

  return (
    <section id="humains" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet <span className="bg-gradient-primary bg-clip-text text-transparent">HumAIn's</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            AI Avatars for the Future - Intelligent, emotionally aware, real-time AI avatars 
            acting as your digital teammates, ready to transform how you work and collaborate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <img
                src={aiAvatar}
                alt="HumAIn AI Avatar"
                className="w-full h-auto rounded-lg shadow-card border border-border/20 animate-float"
              />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-glow" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-glow" style={{ animationDelay: "1s" }} />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-6">The Next Generation of Digital Interaction</h3>
            <p className="text-muted-foreground mb-8">
              HumAIn's represent a breakthrough in AI avatar technology, combining natural language processing, 
              emotional intelligence, and cultural awareness to create truly human-like digital interactions 
              that enhance productivity and engagement across global teams.
            </p>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="font-semibold">{feature.title}</h4>
                      <div className="px-2 py-1 bg-gradient-primary rounded text-xs font-bold text-primary-foreground">
                        {feature.stat}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="cta" size="lg" className="group" onClick={() => window.location.href = '/humain'}>
              Explore HumAIn's
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-card border-border/50 text-center p-8 hover:border-primary/20 transition-smooth hover:shadow-glow">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground mb-4">Always Available</div>
              <p className="text-xs text-muted-foreground">
                HumAIn's never sleep, providing round-the-clock support and assistance
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 text-center p-8 hover:border-primary/20 transition-smooth hover:shadow-glow">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-secondary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground mb-4">Accuracy Rate</div>
              <p className="text-xs text-muted-foreground">
                Industry-leading accuracy in language processing and emotional recognition
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 text-center p-8 hover:border-primary/20 transition-smooth hover:shadow-glow">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-accent mb-2">&lt;100ms</div>
              <div className="text-sm text-muted-foreground mb-4">Response Time</div>
              <p className="text-xs text-muted-foreground">
                Lightning-fast responses that feel natural and human-like
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}