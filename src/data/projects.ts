export type ProjectStatus = 'Live' | 'In development' | 'Researching' | 'Experimenting'

export type Project = {
  number: string
  title: string
  category: string
  description: string
  status: ProjectStatus
  year: string
  slug: string
  featured?: boolean
  externalUrl?: string
  note: string
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'Unfinished, After Hours',
    category: 'Digital product',
    description: 'A quieter corner of the internet for people navigating burnout. Built around gentle tools, reflection and the permission to slow down.',
    status: 'Live',
    year: '2026',
    slug: 'unfinished-after-hours',
    featured: true,
    externalUrl: 'https://unfinishedafter.com',
    note: 'An independently developed product exploring the intersection of wellbeing, thoughtful UX and sustainable business.',
  },
  {
    number: '02',
    title: 'Publishing Intelligence',
    category: 'Data & analytics',
    description: 'An exploration of the signals behind the book business: sales, genres, audience behaviour and the stories hidden in the numbers.',
    status: 'Researching',
    year: '2026',
    slug: 'publishing-intelligence',
    note: 'Planned tools include SQL, Python and Power BI. Scope and data sources are still being validated.',
  },
  {
    number: '03',
    title: 'Music Industry Analytics',
    category: 'Data & analytics',
    description: 'A data-led look at streaming trends, artist growth, audience engagement and the economics behind music royalties.',
    status: 'Researching',
    year: '2026',
    slug: 'music-industry-analytics',
    note: 'Early concept. The project will distinguish publicly available streaming indicators from estimated royalty scenarios.',
  },
  {
    number: '04',
    title: 'Creative Content Management',
    category: 'Business systems',
    description: 'A proposed workspace for managing manuscripts, contributors, editorial stages, rights and publishing deadlines.',
    status: 'Experimenting',
    year: '2026',
    slug: 'creative-content-management',
    note: 'Early product concept exploring workflow design, relational data and operational visibility.',
  },
  {
    number: '05',
    title: 'Birthday Website Platform',
    category: 'Digital product',
    description: 'A reusable way to create personal, password-protected celebration websites for the people who matter.',
    status: 'In development',
    year: '2026',
    slug: 'birthday-website-platform',
    note: 'A separate application concept. It will remain independently deployed rather than becoming part of this portfolio.',
  },
  {
    number: '06',
    title: 'Motorsport × Hockey',
    category: 'Industry experiments',
    description: 'Exploring how data products and practical analytics could help small teams and clubs make better decisions.',
    status: 'Experimenting',
    year: '2026',
    slug: 'motorsport-hockey',
    note: 'Early venture exploration focused on accessible analytics for specialist sports communities.',
  },
]

export const featuredProject = projects[0]
