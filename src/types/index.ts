// SOLID: Interface Segregation Principle - Interfaces específicas y bien definidas
import { type ReactNode } from 'react';

export interface Technology {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
  level: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  metrics: ProjectMetric[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  color: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  icon: string;
}

export interface BentoCardProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  hoverable?: boolean;
}

export interface AnimationConfig {
  duration: number;
  delay: number;
  easing: string;
}
