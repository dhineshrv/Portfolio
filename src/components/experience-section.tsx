
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users } from "lucide-react";

const certifications = [
  {
    title: "Full Stack Development",
    issuer: "",
    year: "2024",
    credential: ""
  },
  {
    title: "Git and GitHub",
    issuer: "",
    year: "2023",
    credential: ""
  }
];

const leadershipRoles = [
  {
    role: "Vice Chairman",
    organization: "ISOI",
    period: "2024–2025",
    description: "Leading team initiatives and coordinating events"
  },
  {
    role: "Project Coordinator",
    organization: "",
    period: "2024–2025",
    description: "Managing project timelines and deliverables"
  },
  {
    role: "EIE Association Member",
    organization: "",
    period: "2023–2024",
    description: "Contributing to association activities and events"
  },
  {
    role: "Inplant Coordinator",
    organization: "",
    period: "2023–2024",
    description: "Facilitating industry interactions and internships"
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="section-container">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-6 w-6 text-accent" />
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      {cert.issuer && <p>{cert.issuer}</p>}
                      <p>Issued {cert.year}</p>
                      {cert.credential && (
                        <a
                          href={cert.credential}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline mt-1 inline-block"
                        >
                          View Credential
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Leadership Roles */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-accent" />
              <h3 className="text-2xl font-semibold">Leadership Roles</h3>
            </div>
            
            <div className="space-y-6">
              {leadershipRoles.map((role, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{role.role}{role.organization ? `, ${role.organization}` : ""}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      <p>{role.period}</p>
                      <p className="mt-1">{role.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
