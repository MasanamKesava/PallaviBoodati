import { Card } from "@/components/ui/card";
import { Code, Cloud, Database, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Expertise",
      description: ".NET Core, ASP.NET Web API, Angular, React",
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      description: "Azure & AWS certified deployments",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "SQL Server, MongoDB, PostgreSQL, Oracle",
    },
    {
      icon: Zap,
      title: "Modern Architecture",
      description: "Microservices, Docker, Kubernetes, CI/CD",
    },
  ];

  return (
    <section id="about" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="space-y-8">
          <Card className="p-8 bg-background border-border">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Professional Summary</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Senior .NET Full Stack Developer with 10+ years of experience delivering enterprise-grade 
                web and cloud applications across banking, healthcare, retail, and government domains.
              </p>
              <p>
                Proven expertise in building secure, scalable applications using .NET Core, ASP.NET Web API, 
                Angular, React, SQL/NoSQL, and cloud platforms (Azure & AWS).
              </p>
              <p>
                Hands-on experience in microservices, containerization (Docker, Kubernetes), CI/CD pipelines 
                (Azure DevOps, Jenkins), and Agile/Scrum methodologies.
              </p>
              <p>
                Strong background in API development, system integration, and cloud-native deployments with 
                OAuth2 authentication, Azure AD B2C, and AWS Cognito.
              </p>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-background border-border card-hover group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
