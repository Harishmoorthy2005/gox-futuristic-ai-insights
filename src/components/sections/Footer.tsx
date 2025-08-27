import { Link } from "react-router-dom";
import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import goxLogo from "@/assets/gox-logo.png";

export function Footer() {
  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "HumAIn's", href: "#humains" },
      { label: "Zai Recruiter", href: "#zai" },
      { label: "Pricing", href: "/pricing" },
      { label: "Integrations", href: "/integrations" }
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "News", href: "/news" },
      { label: "Blog", href: "/blog" },
      { label: "Press Kit", href: "/press" }
    ],
    Resources: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/api" },
      { label: "Help Center", href: "/help" },
      { label: "Community", href: "/community" },
      { label: "Status", href: "/status" }
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/tensorgo", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/tensorgo", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com/tensorgo", label: "YouTube" }
  ];

  return (
    <footer className="bg-gradient-secondary border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img src={goxLogo} alt="Go-X Logo" className="h-8 w-auto" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Go-X
              </span>
            </Link>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Revolutionizing virtual meetings and recruitment with AI-powered insights, 
              biometric analysis, and intelligent automation.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@tensorgo.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-card border border-border/50 rounded-lg flex items-center justify-center hover:border-primary/20 hover:shadow-glow transition-smooth group"
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-foreground mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-smooth text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 TensorGo. All rights reserved. Powered by advanced AI technology.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-foreground transition-smooth">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-foreground transition-smooth">
                Terms
              </Link>
              <Link to="/cookies" className="hover:text-foreground transition-smooth">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}