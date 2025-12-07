// constants/links.ts

// Base URL (change once → used everywhere)
const BASE = 'https://automationexercise.com';

export const URLS = {
  BASE,

  // Public (no login required) pages
  pages: {
    home: `${BASE}/`,
    login: `${BASE}/login`,
    signup: `${BASE}/signup`
  },

  // Logged-in user pages
  user: {
    dashboard: `${BASE}/dashboard`,
    profile: `${BASE}/profile`,
    settings: `${BASE}/settings`,
    orders: `${BASE}/account/orders`,    // example extra
  },

  // Admin section (example)
  admin: {
    dashboard: `${BASE}/admin/dashboard`,
    users: `${BASE}/admin/users`,
    settings: `${BASE}/admin/settings`,
  },

  // API endpoints
  api: {
    register: `${BASE}/api/register`,
    login: `${BASE}/api/login`,
    updateProfile: `${BASE}/api/update-profile`,
    deleteAccount: `${BASE}/api/delete-account`,
  }
} as const;

// Full type support: URLS.pages.home, URLS.api.register, etc.
export type URLStructure = typeof URLS;