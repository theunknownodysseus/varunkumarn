import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Sparkles, BookOpen, Clock, Gamepad2, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  icon: React.ReactNode;
  github?: string;
  live?: string;
  featured?: boolean;
  gradient: string;
  preview: string;
}

const projects: Project[] = [
  {
    id: "youniq",
    title: "Youniq",
    description:
      "An AI-powered academic mentor platform providing personalized learning experiences and analytics. Features include AI tutoring, progress tracking, and adaptive learning paths.",
    techStack: ["React.js", "Node.js", "MongoDB", "AI Integration"],
    icon: <Sparkles className="h-6 w-6" />,
    github: "https://github.com/theunknownodysseus",
    featured: true,
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
    preview:"https://schemind.vercel.app/",
  },
  {
    id: "ub-comics",
    title: "UB Comics",
    description:
      "A comprehensive comic project manager built with Electron and web technologies. Helps comic artists and writers organize their projects, track progress, and manage assets.",
    techStack: ["Electron", "JavaScript", "HTML/CSS", "Node.js"],
    icon: <BookOpen className="h-5 w-5" />,
    github: "https://github.com/theunknownodysseus",
    gradient: "from-orange-500/20 via-amber-500/10 to-yellow-500/20",
    preview:"https://ub-comics.vercel.app/",
  },
  {
    id: "study-tracker",
    title: "Study Time Tracker",
    description:
      "A full-stack web application to track and analyze study sessions. Features include time logging, productivity analytics, goal setting, and progress visualization.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    icon: <Clock className="h-5 w-5" />,
    github: "https://github.com/theunknownodysseus",
    gradient: "from-cyan-500/20 via-teal-500/10 to-emerald-500/20",
    preview:"https://studytrack23csr234.vercel.app/",
  },
  {
    id: "rps-game",
    title: "RPS Game",
    description:
      "An interactive Rock-Paper-Scissors game with sleek animations and score tracking. Built with vanilla JavaScript demonstrating frontend fundamentals.",
    techStack: ["JavaScript", "HTML", "CSS"],
    icon: <Gamepad2 className="h-5 w-5" />,
    github: "https://github.com/theunknownodysseus",
    gradient: "from-rose-500/20 via-pink-500/10 to-red-500/20",
    preview:"https://rps-game1233.netlify.app/",
  },
  {
    id: "renaissance",
    title: "Renaissance 2k25",
    description:
      "Official website for the technical symposium at Kongu Engineering College. Features event listings, registration system, and responsive design for maximum accessibility.",
    techStack: ["React.js", "Tailwind CSS", "Responsive Design"],
    icon: <Calendar className="h-5 w-5" />,
    github: "https://github.com/theunknownodysseus",
    gradient: "from-blue-500/20 via-indigo-500/10 to-sky-500/20",
    preview: "https://renaissance-2k25.netlify.app/",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
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
    <article
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${project.featured ? "md:col-span-2" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card
        className={`h-full hover-elevate group overflow-visible bg-black/30 backdrop-blur-xl border-white/10 ${
          project.featured ? "border-primary/20" : ""
        }`}
        data-testid={`card-project-${project.id}`}
      >
        <div className="p-4 pb-0">
          <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg relative">
  <div className="w-full h-full origin-top-left scale-[0.75]">
    <iframe
      src={project.preview}
      className="w-[133.333%] h-[133.333%] border-0 rounded-lg" 
      loading="lazy"
    />
  </div>
</AspectRatio>

        </div>

        <CardHeader className="flex flex-row items-start gap-4 pt-4 pb-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2 flex-wrap">
                <CardTitle className="text-lg font-semibold">
                  {project.title}
                </CardTitle>
                {project.featured && (
                  <Badge variant="secondary" className="text-xs">
                    Featured
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 pt-0">
          <CardDescription className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </CardDescription>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs font-mono"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-2">
            {project.github && (
              <Button
                size="sm"
                variant="ghost"
                asChild
                className="h-8"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`link-project-github-${project.id}`}
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <Github className="h-4 w-4 mr-1.5" aria-hidden="true" />
                  Code
                </a>
              </Button>
            )}
            {project.live && (
              <Button
                size="sm"
                variant="ghost"
                asChild
                className="h-8"
              >
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`link-project-live-${project.id}`}
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLink className="h-4 w-4 mr-1.5" aria-hidden="true" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8"
      data-testid="section-projects"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            id="projects-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my skills in full-stack development,
            AI integration, and creative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <a
              href="https://github.com/theunknownodysseus"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-all-projects"
              aria-label="View all projects on GitHub"
            >
              <Github className="h-4 w-4 mr-2" aria-hidden="true" />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
