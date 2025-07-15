import { Button } from "@/components/ui/button";
import { Award, Coffee, Users, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Coffee, value: "100+", label: "Hours of Coding" },
    { icon: Users, value: "5+", label: "Team Projects" },
    { icon: Award, value: "5+", label: "Projects Completed" },
    { icon: Zap, value: "2+", label: "Years Learning" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a love for creating digital experiences 
              that solve real-world problems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="animate-slide-in">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Hi there! I'm Poojasri M.S.
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate Computer Science and Engineering student from Chennai, 
                  currently pursuing my BE degree at KCG College of Technology. With a 
                  strong foundation in programming and a keen interest in full-stack 
                  development, I'm driven to create innovative solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  My journey in technology has led me to gain hands-on experience in 
                  data analytics, machine learning, and web development through various 
                  internships and projects. I'm particularly passionate about AI/ML 
                  applications and building user-friendly software solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  When I'm not coding, you can find me participating in competitive 
                  programming challenges on LeetCode and HackerRank, attending tech 
                  workshops, or collaborating on team projects that push the boundaries 
                  of innovation.
                </p>
              </div>

              <div className="animate-slide-in" style={{ animationDelay: "0.2s" }}>
                <Button variant="accent" size="lg">
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-card p-6 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 text-center animate-scale-in border border-border/50"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="bg-gradient-accent w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-1">
                    {stat.value}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;