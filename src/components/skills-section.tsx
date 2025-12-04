import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Globe,
  Database,
  Lightbulb,
  Award,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: <Code2 className="h-5 w-5" />,
    skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    id: "web",
    title: "Web Technologies",
    icon: <Globe className="h-5 w-5" />,
    skills: ["React.js", "Node.js", "Express.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    id: "databases",
    title: "Databases & Tools",
    icon: <Database className="h-5 w-5" />,
    skills: ["MongoDB", "MySQL", "Git", "VS Code", "Figma", "REST APIs"],
  },
  {
    id: "interests",
    title: "Areas of Interest",
    icon: <Lightbulb className="h-5 w-5" />,
    skills: ["Full-Stack Development", "UI/UX Design", "Generative AI", "Graphic Design"],
  },
];

const certifications = [
  "Oracle APEX Cloud Developer",
  "Oracle Cloud Infrastructure AI Foundations",
  "Fortinet Cybersecurity Fundamentals",
  "AWS ML Basics (Springboard)",
  "Cloud Computing (Springboard)",
  "Programming in Modern C++ (NPTEL)",
  "Introduction to Industry 4.0 and Industrial IoT (NPTEL)",
];

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="h-full hover-elevate bg-black/30 backdrop-blur-xl border-white/10" data-testid={`card-skill-${category.id}`}>
        <CardHeader className="flex flex-row items-center gap-3 pb-4">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            {category.icon}
          </div>
          <CardTitle className="text-base font-semibold">{category.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-xs font-medium bg-primary/10 backdrop-blur-xl border-white/10"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const certRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = certRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="skills"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/30"
      data-testid="section-skills"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="skills-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build impactful solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>

        <div
          ref={certRef}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Card data-testid="card-certifications" className="bg-black/30 backdrop-blur-xl border-white/10">
            <CardHeader className="flex flex-row items-center gap-3 pb-4 ">
              <div className="p-2 rounded-lg bg-chart-4/10 text-chart-4">
                <Award className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg font-semibold">
                Certifications & Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <Badge
                    key={cert}
                    variant="outline"
                    className="text-xs font-medium"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
