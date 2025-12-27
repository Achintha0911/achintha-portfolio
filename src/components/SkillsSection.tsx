import { Code, Smartphone, Brain, Cloud, Palette, Server } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming & Web',
    icon: Code,
    skills: ['Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Development',
    icon: Smartphone,
    skills: ['Web Development', 'Mobile App Development', 'UI/UX Design'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    skills: ['Machine Learning', 'Computer Vision', 'Image Processing'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['Cloud Computing', 'DevOps Basics', 'Network Troubleshooting'],
    color: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'Design & Tools',
    icon: Palette,
    skills: ['Graphic Design', 'Microsoft Office', 'Figma'],
    color: 'from-fuchsia-500 to-purple-500',
  },
  {
    title: 'Backend & Database',
    icon: Server,
    skills: ['Database Setup', 'API Development', 'Technical Support'],
    color: 'from-purple-600 to-indigo-600',
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2">What I Know</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card rounded-xl p-6 hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                <category.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
