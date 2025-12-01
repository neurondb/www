/**
 * Branding Configuration
 * Branding elements and visual identity
 */

import { siteConfig } from './site'

export const brandingConfig = {
  name: siteConfig.name,
  logo: '/logo.png',
  colors: {
    primary: '#4f46e5',
    secondary: '#7c3aed',
    accent: '#06b6d4',
  },
  social: [
    {
      name: 'GitHub',
      href: siteConfig.github,
      icon: 'github',
    },
    {
      name: 'Twitter',
      href: siteConfig.twitter,
      icon: 'twitter',
    },
    {
      name: 'LinkedIn',
      href: siteConfig.linkedin,
      icon: 'linkedin',
    },
  ],
}

export default brandingConfig
