import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Citizen's Bank",
      location: "Johnston, RI",
      position: "Senior .Net Full Stack Developer",
      period: "Jan 2024 – Present",
      achievements: [
        "Designed and developed a Digital Loan Origination Platform using .NET 8, ASP.NET Core Web API, Angular 18, SQL Server, and Azure Cloud, improving loan processing speed by 40%",
        "Implemented microservices architecture with RESTful APIs, Kafka event streaming, and NgRx state management to deliver scalable, real-time processing",
        "Automated CI/CD pipelines using Azure DevOps with integrated testing (xUnit, Jasmine, Protractor), ensuring high-quality and reliable deployments",
      ],
    },
    {
      company: "Blue Cross Blue Shield",
      location: "Chicago, IL",
      position: "Senior .Net Full Stack Developer",
      period: "Sept 2022 – Dec 2023",
      achievements: [
        "Developed Real-Time Claims Processing and Enrollment platform using .NET 7, Angular 16, SQL Server, RabbitMQ, and Azure Cloud",
        "Implemented HIPAA-compliant APIs with OAuth2, RBAC, and Azure AD B2C to ensure secure healthcare operations",
        "Improved claims accuracy and member experience by designing scalable microservices and automating DevOps pipelines",
      ],
    },
    {
      company: "State of California",
      location: "San Francisco, CA",
      position: "Senior .Net Full Stack Developer",
      period: "Oct 2020 – Aug 2022",
      achievements: [
        "Engineered enterprise applications with ASP.NET MVC, Angular 13, and Oracle DB, deploying on Azure App Service and API Gateway",
        "Secured APIs with OAuth2 & RBAC, and automated deployments using Azure DevOps",
      ],
    },
    {
      company: "Lululemon",
      location: "Dallas, TX",
      position: ".Net Full Stack Developer",
      period: "Apr 2017 – Sep 2020",
      achievements: [
        "Built retail applications using .NET MVC, ReactJS, MongoDB, and AWS services (EC2, S3, Lambda)",
        "Implemented SOAP/REST integrations for supplier platforms and automated CI/CD with AWS CodePipeline",
      ],
    },
    {
      company: "Infosys",
      location: "Hyderabad, India",
      position: ".Net Developer",
      period: "Jun 2015 – Feb 2017",
      achievements: [
        "Developed secure multi-tier banking applications using ASP.NET WebForms, ADO.NET, and PostgreSQL",
        "Created SOAP services and optimized database performance with PL/SQL procedures and triggers",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Professional <span className="gradient-text">Experience</span>
        </h2>

        <div className="relative">
          {/* Snake vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-primary/30 z-0 snake-line" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Node with animated small circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 w-6 h-6 flex items-center justify-center z-10">
                  <span className="w-3 h-3 rounded-full bg-primary animate-bounce-slow shadow-lg shadow-primary/50" />
                </div>

                {/* Empty flex for spacing */}
                <div className="flex-1" />

                {/* Experience Card */}
                <Card
                  className={`flex-1 p-6 bg-card border-border card-hover ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  } ml-8 md:ml-0`}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>

                  <h4 className="font-semibold mb-2">{exp.position}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for Snake Line and Animation */}
      <style>{`
        .snake-line {
          background-image: linear-gradient(to bottom, transparent 50%, rgba(255, 79, 79, 0.3) 50%);
          background-size: 2px 20px;
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Experience;
