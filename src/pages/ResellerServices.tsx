import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Globe, Server, Shield, Mail, Code, Users, Headphones, Palette } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

export default function ResellerServices() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const navigate = useNavigate();

  const services = [
    {
      id: 'domains',
      title: 'Domain Services',
      icon: <Globe className="w-8 h-8 text-[#00ff00]" />,
      description: 'Complete domain management solution including registration, transfers, and DNS configuration',
      features: [
        'Bulk domain registration',
        'Automated DNS management',
        'Domain transfer service',
        'Premium domain acquisition',
        'Domain privacy protection'
      ],
      pricing: {
        starting: 9.99,
        period: 'month'
      }
    },
    {
      id: 'hosting',
      title: 'Web Hosting',
      icon: <Server className="w-8 h-8 text-[#00ff00]" />,
      description: 'High-performance hosting solutions with guaranteed uptime and expert support',
      features: [
        'SSD-based hosting',
        'Free SSL certificates',
        'Daily backups',
        'One-click installations',
        '24/7 server monitoring'
      ],
      pricing: {
        starting: 19.99,
        period: 'month'
      }
    },
    {
      id: 'security',
      title: 'SSL Certificates',
      icon: <Shield className="w-8 h-8 text-[#00ff00]" />,
      description: 'Secure your clients' websites with industry-standard SSL certificates',
      features: [
        'DV, OV, and EV SSL',
        'Wildcard certificates',
        'Multi-domain support',
        'Auto-renewal service',
        'Installation support'
      ],
      pricing: {
        starting: 29.99,
        period: 'year'
      }
    },
    {
      id: 'email',
      title: 'Email Solutions',
      icon: <Mail className="w-8 h-8 text-[#00ff00]" />,
      description: 'Professional email hosting with advanced features and security',
      features: [
        'Custom email domains',
        'Anti-spam protection',
        'Large storage capacity',
        'Mobile sync support',
        'Email archiving'
      ],
      pricing: {
        starting: 4.99,
        period: 'month/user'
      }
    }
  ];

  const businessFunctions = [
    {
      icon: <Users className="w-6 h-6 text-[#00ff00]" />,
      title: 'Account Management',
      description: 'Centralized dashboard for managing all client accounts and services'
    },
    {
      icon: <Headphones className="w-6 h-6 text-[#00ff00]" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support for you and your clients'
    },
    {
      icon: <Code className="w-6 h-6 text-[#00ff00]" />,
      title: 'API Access',
      description: 'Full API integration capabilities for automated management'
    },
    {
      icon: <Palette className="w-6 h-6 text-[#00ff00]" />,
      title: 'White Label',
      description: 'Customizable branding options for all service interfaces'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00ff00]/5 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Reseller Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Build your business with our comprehensive suite of professional services
            </p>
            <Button
              onClick={() => navigate('/business-operations')}
              size="lg"
              className="animate-pulse"
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {service.icon}
                    <div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="text-gray-400">Starting at ${service.pricing.starting}/{service.pricing.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400">
                        <div className="w-2 h-2 bg-[#00ff00] rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      onClick={() => setSelectedService(service.id)}
                      className="flex-1"
                    >
                      Learn More
                    </Button>
                    <Button className="flex-1">
                      Start Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Business Functions */}
      <div className="bg-white/5 dark:bg-black/5 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Comprehensive Business Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessFunctions.map((function_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {function_.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{function_.title}</h3>
                    <p className="text-gray-400">{function_.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
          <p className="text-gray-400">
            Contact us to learn more about our reseller programs and how we can help grow your business
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}