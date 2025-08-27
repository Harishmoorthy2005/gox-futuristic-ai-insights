import { Card, CardContent } from "@/components/ui/card";
import { Target, Shield, Globe, Zap, Users, CheckCircle } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Target,
      title: "Accuracy",
      description: "90%+ reliable insights powered by advanced machine learning algorithms",
      highlight: "90%+",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Biometric verification prevents fraud and ensures authentic interactions",
      highlight: "Bank-Grade",
      color: "text-green-400"
    },
    {
      icon: Globe,
      title: "Scalability",
      description: "Works seamlessly for enterprises globally, from startups to Fortune 500",
      highlight: "Global",
      color: "text-blue-400"
    },
    {
      icon: Zap,
      title: "Multilingual",
      description: "130+ languages supported with cultural intelligence and context awareness",
      highlight: "130+",
      color: "text-purple-400"
    },
    {
      icon: Users,
      title: "Seamless Integration",
      description: "Native support for Zoom, Google Meet, Microsoft Teams, and more platforms",
      highlight: "Universal",
      color: "text-cyan-400"
    },
    {
      icon: CheckCircle,
      title: "Real-time Processing",
      description: "Instant analysis and insights during live meetings and interviews",
      highlight: "Live",
      color: "text-orange-400"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Go-X</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Go-X delivers unparalleled advantages that transform how you conduct virtual meetings 
            and recruitment processes, backed by cutting-edge AI technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="bg-gradient-card border-border/50 hover:border-primary/20 transition-smooth hover:shadow-glow group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center relative z-10">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-spring shadow-glow">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className={`absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold bg-background border border-border ${feature.color}`}>
                    {feature.highlight}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
              
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-smooth" />
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime Reliability</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">1M+</div>
            <div className="text-sm text-muted-foreground">Meetings Analyzed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Enterprise Clients</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Global Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}