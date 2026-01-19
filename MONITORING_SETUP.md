# Monitoring Setup Guide

This document describes how to set up monitoring and error tracking for the NeuronDB website.

## Vercel Analytics

Vercel Analytics is automatically enabled when deployed on Vercel. To view analytics:

1. Go to your Vercel dashboard
2. Navigate to your project
3. Click on the "Analytics" tab
4. Enable Web Vitals tracking

No additional configuration is needed - Vercel automatically tracks:
- Core Web Vitals (LCP, FID, CLS)
- Page views
- Performance metrics

## Sentry Error Tracking (Optional)

To set up Sentry for error tracking:

1. Create a Sentry account at https://sentry.io
2. Create a new project for your Next.js application
3. Install Sentry SDK:
   ```bash
   npm install @sentry/nextjs
   ```
4. Run the Sentry wizard:
   ```bash
   npx @sentry/wizard@latest -i nextjs
   ```
5. Add environment variables to Vercel:
   - `SENTRY_DSN` - Your Sentry DSN
   - `SENTRY_ORG` - Your Sentry organization
   - `SENTRY_PROJECT` - Your Sentry project name
   - `SENTRY_AUTH_TOKEN` - Your Sentry auth token

The wizard will automatically configure:
- `sentry.client.config.ts`
- `sentry.server.config.ts`
- `sentry.edge.config.ts`
- `next.config.js` modifications

## Bundle Analysis

To analyze bundle size:

```bash
npm run analyze
```

This will:
1. Build the application with bundle analysis enabled
2. Generate a report showing bundle sizes
3. Open an interactive visualization in your browser

### Optimization Recommendations

Based on the audit, consider:
1. **Lazy load animation libraries**: `framer-motion` and `gsap` are large (~70KB combined)
   - Only import animations where needed
   - Use dynamic imports for animation components
   
2. **Code splitting**: Already implemented for:
   - `HomeDashboardDemo`
   - `HomeProducts`
   - `HomeModules`
   - Syntax highlighting libraries

3. **Tree shaking**: Ensure unused exports are removed
   - Check that all imports are used
   - Use named imports instead of default imports where possible

## Performance Monitoring

### Core Web Vitals

Monitor these metrics:
- **LCP (Largest Contentful Paint)**: Should be < 2.5s
- **FID (First Input Delay)**: Should be < 100ms
- **CLS (Cumulative Layout Shift)**: Should be < 0.1

### API Performance

Monitor API route performance:
- Response times for `/api/comments`
- Rate limit hit rates
- Error rates

### Database Performance

Monitor Vercel Postgres:
- Connection pool usage
- Query execution times
- Database size

## Uptime Monitoring

Consider setting up uptime monitoring with:
- **UptimeRobot** (free tier available)
- **Pingdom**
- **StatusCake**

Configure to check:
- Homepage availability
- API endpoint health
- Response times

## Logging

Current logging setup:
- Console errors in development
- Production errors should be sent to Sentry (when configured)
- API errors are logged but not exposed to clients

To improve logging:
1. Set up Sentry (see above)
2. Use structured logging in production
3. Set up log aggregation (e.g., Datadog, LogRocket)
