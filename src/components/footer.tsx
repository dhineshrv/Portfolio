
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/50 py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Dhinesh R V</h3>
          <p className="text-sm text-muted-foreground">
            &copy; {year} All Rights Reserved
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="mailto:dhineshrv01@gmail.com" 
            className="p-2 rounded-full bg-background hover:bg-muted transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a 
            href="https://linkedin.com/in/dhinesh-r-v" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-background hover:bg-muted transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href="#" 
            className="p-2 rounded-full bg-background hover:bg-muted transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
