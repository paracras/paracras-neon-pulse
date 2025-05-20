import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowRight, Bot, Workflow, Code, Mail, Phone, Users, Instagram, Twitter, Zap, Calendar, MessageSquare, Database, Settings, FileText, LayoutDashboard } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";

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

  const handleOpenModal = (modalKey: string) => {
    console.log("Opening modal:", modalKey);
    setOpenModal(modalKey);
  };

  const handleCloseModal = () => {
    console.log("Closing modal");
    setOpenModal(null);
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

      {/* Services Section - Updated with working button functionality */}
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
              className="bg-black border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:shadow-glow-sm flex flex-col contact-card"
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
                  className="mt-auto more-info-button"
                  onClick={() => handleOpenModal('aiAgents')}
                  type="button"
                >
                  More Info <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Automated Workflows Card */}
            <Card
              className="bg-black border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:shadow-glow-sm flex flex-col contact-card"
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
                  className="mt-auto more-info-button"
                  onClick={() => handleOpenModal('workflows')}
                  type="button"
                >
                  More Info <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Web & App Development Card */}
            <Card
              className="bg-black border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:shadow-glow-sm flex flex-col contact-card"
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
                  className="mt-auto more-info-button"
                  onClick={() => handleOpenModal('webDev')}
                  type="button"
                >
                  More Info <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Detail Modals - Updated to remove emojis and change key advantage sections */}
        <Dialog open={openModal === 'aiAgents'} onOpenChange={(open) => !open && handleCloseModal()}>
          <DialogContent className="bg-black border border-purple-500 max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl text-gradient mb-6 flex items-center">
                <Bot className="mr-2 h-6 w-6 text-purple-400" /> AI Agents
              </DialogTitle>
            </DialogHeader>
            
            <ScrollArea className="h-[60vh] pr-4">
              <div className="space-y-8">
                {/* Website Chatbots Section */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">1. Website Chatbots</h3>
                  <p className="text-white/80 mb-3">
                    Build intelligent, real-time chatbots for your website that engage visitors the moment they arrive. These bots can:
                  </p>
                  <ul className="text-white/80 list-disc pl-5 space-y-1 mb-4">
                    <li>Answer frequently asked questions instantly</li>
                    <li>Qualify leads based on user responses</li>
                    <li>Book appointments directly into your calendar</li>
                    <li>Work 24/7 to support your users and reduce manual load</li>
                  </ul>
                  <div className="key-advantage">Key Advantage:</div>
                  <p className="text-white/90">
                    Handles the majority of user questions without human intervention and seamlessly integrates with your calendar tools to automate scheduling.
                  </p>
                </div>

                <div className="border-t border-purple-500/30 pt-6"></div>
                
                {/* AI Receptionists Section */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2. AI Receptionists</h3>
                  <p className="text-white/80 mb-3">
                    Your automated front-desk assistant for phone calls. These AI receptionists can:
                  </p>
                  <ul className="text-white/80 list-disc pl-5 space-y-1 mb-4">
                    <li>Handle inbound and outbound phone calls using realistic voice synthesis</li>
                    <li>Understand natural language to take messages, answer queries, and guide callers</li>
                    <li>Book appointments automatically after confirming availability</li>
                    <li>Route urgent calls to the right human contact</li>
                  </ul>
                  <div className="key-advantage">Key Advantage:</div>
                  <p className="text-white/90">
                    Drastically reduce missed calls and scale your customer-facing operations without hiring more staff.
                  </p>
                </div>

                <div className="border-t border-purple-500/30 pt-6"></div>
                
                {/* Social Media Chatbots Section */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3. Social Media Chatbots</h3>
                  <p className="text-white/80 mb-3">
                    Deploy smart AI agents on platforms like Instagram, Facebook, and WhatsApp to:
                  </p>
                  <ul className="text-white/80 list-disc pl-5 space-y-1 mb-4">
                    <li>Automatically reply to DMs</li>
                    <li>Capture leads and guide users to relevant offers or pages</li>
                    <li>Book appointments directly within the conversation</li>
                    <li>Maintain consistent brand voice and availability across platforms</li>
                  </ul>
                  <div className="key-advantage">Key Advantage:</div>
                  <p className="text-white/90">
                    Manage hundreds of conversations simultaneously and never miss a sales or support opportunity.
                  </p>
                </div>

                <div className="border-t border-purple-500/30 pt-6"></div>
                
                {/* Overall Benefits Section */}
                <div>
                  <h3 className="text-xl font-semibold text-white flex items-center mb-3">
                    <span className="text-purple-400 mr-2">✓</span> Overall Benefits of AI Agents
                  </h3>
                  <ul className="text-white/80 list-disc pl-5 space-y-2">
                    <li>Reduce manual workload and free up team resources</li>
                    <li>Save time with 24/7 intelligent automation</li>
                    <li>Increase appointment bookings with automated scheduling</li>
                    <li>Boost customer satisfaction with fast, helpful responses</li>
                    <li>Generate revenue through improved lead capture and responsiveness</li>
                    <li>Reduce expenses by replacing repetitive tasks with AI</li>
                    <li>Customize tone and behavior to match your brand identity</li>
                  </ul>
                </div>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>

        <Dialog open={openModal === 'workflows'} onOpenChange={(open) => !open && handleCloseModal()}>
          <DialogContent className="bg-black/90 backdrop-blur-lg border border-purple-500 max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl text-gradient mb-2 flex items-center">
                <Workflow className="mr-2 h-6 w-6 text-purple-400" /> Automated Workflows
              </DialogTitle>
            </DialogHeader>
            
            <ScrollArea className="h-[60vh] pr-4">
              <div className="space-y-6">
                <p className="text-white/90">
                  Automated workflows help businesses streamline repetitive tasks, improve efficiency, and reduce human error. 
                  Below are some of the most impactful lead-related workflows we offer:
                </p>
                
                <div className="modal-section-divider"></div>
                
                {/* AI-Powered Lead Generation */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <span className="text-purple-400 mr-2">1.</span> AI-Powered Lead Generation
                  </h3>
                  <p className="text-white/80 mb-3">
                    Capture qualified leads across your website and social platforms using smart AI agents.
                  </p>
                  <ul className="modal-list-item space-y-1 mb-4">
                    <li>Engage visitors in real-time</li>
                    <li>Offer lead magnets (free guides, demos, etc.)</li>
                    <li>Capture key info without human involvement</li>
                  </ul>
                  <div className="key-advantage">Key Advantage:</div>
                  <p className="text-white/90">
                    Generates more qualified leads, 24/7, across multiple channels.
                  </p>
                </div>

                <div className="modal-section-divider"></div>
                
                {/* Lead Qualification → CRM Sync */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <span className="text-purple-400 mr-2">2.</span> Lead Qualification → CRM Sync
                  </h3>
                  <p className="text-white/80 mb-3">
                    After capturing a lead, AI engages them with tailored questions to understand intent, urgency, and potential fit.
                  </p>
                  <ul className="modal-list-item space-y-1 mb-4">
                    <li>Scores leads in real-time</li>
                    <li>Filters out low-quality prospects</li>
                    <li>Automatically adds top leads to your CRM</li>
                  </ul>
                  <div className="key-advantage">Key Advantage:</div>
                  <p className="text-white/90">
                    Saves your sales team time and ensures follow-ups are focused on the highest-quality opportunities.
                  </p>
                </div>

                <div className="modal-section-divider"></div>
                
                {/* Automated Lead Follow-Up */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <span className="text-purple-400 mr-2">3.</span> Automated Lead Follow-Up
                  </h3>
                  <p className="text-white/80 mb-3">
                    Stay top-of-mind with leads who didn't convert right away.
                  </p>
                  <ul className="modal-list-item space-y-1 mb-4">
                    <li>Sends follow-up emails, SMS, or chatbot messages on smart timers</li>
                    <li>Offers value and prompts next steps</li>
                    <li>Re-engages leads automatically</li>
                  </ul>
                  <div className="key-advantage">Key Advantage:</div>
                  <p className="text-white/90">
                    Closes more deals over time with no manual outreach required.
                  </p>
                </div>

                <div className="modal-section-divider"></div>
                
                {/* Endless Possibilities - Updated with checkmark */}
                <div>
                  <h3 className="text-xl font-semibold text-white flex items-center mb-3">
                    <span className="text-purple-400 mr-2">✓</span> Endless Workflow Possibilities
                  </h3>
                  <p className="text-white/80">
                    These are just a few examples—workflow automation can be tailored to fit any part of your business: operations, 
                    support, HR, billing, onboarding, and more. If it's repetitive, we can automate it.
                  </p>
                </div>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>

        <Dialog open={openModal === 'webDev'} onOpenChange={(open) => !open && handleCloseModal()}>
          <DialogContent className="bg-black border border-purple-500 max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl text-gradient mb-6 flex items-center">
                <Code className="mr-2 h-6 w-6 text-purple-400" /> Web & App Development
              </DialogTitle>
            </DialogHeader>
            
            <ScrollArea className="h-[60vh] pr-4">
              <div className="space-y-8">
                <p className="text-white/90">
                  We build sleek, high-performance websites and applications that are designed to impress and built to perform. 
                  Whether it's a marketing site, an internal dashboard, or a mobile app — we handle it end-to-end.
                </p>
                
                <div className="border-t border-purple-500/30 pt-6"></div>
                
                {/* Website Development Section */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <span className="text-purple-400 mr-2">1.</span> Website Development
                  </h3>
                  <p className="text-white/80 mb-3">
                    From landing pages to full-scale websites, we deliver visually stunning, fast-loading, and responsive sites built to convert.
                  </p>
                  <ul className="text-white/80 list-disc pl-5 space-y-1 mb-4">
                    <li>Mobile-first, modern design</li>
                    <li>Optimized for speed and SEO</li>
                    <li>Integrated with analytics and third-party tools</li>
                    <li>Custom animations and branded visuals</li>
                  </ul>
                  <div className="key-advantage">Key Advantage:</div>
                  <p className="text-white/90">
                    Your website becomes your best salesperson — accessible, compelling, and conversion-focused.
                  </p>
                </div>

                <div className="border-t border-purple-500/30 pt-6"></div>
                
                {/* App Development Section */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <span className="text-purple-400 mr-2">2.</span> App Development
                  </h3>
                  <p className="text-white/80 mb-3">
                    We develop web and mobile apps that are intuitive, scalable, and lightning-fast.
                  </p>
                  <ul className="text-white/80 list-disc pl-5 space-y-1 mb-4">
                    <li>Web apps, dashboards, admin panels</li>
                    <li>Native or hybrid mobile apps (iOS & Android)</li>
                    <li>API integrations and backend support</li>
                    <li>User-friendly interfaces and clean code</li>
                  </ul>
                  <div className="key-advantage">Key Advantage:</div>
                  <p className="text-white/90">
                    Turn your business idea or workflow into a fully functioning digital product that drives real value.
                  </p>
                </div>

                <div className="border-t border-purple-500/30 pt-6"></div>
                
                {/* End-to-End Development Stack Section */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <span className="text-purple-400 mr-2">3.</span> End-to-End Development Stack
                  </h3>
                  <p className="text-white/80 mb-3">
                    We handle every phase — from planning and design to deployment and optimization.
                  </p>
                  <ul className="text-white/80 list-disc pl-5 space-y-1 mb-4">
                    <li>UX/UI Design</li>
                    <li>Frontend + Backend Development</li>
                    <li>Hosting, security, and performance tuning</li>
                    <li>Ongoing support and updates</li>
                  </ul>
                  <div className="key-advantage">Key Advantage:</div>
                  <p className="text-white/90">
                    You work with one team, from start to finish, with full transparency and technical expertise.
                  </p>
                </div>

                <div className="border-t border-purple-500/30 pt-6"></div>
                
                {/* Built for Scale Section - Updated with checkmark */}
                <div>
                  <h3 className="text-xl font-semibold text-white flex items-center mb-3">
                    <span className="text-purple-400 mr-2">✓</span> Built for Scale
                  </h3>
                  <p className="text-white/80">
                    Whether you're launching a new idea or modernizing your tech stack, we build with the future in mind — 
                    secure, maintainable, and ready to grow.
                  </p>
                </div>
              </div>
            </ScrollArea>
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

      {/* Use Cases - Redesigned as "What Can We Automate?" */}
      <section
        ref={useCasesRef}
        id="use-cases"
        className={`py-24 px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ${
          isVisible.useCases ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gradient">
            What Can We Automate?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Lead Generation",
                description: "Capture and qualify leads automatically across website, chat, and social.",
                icon: Zap
              },
              {
                title: "Appointment Booking",
                description: "Let users book meetings instantly through chatbots, AI calls, or forms.",
                icon: Calendar
              },
              {
                title: "Customer Support",
                description: "Automate answers to FAQs, resolve issues, or escalate intelligently.",
                icon: MessageSquare
              },
              {
                title: "CRM & Data Entry",
                description: "Sync customer data to your CRM with no manual effort.",
                icon: Database
              },
              {
                title: "Internal Task Automation",
                description: "Automate back-office workflows like status updates, alerts, or follow-ups.",
                icon: Settings
              },
              {
                title: "Email & SMS Sequences",
                description: "Send automated follow-ups, drip campaigns, and reminders based on triggers.",
                icon: Mail
              },
              {
                title: "Social Media Responses",
                description: "Reply to DMs or comments with AI agents on platforms like Instagram & X.",
                icon: Instagram
              },
              {
                title: "Form & Document Handling",
                description: "Auto-send, track, or process documents and e-signatures.",
                icon: FileText
              },
              {
                title: "Custom Dashboards",
                description: "Build tools to visualize operations, leads, or KPIs with real-time data.",
                icon: LayoutDashboard
              },
            ].map((capability, index) => (
              <Card
                key={index}
                className="bg-black border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:shadow-glow-sm contact-card"
              >
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                    <capability.icon className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-white">{capability.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 text-sm">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 text-center">
            <p className="text-white/90 text-lg max-w-3xl mx-auto mb-2">
              <span className="font-semibold">Have a workflow in mind?</span>
            </p>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              We build custom automation and AI solutions tailored to your business — no matter the platform, task, or industry.
            </p>
            <Button
              variant="purple"
              size="lg"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  const offset = 80; // Account for navbar height
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = contactSection.getBoundingClientRect().top;
                  const elementPosition = elementRect - bodyRect;
                  const offsetPosition = elementPosition - offset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="px-8"
            >
              Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gradient">
            Get in Touch
          </h2>
          <p className="text-center text-white/80 mb-16 max-w-2xl mx-auto">
            Have a project in mind or questions about our AI solutions? We'd love to hear from you!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email Card - Properly wrapped in anchor tag */}
            <a href="mailto:info@paracras.com" className="block w-full" target="_blank" rel="noopener noreferrer">
              <Card className="bg-black border border-purple-500/30 hover:border-purple-500 transition-all duration-300 h-full contact-card">
                <CardHeader className="flex items-center justify-center pb-0">
                  <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                    <Mail className="h-8 w-8 text-purple-400" />
                  </div>
                  <CardTitle className="text-xl text-white">Email</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-4">
                  <span className="text-white/80 contact-link">
                    info@paracras.com
                  </span>
                </CardContent>
              </Card>
            </a>
            
            {/* Call Card - Properly wrapped in anchor tag */}
            <a href="tel:07388804746" className="block w-full">
              <Card className="bg-black border border-purple-500/30 hover:border-purple-500 transition-all duration-300 h-full contact-card">
                <CardHeader className="flex items-center justify-center pb-0">
                  <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                    <Phone className="h-8 w-8 text-purple-400" />
                  </div>
                  <CardTitle className="text-xl text-white">Call</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-4">
                  <span className="text-white/80 contact-link">
                    07388804746
                  </span>
                </CardContent>
              </Card>
            </a>
            
            {/* Follow Card - With proper social links */}
            <Card className="bg-black border border-purple-500/30 hover:border-purple-500 transition-all duration-300 h-full contact-card">
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
                  className="text-white/80 hover:text-purple-400 transition-colors inline-flex items-center justify-center gap-2 contact-link"
                >
                  <Instagram className="h-5 w-5" /> @paracras
                </a>
                <a 
                  href="https://x.com/paracras" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/80 hover:text-purple-400 transition-colors inline-flex items-center justify-center gap-2 contact-link"
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
