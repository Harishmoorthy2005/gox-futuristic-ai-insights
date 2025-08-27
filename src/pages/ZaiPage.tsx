import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Video, Heart, ShieldCheck, Award, Brain, Users, TrendingUp, Eye, Mic, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import aiRecruitment from "@/assets/ai-recruitment.png";
import aiMonitoring from "@/assets/ai-monitoring.png";
import dashboardHero from "@/assets/dashboard-hero.png";

const ZaiPage = () => {
  const navigate = useNavigate();

  const keyFeatures = [
    {
      icon: Video,
      title: "Audio & Video Analytics",
      description: "Advanced analysis of speech patterns, vocal characteristics, and visual cues for comprehensive candidate assessment.",
      capabilities: ["Voice pattern analysis", "Facial expression detection", "Gesture recognition", "Eye contact tracking"]
    },
    {
      icon: Heart,
      title: "Health & Stress Monitoring",
      description: "Real-time physiological monitoring to assess candidate comfort and stress levels during interviews.",
      capabilities: ["Heart rate monitoring", "Stress level detection", "Blood oxygen tracking", "Respiration analysis"]
    },
    {
      icon: ShieldCheck,
      title: "Biometric Verification",
      description: "Multi-layered identity verification using facial recognition, voice analysis, and liveness detection.",
      capabilities: ["Facial recognition", "Voice verification", "Liveness detection", "Anti-spoofing technology"]
    },
    {
      icon: Award,
      title: "AI-Powered Insights",
      description: "Intelligent analysis and scoring of candidates with actionable hiring recommendations.",
      capabilities: ["Skill assessment", "Cultural fit analysis", "Performance prediction", "Bias reduction"]
    }
  ];

  const analyticsData = [
    { label: "Truthfulness Score", value: 87, color: "text-green-400" },
    { label: "Engagement Level", value: 92, color: "text-blue-400" },
    { label: "Confidence Index", value: 78, color: "text-purple-400" },
    { label: "Communication Skills", value: 85, color: "text-cyan-400" }
  ];

  const sampleImages = [
    { src: aiRecruitment, title: "Recruitment Interface", description: "Main AI recruitment dashboard with real-time analytics" },
    { src: aiMonitoring, title: "Candidate Monitoring", description: "Live candidate assessment and biometric tracking" },
    { src: dashboardHero, title: "Analytics Dashboard", description: "Comprehensive reporting and insights panel" }
  ];

  const benefits = [
    { title: "95% Accuracy Rate", description: "Industry-leading precision in candidate assessment", icon: TrendingUp },
    { title: "50% Time Saved", description: "Streamlined hiring process with automated screening", icon: Users },
    { title: "Zero Bias Hiring", description: "Objective evaluation removing human prejudices", icon: Eye },
    { title: "24/7 Availability", description: "Round-the-clock recruitment capabilities", icon: CheckCircle }
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
                <span className="bg-gradient-primary bg-clip-text text-transparent">Zai</span> – AI Recruiter
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                The world's first AI recruiter that combines advanced analytics, biometric verification, 
                and intelligent insights to revolutionize your hiring process.
              </p>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="relative max-w-4xl mx-auto">
              <img
                src={aiRecruitment}
                alt="Zai AI Recruitment Interface"
                className="w-full h-auto rounded-lg shadow-card border border-border/20"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-glow" />
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Zai?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={benefit.title} className="bg-gradient-card border-border/50 text-center p-6 hover:border-primary/20 transition-smooth hover:shadow-glow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                      <benefit.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-gradient-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Advanced Features</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {keyFeatures.map((feature, index) => (
                <Card key={feature.title} className="bg-gradient-card border-border/50 hover:border-primary/20 transition-smooth hover:shadow-glow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-primary rounded-lg">
                        <feature.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{feature.description}</p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm">Key Capabilities:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {feature.capabilities.map((capability, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Demo */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Real-Time Analytics</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Live Candidate Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {analyticsData.map((metric) => (
                        <div key={metric.label} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">{metric.label}</span>
                            <span className={`text-sm font-bold ${metric.color}`}>{metric.value}%</span>
                          </div>
                          <Progress value={metric.value} className="h-3" />
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">AI Insights</h4>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3 p-3 bg-background rounded-lg border border-border/50">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Candidate shows high confidence and engagement levels</span>
                        </div>
                        <div className="flex items-start space-x-3 p-3 bg-background rounded-lg border border-border/50">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Excellent communication skills demonstrated</span>
                        </div>
                        <div className="flex items-start space-x-3 p-3 bg-background rounded-lg border border-border/50">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Strong cultural fit indicators detected</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sample Images */}
        <section className="py-16 bg-gradient-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Zai in Action</h2>
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

        {/* CTA Section */}
        <section className="py-16 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Transform Your Hiring Process</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join the future of recruitment with Zai's AI-powered platform that ensures fair, 
              accurate, and efficient hiring decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Request Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ZaiPage;