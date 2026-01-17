import { useState, FormEvent } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'En108908@foe.sjp.ac.lk',
    href: 'mailto:En108908@foe.sjp.ac.lk',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+94 76 833 4128',
    href: 'tel:+94768334128',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Achintha-Rathnayake',
    href: 'https://www.linkedin.com/in/achintha-rathnayake-19b1a92a3/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Achintha0911',
    href: 'https://github.com/Achintha0911',
  },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare template parameters that match your EmailJS template
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      // Send email using emailjs.send() with explicit parameters
      const result = await emailjs.send(
        'service_930glsq',
        'template_zjyl0xc',
        templateParams,
        '3YY6ob23hI6mNoqLP'
      );

      console.log('Email sent successfully:', result.text);

      toast({
        title: "Message Sent! ✓",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: '', email: '', message: '' });

    } catch (error: any) {
      console.error('Failed to send email:', error);
      
      toast({
        title: "Failed to Send",
        description: "Something went wrong. Please try again or email me directly at En108908@foe.sjp.ac.lk",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 section-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-primary/15 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-accent/15 blur-3xl animate-pulse-slow animation-delay-300" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-section-dark-foreground">
            Let's Build Something <span className="gradient-text">Impactful</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-section-dark-foreground mb-4">
                Contact Information
              </h3>
              <p className="text-muted-foreground">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl hover-lift group bg-section-dark/50"
                >
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-section-dark-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Sri Lanka</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-6 md:p-8 bg-section-dark/50">
            <h3 className="text-xl font-bold text-section-dark-foreground mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-section-dark/50 border-border/50 focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="bg-section-dark/50 border-border/50 focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="bg-section-dark/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full gradient-bg text-primary-foreground hover:opacity-90 transition-opacity glow-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};