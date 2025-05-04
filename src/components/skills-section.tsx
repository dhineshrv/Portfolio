
import { Progress } from "@/components/ui/progress";

type Skill = {
  name: string;
  proficiency: number;
  category: "Frontend" | "Programming" | "Tools/Other";
  icon?: React.ReactNode;
};

const skills: Skill[] = [
  { name: "HTML", proficiency: 90, category: "Frontend" },
  { name: "CSS", proficiency: 85, category: "Frontend" },
  { name: "JavaScript", proficiency: 80, category: "Frontend" },
  { name: "React", proficiency: 75, category: "Frontend" },
  { name: "Java", proficiency: 70, category: "Programming" },
  { name: "C", proficiency: 65, category: "Programming" },
  { name: "MongoDB", proficiency: 60, category: "Tools/Other" },
  { name: "Git", proficiency: 75, category: "Tools/Other" },
  { name: "GitHub", proficiency: 75, category: "Tools/Other" },
];

export function SkillsSection() {
  const categories = Array.from(
    new Set(skills.map((skill) => skill.category))
  );

  return (
    <section id="skills" className="section-container bg-muted/30">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 gap-10">
          {categories.map((category) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === category
            );
            return (
              <div key={category}>
                <h3 className="text-2xl font-semibold mb-6">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <Progress value={skill.proficiency} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
