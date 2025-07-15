import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Data Analytics Intern",
      company: "Novi-Tech",
      type: "Remote",
      duration: "Dec 2024 - Mar 2025",
      description: [
        "Developed data pipelines for cleaning, transforming, and visualizing data",
        "Assisted in process optimization by identifying trends and inefficiencies",
        "Analyzed large datasets using Python, SQL, and Tableau/BI to derive actionable insights"
      ],
      technologies: ["Python", "SQL", "Tableau", "Data Analytics"],
      current: true,
    },
    {
      id: 2,
      title: "Python with Data Science and ML Intern",
      company: "Learnflu",
      type: "Remote",
      duration: "Dec 2024 - Mar 2025",
      description: [
        "Gained hands-on experience in Python programming, data analysis, and machine learning techniques",
        "Worked with Pandas, NumPy, and Scikit-Learn to preprocess and analyze datasets",
        "Built and evaluated ML models for predictive analytics and data-driven decision-making"
      ],
      technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Machine Learning"],
      current: true,
    },
  ];

  const certifications = [
    {
      title: "Software Engineering Virtual Experience",
      issuer: "JP Morgan Chase & Co",
      icon: Building,
    },
    {
      title: "MongoDB",
      issuer: "Infosys Springboard",
      icon: Award,
    },
    {
      title: "Fundamentals Of Python",
      issuer: "Infosys Springboard",
      icon: Award,
    },
    {
      title: "UI & UX Design",
      issuer: "Great Learning",
      icon: Award,
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Experience & Certifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and continuous learning in technology and development.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Experience Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
                <Building className="h-6 w-6 mr-3 text-primary" />
                Professional Experience
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.id}
                    className="bg-card p-6 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 border border-border/50 animate-fade-in"
                    style={{ animationDelay: `${0.2 * index}s` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                          {exp.title}
                        </h4>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <Building className="h-4 w-4 mr-2" />
                          <span className="font-medium">{exp.company}</span>
                          <span className="mx-2">•</span>
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{exp.type}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground mb-4">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{exp.duration}</span>
                          {exp.current && (
                            <Badge variant="secondary" className="ml-3">
                              Current
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground leading-relaxed flex items-start">
                          <span className="text-primary mr-2 mt-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-background text-foreground border border-border/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
                <Award className="h-6 w-6 mr-3 text-primary" />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={cert.title}
                    className="bg-card p-4 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 border border-border/50 animate-slide-in"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-accent w-10 h-10 rounded-lg flex items-center justify-center">
                        <cert.icon className="h-5 w-5 text-accent-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Education
                </h3>
                <div className="bg-card p-4 rounded-lg shadow-card border border-border/50">
                  <h4 className="font-semibold text-foreground mb-2">
                    BE Computer Science and Engineering
                  </h4>
                  <p className="text-muted-foreground mb-1">
                    KCG College of Technology - Chennai
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Aug 2022 - Jun 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;