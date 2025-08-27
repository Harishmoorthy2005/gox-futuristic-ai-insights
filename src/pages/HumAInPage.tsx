import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Globe, Zap, Users, MessageCircle, Brain, Mic, Video, Languages, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import aiAvatar from "@/assets/ai-avatar.png";
import aiMonitoring from "@/assets/ai-monitoring.png";
import dashboardHero from "@/assets/dashboard-hero.png";

const HumAInPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Globe,
      title: "130+ Languages Support",
      description: "Communicate naturally in over 130 languages with perfect pronunciation, cultural context, and localized expressions.",
      details: ["Real-time translation", "Cultural adaptation", "Native pronunciation", "Regional dialects"]
    },
    {
      icon: Brain,
      title: "Emotional Intelligence",
      description: "Advanced emotional AI that understands context, sentiment, and responds with appropriate emotional intelligence.",
      details: ["Emotion recognition", "Contextual responses", "Empathy modeling", "Mood adaptation"]
    },
    {
      icon: Users,
      title: "Enterprise Integration",
      description: "Seamlessly integrate with your existing workflows, CRM systems, and business processes.",
      details: ["API integration", "Custom workflows", "SSO support", "Enterprise security"]
    },
    {
      icon: MessageCircle,
      title: "Natural Conversations",
      description: "Human-like conversations that feel natural and engaging, powered by advanced NLP technology.",
      details: ["Context awareness", "Natural flow", "Personality traits", "Conversation memory"]
    },
    {
      icon: Mic,
      title: "Voice Technology",
      description: "Crystal clear voice synthesis with customizable personas and speaking styles.",
      details: ["Voice cloning", "Accent adaptation", "Speed control", "Tone customization"]
    },
    {
      icon: Video,
      title: "Visual Presence",
      description: "Lifelike avatars with realistic expressions, gestures, and body language.",
      details: ["Facial expressions", "Gesture recognition", "Eye contact", "Lip synchronization"]
    }
  ];

  const sampleImages = [
    { src: aiAvatar, title: "AI Avatar Interface", description: "Interactive AI avatar with natural expressions" },
    { src: aiMonitoring, title: "Monitoring Dashboard", description: "Real-time analytics and performance metrics" },
    { src: dashboardHero, title: "Control Panel", description: "Comprehensive management interface" }
  ];

  const useCases = [
    { title: "Customer Support", description: "24/7 multilingual customer assistance", icon: MessageCircle },
    { title: "Sales & Marketing", description: "Personalized product demonstrations", icon: Users },
    { title: "Training & Education", description: "Interactive learning experiences", icon: Brain },
    { title: "Healthcare", description: "Patient engagement and support", icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-12 bg-gradient-secondary">
          <div className="container mx-auto px-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">HumAIn's</span> AI Avatars
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                The future of digital interaction is here. Experience intelligent, emotionally aware, 
                real-time AI avatars that transform how you work and collaborate.
              </p>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="relative max-w-4xl mx-auto">
              <img
                src={aiAvatar}
                alt="HumAIn AI Avatar"
                className="w-full h-auto rounded-lg shadow-card border border-border/20"
              />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-glow" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-glow" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={feature.title} className="bg-gradient-card border-border/50 hover:border-primary/20 transition-smooth hover:shadow-glow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-primary rounded-lg">
                        <feature.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <div className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Images */}
        <section className="py-16 bg-gradient-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">See HumAIn's in Action</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {sampleImages.map((image, index) => (
                <Card key={image.title} className="bg-gradient-card border-border/50 overflow-hidden hover:border-primary/20 transition-smooth hover:shadow-glow">
                  <div className="aspect-video">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{image.title}</h3>
                    <p className="text-sm text-muted-foreground">{image.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Industry Applications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <Card key={useCase.title} className="bg-gradient-card border-border/50 text-center p-6 hover:border-primary/20 transition-smooth hover:shadow-glow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                      <useCase.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience HumAIn's?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Transform your digital interactions with AI avatars that understand, engage, and deliver results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HumAInPage;