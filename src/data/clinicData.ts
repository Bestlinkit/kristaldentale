export interface DentalService {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  shortDescription: string;
  description: string;
  image: string;
  whatToExpect: string[];
  benefits: string[];
}

export const CLINIC_INFO = {
  name: "Kristal Dentale Clinic",
  alternateName: "Kristal Dental Clinic Akure",
  leadClinician: {
    name: "Dr. Olupona",
    title: "Lead Clinician & Practice Director",
    role: "Lead Clinician & Practice Director",
    image: "/images/ceo.jpg",
    quote: "Our goal is simple — when you visit us, we want you to feel relaxed, heard, and cared for. We explain your treatment options clearly and provide appropriate care based on your individual needs."
  },
  phone: "08134280545",
  phoneDisplay: "0813 428 0545",
  whatsappUrl: "https://wa.me/2348134280545?text=Hello%20Kristal%20Dentale%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment.",
  email: "admin@kristaldentaleclinic.com.ng",
  infoEmail: "info@kristaldentaleclinic.com.ng",
  domain: "kristaldentaleclinic.com.ng",
  address: {
    line1: "116 Idanre Road",
    line2: "Beside Idanre Garage Shopping Complex (Robino Global)",
    area: "Oke Aro",
    city: "Akure",
    state: "Ondo State",
    country: "Nigeria",
    full: "116 Idanre Road, Beside Idanre Garage Shopping Complex (Robino Global), Oke Aro, Akure, Ondo State, Nigeria."
  },
  hours: {
    weekdays: "8:30 AM – 5:30 PM",
    saturday: "9:00 AM – 4:00 PM",
    sunday: "Closed / Emergencies"
  }
};

