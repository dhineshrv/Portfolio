
import { User, BookOpen, MapPin, Languages } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="section-container bg-muted/30">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Personal Profile</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate frontend developer with a strong focus on creating responsive and user-friendly web applications. 
              I enjoy solving complex problems and turning ideas into clean, efficient code.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-accent mt-1" />
                <div>
                  <h4 className="font-medium">Education</h4>
                  <p className="text-muted-foreground">
                    B.E in Electronics & Instrumentation Engineering (Pursuing)
                  </p>
                  <p className="text-sm text-muted-foreground">HSC: 68.1%, SSLC: 83%</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Languages className="h-5 w-5 text-accent mt-1" />
                <div>
                  <h4 className="font-medium">Languages</h4>
                  <p className="text-muted-foreground">English, Tamil</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Annur, Coimbatore</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Areas of Interest</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-lg bg-background shadow-sm border">
                <h4 className="font-medium mb-2">Software Development</h4>
                <p className="text-sm text-muted-foreground">
                  Building efficient and scalable software solutions from conception to deployment
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-background shadow-sm border">
                <h4 className="font-medium mb-2">Web Development</h4>
                <p className="text-sm text-muted-foreground">
                  Creating responsive and user-friendly web applications with modern frameworks
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-background shadow-sm border">
                <h4 className="font-medium mb-2">Cloud Computing</h4>
                <p className="text-sm text-muted-foreground">
                  Leveraging cloud technologies for scalable and reliable applications
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-background shadow-sm border">
                <h4 className="font-medium mb-2">UI/UX Design</h4>
                <p className="text-sm text-muted-foreground">
                  Designing intuitive interfaces that enhance user experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
