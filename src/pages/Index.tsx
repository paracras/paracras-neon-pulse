
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { ArrowRight } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    features: false,
    howItWorks: false,
    useCases: false,
    contact: false,
  });

  const featuresRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const useCasesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === featuresRef.current) {
              setIsVisible((prev) => ({ ...prev, features: true }));
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

    if (featuresRef.current) observer.observe(featuresRef.current);
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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <ParticleBackground />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Transform your operations with intelligent automation solutions
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/80">
            Advanced AI solutions to streamline processes and enhance efficiency
          </p>
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-xl rounded-md shadow-glow transition-all duration-300 hover:shadow-glow-intense"
          >
            Book a Call <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Key Features */}
      <section
        ref={featuresRef}
        className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-opacity duration-1000 ${
          isVisible.features ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gradient">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Automation",
                description:
                  "Leverage cutting-edge artificial intelligence to automate complex workflows and decision-making processes.",
              },
              {
                title: "Custom Integration",
                description:
                  "Seamlessly connect with your existing systems and workflows for smooth operation and data flow.",
              },
              {
                title: "Intelligent Analytics",
                description:
                  "Gain valuable insights with advanced data analysis tools and predictive modeling capabilities.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-black border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:shadow-glow-sm"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                    <span className="text-2xl text-purple-400">{index + 1}</span>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        ref={howItWorksRef}
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
                title: "Consultation",
                description:
                  "We analyze your current processes and identify automation opportunities.",
              },
              {
                step: "Step 2",
                title: "Implementation",
                description:
                  "Our team develops and deploys customized AI solutions tailored to your needs.",
              },
              {
                step: "Step 3",
                title: "Optimization",
                description:
                  "Continuous monitoring and refinement to maximize efficiency and results.",
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
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section
        ref={useCasesRef}
        className={`py-24 px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ${
          isVisible.useCases ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gradient">
            Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Data Processing",
                description:
                  "Automate data extraction, transformation, and loading processes.",
              },
              {
                title: "Customer Service",
                description:
                  "Deploy intelligent chatbots and ticket routing systems.",
              },
              {
                title: "Financial Operations",
                description:
                  "Streamline invoicing, reconciliation, and reporting workflows.",
              },
              {
                title: "Supply Chain",
                description:
                  "Optimize inventory management and demand forecasting.",
              },
              {
                title: "HR Processes",
                description:
                  "Automate recruitment, onboarding, and employee management.",
              },
              {
                title: "Marketing Analytics",
                description:
                  "Enhance customer segmentation and campaign performance analysis.",
              },
            ].map((useCase, index) => (
              <Card
                key={index}
                className="bg-transparent border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:shadow-glow-sm"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className={`py-24 px-4 sm:px-6 lg:px-8 bg-black/50 relative transition-opacity duration-1000 ${
          isVisible.contact ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gradient">
            Contact Us
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
              <label htmlFor="subject" className="text-sm text-white/80">
                Subject
              </label>
              <Input
                id="subject"
                className="bg-transparent border-purple-500/50 focus:border-purple-500 text-white"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-white/80">
                Message
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
                Send Message
              </Button>
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
          <div className="flex space-x-4 items-center">
            <a href="#" className="text-white hover:text-purple-400 transition-colors">
              Privacy
            </a>
            <div className="h-4 w-px bg-purple-500/50"></div>
            <a href="#" className="text-white hover:text-purple-400 transition-colors">
              Terms
            </a>
            <div className="h-4 w-px bg-purple-500/50"></div>
            <a href="#" className="text-white hover:text-purple-400 transition-colors">
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
