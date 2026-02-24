
export type PlaybookType = 
  | 'Templates' | 'Curation' | 'Conversions' | 'Comparisons' 
  | 'Examples' | 'Locations' | 'Personas' | 'Integrations' 
  | 'Glossary' | 'Translations' | 'Directory' | 'Profiles';

export interface SEOData {
  title: string;
  meta_description: string;
  primary_keyword: string;
  secondary_keywords: string[];
  search_intent: string;
}

export interface ContentSection {
  heading: string;
  body: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PSEOPage {
  url: string;
  playbook_type: PlaybookType;
  seo: SEOData;
  content: {
    h1: string;
    introduction: string;
    sections: ContentSection[];
    faq: FAQItem[];
    call_to_action: string;
    // Playbook specific fields
    template_data?: {
      download_url?: string;
      variations: string[];
      instructions: string;
    };
    comparison_data?: {
      matrix: { feature: string; val1: string; val2: string }[];
      verdict: string;
    };
    location_data?: {
      city: string;
      region: string;
      local_trends: string;
    };
  };
  schema: {
    type: string;
    structured_data: any;
  };
  internal_links: string[];
  related_pages: string[];
  data_requirements_used: string[];
}
