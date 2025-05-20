
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { ArrowRight, Bot, Workflow, Code } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    services: false,
    howItWorks: false,
    useCases: false,
    contact: false,
  });

  const servicesRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const useCasesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === servicesRef.current) {
              setIsVisible((prev) => ({ ...prev, services: true }));
            } else if (entry.target === howItWorksRef.current) {
              setIsVisible((prev) => ({ ...prev, howItWorks: true }));
            } else if (entry.target === useCasesRef.current) {
              setIsVisible((prev) => ({ ...prev, useCases: true }));
            } else if (entry.target === contactRef.current) {
              setIsVisible((prev) => ({ ...prev, contact: true }));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) observer.observe(servicesRef.current);
    if (howItWorksRef.current) observer.observe(howItWorksRef.current);
    if (useCasesRef.current) observer.observe(useCasesRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form submitted",
      description: "We'll get back to you shortly.",
    });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const offset = 80; // Account for navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = servicesSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-16">
        <div className="absolute inset-0">
          <ParticleBackground />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-10 text-gradient">
            Future Ready AI
          </h1>
          <Button
            size="lg"
            onClick={scrollToServices}
            className="bg-transparent hover:bg-purple-900/20 text-white border border-purple-500 px-8 py-6 text-xl rounded-md shadow-glow transition-all duration-300 hover:shadow-glow-intense"
          >
            Explore <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        id="services"
        className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-opacity duration-1000 ${
          isVisible.services ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gradient">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Agents Card */}
            <Card
              className="bg-black border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:shadow-glow-sm flex flex-col"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-purple-400" />
                </div>
                <CardTitle className="text-xl text-white">AI Agents</CardTitle>
                <p className="text-purple-300 text-sm mt-2">
                  Website Chatbots • AI Receptionists • Social Media Chatbots
                </p>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-white/70 mb-6 flex-grow">
                  Build intelligent, always-on virtual assistants tailored to your brand. 
                  From website-based chatbots and AI receptionists to social media bots — 
                  each is equipped with advanced NLP, seamless human handoff, and proactive 
                  engagement. Turn passive visitors into active conversations.
                </p>
                <Button
                  className="bg-purple-600 hover:bg-purple-700 text-white mt-auto shadow-glow-sm hover:shadow-glow transition-all duration-300"
                >
                  Explore AI Agents <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Automated Workflows Card */}
            <Card
              className="bg-black border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:shadow-glow-sm flex flex-col"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <Workflow className="h-6 w-6 text-purple-400" />
                </div>
                <CardTitle className="text-xl text-white">Automated Workflows</CardTitle>
                <p className="text-purple-300 text-sm mt-2">
                  Custom workflows built around your business needs
                </p>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-white/70 mb-6 flex-grow">
                  Eliminate repetitive tasks with end-to-end workflows triggered by events, 
                  data, or human input. We integrate your tools (CRM, email, Slack, etc.) 
                  to automate lead routing, follow‑ups, order processing, reporting and more — 
                  so your business runs smarter, faster, and effortlessly.
                </p>
                <Button
                  className="bg-purple-600 hover:bg-purple-700 text-white mt-auto shadow-glow-sm hover:shadow-glow transition-all duration-300"
                >
                  See Workflow Examples <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Web & App Development Card */}
            <Card
              className="bg-black border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:shadow-glow-sm flex flex-col"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-purple-400" />
                </div>
                <CardTitle className="text-xl text-white">Web & App Development</CardTitle>
                <p className="text-purple-300 text-sm mt-2">
                  Futuristic web & mobile experiences
                </p>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-white/70 mb-6 flex-grow">
                  From dynamic marketing sites to native/hybrid mobile apps and custom dashboards — 
                  we deliver polished, high-performance, responsive solutions. All built mobile-first 
                  and infused with your brand's bold black-purple-white glow.
                </p>
                <Button
                  className="bg-purple-600 hover:bg-purple-700 text-white mt-auto shadow-glow-sm hover:shadow-glow transition-all duration-300"
                >
                  Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        ref={howItWorksRef}
        id="how-it-works"
        className={`py-24 px-4 sm:px-6 lg:px-8 bg-black/50 relative transition-opacity duration-1000 ${
          isVisible.howItWorks ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-speed-lines opacity-5"></div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gradient">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "Step 1",
                title: "Customize",
                description:
                  "We analyze your requirements and customize solutions that fit your business needs perfectly.",
                benefit: "Lead Generation",
              },
              {
                step: "Step 2",
                title: "Integrate",
                description:
                  "Seamlessly integrate our solutions with your existing systems and workflows.",
                benefit: "Support Efficiency",
              },
              {
                step: "Step 3",
                title: "Automate",
                description:
                  "Watch as your business processes transform through intelligent automation.",
                benefit: "CRM Sync",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative p-6 border border-purple-500/30 rounded-lg hover:border-purple-500 transition-all duration-300 hover:shadow-glow-sm"
              >
                <div className="absolute -top-4 left-4 bg-black px-3 py-1 border border-purple-500 text-purple-400 text-sm">
                  {item.step}
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-purple-500"></div>
                )}
                <h3 className="text-xl font-bold mt-4 mb-3">{item.title}</h3>
                <p className="text-white/70 mb-4">{item.description}</p>
                <div className="mt-4 inline-block bg-purple-500/10 px-3 py-1 rounded text-purple-300 text-sm">
                  {item.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section
        ref={useCasesRef}
        id="use-cases"
        className={`py-24 px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ${
          isVisible.useCases ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gradient">
            Use Cases
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                title: "E-Commerce",
                description: "Automated inventory, customer support chatbots, personalized recommendations",
              },
              {
                title: "SaaS",
                description: "Onboarding automation, user engagement tracking, customer retention workflows",
              },
              {
                title: "Service Industry",
                description: "Appointment scheduling, follow-up sequences, feedback collection",
              },
              {
                title: "Healthcare",
                description: "Patient communication, appointment reminders, records management",
              },
              {
                title: "Real Estate",
                description: "Lead qualification, property matching, transaction management",
              },
              {
                title: "Education",
                description: "Student engagement, course delivery, progress tracking",
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="p-4 bg-black border border-purple-500/30 rounded-lg hover:border-purple-500 transition-all duration-300 hover:shadow-glow-sm"
              >
                <h3 className="text-lg font-bold mb-2 text-white">{useCase.title}</h3>
                <p className="text-white/70 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className={`py-24 px-4 sm:px-6 lg:px-8 bg-black/50 relative transition-opacity duration-1000 ${
          isVisible.contact ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gradient">
            Book a Call
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-white/80">
                  Name
                </label>
                <Input
                  id="name"
                  className="bg-transparent border-purple-500/50 focus:border-purple-500 text-white"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-white/80">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  className="bg-transparent border-purple-500/50 focus:border-purple-500 text-white"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm text-white/80">
                Company
              </label>
              <Input
                id="company"
                className="bg-transparent border-purple-500/50 focus:border-purple-500 text-white"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-white/80">
                Project Description
              </label>
              <Textarea
                id="message"
                rows={5}
                className="bg-transparent border-purple-500/50 focus:border-purple-500 text-white"
                required
              />
            </div>
            <div className="text-center pt-4">
              <Button
                type="submit"
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 shadow-glow transition-all duration-300 hover:shadow-glow-intense"
              >
                Schedule a Call
              </Button>
            </div>
            
            <div className="flex justify-center space-x-4 mt-8">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/40 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="mailto:contact@paracras.net" 
                 className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/40 transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-purple-500/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gradient">Paracras</h2>
            <p className="text-white/60">AI Automation Agency</p>
          </div>
          <div className="flex flex-wrap justify-center space-x-4 items-center">
            <a href="#services" className="text-white hover:text-purple-400 transition-colors">
              Services
            </a>
            <div className="h-4 w-px bg-purple-500/50"></div>
            <a href="#" className="text-white hover:text-purple-400 transition-colors">
              About
            </a>
            <div className="h-4 w-px bg-purple-500/50"></div>
            <a href="#" className="text-white hover:text-purple-400 transition-colors">
              Blog
            </a>
            <div className="h-4 w-px bg-purple-500/50"></div>
            <a href="#contact" className="text-white hover:text-purple-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-purple-500/20 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} Paracras. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
