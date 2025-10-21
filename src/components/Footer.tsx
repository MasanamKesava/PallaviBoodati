import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Mail, label: "Email", href: "mailto:pallavi.boodati@example.com" },
  ];

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/40 to-muted/20 opacity-0 dark:opacity-60 transition-opacity duration-500 pointer-events-none" />

      {/* 3 Tiny Animated Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[8, 12, 16].map((size, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-bubble"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: `rgba(255, 50, 50, ${0.15 + i * 0.1})`,
              animationDuration: `${5 + i * 2}s`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Custom grid styling */}
      <style>{`
        footer::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          transition: all 0.5s ease-in-out;
        }

        /* Light Mode - black grids */
        :not(.dark) footer::before {
          background-image:
            linear-gradient(#000 1px, transparent 1px),
            linear-gradient(90deg, #000 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.12;
        }

        /* Dark Mode - vibrant red grid */
        .dark footer::before {
          background-image:
            linear-gradient(rgba(255, 50, 50, 0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 80, 80, 0.25) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.35;
          mix-blend-mode: screen;
        }

        /* Bubble animation */
        @keyframes bubble {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-20px) scale(1.1); opacity: 0.8; }
          100% { transform: translateY(-40px) scale(1); opacity: 0.6; }
        }

        .animate-bubble {
          animation-name: bubble;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Pallavi Boodati</h3>
            <p className="text-sm text-muted-foreground">
              Senior .NET Full Stack Developer with 10+ years of experience building enterprise solutions.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Open to Work</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Contact Info</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:pallavi.boodati@example.com" className="hover:text-primary transition-colors">
                  pallavi.boodati@example.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li>Johnston, RI, USA</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Connect With Me</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Pallavi Boodati. All rights reserved.</p>
            <p>Built with React, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
