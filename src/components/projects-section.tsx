
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
};

const projects: Project[] = [
  {
    title: "Travel Planner",
    description: "A comprehensive travel planning application with itinerary management, personalized recommendations, expense tracking, and team collaboration features.",
    image: "/placeholder.svg",
    technologies: ["React", "JavaScript", "CSS", "MongoDB"],
    github: "#",
  },
  {
    title: "Feedback System",
    description: "Secure platform allowing students to submit feedback privately, with comprehensive monitoring and analysis tools for administrators.",
    image: "/placeholder.svg",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    github: "#",
  },
  {
    title: "Fitness Tracker",
    description: "Application designed to monitor and analyze users' physical activities and fitness levels with detailed progress tracking and personalized recommendations.",
    image: "/placeholder.svg",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "#",
  },
  {
    title: "Weather App",
    description: "Real-time weather information application that provides accurate updates based on user location with an intuitive and responsive interface.",
    image: "/placeholder.svg",
    technologies: ["React", "JavaScript", "CSS", "API Integration"],
    github: "#",
    liveDemo: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-container">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-video w-full bg-muted flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                <CardDescription className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-pill">
                      {tech}
                    </span>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="flex justify-start gap-4">
                {project.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                )}
                {project.liveDemo && (
                  <Button size="sm" asChild>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
