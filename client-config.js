/**
 * CLIENT CONFIGURATION
 * Only edit this file for each new client.
 * index.html, style.css and script.js never change.
 */
window.CLIENT = {

  /* ── BRAND ──────────────────────────────────────────── */
  name: {
    sub:  'LAP OF LUXURY',    // Small top text
    main: 'PET GROOMING',     // Large logo text
  },
  tagline: "Queens' Premier Pet Grooming Salon — Est. 2012",
  city:    'Hollis, Queens NY',

  brand: {
    primary: '#7B2D8B',  // Mor Lüks — buttons, links, accents
    text:    '#5C4A6B',  // Body text
    dark:    '#1A0A2E',  // Headings, dark sections
  },

  /* ── CONTACT ────────────────────────────────────────── */
  phone:     '+1 917-214-4498',
  whatsapp:  '19172144498',   // Country code included, no + or spaces
  address:   '187-52 Jamaica Ave, Hollis, NY 11423',
  hours:     ['Mon – Sat: 9:00 AM – 6:00 PM', 'Text to book · No walk-ins · Vaccinations required'],
  instagram: 'https://www.instagram.com/lapofluxurypetgrooming',
  mapQuery:  '187-52+Jamaica+Ave+Hollis+NY+11423',

  /* ── RATINGS ────────────────────────────────────────── */
  rating:      '4.7',
  reviewCount: 74,

  /* ── IMAGES ─────────────────────────────────────────── */
  heroImage:  'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=1400&fit=crop&crop=center&q=85',
  aboutImage: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=85',

  /* ── ABOUT TEXT (array; each item = one paragraph) ──── */
  aboutText: [
    "Founded in 2012, Lap of Luxury Pet Grooming has been Queens' most trusted destination for professional pet styling. Our expert groomer brings passion, precision, and a genuine love for animals to every appointment — whether it's a classic breed cut, a spa bath, or a custom creative style. We're appointment-only and require up-to-date vaccinations, because your pet's safety and comfort always come first.",
    "We are proudly a Black-owned, veteran-owned, women-owned, and Latino-owned small business rooted in the Hollis community. From your dog's first groom to their tenth year of luxury visits, we treat every furry guest like royalty. Text us to schedule — we can't wait to meet your four-legged family member.",
  ],

  /* ── STATS BAR (4 items) ─────────────────────────────── */
  stats: [
    { value: '74+',      label: 'Happy Clients'  },
    { value: '4.7★',     label: 'Google Rating'  },
    { value: 'Est. 2012', label: 'Serving Queens' },
    { value: 'Hollis',   label: 'Jamaica Ave, NY' },
  ],

  /* ── SERVICES (4 items; last card gets accent color) ─── */
  services: [
    {
      icon:    '✂️',
      title:   'Full Grooming',
      desc:    'Complete breed-specific styling: bath, blowout, haircut, ear cleaning, and a fresh finish your pup will love.',
      ctaText: 'Book Now',
      ctaHref: 'tel:+19172144498',
    },
    {
      icon:    '🛁',
      title:   'Bath & Blowout',
      desc:    'Premium shampoo, deep conditioner, and a professional blowout — leaving your pet clean, fluffy, and smelling amazing.',
      ctaText: 'Book Now',
      ctaHref: 'tel:+19172144498',
    },
    {
      icon:    '💅',
      title:   'Nail Trim',
      desc:    'Quick, stress-free nail trims to keep your pet comfortable and your floors scratch-free.',
      ctaText: 'Book Now',
      ctaHref: 'tel:+19172144498',
    },
    {
      icon:    '🎀',
      title:   'Bow Tie & Accessories',
      desc:    'Every groom ends with a stylish bow tie or bandana — because royalty deserves the finishing touch.',
      ctaText: 'Text Us',
      ctaHref: 'https://wa.me/19172144498',
    },
  ],

  /* ── GALLERY (5 items; layout: 'normal' | 'tall' | 'wide') */
  gallery: [
    { url: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?w=600&q=85', label: 'After Groom',     layout: 'tall'   },
    { url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&q=85', label: 'Grooming',        layout: 'normal' },
    { url: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=85', label: 'Bow Tie Finish',  layout: 'normal' },
    { url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&q=85', label: 'Fresh & Clean',   layout: 'normal' },
    { url: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=900&q=85', label: 'Happy Pups',      layout: 'wide'   },
  ],

  /* ── REVIEWS ─────────────────────────────────────────── */
  reviews: [
    { text: "My original groomer miss-scheduled me and I had to find someone last minute. Thank God I called Lap of Luxury — they fit me in within an hour. Absolutely amazing!",              author: 'Cris Abreu' },
    { text: "A-mazinggggg! My Mocha loves coming here for grooming. I love the added bow ties — neat, clean cut, and so efficient. She's so loving with pets, you won't regret it.",         author: 'J Wilson' },
    { text: "My dog Jozephine has been coming here for about 10 years. The salon grew into an amazing space where animals get the care they need and deserve.",                                author: 'The Divine Comfy Couch' },
    { text: "This place always has great toys and treats for my dogs. My furry babies were given the most amazing treatment — truly a luxury experience!",                                    author: 'Google Review' },
    { text: "Lap of Luxury should offer services to humans as well — that's how good they are. My pets come out looking like royalty every single time.",                                    author: 'Google Review' },
    { text: "Best groomer in Queens, hands down. Text to book is super easy, and my dog always comes home looking and smelling incredible.",                                                  author: 'Google Review' },
    { text: "Been a loyal customer for years. The quality is always consistent, the groomer truly loves animals, and the bow tie finish is the cutest touch!",                               author: 'Google Review' },
    { text: "My furry babies were given the most amazing treatment. Professional, caring, and the results speak for themselves. Highly recommend!",                                          author: 'Google Review' },
    { text: "Appointment was easy to get via text. Showed up and my dog was treated like absolute royalty. The bow tie at the end was the perfect touch. Will be back!",                    author: 'Google Review' },
  ],

};
