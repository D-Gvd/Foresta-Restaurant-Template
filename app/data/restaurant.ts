// ─────────────────────────────────────────────────────────────────────────────
//  RESTAURANT CONFIGURATION  ·  Edit this file to customise your site
// ─────────────────────────────────────────────────────────────────────────────

export const restaurant = {
  name: 'Foresta',
  tagline: 'Modern European Cuisine',
  established: '2018',
  description:
    'Foresta is a destination for unhurried dining — where the larder drives the menu and the seasons set the pace. Our kitchen draws on European tradition with a quiet reverence for the forest, the field, and the sea.',
  pullQuote:
    'We cook from the land, not from a concept.',

  contact: {
    address:  '14 Aldermere Lane, The Old Quarter',
    city:     'New York, NY 10013',
    phone:    '+1 (212) 555 0192',
    email:    'hello@forestanyc.com',
  },

  hours: [
    { days: 'Tuesday – Thursday', time: '6 pm – 10 pm' },
    { days: 'Friday – Saturday',  time: '5:30 pm – 11 pm' },
    { days: 'Sunday',             time: '5 pm – 9 pm' },
    { days: 'Monday',             time: 'Closed' },
  ],

  social: {
    instagram: 'https://instagram.com',
    facebook:  'https://facebook.com',
  },

  // Unsplash image IDs — swap with your own photos
  images: {
    // hero:    '/images/test.jpeg',
    hero:    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85',
    about:   'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=80',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
      'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80',
      'https://images.unsplash.com/photo-1532980400857-e8d9d275d858?w=800&q=80',
      'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80',
    ],
  },

  menu: {
    categories: [
      {
        id: 'starters',
        label: 'Starters',
        items: [
          { name: 'Forest Mushroom Velouté',    price: '$18', description: 'Wild mushroom broth, crème fraîche, chive oil, sourdough crisp' },
          { name: 'Cured Sea Trout',            price: '$22', description: 'Fennel, pickled cucumber, dill cream, rye tuile' },
          { name: 'Heirloom Beet & Walnut',     price: '$16', description: 'Whipped goat cheese, candied walnut, aged sherry vinaigrette' },
          { name: 'Chicken Liver Parfait',       price: '$19', description: 'Port gel, Sicilian pistachios, house-made brioche' },
          { name: 'Burrata & Stone Fruit',       price: '$21', description: 'Nectarine, prosciutto di Parma, aged balsamic, micro basil' },
        ],
      },
      {
        id: 'mains',
        label: 'Mains',
        items: [
          { name: 'Dry-Aged Duck Breast',       price: '$48', description: 'Smoked beetroot purée, blackberry jus, wilted watercress, duck fat potato' },
          { name: 'Seared Halibut',             price: '$52', description: 'Celeriac cream, brown butter, capers, samphire, preserved lemon' },
          { name: 'Hand-Cut Tagliatelle',        price: '$36', description: 'Slow-braised short rib ragù, aged Parmesan, black truffle, chives' },
          { name: 'Heritage Pork Chop',          price: '$44', description: 'Apple & celeriac remoulade, crispy sage, Calvados pan sauce' },
          { name: 'Forest Mushroom Risotto',     price: '$34', description: 'Arborio, porcini, Gruyère, truffle oil — available vegan' },
        ],
      },
      {
        id: 'desserts',
        label: 'Desserts',
        items: [
          { name: 'Dark Chocolate Délice',      price: '$16', description: 'Salted caramel, cocoa nib tuile, Madagascan vanilla ice cream' },
          { name: 'Poached Pear Tarte Tatin',   price: '$15', description: 'Warm butter pastry, crème fraîche, toasted almonds' },
          { name: 'Lemon Verbena Panna Cotta',  price: '$14', description: 'Strawberry consommé, crystallised violet, shortbread' },
          { name: 'Cheese Selection',           price: '$22', description: 'Three seasonal cheeses, house crackers, quince, honeycomb' },
        ],
      },
      {
        id: 'drinks',
        label: 'Wine & Cocktails',
        items: [
          { name: 'Foresta Negroni',            price: '$18', description: 'Gin, sweet vermouth, Douglas fir-infused Campari, orange peel' },
          { name: 'Smoked Old Fashioned',       price: '$19', description: 'Bourbon, cherry wood smoke, honey, angostura, orange zest' },
          { name: 'Aperol Spritz',              price: '$15', description: 'Aperol, Prosecco, soda, blood orange' },
          { name: 'Wine — Côtes du Rhône',      price: '$14', description: 'Glass of our house red — full-bodied, earthy, long finish' },
          { name: 'Wine — Pouilly-Fumé',        price: '$16', description: 'Glass of our house white — crisp, mineral, grassy notes' },
        ],
      },
    ],
  },
} as const
