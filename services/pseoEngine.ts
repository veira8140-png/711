
import { PSEOPage, PlaybookType } from '../types/pseo';

const COUNTIES = [
  'Nairobi', 'Mombasa', 'Kwale', 'Kilifi', 'Tana River', 'Lamu', 'Taita Taveta', 'Garissa', 'Wajir', 'Mandera', 'Marsabit', 'Isiolo', 'Meru', 'Tharaka-Nithi', 'Embu', 'Kitui', 'Machakos', 'Makueni', 'Nyandarua', 'Nyeri', 'Kirinyaga', 'Murang\'a', 'Kiambu', 'Turkana', 'West Pokot', 'Samburu', 'Trans Nzoia', 'Uasin Gishu', 'Elgeyo-Marakwet', 'Nandi', 'Baringo', 'Laikipia', 'Nakuru', 'Narok', 'Kajiado', 'Kericho', 'Bomet', 'Kakamega', 'Vihiga', 'Bungoma', 'Busia', 'Siaya', 'Kisumu', 'Homa Bay', 'Migori', 'Kisii', 'Nyamira'
];

const SUB_COUNTIES: Record<string, string[]> = {
  'Nairobi': ['Westlands', 'Dagoretti', 'Langata', 'Kibra', 'Ruaraka', 'Embakasi', 'Kasarani', 'Makadara', 'Kamukunji', 'Starehe'],
  'Mombasa': ['Changamwe', 'Jomvu', 'Kisauni', 'Nyali', 'Likoni', 'Mvita'],
  'Kisumu': ['Kisumu Central', 'Kisumu East', 'Kisumu West', 'Seme', 'Muhoroni', 'Nyakach', 'Nyando'],
  'Nakuru': ['Nakuru Town East', 'Nakuru Town West', 'Bahati', 'Rongai', 'Subukia', 'Molo', 'Gilgil', 'Naivasha']
};

const CATEGORIES = [
  { id: 'hardware', name: 'Hardware Shop', icon: '🔨' },
  { id: 'pharmacy', name: 'Pharmacy / Chemist', icon: '💊' },
  { id: 'agrovet', name: 'Agrovet & Farm Supplies', icon: '🌱' },
  { id: 'boutique', name: 'Boutique & Fashion', icon: '👗' },
  { id: 'minimart', name: 'Mini-mart / Retail', icon: '🛒' },
  { id: 'electronics', name: 'Electronics & Tech', icon: '📱' },
  { id: 'restaurant', name: 'Restaurant / Cafe', icon: '🍽️' },
  { id: 'supermarket', name: 'Supermarket', icon: '🏢' },
  { id: 'wholesale', name: 'Wholesale / Distribution', icon: '📦' },
  { id: 'beauty', name: 'Beauty & Cosmetics', icon: '💄' },
  { id: 'spare-parts', name: 'Auto Spare Parts', icon: '⚙️' },
  { id: 'liquor', name: 'Liquor Store', icon: '🍾' }
];

const USE_CASES = [
  'Inventory Management', 'e-TIMS Compliance', 'M-Pesa Reconciliation', 'Staff Tracking', 'Profit Analytics', 'Multi-store Sync'
];

export const getTotalPageCount = () => {
  // 1,450 Wards * 12 Categories * 6 Use Cases
  return 1450 * 12 * 6; 
};

export const generateDynamicPSEOPage = (path: string): PSEOPage | null => {
  const parts = path.split('/').filter(Boolean);
  
  // Pattern: /locations/[county]/[subcounty]/[ward]/best-pos-system-[category]
  if (parts[0] === 'locations' && (parts.length >= 3 && parts.length <= 5)) {
    const countyName = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
    const subCountyName = parts.length >= 4 ? parts[2].charAt(0).toUpperCase() + parts[2].slice(1) : null;
    const wardName = parts.length === 5 ? parts[3].charAt(0).toUpperCase() + parts[3].slice(1) : null;
    
    const lastPart = parts[parts.length - 1];
    const categorySlug = lastPart.replace('best-pos-system-', '');
    const category = CATEGORIES.find(c => c.id === categorySlug);

    if (COUNTIES.includes(countyName) && category) {
      let locationLabel = countyName;
      if (wardName) locationLabel = `${wardName} Ward, ${subCountyName}`;
      else if (subCountyName) locationLabel = `${subCountyName}, ${countyName}`;
      else locationLabel = `${countyName} County`;

      return {
        url: path,
        playbook_type: 'Locations',
        seo: {
          title: `Best POS System for ${category.name}s in ${locationLabel} | Veira Intelligence`,
          meta_description: `Top-rated retail management software for ${category.name}s in ${locationLabel}. Manage inventory, e-TIMS, and M-Pesa payments seamlessly.`,
          primary_keyword: `${category.id} POS ${locationLabel}`,
          secondary_keywords: [`retail software ${locationLabel}`, `e-TIMS ${category.id} Kenya`, `M-Pesa POS integration`],
          search_intent: 'Commercial / Transactional'
        },
        content: {
          h1: `The Definitive Guide to POS Systems for ${category.name}s in ${locationLabel}`,
          introduction: `Operating a ${category.name} in ${locationLabel} requires precision and speed. From the bustling market centers to the quiet suburbs, business owners in ${locationLabel} are upgrading to Veira Intelligence to stay ahead of the competition and remain KRA compliant.`,
          sections: [
            {
              heading: `Why ${locationLabel} Business Owners Choose Veira`,
              body: `In ${locationLabel}, the retail landscape is evolving. Customers expect fast checkouts and digital payment options like M-Pesa. Veira provides an all-in-one solution that handles high-volume transactions while keeping your inventory records accurate to the last item. \n\nWhether you are managing a single shop or multiple branches across ${locationLabel}, our cloud-based dashboard gives you real-time visibility into your sales, staff performance, and stock levels.`
            },
            {
              heading: `Compliance and Local Trends in ${locationLabel}`,
              body: `With the KRA's e-TIMS mandate now in full effect, businesses in ${locationLabel} cannot afford to use manual receipting. Veira's integrated VSCU automates your tax reporting, ensuring every sale is transmitted to KRA instantly. This reduces audit risk and saves you hours of manual paperwork every month.`
            }
          ],
          faq: [
            {
              question: `Is Veira available in all parts of ${locationLabel}?`,
              answer: `Yes, Veira is a cloud-based system that works anywhere in ${locationLabel} with an internet connection. It also has an offline mode for areas with fluctuating network.`
            },
            {
              question: `How does M-Pesa work with the POS in ${locationLabel}?`,
              answer: `Veira integrates directly with your M-Pesa Till or Paybill. When a customer pays, the transaction is automatically reconciled in your sales report.`
            }
          ],
          call_to_action: `Transform your ${category.name} in ${locationLabel} today.`
        },
        schema: {
          type: 'LocalBusiness',
          structured_data: {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `Veira ${locationLabel} ${category.name} Solutions`,
            "address": {
              "@type": "PostalAddress",
              "addressRegion": countyName,
              "addressCountry": "KE"
            }
          }
        },
        internal_links: ['/pricing', '/directory/retail-tech-providers-kenya'],
        related_pages: [`/locations/nairobi/best-pos-system-${category.id}`, `/locations/mombasa/best-pos-system-${category.id}`],
        data_requirements_used: [`locations: ${locationLabel}`, `categories: ${category.name}`]
      };
    }
  }

  return null;
};

export const getAllCounties = () => COUNTIES;
export const getAllCategories = () => CATEGORIES;
export const getSubCounties = (county: string) => SUB_COUNTIES[county] || [];
