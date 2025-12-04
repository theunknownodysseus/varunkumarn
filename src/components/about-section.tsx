import { useEffect, useRef, useState } from "react";
import { GraduationCap, Trophy, Users, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
const achievements = [
  {
    icon: <Trophy className="h-4 w-4" />,
    title: "SIH Internal Round Winner",
    description: "Kongu Engineering College",
  },
  {
    icon: <Trophy className="h-4 w-4" />,
    title: "IEEE Hackathon Special Mention",
    description: "VIT Chennai",
  },
  {
    icon: <Trophy className="h-4 w-4" />,
    title: "Paper Presentation Winner",
    description: "AI-powered BCI concept",
  },
  {
    icon: <Palette className="h-4 w-4" />,
    title: "Remarkable Achievement Award",
    description: "Five-chapter one-shot manga",
  },
];

const activities = [
  {
    icon: <Users className="h-4 w-4" />,
    role: "Joint Secretary",
    org: "CSE Coding Club",
    description: "Organized coding events, workshops, and hackathons",
  },
  {
    icon: <Users className="h-4 w-4" />,
    role: "Office Bearer",
    org: "KEC Freelancers Club",
    description: "Coordinated freelancing projects and networking",
  },
  {
    icon: <Palette className="h-4 w-4" />,
    role: "Multimedia Member",
    org: "Ravivarma Creative Club",
    description: "Designed visuals and media for events",
  },
];

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

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
    <>
    <section
      ref={ref}
      id="about"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/30"
      data-testid="section-about"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A blend of technical expertise and creative passion.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="space-y-6">
            <Card className="overflow-hidden bg-black/30 backdrop-blur-xl border-white/10">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 rounded-full shrink-0">
                    <img
    src="/favicon.png"
    alt="Profile"
    className="w-full h-full object-contain"
  />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Varun Kumar N</h3>
                    <p className="text-muted-foreground">
                      Full-Stack Developer & Creative
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a Computer Science undergraduate at Kongu Engineering College 
                    with a passion for building things that matter. My journey in tech 
                    started with curiosity and has evolved into a deep love for 
                    full-stack development and AI integration.
                  </p>
                  <p>
                    What makes me different? I bring creativity to code. As a 
                    published comic book artist, I understand the power of visual 
                    storytelling and user experience. This unique blend helps me 
                    create solutions that are not just functional, but delightful.
                  </p>
                  <p>
                    When I'm not coding, you'll find me sketching manga panels,or exploring 
                    the latest in generative AI. I believe in continuous learning 
                    and pushing boundaries.
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span>B.E. Computer Science (2027)</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline" className="text-xs">
                    English (C1)
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    French (A2)
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Tamil (Native)
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-chart-4" aria-hidden="true" />
                Achievements
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className="hover-elevate bg-black/30 backdrop-blur-xl border-white/10"
                    data-testid={`card-achievement-${index}`}

                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="p-1.5 rounded-md bg-chart-4/10 text-chart-4 shrink-0">
                          {achievement.icon}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{achievement.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                Activities & Leadership
              </h3>
              <div className="space-y-3">
                {activities.map((activity, index) => (
                  <Card
                    key={index}
                    className="hover-elevate bg-black/30 backdrop-blur-xl border-white/10"
                    data-testid={`card-activity-${index}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="p-1.5 rounded-md bg-primary/10 text-primary shrink-0">
                          {activity.icon}
                        </div>
                        <div>
                          <p className="text-sm font-medium">
                            {activity.role}{" "}
                            <span className="text-primary">@ {activity.org}</span>
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {activity.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            {/* LeetCode (left) & GitHub (right) */}
</div>
        </div>
        
      </div>
      
    </section>
    

    <div className="flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* LeetCode Left */}
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Trophy className="h-5 w-5 text-yellow-400" aria-hidden="true" />
        LeetCode Stats
      </h3>

      <Card className="hover-elevate bg-black/30 backdrop-blur-xl border-white/10 max-w-[350px] w-full">
        <CardContent className="p-4 flex justify-center">
          <img
            src="https://leetcard.jacoblin.cool/varunkumarn777?theme=dark&font=Karla&border=0"
            alt="LeetCode Stats"
            className="rounded-md w-full"
          />
        </CardContent>
      </Card>
    </div>

    {/* GitHub Right */}
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Github className="h-5 w-5 text-primary" aria-hidden="true" />
        GitHub Stats
      </h3>

      <Card className="hover-elevate bg-black/30 backdrop-blur-xl border-white/10 mb-3 max-w-[350px] w-full">
        <CardContent className="p-4 flex justify-center">
          <img
            src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=theunknownodysseus&theme=transparent"
            alt="GitHub Stats"
            className="rounded-md w-full"
          />
        </CardContent>
      </Card>

      <Card className="hover-elevate bg-black/30 backdrop-blur-xl border-white/10 max-w-[350px] w-full">
        <CardContent className="p-4 flex justify-center">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=theunknownodysseus&theme=transparent&hide_border=true"
            alt="GitHub Streak"
            className="rounded-md w-full"
          />
        </CardContent>
      </Card>
    </div>

  </div>
</div>


    </>
  );
}
