// Type definitions for the project

// Common interface for navigation links
export interface NavLink {
  url: string;
  text: string;
  ariaLabel?: string;
  target?: string;
}

// Type for social media links
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

// Type for tech stack icons
export interface TechIcon {
  name: string;
  icon: string;
}

// Type for project data
export interface Project {
  title: string;
  description: string;
  imageUrl?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

// Type for contact information
export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
}

// Generic SEO type for metadata
export interface SEOMetadata {
  title: string;
  description: string;
  canonicalUrl?: string;
  image?: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}
