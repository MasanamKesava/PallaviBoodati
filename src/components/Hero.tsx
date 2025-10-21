import { useEffect, useMemo, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Particles } from "@tsparticles/react";
import type { Container, ISourceOptions } from "@tsparticles/engine";

const Hero = () => {
  const [init, setInit] = useState(false);

  // Initialize the Particles Engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Configure particle options
  const options = useMemo<ISourceOptions>(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: "#ff0000",
        },
        links: {
          enable: true,
          color: "#ff0000",
          distance: 150,
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.5,
        },
        opacity: {
          value: 0.6,
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 100,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          className="absolute inset-0"
        />
      )}

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold">Pallavi Boodati</h1>

        <p className="text-2xl md:text-3xl gradient-text font-semibold">
          Senior .NET Full Stack Developer
        </p>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          10+ years of experience delivering enterprise-grade web and cloud
          applications across banking, healthcare, retail, and government
          domains.
        </p>

        <div className="flex gap-4 justify-center pt-6">
          <Button
            variant="default"
            size="lg"
            className="gradient-bg hover:opacity-90 transition-opacity"
            asChild
          >
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10"
            asChild
          >
            <a href="#experience">View Experience</a>
          </Button>
        </div>

        <div className="flex gap-4 justify-center pt-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:pallavi@example.com"
            className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
