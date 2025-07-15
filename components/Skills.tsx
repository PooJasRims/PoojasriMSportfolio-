import { Progress } from "@/components/ui/progress";
import { Code, Palette, Database, Smartphone } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "text-secondary",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "C Programming", level: 75 },
      ],
    },
    {
      icon: Database,
      title: "Data & Analytics",
      color: "text-accent",
      skills: [
        { name: "SQL", level: 85 },
        { name: "Data Analytics", level: 88 },
        { name: "Machine Learning", level: 80 },
        { name: "Tableau/BI", level: 75 },
      ],
    },
    {
      icon: Palette,
      title: "Web Development",
      color: "text-primary-glow",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "Full Stack Development", level: 82 },
        { name: "UI/UX Design", level: 75 },
        { name: "Responsive Design", level: 85 },
      ],
    },
    {
      icon: Smartphone,
      title: "Tools & Technologies",
      color: "text-secondary",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Excel", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Pandas & NumPy", level: 82 },
      ],
    },
  ];

  const technologies = [
    "Python", "Java", "JavaScript", "C Programming", "SQL", "MongoDB",
    "Git & GitHub", "HTML/CSS", "Data Analytics", "Machine Learning", "Excel",
    "Pandas", "NumPy", "Scikit-Learn", "Tableau", "UI/UX Design", "Full Stack Development"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and areas of expertise.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="bg-card p-6 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 border border-border/50 animate-scale-in"
                style={{ animationDelay: `${0.1 * categoryIndex}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-card w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                        style={{ 
                          animationDelay: `${0.1 * (categoryIndex * 4 + skillIndex)}s` 
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-8">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  className="bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors animate-fade-in"
                  style={{ animationDelay: `${0.05 * index}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;