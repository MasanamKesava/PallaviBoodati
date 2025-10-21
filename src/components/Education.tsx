import { Card } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Education & <span className="gradient-text">Learning Path</span>
        </h2>

        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-4xl">
            {/* Flowchart */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
              {/* Start Node */}
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 text-center min-w-[250px]">
                <GraduationCap className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-bold text-lg mb-2">Bachelor's Degree</h3>
                <p className="text-sm text-muted-foreground mb-1">Computer Science and Engineering</p>
                <p className="text-xs text-muted-foreground">2011 - 2015</p>
              </Card>

              {/* Arrow */}
              <div className="hidden md:block">
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-primary/50" />
              </div>
              <div className="md:hidden">
                <div className="h-12 w-0.5 bg-gradient-to-b from-primary to-primary/50" />
              </div>

              {/* Experience Node */}
              <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30 text-center min-w-[250px]">
                <Award className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="font-bold text-lg mb-2">10+ Years</h3>
                <p className="text-sm text-muted-foreground mb-1">Professional Experience</p>
                <p className="text-xs text-muted-foreground">2015 - Present</p>
              </Card>

              {/* Arrow */}
              <div className="hidden md:block">
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-primary/50" />
              </div>
              <div className="md:hidden">
                <div className="h-12 w-0.5 bg-gradient-to-b from-primary to-primary/50" />
              </div>

              {/* Future Node */}
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 text-center min-w-[250px]">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-bold text-lg mb-2">Future Goal</h3>
                <p className="text-sm text-muted-foreground mb-1">Transition to Data Analytics</p>
                <p className="text-xs text-muted-foreground">In Progress</p>
              </Card>
            </div>

            {/* Detailed Education Card */}
            <Card className="p-8 bg-card border-border">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    DVR & Dr. HS MIC College of Technology
                  </h3>
                  <p className="text-lg font-semibold mb-1">
                    Bachelor of Technology in Computer Science and Engineering
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Kanchikacherla • 2011 - 2015
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Solid foundation in computer science fundamentals, software engineering principles, 
                    and problem-solving skills that have been instrumental throughout my professional career.
                  </p>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="text-xl font-bold text-primary mb-3">Future Planning</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Currently transitioning into the field of Data Analytics, combining my extensive 
                    software development experience with data-driven decision making. Focusing on:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Advanced Data Analysis and Visualization",
                      "Machine Learning and Predictive Modeling",
                      "Business Intelligence Tools (Power BI, Tableau)",
                      "Statistical Analysis and Data Mining",
                      "Big Data Technologies (Spark, Hadoop)",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
