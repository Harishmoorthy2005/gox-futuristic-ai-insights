import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export function ComparisonSection() {
  const competitors = [
    { name: "Go-X", isOurs: true },
    { name: "Zoom IQ", isOurs: false },
    { name: "HireVue", isOurs: false },
    { name: "MS Copilot", isOurs: false }
  ];

  const features = [
    {
      feature: "Real-time physiological tracking",
      values: [true, false, false, false]
    },
    {
      feature: "Biometric verification",
      values: [true, false, true, false]
    },
    {
      feature: "130+ languages support",
      values: [true, false, false, true]
    },
    {
      feature: "Emotionally aware AI avatars",
      values: [true, false, false, false]
    },
    {
      feature: "Recruitment-specific insights",
      values: [true, false, true, false]
    },
    {
      feature: "Advanced audio/video analytics",
      values: [true, true, true, false]
    },
    {
      feature: "Meeting transcription & summaries",
      values: [true, true, false, true]
    },
    {
      feature: "Enterprise-grade security",
      values: [true, true, true, true]
    },
    {
      feature: "Real-time fraud detection",
      values: [true, false, true, false]
    },
    {
      feature: "Cultural intelligence",
      values: [true, false, false, false]
    }
  ];

  return (
    <section id="comparison" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="bg-gradient-primary bg-clip-text text-transparent">Go-X</span> Stands Out
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how Go-X compares to other platforms in the market. Our comprehensive feature set 
            and advanced AI capabilities set us apart from the competition.
          </p>
        </div>

        <Card className="bg-gradient-card border-border/50 shadow-card overflow-hidden">
          <CardHeader>
            <CardTitle className="text-center text-xl">Feature Comparison</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left p-4 font-semibold min-w-[250px]">Feature</th>
                    {competitors.map((competitor) => (
                      <th key={competitor.name} className="text-center p-4 font-semibold min-w-[120px]">
                        <div className={`${competitor.isOurs ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
                          {competitor.name}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((row, index) => (
                    <tr 
                      key={row.feature} 
                      className={`border-b border-border/20 hover:bg-muted/20 transition-smooth ${
                        index % 2 === 0 ? 'bg-muted/10' : ''
                      }`}
                    >
                      <td className="p-4 font-medium">{row.feature}</td>
                      {row.values.map((hasFeature, compIndex) => (
                        <td key={compIndex} className="text-center p-4">
                          {hasFeature ? (
                            <div className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
                              competitors[compIndex].isOurs 
                                ? 'bg-primary text-primary-foreground' 
                                : 'bg-green-500 text-white'
                            }`}>
                              <Check className="h-4 w-4" />
                            </div>
                          ) : (
                            <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20 text-red-400">
                              <X className="h-4 w-4" />
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="bg-gradient-card border-primary/20 shadow-glow text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">10x</div>
              <div className="text-sm text-muted-foreground mb-4">More Features</div>
              <p className="text-xs text-muted-foreground">
                Go-X offers significantly more capabilities than traditional platforms
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-secondary/20 shadow-glow text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-secondary mb-2">95%</div>
              <div className="text-sm text-muted-foreground mb-4">Higher Accuracy</div>
              <p className="text-xs text-muted-foreground">
                Superior AI algorithms deliver unmatched precision in analysis
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-accent/20 shadow-glow text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground mb-4">Global Support</div>
              <p className="text-xs text-muted-foreground">
                Round-the-clock assistance in 130+ languages worldwide
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}