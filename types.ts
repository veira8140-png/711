
export interface BrandOutput {
  name: string;
  tagline: string;
  mission: string;
  keywords: string[];
}

export interface CopyOutput {
  title: string;
  content: string;
}

export type FeatureMode = 'brand' | 'visual' | 'copy' | 'chat';