export const SERVICES_DATA: DentalService[] = [
  {
    slug: "orthodontics",
    number: "01",
    title: "Orthodontics",
    tagline: "Alignment & Bite Care",
    shortDescription: "Treatment to improve tooth alignment, spacing and bite using appropriate orthodontic appliances.",
    description: "Orthodontic treatment helps improve the alignment of teeth and, where appropriate, the relationship between the upper and lower teeth. At Kristal Dentale Clinic, treatment begins with an assessment to understand your teeth, bite and individual needs before discussing suitable options.",
    image: "/images/services/orthodontics.jpg",
    whatToExpect: [
      "Consultation — Your dentist examines your teeth and discusses your concerns.",
      "Assessment — Your dental condition is assessed and appropriate treatment options are explained.",
      "Treatment — Treatment is carried out according to the agreed plan.",
      "Follow-Up — You receive appropriate aftercare and follow-up guidance."
    ],
    benefits: [
      "Helps improve alignment for crowded or spaced teeth.",
      "Supports better bite function and easier chewing.",
      "Makes daily oral hygiene and brushing more manageable."
    ]
  },
  {
    slug: "bridges-and-crowns",
    number: "02",
    title: "Bridges & Crowns",
    tagline: "Tooth Restoration",
    shortDescription: "Restorative solutions for damaged teeth and replacement of missing teeth.",
    description: "Crowns can be used to restore and protect damaged or weakened teeth, while bridges can replace one or more missing teeth by using neighbouring teeth or other suitable support. A consultation allows the dentist to assess your teeth and discuss whether a crown or bridge is appropriate for you.",
    image: "/images/services/bridges-and-crowns.jpg",
    whatToExpect: [
      "Consultation — Your dentist examines the affected teeth and discusses restorative options.",
      "Assessment — Tooth condition and surrounding bone/gums are evaluated for bridge or crown placement.",
      "Treatment — Careful preparation, impression taking, and secure fitting of the custom restoration.",
      "Follow-Up — Bite check and maintenance instructions to support long-term durability."
    ],
    benefits: [
      "Protects weakened or broken teeth from further breakdown.",
      "Helps restore normal chewing and clear speech.",
      "Prevents adjacent teeth from shifting into empty spaces."
    ]
  },
  {
    slug: "veneers",
    number: "03",
    title: "Veneers",
    tagline: "Smile Enhancement",
    shortDescription: "Cosmetic dental treatment designed to improve the appearance of selected teeth.",
    description: "Veneers are thin coverings placed over the front surface of selected teeth to improve their appearance. They may be considered for certain concerns involving tooth colour, shape or minor imperfections. A dental assessment is necessary to determine whether veneers are suitable.",
    image: "/images/services/veneers.jpg",
    whatToExpect: [
      "Consultation — Your dentist discusses your cosmetic goals and evaluates your dental suitability.",
      "Assessment — Tooth shape, enamel health, and bite are carefully assessed.",
      "Treatment — Subtle tooth preparation, custom shade matching, and precise bonding.",
      "Follow-Up — Verification of comfort, bite relationship, and guidance on caring for your veneers."
    ],
    benefits: [
      "Improves the appearance of deeply stained or discoloured teeth.",
      "Helps mask minor chips, uneven edges or slight gaps.",
      "Provides a natural-looking cosmetic enhancement."
    ]
  },
  {
    slug: "scaling-and-polishing",
    number: "04",
    title: "Scaling & Polishing",
    tagline: "Professional Cleaning",
    shortDescription: "Professional cleaning to remove plaque and tartar and support healthier gums.",
    description: "Professional scaling and polishing helps remove plaque and hardened tartar that regular brushing may not remove effectively. Regular professional cleaning can support healthier gums and overall oral hygiene.",
    image: "/images/services/scaling-and-polishing.jpg",
    whatToExpect: [
      "Consultation — Review of your oral hygiene routine and gum health.",
      "Assessment — Examination of plaque, tartar deposits, and gum pocketing.",
      "Treatment — Careful removal of plaque and tartar using dental instruments, followed by polishing.",
      "Follow-Up — Helpful guidance on maintaining daily oral hygiene and scheduling regular cleanings."
    ],
    benefits: [
      "Removes hardened tartar that regular brushing cannot reach.",
      "Supports gum health and helps prevent gum irritation.",
      "Leaves teeth feeling clean and refreshed."
    ]
  },
  {
    slug: "teeth-whitening",
    number: "05",
    title: "Teeth Whitening",
    tagline: "Smile Brightening",
    shortDescription: "Professional teeth whitening for patients looking to brighten the appearance of their smile.",
    description: "Professional teeth whitening can help reduce certain types of tooth staining and brighten the appearance of your smile. During your consultation, the dentist can assess the condition of your teeth and discuss whether whitening is appropriate.",
    image: "/images/services/teeth-whitening.jpg",
    whatToExpect: [
      "Consultation — Your dentist examines your teeth and discusses your shade goals.",
      "Assessment — Evaluation of stain types, enamel condition, and existing restorations.",
      "Treatment — Controlled application of professional whitening gel with gum protection.",
      "Follow-Up — Practical aftercare advice to help maintain your results."
    ],
    benefits: [
      "Helps reduce surface discolouration from food, drinks, and aging.",
      "Carried out safely under dental supervision.",
      "Brightens the smile without damaging healthy enamel."
    ]
  },
  {
    slug: "cosmetic-dentistry",
    number: "06",
    title: "Cosmetic Dentistry",
    tagline: "Smile Aesthetics",
    shortDescription: "A range of treatments focused on improving the appearance of the teeth and smile.",
    description: "Cosmetic dentistry focuses on improving the appearance of the teeth and smile through carefully selected treatments. Treatment options depend on your individual dental condition, goals and clinical assessment.",
    image: "/images/services/cosmetic-dentistry.jpg",
    whatToExpect: [
      "Consultation — Your dentist takes time to understand your concerns and what you want to achieve.",
      "Assessment — Clinical examination of your teeth, gums, and facial smile line.",
      "Treatment — Execution of the agreed cosmetic procedure according to the clinical plan.",
      "Follow-Up — Review of cosmetic results and guidance on long-term smile maintenance."
    ],
    benefits: [
      "Addresses chipped, uneven, or irregularly shaped teeth.",
      "Helps close small spaces and smooth tooth contours.",
      "Focuses on subtle, natural-looking results."
    ]
  },
  {
    slug: "dental-implants",
    number: "07",
    title: "Dental Implants",
    tagline: "Tooth Replacement",
    shortDescription: "Tooth replacement treatment using dental implants where clinically appropriate.",
    description: "Dental implants are used to replace missing teeth and can provide a stable foundation for a replacement tooth. Implant treatment requires proper assessment and planning to determine whether it is appropriate for the patient.",
    image: "/images/services/dental-implants.jpg",
    whatToExpect: [
      "Consultation — Discussion of your missing tooth history and health background.",
      "Assessment — Clinical and diagnostic assessment of jawbone density and gum suitability.",
      "Treatment — Careful surgical placement of the implant fixture and subsequent crown attachment.",
      "Follow-Up — Ongoing monitoring of osseointegration, gum health, and biting function."
    ],
    benefits: [
      "Provides a secure, permanent anchor for missing tooth replacement.",
      "Preserves adjacent teeth without requiring bridge alteration.",
      "Supports natural chewing ability and jawbone structure."
    ]
  },
  {
    slug: "tooth-extraction",
    number: "08",
    title: "Tooth Extraction",
    tagline: "Tooth Removal",
    shortDescription: "Careful removal of teeth when extraction is necessary following clinical assessment.",
    description: "A tooth may sometimes need to be removed when it cannot be safely restored or when removal is recommended as part of a wider treatment plan. Our team will assess the tooth and explain the reason for extraction and the available options before treatment.",
    image: "/images/services/tooth-extraction.jpg",
    whatToExpect: [
      "Consultation — Your dentist evaluates the problematic tooth and explains clinical findings.",
      "Assessment — Examination and diagnostic assessment to determine the extraction approach.",
      "Treatment — Careful tooth removal with appropriate local anesthesia for patient comfort.",
      "Follow-Up — Detailed post-extraction care instructions and discussion of replacement options if appropriate."
    ],
    benefits: [
      "Relieves discomfort from severely broken or unrestorable teeth.",
      "Prevents infection from spreading to surrounding tissues.",
      "Performed with appropriate pain management and local anesthesia."
    ]
  },
  {
    slug: "dental-filling",
    number: "09",
    title: "Dental Fillings",
    tagline: "Cavity Restoration",
    shortDescription: "Restoration of teeth affected by cavities or minor damage.",
    description: "Dental fillings are commonly used to restore teeth affected by cavities or minor damage. After examining the affected tooth, the dentist can recommend the appropriate restoration and explain what to expect during treatment.",
    image: "/images/services/dental-filling.jpg",
    whatToExpect: [
      "Consultation — Your dentist examines the tooth and identifies areas of decay or damage.",
      "Assessment — Assessment of the cavity depth and choice of appropriate filling material.",
      "Treatment — Gentle removal of decay and placement of tooth-coloured composite restoration.",
      "Follow-Up — Bite verification and tips for preserving your restoration."
    ],
    benefits: [
      "Stops tooth decay from progressing further into the tooth.",
      "Tooth-coloured composite material blends naturally with your teeth.",
      "Restores the normal biting and chewing function of the tooth."
    ]
  }
];

