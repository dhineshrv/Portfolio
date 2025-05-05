
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-12 md:pt-24 md:pb-20 px-6">
      <div className="container flex flex-col items-start gap-6 max-w-4xl animate-fade-in">
        <div className="space-y-2">
          <h2 className="text-xl md:text-2xl font-medium text-accent">Hello, I'm</h2>
          <h1 className="text-4xl md:text-6xl font-bold font-heading">
            Dhinesh R V
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-muted-foreground">
            Frontend Developer <span className="text-accent">(React)</span>
          </h2>
        </div>
        
        <p className="text-lg md:text-xl max-w-2xl text-muted-foreground leading-relaxed">
          Aspiring frontend developer passionate about building responsive web applications 
          and improving user experiences.
        </p>
        
        <div className="flex flex-wrap gap-4 mt-4">
          <Button size="lg" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/dist/resume/DhineshRV_software.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Download CV
            </a>
          </Button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-muted-foreground hover:text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
