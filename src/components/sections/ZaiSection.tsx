import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Mic, 
  Video, 
  Heart, 
  ShieldCheck, 
  CheckCircle, 
  ChevronLeft, 
  ChevronRight,
  TrendingUp,
  Award,
  Eye,
  Smile,
  ArrowRight
} from "lucide-react";
import aiRecruitment from "@/assets/ai-recruitment.png";

export function ZaiSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const features = [
    {
      id: "audio-video",
      title: "Audio & Video Analytics",
      icon: Video,
      description: "Advanced analysis of speech patterns, vocal characteristics, and visual cues",
      metrics: [
        { label: "Truthfulness Score", value: 87, color: "text-green-400" },
        { label: "Engagement Level", value: 92, color: "text-blue-400" },
        { label: "Confidence Index", value: 78, color: "text-purple-400" },
        { label: "Communication Skills", value: 85, color: "text-cyan-400" }
      ],
      insights: ["Low filler words detected", "High vocal clarity", "Confident tone throughout"]
    },
    {
      id: "health-stress",
      title: "Health & Stress Tracking",
      icon: Heart,
      description: "Real-time physiological monitoring for comprehensive candidate assessment",
      metrics: [
        { label: "Heart Rate", value: 78, unit: "BPM", color: "text-red-400" },
        { label: "Stress Level", value: 35, unit: "%", color: "text-yellow-400" },
        { label: "Blood Oxygen", value: 98, unit: "%", color: "text-green-400" },
        { label: "Respiration", value: 16, unit: "/min", color: "text-blue-400" }
      ],
      insights: ["Stable vitals throughout", "Low stress indicators", "Optimal physiological state"]
    },
    {
      id: "biometric",
      title: "Biometric Verification",
      icon: ShieldCheck,
      description: "Advanced security through facial recognition and voice verification",
      verifications: [
        { label: "Facial Recognition", status: "verified", confidence: 99.8 },
        { label: "Voice Verification", status: "verified", confidence: 97.2 },
        { label: "Liveness Detection", status: "verified", confidence: 98.9 },
        { label: "Expression Analysis", status: "verified", confidence: 96.4 }
      ],
      insights: ["Identity confirmed", "No fraud indicators", "Genuine candidate verified"]
    },
    {
      id: "hr-insights",
      title: "HR Insights & Analysis",
      icon: Award,
      description: "Comprehensive candidate evaluation with actionable hiring recommendations",
      overall: { score: 78, recommendation: "Recommended" },
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Figma", level: 92 },
        { name: "Research", level: 76 },
        { name: "Prototyping", level: 88 },
        { name: "Communication", level: 82 }
      ],
      insights: ["Strong technical skills", "Excellent design portfolio", "Good cultural fit"]
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  const currentFeature = features[activeSlide];

  return (
    <section id="zai" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Zai</span> – The World's First AI Recruiter
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Revolutionary AI-powered recruitment platform that combines advanced analytics, 
            biometric verification, and intelligent insights to transform hiring decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img
              src={aiRecruitment}
              alt="AI Recruitment Interface"
              className="w-full h-auto rounded-lg shadow-card border border-border/20"
            />
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-glow" />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Revolutionizing Recruitment with AI</h3>
            <p className="text-muted-foreground mb-6">
              Zai combines cutting-edge AI technology with human psychology to provide the most 
              comprehensive candidate assessment platform ever created. From real-time biometric 
              analysis to deep psychological insights, Zai ensures you make the right hiring decisions.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-gradient-card rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center p-4 bg-gradient-card rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-secondary">50%</div>
                <div className="text-sm text-muted-foreground">Time Saved</div>
              </div>
            </div>
            <Button variant="cta" size="lg" className="group w-full" onClick={() => window.location.href = '/zai'}>
              Explore Zai →
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Feature Carousel */}
        <div className="bg-gradient-card rounded-xl border border-border/50 p-8 shadow-card">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-primary rounded-lg">
                <currentFeature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{currentFeature.title}</h3>
                <p className="text-muted-foreground text-sm">{currentFeature.description}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={prevSlide}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex space-x-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-smooth ${
                      index === activeSlide ? 'bg-primary' : 'bg-muted'
                    }`}
                    onClick={() => setActiveSlide(index)}
                  />
                ))}
              </div>
              <Button variant="ghost" size="icon" onClick={nextSlide}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Feature Content */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {currentFeature.id === "audio-video" && currentFeature.metrics && (
                <>
                  {currentFeature.metrics.map((metric) => (
                    <div key={metric.label} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{metric.label}</span>
                        <span className={`text-sm font-bold ${metric.color}`}>{metric.value}%</span>
                      </div>
                      <Progress value={metric.value} className="h-2" />
                    </div>
                  ))}
                </>
              )}

              {currentFeature.id === "health-stress" && currentFeature.metrics && (
                <div className="grid grid-cols-2 gap-4">
                  {currentFeature.metrics.map((metric) => (
                    <Card key={metric.label} className="bg-background border-border/50">
                      <CardContent className="p-4 text-center">
                        <div className={`text-2xl font-bold ${metric.color}`}>
                          {metric.value}
                          <span className="text-sm ml-1">{metric.unit}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {currentFeature.id === "biometric" && currentFeature.verifications && (
                <div className="space-y-4">
                  {currentFeature.verifications.map((verification) => (
                    <div key={verification.label} className="flex items-center justify-between p-3 bg-background rounded-lg border border-border/50">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="font-medium">{verification.label}</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-500/10 text-green-400">
                        {verification.confidence}%
                      </Badge>
                    </div>
                  ))}
                </div>
              )}

              {currentFeature.id === "hr-insights" && currentFeature.overall && (
                <>
                  <Card className="bg-background border-border/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Overall Assessment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-bold text-primary">{currentFeature.overall.score}%</span>
                        <Badge className="bg-green-500/10 text-green-400 border-green-500/20">
                          {currentFeature.overall.recommendation}
                        </Badge>
                      </div>
                      <Progress value={currentFeature.overall.score} className="h-3" />
                    </CardContent>
                  </Card>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Key Skills Assessment</h4>
                    {currentFeature.skills?.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">{skill.name}</span>
                          <span className="text-sm font-bold text-primary">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-1.5" />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span>Key Insights</span>
              </h4>
              <div className="space-y-3">
                {currentFeature.insights?.map((insight, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-background rounded-lg border border-border/50">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{insight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}