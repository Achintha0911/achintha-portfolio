import { Rocket, Target, Lightbulb } from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <section className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2">My Journey</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Growth</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                <Rocket className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Building Practical Experience</h3>
                <p className="text-muted-foreground">
                  Currently developing strong practical experience through academic endeavors, research initiatives, and real-world projects.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary/80 transition-colors">
                <Target className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">Project-Based Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Applying skills through hands-on projects in AI, web, and mobile development.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary/80 transition-colors">
                <Lightbulb className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">Research & Innovation</h4>
                  <p className="text-sm text-muted-foreground">
                    Exploring cutting-edge technologies in machine learning and computer vision.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-sm text-center text-foreground">
                <span className="font-medium">Open to Opportunities:</span> Seeking internships, research collaborations, and software engineering roles where I can contribute and grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
