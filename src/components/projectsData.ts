// Define project types and mock data
export type ProjectCategory = 'All' | 'Websites' | 'Applications' | 'Mobile';

export interface Project {
  title: string;
  description: string;
  image: string;
  images: string[];
  height: string;
  category: ProjectCategory;
  techStack: string[];
  demoLink: string;
  githubLink: string;
  duration: string;
  achievements: string[];
  longer_description: string;
}

export const projects: Project[] = [
  // *********************************************
  // Blogify
  // *********************************************
  {
    title: 'Blogify',
    description: 'Blog System Website',
    image: 'images/blogify/blogify.png',
    images: [
      'images/blogify/1.png',
      'images/blogify/2.png',
      'images/blogify/3.png',
      'images/blogify/4.png',
      'images/blogify/5.png',
      'images/blogify/6.png',
      'images/blogify/7.png',
    ],
    height: '400px',
    category: 'Websites',
    techStack: ['Next.js', 'Nest.js', 'MySQL', 'Amazon S3'],
    demoLink: 'https://seifeslimene.github.io/blogify',
    githubLink: 'https://github.com/SeifESlimene/blogify',
    duration: '5 Months',
    achievements: [
      'Article and Page Management for efficient creation, editing, and organization.',
      'Knowledge Booklet to compile and share informational brochures.',
      'Comment and Email Management for moderating discussions and handling email communications.',
      'Statistics for insights into website traffic and user interaction.',
      'File Management and System Settings to streamline digital storage and customize system preferences.',
    ],
    longer_description:
      'Blogify is an advanced open source Content Management System (CMS) utilizing top technologies for optimal performance',
  },
  // *********************************************
  // Mosaic
  // *********************************************
  {
    title: 'Mosaic',
    description: 'Social Media Website',

    image: 'images/mosaic/mosaic.png',
    images: [
      'images/mosaic/1.png',
      'images/mosaic/2.png',
      'images/mosaic/3.png',
    ],
    height: '400px',
    category: 'Websites',
    techStack: ['Next.js', 'Tailwind CSS', 'React Query', 'Postgres'],
    demoLink: 'https://seifeslimene.github.io/mosaic',
    githubLink: 'https://github.com/SeifESlimene/mosaic',
    duration: '4 Months',
    achievements: [
      'Implemented features including user registration/login.',
      'Implemented CRUD operations for posts with mention options, comments, likes, new reactions introduction.',
      'Implemented a dedicated profile page, follower system, notifications.',
      'Implemented a responsive design for optimal user experience across devices.',
    ],
    longer_description:
      "Mosaic is a social media web platform, leveraging technologies such as Next.js for server-side rendering, Neon's serverless driver for PostgreSQL, Clerk for secure authentication, React Query for state management, TailwindCSS for custom design development, and Shadcn/UI for UI components, deployed on Vercel and Neon.",
  },

  // *********************************************
  // WebShop
  // *********************************************
  {
    title: 'WebShop',
    description: 'E-Commerce Website',
    image: 'images/webshop/webshop.png',
    images: [
      'images/webshop/1.png',
      'images/webshop/2.png',
      'images/webshop/3.png',
    ],
    category: 'Websites',
    height: '400px',
    techStack: ['Next.js', 'Tailwind CSS', 'RTK', 'Redux', 'JWT'],
    demoLink: 'https://seifeslimene.github.io/webshop',
    githubLink: 'https://github.com/SeifESlimene/webshop',
    duration: '4 Months',
    achievements: [
      '•Key user features: Homepage, multi-level categories, product details, account functions (login/registration, profile, order/review history), search, cart, checkout, address management, and recent visit tracking',
      'Admin features: Admin login, Admin Center, management of users, categories (with tree structure), products (specifications and management), orders, reviews, and content (sliders and banners).',
    ],
    longer_description:
      'WebShop is An open-source e-commerce platform with distinct user and admin interfaces.',
  },
];
