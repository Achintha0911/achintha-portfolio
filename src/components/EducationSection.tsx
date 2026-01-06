import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Engineering (Honors) – Computer Engineering',
    institution: 'University of Sri Jayewardenepura, Sri Lanka',
    period: 'Feb 2023 – Present',
    minor: 'Data Management',
    current: true,
  },
 
  {
    degree: 'Diploma in Information Technology',
    institution: 'IMBS, Sri Lanka',
    period: 'Oct 2019 – Jul 2021',
    skills: 'Hardware, Networking, Software Engineering',
    current: false,
  },
  {
    degree: 'Diploma in Human Resource Management',
    institution: 'IMBS',
    period: '2021',
    focus: 'Management, Organizational Behavior, Business Law',
    current: false,
  },
   {
    degree: 'GCE Advanced Level – Physical Science Stream',
    institution: 'Maliyadeva College, Kurunegala',
    period: 'Jan 2012 – Feb 2022',
    subjects: 'Combined Mathematics, Physics, Chemistry',
    current: false,
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-32 section-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2">My Journey</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-section-dark-foreground">
            Education
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

          {education.map((item, index) => (
            <div
              key={item.degree}
              className={`relative flex items-start gap-6 md:gap-12 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full gradient-bg ring-4 ring-section-dark z-10" />

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="glass-card rounded-xl p-6 hover-lift bg-section-dark/50">
                  {item.current && (
                    <span className="inline-block px-3 py-1 text-xs font-medium gradient-bg text-primary-foreground rounded-full mb-3">
                      Current
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-section-dark-foreground mb-2">
                    {item.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {item.institution}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4 text-primary" />
                    {item.period}
                  </div>
                  {item.minor && (
                    <p className="text-sm text-muted-foreground">
                      <span className="text-primary">Minor:</span> {item.minor}
                    </p>
                  )}
                  {item.subjects && (
                    <p className="text-sm text-muted-foreground">
                      <span className="text-primary">Subjects:</span> {item.subjects}
                    </p>
                  )}
                  {item.skills && (
                    <p className="text-sm text-muted-foreground">
                      <span className="text-primary">Skills:</span> {item.skills}
                    </p>
                  )}
                  {item.focus && (
                    <p className="text-sm text-muted-foreground">
                      <span className="text-primary">Focus:</span> {item.focus}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