export interface RealPortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  type: "comparison" | "image" | "video";
  beforeImage?: string;
  afterImage?: string;
  image?: string;
  videoUrl?: string;
}

export const REAL_PORTFOLIO_ITEMS: RealPortfolioItem[] = [
  {
    id: "portfolio-bridge",
    title: "Lower Front Tooth Ceramic Bridge",
    category: "Restorative",
    description: "Replacement of a missing lower front tooth with a fixed ceramic bridge anchored to adjacent teeth.",
    type: "comparison",
    beforeImage: "/images/portfolio/bridge-restoration-before.jpeg",
    afterImage: "/images/portfolio/bridge-restoration-after.jpeg"
  },
  {
    id: "portfolio-ortho-front",
    title: "Orthodontic Diagnostic Assessment",
    category: "Orthodontics",
    description: "Frontal photograph documenting tooth spacing before starting orthodontic treatment.",
    type: "image",
    image: "/images/portfolio/ortho-case-front.jpeg"
  },
  {
    id: "portfolio-ortho-lateral",
    title: "Bite & Occlusal Examination",
    category: "Orthodontics",
    description: "Lateral view photograph documenting bite relationship and tooth alignment.",
    type: "image",
    image: "/images/portfolio/ortho-case-lateral.jpeg"
  },
  {
    id: "portfolio-ortho-video",
    title: "Bracket & Archwire Adjustment",
    category: "Orthodontics",
    description: "In-clinic procedure recording showing bracket placement and archwire adjustment.",
    type: "video",
    videoUrl: "/images/portfolio/ortho-procedure.mp4"
  }
];

export interface TikTokClip {
  id: string;
  title: string;
  category: string;
  url: string;
  videoId?: string;
}

export const TIKTOK_CLIPS: TikTokClip[] = [
  {
    id: "tt-1",
    title: "Orthodontic Braces Alignment Process",
    category: "Orthodontics",
    url: "https://www.tiktok.com/@kristaldentaleclinic/video/7531292158108732678",
    videoId: "7531292158108732678"
  },
  {
    id: "tt-2",
    title: "In-Clinic Dental Care & Consultation",
    category: "General",
    url: "https://www.tiktok.com/@kristaldentaleclinic/video/7639015030205271303",
    videoId: "7639015030205271303"
  },
  {
    id: "tt-4",
    title: "Oral Hygiene & Routine Cleaning",
    category: "Preventive",
    url: "https://www.tiktok.com/@kristaldentaleclinic/video/7633381667977137415",
    videoId: "7633381667977137415"
  },
  {
    id: "tt-5",
    title: "Braces Bracket Bonding & Wire Fitting",
    category: "Orthodontics",
    url: "https://www.tiktok.com/@kristaldentaleclinic/video/7627971227767885064",
    videoId: "7627971227767885064"
  },
  {
    id: "tt-6",
    title: "A Day at Kristal Dentale Clinic",
    category: "Clinic",
    url: "https://www.tiktok.com/@kristaldentaleclinic/video/7602572322905623816",
    videoId: "7602572322905623816"
  }
];
