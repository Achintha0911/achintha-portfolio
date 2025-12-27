import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';
export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl animate-pulse-slow animation-delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <p className="text-sm md:text-base font-medium text-primary mb-4 animate-fade-in-up opacity-0" style={{
            animationDelay: '100ms',
            animationFillMode: 'forwards'
          }}>
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 animate-fade-in-up opacity-0" style={{
            animationDelay: '200ms',
            animationFillMode: 'forwards'
          }}>
              <span className="gradient-text">Achintha</span>
              <br />
              <span className="text-foreground">Rathnayake</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 animate-fade-in-up opacity-0" style={{
            animationDelay: '300ms',
            animationFillMode: 'forwards'
          }}>
              Computer Engineering Undergraduate | Web & ML Enthusiast
            </p>
            <p className="text-base md:text-lg text-muted-foreground/80 mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in-up opacity-0" style={{
            animationDelay: '400ms',
            animationFillMode: 'forwards'
          }}>
              Passionate about solving real-world problems through innovative technology and AI-driven solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up opacity-0" style={{
            animationDelay: '500ms',
            animationFillMode: 'forwards'
          }}>
              <Button size="lg" className="gradient-bg text-primary-foreground hover:opacity-90 transition-opacity glow-primary" onClick={() => scrollToSection('#projects')}>
                View Projects
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5 hover:border-primary/50" onClick={() => scrollToSection('#contact')}>
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in-up opacity-0" style={{
            animationDelay: '600ms',
            animationFillMode: 'forwards'
          }}>
              <a href="https://linkedin.com/in/Achintha-Rathnayake" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-card hover:bg-primary/10 transition-colors group">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="https://github.com/Achintha0911" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-card hover:bg-primary/10 transition-colors group">
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="mailto:En108908@foe.sjp.ac.lk" className="p-3 rounded-full glass-card hover:bg-primary/10 transition-colors group">
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in-up opacity-0" style={{
          animationDelay: '300ms',
          animationFillMode: 'forwards'
        }}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 gradient-bg rounded-full blur-2xl opacity-40 animate-pulse-slow" />
              
              {/* Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full gradient-border p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src={profilePhoto} alt="Achintha Rathnayake - Computer Engineering Student" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center animate-float shadow-lg">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="absolute -bottom-2 -left-6 w-16 h-16 glass-card rounded-xl flex items-center justify-center animate-float animation-delay-300">
                <span className="text-xl">💻</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('#about')} className="p-2 rounded-full glass-card hover:bg-primary/10 transition-colors">
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>;
};