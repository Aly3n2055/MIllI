import React from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import {
  Globe,
  Server,
  Shield,
  Mail,
  CreditCard,
  Settings,
  Users,
  BarChart,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { fetchDomainStatus, fetchServiceStatus, fetchBillingInfo } from '../services/api';

export default function BusinessOperations() {
  const { data: domainStatus } = useQuery('domainStatus', fetchDomainStatus);
  const { data: serviceStatus } = useQuery('serviceStatus', fetchServiceStatus);
  const { data: billingInfo } = useQuery('billingInfo', fetchBillingInfo);

  const services = [
    {
      title: 'Domain Management',
      icon: <Globe className="w-6 h-6 text-[#00ff00]" />,
      description: 'Register and manage domains',
      status: domainStatus?.status || 'loading',
      actions: ['Register', 'Transfer', 'Renew']
    },
    {
      title: 'Hosting Services',
      icon: <Server className="w-6 h-6 text-[#00ff00]" />,
      description: 'Web and email hosting solutions',
      status: serviceStatus?.hosting || 'loading',
      actions: ['Deploy', 'Manage', 'Monitor']
    },
    {
      title: 'SSL Certificates',
      icon: <Shield className="w-6 h-6 text-[#00ff00]" />,
      description: 'Secure your domains',
      status: serviceStatus?.ssl || 'loading',
      actions: ['Issue', 'Renew', 'Revoke']
    },
    {
      title: 'Email Services',
      icon: <Mail className="w-6 h-6 text-[#00ff00]" />,
      description: 'Professional email hosting',
      status: serviceStatus?.email || 'loading',
      actions: ['Setup', 'Configure', 'Upgrade']
    }
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#00ff00] mb-2">Business Operations</h1>
        <p className="text-gray-400">Manage your services and monitor performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Active Services</h3>
              <Settings className="w-5 h-5 text-[#00ff00]" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{serviceStatus?.activeCount || '0'}</div>
            <p className="text-sm text-gray-400">Services running</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Active Users</h3>
              <Users className="w-5 h-5 text-[#00ff00]" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{serviceStatus?.userCount || '0'}</div>
            <p className="text-sm text-gray-400">Total users</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Revenue</h3>
              <CreditCard className="w-5 h-5 text-[#00ff00]" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">${billingInfo?.revenue || '0'}</div>
            <p className="text-sm text-gray-400">Monthly recurring</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Support</h3>
              <MessageSquare className="w-5 h-5 text-[#00ff00]" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{serviceStatus?.ticketCount || '0'}</div>
            <p className="text-sm text-gray-400">Open tickets</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  {service.icon}
                  <div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="text-sm text-gray-400">{service.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">Status</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    service.status === 'active' ? 'bg-green-500/20 text-green-500' :
                    service.status === 'warning' ? 'bg-yellow-500/20 text-yellow-500' :
                    'bg-red-500/20 text-red-500'
                  }`}>
                    {service.status === 'loading' ? 'Checking...' : service.status}
                  </span>
                </div>
                <div className="flex space-x-2">
                  {service.actions.map((action, actionIndex) => (
                    <Button
                      key={actionIndex}
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      {action}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {serviceStatus?.alerts && serviceStatus.alerts.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Active Alerts</h2>
          <div className="space-y-4">
            {serviceStatus.alerts.map((alert: any, index: number) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20"
              >
                <AlertCircle className="w-5 h-5 text-red-500" />
                <div>
                  <h4 className="font-semibold text-red-500">{alert.title}</h4>
                  <p className="text-sm text-gray-400">{alert.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}