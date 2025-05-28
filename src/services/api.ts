import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchDomainStatus = async () => {
  const response = await api.get('/domains/status');
  return response.data;
};

export const fetchServiceStatus = async () => {
  const response = await api.get('/services/status');
  return response.data;
};

export const fetchBillingInfo = async () => {
  const response = await api.get('/billing/info');
  return response.data;
};

// Namecheap API Integration
export const namecheapApi = {
  registerDomain: async (domain: string) => {
    const response = await api.post('/domains/register', { domain });
    return response.data;
  },

  transferDomain: async (domain: string) => {
    const response = await api.post('/domains/transfer', { domain });
    return response.data;
  },

  configureDNS: async (domain: string, records: any[]) => {
    const response = await api.post(`/domains/${domain}/dns`, { records });
    return response.data;
  },

  issueSSL: async (domain: string, type: string) => {
    const response = await api.post(`/ssl/issue`, { domain, type });
    return response.data;
  }
};

// Take.app Integration
export const takeAppApi = {
  createApp: async (config: any) => {
    const response = await api.post('/apps/create', config);
    return response.data;
  },

  deployApp: async (appId: string, version: string) => {
    const response = await api.post(`/apps/${appId}/deploy`, { version });
    return response.data;
  },

  getAnalytics: async (appId: string) => {
    const response = await api.get(`/apps/${appId}/analytics`);
    return response.data;
  }
};

// Billing and Subscriptions
export const billingApi = {
  createSubscription: async (plan: string) => {
    const response = await api.post('/billing/subscribe', { plan });
    return response.data;
  },

  updateSubscription: async (subscriptionId: string, updates: any) => {
    const response = await api.patch(`/billing/subscriptions/${subscriptionId}`, updates);
    return response.data;
  },

  cancelSubscription: async (subscriptionId: string) => {
    const response = await api.delete(`/billing/subscriptions/${subscriptionId}`);
    return response.data;
  }
};

// Support System
export const supportApi = {
  createTicket: async (ticket: any) => {
    const response = await api.post('/support/tickets', ticket);
    return response.data;
  },

  getTickets: async () => {
    const response = await api.get('/support/tickets');
    return response.data;
  },

  updateTicket: async (ticketId: string, updates: any) => {
    const response = await api.patch(`/support/tickets/${ticketId}`, updates);
    return response.data;
  }
};