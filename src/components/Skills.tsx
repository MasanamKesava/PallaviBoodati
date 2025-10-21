import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Backend Technologies",
      skills: [".NET Core", "ASP.NET Web API", "C#", "Entity Framework", "ADO.NET", "LINQ"],
    },
    {
      category: "Frontend Technologies",
      skills: ["Angular", "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "NgRx", "Redux"],
    },
    {
      category: "Databases",
      skills: ["SQL Server", "MongoDB", "PostgreSQL", "Oracle DB", "MySQL", "Redis"],
    },
    {
      category: "Cloud Platforms",
      skills: ["Azure", "AWS", "Azure DevOps", "Azure AD B2C", "AWS Cognito", "AWS Lambda"],
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "Kubernetes", "Jenkins", "Git", "CI/CD", "Microservices"],
    },
    {
      category: "Messaging & Integration",
      skills: ["Kafka", "RabbitMQ", "REST API", "SOAP", "GraphQL", "OAuth2"],
    },
    {
      category: "Testing & Quality",
      skills: ["xUnit", "NUnit", "Jasmine", "Protractor", "Jest", "Unit Testing"],
    },
    {
      category: "Methodologies",
      skills: ["Agile", "Scrum", "SDLC", "TDD", "Microservices Architecture", "Design Patterns"],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Technical <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-background border-border hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="bg-secondary/50 hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
