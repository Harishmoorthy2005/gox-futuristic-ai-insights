import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import goxLogo from "@/assets/gox-logo.png";

interface NavigationProps {
  onSectionClick?: (sectionId: string) => void;
}

export function Navigation({ onSectionClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "About", id: "about" },
    { label: "HumAIn's", id: "humains" },
    { label: "Zai Recruiter", id: "zai" },
    { label: "Features", id: "features" },
    { label: "Comparison", id: "comparison" },
  ];

  const handleNavClick = (id: string) => {
    if (onSectionClick) {
      onSectionClick(id);
    }
    setIsMenuOpen(false);
  };

  const handleAuthClick = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-spring">
            <img src={goxLogo} alt="Go-X Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Go-X
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-foreground/80 hover:text-foreground transition-smooth font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => handleAuthClick("/signin")}
              className="font-medium"
            >
              Sign In
            </Button>
            <Button
              variant="hero"
              size="sm"
              onClick={() => handleAuthClick("/signup")}
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left text-foreground/80 hover:text-foreground transition-smooth font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  onClick={() => handleAuthClick("/signin")}
                  className="font-medium"
                >
                  Sign In
                </Button>
                <Button
                  variant="hero"
                  size="sm"
                  onClick={() => handleAuthClick("/signup")}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}