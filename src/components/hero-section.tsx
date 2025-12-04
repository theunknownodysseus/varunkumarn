import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const titles = [
  "Full-Stack Developer",
  "AI Enthusiast",
  "Problem Solver",
  "Comic Book Artist",
];

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-16"
      data-testid="section-hero"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div
        className={`max-w-4xl mx-auto text-center z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 text-xs font-mono font-medium bg-primary/10 text-white rounded-full border border-primary/20">
            Available for opportunities
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="block text-foreground">Hi, I'm</span>
          <span className="block bg-gradient-to-r from-primary via-primary to-chart-2 bg-clip-text text-transparent">
            Varun Kumar N
          </span>
        </h1>

        <div className="h-8 sm:h-10 mb-8 overflow-hidden">
          <p
            key={titleIndex}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium animate-fade-in"
          >
            {titles[titleIndex]}
          </p>
        </div>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Computer Science undergraduate specializing in MERN full-stack development
          and AI integration. Building scalable solutions that solve real-world problems
          while exploring the intersection of technology and creativity.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="min-w-[160px] bg-[#e100ffff]/10 backdrop-blur-xl border-white/10"
            data-testid="button-view-projects"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="min-w-[160px] bg-[#e100ffff]/10 backdrop-blur-xl border-white/10"
            data-testid="button-get-in-touch"
          >
            Get in Touch
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/theunknownodysseus"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors hover-elevate rounded-md"
            data-testid="link-github-hero"
            aria-label="GitHub Profile"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/varunkumarn636/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors hover-elevate rounded-md"
            data-testid="link-linkedin-hero"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:varunify.777@gmail.com"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors hover-elevate rounded-md"
            data-testid="link-email-hero"
            aria-label="Send Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
      
      <button
        onClick={scrollToProjects}
        className="absolute bottom-1 left-1/2 -translate-x-1/2 p-2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        data-testid="button-scroll-down"
        aria-label="Scroll to projects"
      >
        <ArrowDown className="h-6 w-6" />
      </button>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}
