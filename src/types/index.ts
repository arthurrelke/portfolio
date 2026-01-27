/**
 * Core TypeScript interfaces for GIS & Urban Planning Portfolio
 * 
 * This portfolio showcases professional work in:
 * - Geographic Information Systems (GIS) Analysis
 * - Urban Planning and Design
 * - Spatial Data Visualization
 * - Computer Vision Applied to Urban Studies
 * - Architecture and Urban Development
 * 
 * Based on SPECIFICATION.md data model requirements
 */

export type ProjectCategory = 'gis-analysis' | 'urban-planning' | 'data-visualization' | 'spatial-analysis' | 'computer-vision' | 'Web Development' | 'GIS' | 'architecture';

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
  gridWith?: string; // ID da próxima imagem para formar grid de 2 colunas
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  client?: string;
  tools?: string;  // Ferramentas GIS usadas (QGIS, ArcGIS, Python, etc)
  location?: string;
  slug: string;
}

/**
 * Professional profile information for GIS analyst and urban planner
 */
export interface ProfileInfo {
  name: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  approach: string;
  awards: string[];
  clients: string[];
  education: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    behance?: string;
    github?: string;
  };
  portraitImage: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'gis-analysis' | 'urban-planning' | 'spatial-data' | 'consulting' | 'other';
  message: string;
  timestamp: Date;
}
