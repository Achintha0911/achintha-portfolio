import { ExternalLink, Folder, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'GROWMATE',
    period: 'Aug 2024 – Jan 2025',
    description: 'Mobile app for detecting coconut leaf diseases using image uploads. Includes ML-powered disease identification, plant care tips, and user profiles.',
    skills: ['Machine Learning', 'Image Processing', 'Mobile App Development'],
    featured: true,
  },
  {
    title: 'ROADSAFE-AI',
    period: 'May 2025 – Present',
    description: 'Driver drowsiness detection system using ESP32-CAM with real-time analysis of eye closure and head movements.',
    skills: ['Computer Vision', 'AI', 'Python', 'Hardware Integration'],
    featured: true,
  },
  {
    title: 'CIVICLINK',
    period: 'May 2025 – Nov 2025',
    description: 'Mobile platform connecting citizens with government bodies for real-time public issue reporting and resolution tracking.',
    skills: ['Mobile App Development', 'Cloud Computing', 'Dart', 'DevOps'],
    featured: true,
  },
  {
    title: 'CENSOC Official Website',
    period: 'June 2025 – Nov 2025',
    description: 'Developer for the official Computer Engineering faculty website at the University of Sri Jayewardenepura.',
    skills: ['Web Development', 'TypeScript', 'HTML', 'CSS'],
    featured: false,
  },
  {
    title: 'SUWAYAK Web App',
    period: 'Sep 2025 – Present',
    description: 'Role-based healthcare web application with doctor and patient dashboards, secure data handling, and appointment management.',
    skills: ['Web App Development', 'TypeScript', 'Healthcare'],
    featured: false,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 section-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2">My Work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-section-dark-foreground">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-xl overflow-hidden hover-lift group bg-section-dark/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Header */}
              <div className="h-2 gradient-bg" />
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Folder className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">{project.period}</span>
                </div>

                <h3 className="text-xl font-bold text-section-dark-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* View More */}
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-4">
          {projects.filter(p => !p.featured).map((project) => (
            <div
              key={project.title}
              className="glass-card rounded-xl p-5 hover-lift group bg-section-dark/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Folder className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-section-dark-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">{project.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
