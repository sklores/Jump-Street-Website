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
    headlineLineOne: 'FROM LEASE TO OPENING,',
    headlineLineTwo: 'WE REPRESENT THE OWNER.',
    subheadline:
      'Jump Street acts on the owner’s side — aligning strategy, real estate, and buildouts to protect your deal, your budget, and your timeline.',
    primaryCta: { label: 'Start a Feasibility Review', href: '/contact' },
    secondaryCta: { label: 'Learn How We Work', href: '#how-engagements-work' },
  },
  servicesPreview: [
    {
      title: 'STRATEGY',
      bullets: ['Feasibility review', 'Concept & scope validation', 'Budget validation', 'Execution roadmap'],
      href: '/services',
    },
    {
      title: 'REAL ESTATE',
      bullets: ['Site selection', 'Lease review & risk identification', 'Deal structure alignment'],
      href: '/services',
    },
    {
      title: 'BUILDOUTS',
      bullets: ['Owner-side oversight', 'GC coordination', 'Budget accountability', 'Timeline protection'],
      href: '/services',
    },
  ],
  selectedWork: [
    {
      name: 'Lakeside Retail Launch',
      type: 'Retail',
      location: 'Austin, TX',
      role: 'Owner-side representation',
      outcome: 'Avoided costly lease terms and held budget through permitting.',
    },
    {
      name: 'Harbor Hospitality Buildout',
      type: 'Hospitality',
      location: 'Charleston, SC',
      role: 'Owner’s rep',
      outcome: 'Aligned contractor scope early and opened on the committed timeline.',
    },
    {
      name: 'Summit Medical Tenant Fit-Out',
      type: 'Medical',
      location: 'Nashville, TN',
      role: 'Lease support',
      outcome: 'Flagged risk in lease language and protected owner flexibility at turnover.',
    },
    {
      name: 'Midtown Flagship Rollout',
      type: 'Retail',
      location: 'Charlotte, NC',
      role: 'Owner-side representation',
      outcome: 'Kept decision-makers aligned and prevented schedule drift during approvals.',
    },
  ],
  whoWeWorkWith: {
    title: 'Who We Work With',
    body:
      'Jump Street works with founders and operators actively pursuing a retail or hospitality location who want owner-side representation from feasibility through opening.',
    qualifier:
      'Not a fit for early idea exploration or casual browsing conversations — we partner with operators ready to commit to execution and results.',
  },
  process: {
    title: 'How Engagements Work',
    steps: [
      {
        title: 'Feasibility & Risk Review',
        detail: 'Define scope, hazards, and alignment',
      },
      {
        title: 'Structured Engagement',
        detail: 'Fixed scope agreement, clear deliverables',
      },
      {
        title: 'Owner-Side Oversight',
        detail: 'Coordinate team, protect budget, track milestones',
      },
    ],
  },
  testimonials: {
    title: 'What Operators Say',
    quotes: [
      '“Steven helped us avoid a six-figure lease mistake and kept the build on schedule. Worth every dollar.” — Client Name, Brand / City',
      '“Jump Street protected us from scope creep and kept everyone accountable from lease through opening day.” — Client Name, Brand / City',
    ],
  },
  proofStrip: ['Licensed', 'Insured', 'Operator-led'],
  finalCta: {
    title: 'Serious about opening the right location with owner-side protection?',
    action: { label: 'Start a Feasibility Review', href: '/contact' },
    secondaryAction: { label: 'Book Owner-Side Strategy Call', href: '/contact' },
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
