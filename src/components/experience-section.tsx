import { useEffect, useRef, useState } from "react";
import { MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    id: "schemind",
    role: "Full Stack Developer",
    company: "Schemind",
    location: "Tamil Nadu, India",
    period: "May 2025 - Present",
    current: true,
    highlights: [
      "Full-stack developer in a student-led team building AI-driven web solutions",
      "Developing Youniq, an AI academic mentor with personalized learning and analytics",
      "Collaborating on UI design, backend APIs, and AI integration",
    ],
  },
  {
    id: "grephyt",
    role: "Comic Book Artist",
    company: "Grephyt - Onionskin Productions",
    location: "Remote / Andhra Pradesh, India",
    period: "Apr 2025 - Aug 2025",
    highlights: [
      "Illustrated and published a five-chapter one-shot comic",
      "Collaborated remotely with editors and writers on storyboards and visual narrative",
      "Managed project timelines while ensuring high-quality output under deadlines",
    ],
  },
  {
    id: "systimanx",
    role: "Generative AI Intern",
    company: "SystimaNX & Generative AI Consortium",
    location: "Remote",
    period: "Nov 2024 - Apr 2025",
    highlights: [
      "Assisted in data collection and preprocessing for machine learning projects",
      "Participated in brainstorming sessions to generate innovative AI solutions",
    ],
  },
  {
    id: "oreops",
    role: "Product Intern",
    company: "OreOps Framework (P) Ltd",
    location: "Erode, India",
    period: "Jul 2024",
    highlights: [
      "Assisted in market research for product development initiatives",
      "Supported the creation of product documentation and user manuals",
    ],
  },
];

function ExperienceCard({
  experience,
  index,
  isLeft,
}: {
  experience: Experience;
  index: number;
  isLeft: boolean;
}) {
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
      className={`relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${isLeft ? "md:pr-[calc(50%+2rem)] md:text-right" : "md:pl-[calc(50%+2rem)]"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        className={`hidden md:block absolute top-6 w-3 h-3 rounded-full border-2 ${
          experience.current 
            ? "bg-primary border-primary" 
            : "bg-background border-muted-foreground"
        } ${isLeft ? "right-[calc(50%-6px)]" : "left-[calc(50%-6px)]"}`}
        aria-hidden="true"
      />

      <Card
        className="hover-elevate bg-black/30 backdrop-blur-xl border-white/10"
        data-testid={`card-experience-${experience.id}`}
      >
        <CardContent className="p-6">
          <div className={`flex flex-col gap-2 mb-4 ${isLeft ? "md:items-end" : ""}`}>
            <div className={`flex items-center gap-2 flex-wrap ${isLeft ? "md:flex-row-reverse" : ""}`}>
              <h3 className="text-lg font-semibold">{experience.role}</h3>
              {experience.current && (
                <Badge variant="default" className="text-xs">
                  Current
                </Badge>
              )}
            </div>
            <p className="text-primary font-medium">{experience.company}</p>
          </div>

          <div className={`flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4 ${isLeft ? "md:justify-end" : ""}`}>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{experience.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{experience.period}</span>
            </div>
          </div>

          <ul className={`space-y-2 ${isLeft ? "md:text-left" : ""}`}>
            {experience.highlights.map((highlight, idx) => (
              <li
                key={idx}
                className="text-sm text-muted-foreground flex items-start gap-2"
              >
                <span 
                  className="inline-block w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" 
                  aria-hidden="true"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8"
      data-testid="section-experience"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            id="experience-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey in tech and creative industries.
          </p>
        </div>

        <div className="relative">
          <div 
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-6 md:space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
