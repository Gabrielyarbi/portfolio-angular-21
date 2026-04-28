export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  featured?: boolean;
  image?: string;
  links?: {
    demo?: string;
    repo?: string;
  };
}