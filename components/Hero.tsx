import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Introduction */}
          <div className="animate-fade-in">
            <p className="text-lg text-muted-foreground mb-4 font-medium">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 tracking-tight">
              Poojasri M.S.
            </h1>
            <h2 className="text-2xl md:text-3xl text-foreground mb-8 font-light">
              Aspiring Software Developer | Passionate about Full Stack Development
            </h2>
          </div>

          {/* Description */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              A highly motivated Computer Science and Engineering student with a passion for 
              technology, problem-solving, and innovation. Actively engaging in coding, 
              software development, and continuous learning to contribute impactful solutions 
              in dynamic environments.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center mb-12" style={{ animationDelay: "0.4s" }}>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button 
              variant="minimal" 
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in flex justify-center space-x-6 mb-12" style={{ animationDelay: "0.6s" }}>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-colors group"
              aria-label="Scroll to about section"
            >
              <div className="flex flex-col items-center space-y-2">
                <span className="text-sm font-medium">Scroll Down</span>
                <ArrowDown className="h-5 w-5 animate-bounce group-hover:scale-110 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;