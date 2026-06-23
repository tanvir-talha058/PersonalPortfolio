// Vercel Web Analytics
import { inject } from '../node_modules/@vercel/analytics/dist/index.mjs';

// Initialize Vercel Analytics
inject({
  mode: 'auto', // auto-detect environment (production/development)
  debug: false  // set to true for debugging
});
