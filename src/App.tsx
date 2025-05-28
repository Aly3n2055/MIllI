import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import {
  Brain,
  Shield,
  Code2,
  ChevronRight,
  Sparkles,
  X,
  Sun,
  Moon,
  Bot,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  MessageCircle,
  Store,
  Menu
} from "lucide-react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Auth } from "./components/Auth";
import { Pricing } from "./components/Pricing";
import { Dashboard } from './components/Dashboard';
import { useAuth } from "./hooks/useAuth";
import { ROUTES, SOCIAL_LINKS } from './config/constants';
import { ModalPage } from './components/ui/Modal';

// Create a client
const queryClient = new QueryClient();

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const services = [
    {
      icon: <Brain className="w-8 h-8 text-[#00ff00]" />,
      title: "AI Model Design",
      description:
        "Extraterrestrial intelligence solutions that evolve beyond human limitations",
      details: {
        fullDescription:
          "Our AI Model Design service leverages cutting-edge machine learning algorithms and neural networks to create sophisticated AI solutions that push the boundaries of what's possible.",
        features: [
          "Custom machine learning algorithms",
          "Natural language processing",
          "Computer vision systems",
          "Predictive analytics",
          "Neural network architecture design",
        ],
        benefits: [
          "Increased operational efficiency",
          "Enhanced decision-making capabilities",
          "Automated process optimization",
          "Scalable AI solutions",
          "Future-proof technology integration",
        ],
      },
    },
    {
      icon: <Code2 className="w-8 h-8 text-[#00ff00] group-hover:animate-pulse-scale" />,
      title: "Systems Architecture",
      description: "Infrastructure from the future, built for the present",
      details: {
        fullDescription:
          "Our Systems Architecture service provides robust, scalable, and future-proof infrastructure solutions designed to handle the most demanding technological challenges.",
        features: [
          "Microservices architecture",
          "Cloud-native solutions",
          "Distributed systems design",
          "High-availability infrastructure",
          "Security-first architecture",
        ],
        benefits: [
          "Improved system reliability",
          "Enhanced scalability",
          "Reduced operational costs",
          "Better resource utilization",
          "Faster time-to-market",
        ],
      },
    },
    {
      icon: <Shield className="w-8 h-8 text-[#00ff00]" />,
      title: "Advanced Cybersecurity",
      description: "Next-gen protection for modern threats",
      details: {
        fullDescription:
          "Our Advanced Cybersecurity solutions combine AI-driven threat detection with zero-trust architecture to protect against sophisticated cyber attacks, ransomware, and emerging threats in the cloud-native era.",
        features: [
          "Zero-Trust Architecture Implementation",
          "AI-Powered Threat Detection",
          "Cloud Security Posture Management",
          "Ransomware Protection & Recovery",
          "Supply Chain Security Assessment",
        ],
        benefits: [
          "Real-time threat prevention",
          "Reduced attack surface",
          "Automated incident response",
          "Regulatory compliance (GDPR, CCPA)",
          "24/7 Security monitoring",
        ],
      },
    },
    {
      icon: <Bot className="w-8 h-8 text-[#00ff00]" />,
      title: "Agentive AI & Automation",
      description:
        "Autonomous agents, workflow automation, and chatbot integration.",
      details: {
        fullDescription:
          "We build and integrate autonomous agents, automate workflows, and develop custom chatbots to streamline your business processes and enhance efficiency.",
        features: [
          "Autonomous Agent Development",
          "Workflow Automation",
          "Natural Language to SQL",
          "Complex Data Pipelines",
          "Self-Adaptive Systems",
        ],
        benefits: [
          "Increased efficiency and productivity",
          "Reduced operational costs",
          "Improved data management",
          "Enhanced decision-making",
          "Scalable and adaptable solutions",
        ],
      },
    },
    {
      icon: <Store className="w-8 h-8 text-[#00ff00]" />,
      title: "Affiliate Landing Pages",
      description: "High-converting affiliate landing pages that seamlessly integrate partner products while maintaining your brand identity.",
      details: {
        fullDescription: 
          "Create professional affiliate landing pages with domain services, hosting solutions, and e-commerce integrations. Our pages are designed to maximize conversions while maintaining brand consistency.",
        features: [
          "Custom domain integration",
          "Responsive design templates",
          "E-commerce platform setup",
          "Analytics dashboard",
          "A/B testing capabilities"
        ],
        benefits: [
          "Increased conversion rates",
          "Professional brand presence",
          "Seamless user experience",
          "Performance tracking",
          "Revenue optimization"
        ]
      },
      onClick: () => navigate('/business-operations')
    }
  ];

  useEffect(() => {
    setIsVisible(true);

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  if (showDashboard && currentUser) {
    return <Dashboard />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
        {/* WhatsApp Bubble */}
        <a
          href="https://wa.me/263715338621"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-[#25D366] p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors z-50"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </a>

        {/* Hero Section */}
        <div className="relative overflow-hidden min-h-screen">
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] 
            bg-cover bg-center opacity-20 dark:opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ff00]/5 to-[#003300]/10 dark:from-[#00ff00]/10 dark:to-[#003300]/20" />

          <nav className="relative z-50 container mx-auto px-6 py-4 bg-white/5 dark:bg-black/5 backdrop-blur-md border-b border-[#00ff00]/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  srcSet="/GlaCK0N Transparent symbol.png 1x, /GlaCK0N Main Logo.png 2x"
                  src="/GlaCK0N Transparent symbol.png"
                  alt="MIllI Logo"
                  className="w-12 h-12 object-contain"
                  loading="eager"
                />
                <span className="text-xl font-bold tracking-wider">MIllI</span>
              </div>
              <button 
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
              <div 
                className={`${
                  isMenuOpen 
                    ? 'absolute top-full left-0 right-0 bg-white dark:bg-black border-b border-[#00ff00]/20' 
                    : 'hidden'
                } md:relative md:flex md:items-center md:space-x-8 md:bg-transparent md:border-none`}
              >
                <div className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0`}>
                  <a
                    href="#services"
                    className="hover:text-[#00ff00] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </a>
                  <a
                    href="#pricing"
                    className="hover:text-[#00ff00] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pricing
                  </a>
                  <a
                    href="#vision"
                    className="hover:text-[#00ff00] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Vision
                  </a>
                  <button
                    onClick={() => {
                      setIsDarkMode(!isDarkMode);
                      setIsMenuOpen(false);
                    }}
                    className="p-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Toggle dark mode"
                  >
                    {isDarkMode ? (
                      <Sun className="w-5 h-5 text-[#00ff00]" />
                    ) : (
                      <Moon className="w-5 h-5 text-[#00ff00]" />
                    )}
                  </button>
                  {currentUser ? (
                    <div className="relative">
                      <button
                        onClick={() => setShowDashboard(true)}
                        className="inline-flex items-center space-x-2 bg-[#00ff00] text-black px-4 py-2 rounded-full hover:bg-[#00cc00] transition-colors"
                      >
                        <span>Dashboard</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setIsModalOpen(true);
                        setIsMenuOpen(false);
                      }}
                      className="inline-flex items-center space-x-2 bg-[#00ff00] text-black px-4 py-2 rounded-full hover:bg-[#00cc00] transition-colors"
                    >
                      <span>Sign In</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </nav>

          <div className="relative container mx-auto px-6 py-24 md:py-32">
            <div
              className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#00ff00] to-[#00cc00] bg-clip-text text-transparent mb-8">
                Straight Outta Area 51
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                Advanced AI solutions beyond conventional boundaries. Welcome to
                the next evolution of technology.
              </p>
              <a
                href="tel:+263786838849"
                className="group flex items-center space-x-2 bg-[#00ff00] hover:bg-[#00cc00] text-black font-bold px-8 py-3 rounded-full transition-all w-fit"
              >
                <span>Call Us Now</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Services Section */}
        <section
          id="services"
          className="py-20 bg-gradient-to-b from-white dark:from-black to-[#e6ffe6]/20 dark:to-[#003300]/20"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-16 text-center">
              Classified Operations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white/10 dark:bg-black/10 backdrop-blur-md p-6 md:p-8 rounded-xl hover:shadow-2xl hover:shadow-[#00ff00]/20 transition-all duration-300 border border-[#00ff00]/20 animate-fade-in cursor-pointer"
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                  onClick={service.onClick || (() => setActiveService(index))}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00ff00]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
                  <div className="relative">
                    {service.icon}
                    <h3 className="text-xl font-bold mt-4 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-400">{service.description}</p>
                    <div className="mt-6 flex items-center text-[#00ff00] group-hover:text-[#00cc00]">
                      <span>Learn More</span>
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing">
          <Pricing />
        </section>

        {/* Service Modal */}
        {activeService !== null && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-[#00ff00]/20 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white/10 dark:bg-black/10 backdrop-blur-md p-6 border-b border-[#00ff00]/20">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-[#00ff00]">
                    {services[activeService].title}
                  </h3>
                  <button
                    onClick={() => setActiveService(null)}
                    className="text-gray-300 hover:text-[#00ff00] transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-200 mb-8">
                  {services[activeService].details.fullDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-[#00ff00] font-bold mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {services[activeService].details.features.map(
                        (feature, index) => (
                          <li
                            key={index}
                            className="flex items-center text-gray-200 dark:text-gray-300"
                          >
                            <ChevronRight className="w-4 h-4 text-[#00ff00] mr-2" />
                            {feature}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[#00ff00] font-bold mb-4">
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {services[activeService].details.benefits.map(
                        (benefit, index) => (
                          <li
                            key={index}
                            className="flex items-center text-gray-200 dark:text-gray-300"
                          >
                            <ChevronRight className="w-4 h-4 text-[#00ff00] mr-2" />
                            {benefit}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Vision Section */}
        <section id="vision" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#e6ffe6]/20 dark:from-[#003300]/20 to-white dark:to-black z-0" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <Sparkles className="w-12 h-12 text-[#00ff00] mb-6" />
                <h2 className="text-3xl font-bold mb-6">Beyond Human Limits</h2>
                <p className="text-gray-500 dark:text-gray-300 mb-6">
                  We're not just predicting the future - we're reverse engineering
                  it. Our team of rogue scientists and digital alchemists are
                  breaking the barriers between possible and impossible.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full md:w-auto bg-[#00ff00] text-black font-bold px-8 py-3 rounded-full hover:bg-[#00cc00] transition-all duration-300 border-2 border-[#00ff00] hover:border-[#00cc00] shadow-lg hover:shadow-[#00ff00]/50"
                >
                  Join The Revolution - Sign Up for Early Access
                </button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-72 h-72">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00ff00] to-[#003300] rounded-full animate-pulse opacity-20" />
                  <div className="absolute inset-4 bg-gradient-to-r from-[#00ff00] to-[#003300] rounded-full animate-pulse opacity-40" />
                  <div className="absolute inset-8 bg-gradient-to-r from-[#00ff00] to-[#003300] rounded-full animate-pulse opacity-60" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-black dark:text-white text-black p-8 rounded-lg max-w-md w-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Join The Revolution</h2>
                <button
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-all"
                  onClick={() => setIsModalOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mb-6">
                <Auth />
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-white/5 dark:bg-black/5 border-t border-[#00ff00]/20 mt-20">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <img
                    src="/GlaCK0N Transparent symbol.png"
                    alt="MIllI Logo"
                    className="w-8 h-8 object-contain"
                  />
                  <span className="font-bold text-xl">MIllI</span>
                </div>
                <p className="text-gray-400 mb-6">
                  Pushing the boundaries of AI technology beyond human limits.
                </p>
                <div className="flex space-x-4">
                  <a
                    href={SOCIAL_LINKS.twitter}
                    className="text-gray-400 hover:text-[#00ff00] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    className="text-gray-400 hover:text-[#00ff00] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.instagram}
                    className="text-gray-400 hover:text-[#00ff00] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.facebook}
                    className="text-gray-400 hover:text-[#00ff00] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-6">Services</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-[#00ff00] transition-colors">
                      AI Model Design
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-[#00ff00] transition-colors">
                      Systems Architecture
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-[#00ff00] transition-colors">
                      Advanced Cybersecurity
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-[#00ff00] transition-colors">
                      Agentive AI & Automation
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-6">Company</h3>
                <ul className="space-y-4">
                  <li>
                    <Link to={ROUTES.about} className="text-gray-400 hover:text-[#00ff00] transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-[#00ff00] transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-[#00ff00] transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-[#00ff00] transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-6">Legal</h3>
                <ul className="space-y-4">
                  <li>
                    <Link to={ROUTES.privacy} className="text-gray-400 hover:text-[#00ff00] transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to={ROUTES.terms} className="text-gray-400 hover:text-[#00ff00] transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link to={ROUTES.cookies} className="text-gray-400 hover:text-[#00ff00] transition-colors">
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link to={ROUTES.security} className="text-gray-400 hover:text-[#00ff00] transition-colors">
                      Security
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-[#00ff00]/20 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Milli Intelligent Technologies. Revolutionizing reality one byte at a time.</p>
            </div>
          </div>
        </footer>

        {/* Outlet for nested routes */}
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}

export default App;