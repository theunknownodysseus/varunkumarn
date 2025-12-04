import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
//import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((href: string) => {
    setIsMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
      
      const focusableElement = element.querySelector("h2, h1") as HTMLElement;
      if (focusableElement) {
        focusableElement.setAttribute("tabindex", "-1");
        focusableElement.focus({ preventScroll: true });
        
        const handleBlur = () => {
          focusableElement.removeAttribute("tabindex");
          focusableElement.removeEventListener("blur", handleBlur);
        };
        focusableElement.addEventListener("blur", handleBlur);
      }
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", window.location.pathname);
    setActiveSection("");
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
      data-testid="header-navigation"
      role="banner"
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={scrollToTop}
            className="font-mono text-lg font-semibold tracking-tight hover-elevate px-2 py-1 rounded-md"
            data-testid="link-logo"
            aria-label="Go to top of page"
          >
            
            <span className="text-primary" aria-hidden="true">{"<"}</span>
            VK
            <span className="text-primary" aria-hidden="true">{" />"}</span>
          </button>

          <div className="hidden md:flex items-center gap-1" role="menubar">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-2 text-sm font-medium transition-colors hover-elevate rounded-md ${
                  activeSection === link.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
                role="menuitem"
                aria-current={activeSection === link.href.slice(1) ? "page" : undefined}
              >
                {link.label}
              </button>
            ))}
            <a
    href="https://varun-exe.netlify.app/"
    target="_blank"
    className="px-4 py-2 text-sm transition-colors hover-elevate rounded-md text-foreground hover:text-primary"
    role="menuitem"
  >
    Comic Portfolio
  </a>
            {/* <div className="ml-2">
              <ThemeToggle testId="button-theme-toggle-desktop" />
            </div> */}
          </div>

          <div className="flex md:hidden items-center gap-2">
            {/* <ThemeToggle testId="button-theme-toggle-mobile" /> */}
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-lg"
            role="menu"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-4 py-3 text-sm font-medium rounded-md transition-colors text-left ${
                    activeSection === link.href.slice(1)
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                  data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                  role="menuitem"
                  aria-current={activeSection === link.href.slice(1) ? "page" : undefined}
                >
                  {link.label}
                </button>
              ))}
              <a
        href="https://varun-exe.netlify.app/"
        target="_blank"
        className="px-4 py-3 text-sm font-medium rounded-md transition-colors text-left text-foreground hover:text-primary hover:bg-accent"
        role="menuitem"
      >
        Art
      </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
