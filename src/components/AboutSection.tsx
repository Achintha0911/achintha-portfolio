import { Code, Brain, Globe, Award } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Full-stack expertise in modern web technologies',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'AI-driven solutions and computer vision',
  },
  {
    icon: Globe,
    title: 'UI/UX Design',
    description: 'Creating intuitive user experiences',
  },
  {
    icon: Award,
    title: 'Problem Solver',
    description: 'Tackling real-world challenges with tech',
  },
];

const languages = [
  { name: 'Sinhala', level: 'Native' },
  { name: 'English', level: 'Fluent' },
];

const certifications = [
  'Computer Networking – Wired & Wireless Networks and Protocols (Alison)',
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2">Get to know me</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated and results-driven Engineering undergraduate with strong expertise in
              <span className="text-foreground font-medium"> web development</span>,
              <span className="text-foreground font-medium"> machine learning</span>, and
              <span className="text-foreground font-medium"> UI/UX design</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experienced in diagnosing performance issues, technical support, and network/database setup.
              I'm passionate about solving real-world problems using technology and AI-driven systems.
            </p>

            {/* Languages & Certifications */}
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {/* Languages */}
              <div className="glass-card rounded-xl p-5 hover-lift">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-primary" />
                  Languages
                </h3>
                <div className="space-y-2">
                  {languages.map((lang) => (
                    <div key={lang.name} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{lang.name}</span>
                      <span className="text-primary font-medium">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="glass-card rounded-xl p-5 hover-lift">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  Certifications
                </h3>
                <ul className="space-y-2">
                  {certifications.map((cert) => (
                    <li key={cert} className="text-sm text-muted-foreground">
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card rounded-xl p-6 hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
