import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Heart Disease Prediction System",
      description: "Led a team of five to develop an AI-powered heart disease prediction system, leveraging machine learning for risk assessment. Secured first place in the Innothan Innovation Challenge through strategic planning and technical innovation.",
      image: project1,
      technologies: ["AI", "Machine Learning", "Python", "Data Science", "Healthcare"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Student Management System (CRUD)",
      description: "Implemented a user-friendly interface to add, edit, delete, and search student details using Python and SQL. Ensured data integrity and optimized database queries for better performance.",
      image: project2,
      technologies: ["Python", "SQL", "Database", "CRUD Operations"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 3,
      title: "Smart Price Comparison Tool",
      description: "Developed a tool that analyzes market data and integrates real-time pricing to help customers find the best prices. Enhanced user experience with a user-friendly interface and valuable insights.",
      image: project3,
      technologies: ["Python", "SQL", "Data Analytics", "Real-time API"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Event Management App",
      description: "A user-friendly event management app that allows users to create, manage, and track events. Features include event scheduling, attendee management, real-time notifications, and seamless collaboration.",
      image: project1,
      technologies: ["Python", "SQL", "Event Management", "Notifications"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "E-Commerce Web Development",
      description: "Developed a responsive e-commerce website using HTML, CSS, and JavaScript, ensuring seamless user experience and efficient functionality.",
      image: project3,
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              My Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my development projects spanning AI/ML, web development, and data analytics.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.slice(0, 3).map((project, index) => (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-8 items-center animate-fade-in ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                {/* Project Image */}
                <div className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Project Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-background text-foreground border border-border/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button variant="default" size="lg" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button variant="minimal" size="lg" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects */}
          <div className="text-center mt-16">
            <Button variant="accent" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;