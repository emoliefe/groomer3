const clientConfig = {

  // ── Business Identity ──────────────────────────────────────────────────────
  businessName:    "Lap of Luxury Pet Grooming",
  logoSub:         "LAP OF LUXURY",
  logoMain:        "PET GROOMING",
  tagline:         "Best Pet Stylist in Queens, NY",
  city:            "Hollis, Queens, NY",
  established:     "2012",

  // ── Contact ────────────────────────────────────────────────────────────────
  phone:           "+1 917-214-4498",
  phoneHref:       "tel:+19172144498",
  whatsapp:        "19172144498",
  address:         "187-52 Jamaica Ave, Hollis, NY 11423",
  instagram:       "https://www.instagram.com/lapofluxurypetgrooming",

  // ── Ratings ────────────────────────────────────────────────────────────────
  rating:          "4.7",
  reviewCount:     "74",
  ratingStars:     "★★★★½",

  // ── Hours ──────────────────────────────────────────────────────────────────
  hours: [
    { days: "Mon – Sat", time: "9:00 AM – 6:00 PM" },
    { days: "Sunday",    time: "By appointment only" },
  ],
  hoursNote: "Text to book · No walk-ins · Vaccinations required",

  // ── Theme ──────────────────────────────────────────────────────────────────
  theme: {
    primary: "#7B2D8B",
    text:    "#5C4A6B",
    dark:    "#1A0A2E",
  },

  // ── Hero Image ─────────────────────────────────────────────────────────────
  heroImage: {
    url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=1400&fit=crop&crop=center&q=85",
    alt: "Beautifully groomed dog at Lap of Luxury",
  },

  // ── Stats Bar ──────────────────────────────────────────────────────────────
  stats: [
    { value: "74+",    label: "Happy Clients"   },
    { value: "4.7★",   label: "Google Rating"   },
    { value: "Est. 2012", label: "Serving Queens" },
    { value: "Hollis", label: "Jamaica Ave, NY"  },
  ],

  // ── Hero Services Row ──────────────────────────────────────────────────────
  heroServices: ["✂️ Grooming", "🛁 Bath & Blowout", "💅 Nail Trim", "🎀 Bow Tie Finish"],

  // ── Services ───────────────────────────────────────────────────────────────
  services: [
    {
      icon:  "✂️",
      num:   "01",
      title: "Full Grooming",
      desc:  "Complete breed-specific styling: bath, blowout, haircut, ear cleaning, and a fresh finish your pup will love.",
      cta:   "Book Now →",
      href:  "tel:+19172144498",
      accent: false,
    },
    {
      icon:  "💅",
      num:   "02",
      title: "Nail Trim",
      desc:  "Quick, stress-free nail trims to keep your pet comfortable and your floors scratch-free.",
      cta:   "Book Now →",
      href:  "tel:+19172144498",
      accent: false,
    },
    {
      icon:  "🛁",
      num:   "03",
      title: "Bath & Blowout",
      desc:  "Premium shampoo, deep conditioner, and a professional blowout — leaving your pet clean, fluffy, and smelling amazing.",
      cta:   "Book Now →",
      href:  "tel:+19172144498",
      accent: false,
    },
    {
      icon:  "🎀",
      num:   "04",
      title: "Bow Tie & Accessories",
      desc:  "Every groom ends with a stylish bow tie or bandana — because royalty deserves the finishing touch.",
      cta:   "Text Us →",
      href:  "https://wa.me/19172144498",
      accent: true,
    },
  ],

  // ── About ──────────────────────────────────────────────────────────────────
  aboutImage: {
    url: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=85",
    alt: "Happy dogs at Lap of Luxury",
    tag: "Hollis · Queens, NY",
  },
  aboutText: [
    "Founded in 2012, Lap of Luxury Pet Grooming has been Queens' most trusted destination for professional pet styling. Our expert groomer brings passion, precision, and a genuine love for animals to every single appointment — whether it's a classic breed cut, a spa bath, or a custom creative style. We're appointment-only and require vaccinations, because your pet's safety and comfort always come first.",
    "We are proudly a Black-owned, veteran-owned, women-owned, and Latino-owned small business rooted in the Hollis community. From your dog's first groom to their tenth year of luxury visits, we treat every furry guest like royalty. Text us to schedule — we can't wait to meet your four-legged family member.",
  ],
  aboutStats: [
    { value: "74+",    label: "Google Reviews"    },
    { value: "4.7★",   label: "Average Rating"    },
    { value: "10+ yrs", label: "Loyal Clients"    },
  ],

  // ── Gallery ────────────────────────────────────────────────────────────────
  gallery: [
    {
      url:    "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?w=600&q=85",
      alt:    "Freshly groomed fluffy dog",
      label:  "After Groom",
      tall:   true,
    },
    {
      url:    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&q=85",
      alt:    "Dog grooming session",
      label:  "Grooming",
      tall:   false,
    },
    {
      url:    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=85",
      alt:    "Happy dog with bow",
      label:  "Bow Tie Finish",
      tall:   false,
    },
    {
      url:    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&q=85",
      alt:    "Cute dog portrait",
      label:  "Fresh & Clean",
      tall:   false,
    },
    {
      url:    "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=900&q=85",
      alt:    "Happy groomed dog smiling",
      label:  "Happy Pups",
      wide:   true,
    },
  ],

  // ── Reviews ────────────────────────────────────────────────────────────────
  reviews: [
    {
      stars:  "★★★★★",
      text:   '"My original groomer miss-scheduled me and I had to find someone last minute. Thank God I called Lap of Luxury — they fit me in within an hour. Absolutely amazing!"',
      author: "— Cris Abreu",
    },
    {
      stars:  "★★★★★",
      text:   '"A-mazinggggg! My Mocha loves coming here. I love the added bow ties — neat, clean cut, and so efficient. She\'s so loving with pets, you won\'t regret it."',
      author: "— J Wilson",
    },
    {
      stars:  "★★★★★",
      text:   '"My dog Jozephine has been coming here for about 10 years. The salon started from humble beginnings and grew into an amazing space where animals get the care they deserve."',
      author: "— The Divine Comfy Couch",
    },
    {
      stars:  "★★★★★",
      text:   '"This place always has great toys and treats for my dogs. My furry babies were given the most amazing treatment — truly a luxury experience!"',
      author: "— Google Review",
    },
    {
      stars:  "★★★★★",
      text:   '"Lap of Luxury should offer services to humans as well — that\'s how good they are. My pets come out looking like royalty every single time."',
      author: "— Google Review",
    },
    {
      stars:  "★★★★★",
      text:   '"My furry babies were given the most amazing treatment. Professional, caring, and the results speak for themselves. Highly recommend!"',
      author: "— Google Review",
    },
    {
      stars:  "★★★★★",
      text:   '"Been a loyal customer for years. The quality is always consistent, the groomer truly loves animals, and the bow tie finish is the cutest touch!"',
      author: "— Google Review",
    },
    {
      stars:  "★★★★★",
      text:   '"Best groomer in Queens, hands down. Text to book is super easy, and my dog always comes home looking and smelling incredible."',
      author: "— Google Review",
    },
    {
      stars:  "★★★★★",
      text:   '"My original groomer miss-scheduled me and I had to find someone last minute. Thank God I called Lap of Luxury — they fit me in within an hour. Absolutely amazing!"',
      author: "— Cris Abreu",
    },
    {
      stars:  "★★★★★",
      text:   '"A-mazinggggg! My Mocha loves coming here. I love the added bow ties — neat, clean cut, and so efficient."',
      author: "— J Wilson",
    },
    {
      stars:  "★★★★★",
      text:   '"My dog Jozephine has been coming here for about 10 years. Truly an amazing space where animals get the care they deserve."',
      author: "— The Divine Comfy Couch",
    },
    {
      stars:  "★★★★★",
      text:   '"Lap of Luxury should offer services to humans as well — that\'s how good they are!"',
      author: "— Google Review",
    },
  ],

  // ── Map ────────────────────────────────────────────────────────────────────
  mapQuery:  "187-52+Jamaica+Ave+Hollis+NY+11423",
  mapTitle:  "Lap of Luxury Pet Grooming Location",

  // ── Nav Links ──────────────────────────────────────────────────────────────
  navLinks: [
    { href: "#services", label: "Services"  },
    { href: "#about",    label: "About"     },
    { href: "#gallery",  label: "Gallery"   },
    { href: "#contact",  label: "Contact"   },
  ],

  // ── Footer ─────────────────────────────────────────────────────────────────
  footerLinks: [
    { href: "#services", label: "Services" },
    { href: "#gallery",  label: "Gallery"  },
    { href: "#contact",  label: "Contact"  },
  ],
  footerCopy: "© 2025 Lap of Luxury Pet Grooming. Hollis, Queens, NY.",

};
