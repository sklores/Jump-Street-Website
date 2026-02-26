export const siteContent = {
  brand: {
    name: 'Jump Street',
    shortName: 'JUMP STREET',
    tagline: 'Commercial real estate and construction, built around execution.',
  },
  nav: [
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
  socials: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
  hero: {
    headlineStart: 'From deal strategy to site delivery,',
    highlightedPhrase: 'we keep projects moving.',
    subheadline:
      'Jump Street partners with owners, operators, and investors to evaluate opportunities, manage risk, and execute with precision.',
    primaryCta: { label: 'Start a Project', href: '/contact' },
    secondaryCta: { label: 'View Work', href: '/work' },
  },
  servicesPreview: [
    {
      title: 'Commercial Real Estate',
      bullets: [
        'Site selection and market underwriting',
        'Lease, buy, and reposition advisory',
        'Portfolio strategy for growth and efficiency',
      ],
      href: '/services',
    },
    {
      title: 'Construction Services',
      bullets: [
        'Preconstruction budgeting and scheduling',
        'General contracting and owner representation',
        'Renovation, tenant improvement, and closeout',
      ],
      href: '/services',
    },
  ],
  featuredWork: [
    { title: 'Riverside Commerce Center', location: 'Nashville, TN' },
    { title: 'Maple District Buildout', location: 'Charlotte, NC' },
    { title: 'Harbor Point Reposition', location: 'Tampa, FL' },
  ],
  process: ['Evaluate', 'Plan', 'Execute'],
  proofStrip: ['Licensed', 'Insured', 'Operator-led'],
  finalCta: {
    title: 'Need a partner who can move from vision to delivery?',
    action: { label: 'Talk to Jump Street', href: '/contact' },
  },
  servicesPage: {
    intro:
      'We support commercial projects from first-pass underwriting through final turnover. Our role flexes to match your team, timeline, and risk profile.',
    sections: [
      {
        title: 'Commercial Real Estate',
        scope: [
          'Acquisition and disposition support',
          'Market and rent comp analysis',
          'Lease negotiations and occupancy strategy',
          'Redevelopment feasibility and pro forma review',
          'Capital planning and phased execution roadmaps',
        ],
      },
      {
        title: 'Construction Services',
        scope: [
          'Site and existing-condition due diligence',
          'Preconstruction estimating and bid leveling',
          'Procurement, scheduling, and trade coordination',
          'Quality control, safety oversight, and reporting',
          'Punch list management and turnover documentation',
        ],
      },
    ],
  },
  workPage: {
    projects: [
      {
        name: 'Southline Retail Conversion',
        location: 'Atlanta, GA',
        category: 'Construction',
      },
      {
        name: 'West End Office Lease-Up',
        location: 'Denver, CO',
        category: 'CRE',
      },
      {
        name: 'Elm Street Medical Fit-Out',
        location: 'Austin, TX',
        category: 'Construction',
      },
      {
        name: 'Northshore Logistics Expansion',
        location: 'Savannah, GA',
        category: 'CRE',
      },
      {
        name: 'Union Market Tenant Improvements',
        location: 'Washington, DC',
        category: 'Construction',
      },
      {
        name: 'Crescent Point Repositioning',
        location: 'Raleigh, NC',
        category: 'CRE',
      },
    ],
  },
  aboutPage: {
    positioning:
      'Jump Street is a founder-led commercial real estate and construction partner built for teams that need practical decisions and disciplined execution.',
    howWeWork: [
      'We start with facts: market conditions, constraints, and clear business goals.',
      'We define scope, ownership, and schedule early to avoid downstream surprises.',
      'We communicate in plain language and keep stakeholders aligned.',
    ],
    founderNote:
      'Founder-led means senior involvement from first call to project closeout.',
  },
  contactPage: {
    direct: {
      email: 'hello@jumpstreet.co',
      phone: '(000) 000-0000',
      office: '123 Main Street, Suite 200, Your City, ST',
    },
  },
};

export type SiteContent = typeof siteContent;
