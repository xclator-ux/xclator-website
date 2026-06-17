// ── Single source of truth for Xclator AI LLC company details ──

export const COMPANY = {
  legalName: "Xclator AI LLC",
  shortName: "Xclator",
  email: "contact@xclator.com",
  phone: "+1 917 920 8834",
  phoneHref: "tel:+19179208834",
  address: {
    line1: "30 N Gould St, Ste 65282",
    city: "Sheridan",
    state: "WY",
    zip: "82801",
    country: "USA",
    full: "30 N Gould St, Ste 65282, Sheridan, WY 82801, USA",
  },
  jurisdiction: "Wyoming, USA",
  foundedYear: 2026,
  teamSize: 6,
  founder: "Abdul Moiz",
  socials: {
    linkedin: "https://www.linkedin.com/in/abdulmoiz-xclator/",
    whatsapp: "https://wa.me/923019172774",
  },
  legalLastUpdated: "17 June 2026",
} as const;

export type Company = typeof COMPANY;
