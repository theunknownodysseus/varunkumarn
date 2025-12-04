import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border"
      data-testid="footer"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/theunknownodysseus"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors hover-elevate rounded-md"
              data-testid="link-footer-github"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/varunkumarn636/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors hover-elevate rounded-md"
              data-testid="link-footer-linkedin"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:varunify.777@gmail.com"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors hover-elevate rounded-md"
              data-testid="link-footer-email"
              aria-label="Send Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Built with <Heart className="h-3.5 w-3.5 text-destructive" /> by Varun
            <span className="mx-1.5">|</span>
            {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
