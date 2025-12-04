import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const contactLinks = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "varunify.777@gmail.com",
    href: "https://mail.google.com/",
  },
  {
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
    value: "theunknownodysseus",
    href: "https://github.com/theunknownodysseus",
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    value: "varunkumarn636",
    href: "https://www.linkedin.com/in/varunkumarn636/",
  },
];

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data: ContactFormValues) => {
    const to = "varunify.777@gmail.com";
    const subject = encodeURIComponent(`New message from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${to}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");

    toast({
      title: "Opening Gmail",
      description: "A new Gmail tab should open with your message pre-filled.",
    });

    form.reset();
  };

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
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="contact"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8"
      data-testid="section-contact"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Contact Form */}
          <Card
            data-testid="card-contact-form"
            className="bg-black/30 backdrop-blur-xl border-white/10"
          >
            <CardHeader>
              <CardTitle className="text-xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <Input
                  placeholder="Your name"
                  {...form.register("name", { required: true })}
                  className="bg-black/30 backdrop-blur-xl border-white/10"
                  data-testid="input-contact-name"
                />
                <Input
                  placeholder="your.email@example.com"
                  type="email"
                  {...form.register("email", { required: true })}
                  className="bg-black/30 backdrop-blur-xl border-white/10"
                  data-testid="input-contact-email"
                />
                <Textarea
                  placeholder="Your message..."
                  {...form.register("message", { required: true })}
                  className="min-h-[120px] resize-none bg-black/30 backdrop-blur-xl border-white/10"
                  data-testid="input-contact-message"
                />
                <Button
                  type="submit"
                  className="w-full bg-[#9f0de3ff]/30 backdrop-blur-xl border-white/10 flex items-center justify-center gap-2"
                  data-testid="button-submit-contact"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card
              data-testid="card-contact-info"
              className="bg-black/30 backdrop-blur-xl border-white/10"
            >
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover-elevate transition-colors"
                    aria-label={`${link.label}: ${link.value}`}
                    data-testid={`link-contact-${link.label.toLowerCase()}`}
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {link.label}
                      </p>
                      <p className="font-medium">{link.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
