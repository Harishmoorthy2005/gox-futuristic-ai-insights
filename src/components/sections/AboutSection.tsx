import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, MessageSquare, Users, Zap, Shield } from "lucide-react";
import aiMonitoring from "@/assets/ai-monitoring.png";

export function AboutSection() {
  const features = [
    {
      icon: Brain,
      title: "Decodes Non-Verbal Cues",
      description: "Advanced AI analyzes facial expressions, body language, and micro-expressions in real-time."
    },
    {
      icon: Heart,
      title: "Physiological Tracking",
      description: "Monitor heart rate, respiration, stress levels, and blood oxygen during meetings."
    },
    {
      icon: MessageSquare,
      title: "Instant Summaries",
      description: "Generate comprehensive meeting summaries with action items and key insights."
    },
    {
      icon: Users,
      title: "Multi-Platform Support",
      description: "Seamlessly integrates with Zoom, Google Meet, and Microsoft Teams."
    },
    {
      icon: Zap,
      title: "Real-Time Analytics",
      description: "Get live insights and recommendations during your virtual interactions."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with global privacy standards."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What is <span className="bg-gradient-primary bg-clip-text text-transparent">Go-X</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Go-X is TensorGo's flagship AI-powered platform that revolutionizes virtual meetings and recruitment 
            through advanced biometric analysis, emotional intelligence, and real-time insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img
              src={aiMonitoring}
              alt="AI Monitoring"
              className="w-full h-auto rounded-lg shadow-card border border-border/20"
            />
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-glow" />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Powered by Advanced AI Technology</h3>
            <p className="text-muted-foreground mb-6">
              Our cutting-edge artificial intelligence combines computer vision, natural language processing, 
              and biometric analysis to provide unprecedented insights into human behavior during virtual interactions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Real-time emotion detection and sentiment analysis</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span>Advanced biometric monitoring and health tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Intelligent meeting transcription and summarization</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="bg-gradient-card border-border/50 hover:border-primary/20 transition-smooth hover:shadow-glow group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-spring">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}