import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { ArrowRight, Bot, Workflow, Code, Mail, Phone, Users, Instagram, Twitter } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    services: false,
    howItWorks: false,
    useCases: false,
    contact: false,
  });

  const [openModal, setOpenModal] = useState<string | null>(null);

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

  const serviceDetails = {
    aiAgents: {
      title: "AI Agents",
      fullDescription: "Build intelligent, always-on virtual assistants tailored to your brand. From website-based chatbots and AI receptionists to social media bots — each is equipped with advanced NLP, seamless human handoff, and proactive engagement. Turn passive visitors into active conversations."
    },
    workflows: {
      title: "Automated Workflows",
      fullDescription: "Eliminate repetitive tasks with end-to-end workflows triggered by events, data, or human input. We integrate your tools (CRM, email, Slack, etc.) to automate lead routing, follow‑ups, order processing, reporting and more — so your business runs smarter, faster, and effortlessly."
    },
    webDev: {
      title: "Web & App Development",
      fullDescription: "From dynamic marketing sites to native/hybrid mobile apps and custom dashboards — we deliver polished, high-performance, responsive solutions. All built mobile-first and infused with your brand's bold black-purple-white glow."
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
          <h1 className="text-4xl md:text-6xl font-bold mb-10 text-gradient font-poppins">
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

      {/* Services Section - Updated with shorter descriptions and modal functionality */}
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
            {/* AI Agents Card - Updated with shorter description */}
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
                  Deploy smart virtual assistants across your website, phone, and social media.
                </p>
                <Button
                  variant="purple"
                  className="mt-auto"
                  onClick={() => setOpenModal('aiAgents')}
                >
                  More Info <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Automated Workflows Card - Updated with shorter description */}
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
                  Streamline operations with custom-built automations tailored to your business.
                </p>
                <Button
                  variant="purple"
                  className="mt-auto"
                  onClick={() => setOpenModal('workflows')}
                >
                  More Info <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Web & App Development Card - Updated with shorter description */}
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
                  Get high-performance websites and apps built with modern design and functionality.
                </p>
                <Button
                  variant="purple"
                  className="mt-auto"
                  onClick={() => setOpenModal('webDev')}
                >
                  More Info <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Detail Modals */}
        <Dialog open={openModal === 'aiAgents'} onOpenChange={(open) => !open && setOpenModal(null)}>
          <DialogContent className="bg-black border border-purple-500 max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-2xl text-gradient">{serviceDetails.aiAgents.title}</DialogTitle>
              <DialogDescription className="text-white">
                {serviceDetails.aiAgents.fullDescription}
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end">
              <Button 
                variant="purple"
                onClick={() => setOpenModal(null)}
              >
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={openModal === 'workflows'} onOpenChange={(open) => !open && setOpenModal(null)}>
          <DialogContent className="bg-black border border-purple-500 max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-2xl text-gradient">{serviceDetails.workflows.title}</DialogTitle>
              <DialogDescription className="text-white">
                {serviceDetails.workflows.fullDescription}
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end">
              <Button 
                variant="purple"
                onClick={() => setOpenModal(null)}
              >
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={openModal === 'webDev'} onOpenChange={(open) => !open && setOpenModal(null)}>
          <DialogContent className="bg-black border border-purple-500 max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-2xl text-gradient">{serviceDetails.webDev.title}</DialogTitle>
              <DialogDescription className="text-white">
                {serviceDetails.webDev.fullDescription}
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end">
              <Button 
                variant="purple"
                onClick={() => setOpenModal(null)}
              >
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
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
                title: "Discover",
                description:
                  "We start by understanding your business, goals, and challenges through a strategy call. This helps us define what you need and how AI automation can deliver real value.",
                benefit: "Strategy Call",
              },
              {
                step: "Step 2",
                title: "Implement",
                description:
                  "We design and implement your automation solution—whether it's an AI agent, custom workflow, or integrated tool—tailored specifically to your operations.",
                benefit: "Custom Setup",
              },
              {
                step: "Step 3",
                title: "Support",
                description:
                  "We provide continuous support and optimization to ensure your automations evolve with your business and deliver lasting impact.",
                benefit: "Ongoing Success",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative p-6 border border-purple-500/30 rounded-lg hover:border-purple-500 transition-all duration-300 hover:shadow-glow-sm"
              >
                <div className="absolute -top-4 left-4 bg-black px-3 py-1 border border-purple-500 text-purple-400 text-sm">
                  {item.step}
                </div>
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

      {/* Contact Section - Enhanced with clickable links */}
      <section
        ref={contactRef}
        id="contact"
        className={`py-24 px-4 sm:px-6 lg:px-8 bg-black/50 relative transition-opacity duration-1000 ${
          isVisible.contact ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gradient">
            Get in Touch
          </h2>
          <p className="text-center text-white/80 mb-16 max-w-2xl mx-auto">
            Have a project in mind or questions about our AI solutions? We'd love to hear from you!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email Card - Enhanced with clickable link */}
            <Card className="bg-black border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:shadow-glow-sm">
              <CardHeader className="flex items-center justify-center pb-0">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-purple-400" />
                </div>
                <CardTitle className="text-xl text-white">Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-4">
                <a 
                  href="mailto:info@paracras.com" 
                  className="text-white/80 hover:text-purple-400 transition-colors hover:shadow-glow"
                >
                  info@paracras.com
                </a>
              </CardContent>
            </Card>
            
            {/* Call Card - Enhanced with clickable link */}
            <Card className="bg-black border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:shadow-glow-sm">
              <CardHeader className="flex items-center justify-center pb-0">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-purple-400" />
                </div>
                <CardTitle className="text-xl text-white">Call</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-4">
                <a 
                  href="tel:07388804746" 
                  className="text-white/80 hover:text-purple-400 transition-colors hover:shadow-glow"
                >
                  07388804746
                </a>
              </CardContent>
            </Card>
            
            {/* Follow Card - Enhanced with clickable social links */}
            <Card className="bg-black border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:shadow-glow-sm">
              <CardHeader className="flex items-center justify-center pb-0">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-purple-400" />
                </div>
                <CardTitle className="text-xl text-white">Follow</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-4 flex flex-col gap-2">
                <a 
                  href="https://instagram.com/paracras" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/80 hover:text-purple-400 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Instagram className="h-5 w-5" /> @paracras
                </a>
                <a 
                  href="https://x.com/paracras" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/80 hover:text-purple-400 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Twitter className="h-5 w-5" /> @paracras
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-purple-500/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Left: PARACRAS Logo */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gradient font-poppins">PARACRAS</h2>
            <p className="text-white/60">AI Automation Agency</p>
          </div>
          
          {/* Center: Copyright */}
          <div className="mb-6 md:mb-0 text-center text-white/70 text-sm">
            © 2025 Paracras LTD. All rights reserved.
          </div>
          
          {/* Right: Social Icons */}
          <div className="flex space-x-6">
            <a 
              href="https://instagram.com/paracras" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="text-white hover:text-purple-400 transition-colors"
            >
              <Instagram className="h-6 w-6 hover:shadow-glow transition-all duration-300" />
            </a>
            <a 
              href="https://x.com/paracras" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow us on X (Twitter)"
              className="text-white hover:text-purple-400 transition-colors"
            >
              <Twitter className="h-6 w-6 hover:shadow-glow transition-all duration-300" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
