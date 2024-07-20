/** @type {import('./$types').PageLoad} */
export const load = ( async () => {
  const features = [
    {
      title: "Free Shipping",
      description: "For orders from $50",
      svg_url: "/img/sprite.svg#fi-free-delivery-48",
    },
    {
      title: "Support 24/7",
      description: "Call us anytime",
      svg_url: "/img/sprite.svg#fi-24-hours-48",
    },
    {
      title: "100% Safety",
      description: "Only secure payments",
      svg_url: "/img/sprite.svg#fi-payment-security-48",
    },
    {
      title: "Hot Offers",
      description: "Discounts up to 90%",
      svg_url: "/img/sprite.svg#fi-tag-48",
    },
  ]

  const filters = [{ key: 'power', value: 'Power Tools' }, { key: 'hand', value: 'Hand Tools' }, { key: 'plumb', value: 'Plumbing' }];

  const featured_products = [
    {
      name: "Drill Series 3 Brandix KSR4590PQS 1500 Watts",
      imgUrl: "/src/lib/images/products/product-4.jpg",
      tags: ["sale", 'new'],
      price: 100,
      sale_price: 12,
      reviews: 0,
      rading: 0,
      in_stock: true,
      features: [
        'Speed: 750 RPM',
        'Power Source: Cordless-Electric',
        'Battery Cell Type: Lithium',
        'Voltage: 20 Volts',
        'Battery Capacity: 2 Ah'
      ]
    },
    {
      name: "Brandix Router Power Tool 2017ERXPK",
      imgUrl: "/src/lib/images/products/product-5.jpg",
      tags: ["hot"],
      price: 100,
      sale_price: 12,
      reviews: 0,
      rading: 0,
      in_stock: true,
      features: [
        'Speed: 750 RPM',
        'Power Source: Cordless-Electric',
        'Battery Cell Type: Lithium',
        'Voltage: 20 Volts',
        'Battery Capacity: 2 Ah'
      ]
    },
    {
      name: "Undefined Tool IRadix DPS3000SY 2700 Watts",
      imgUrl: "/src/lib/images/products/product-2.jpg",
      tags: [],
      price: 100,
      sale_price: 12,
      reviews: 0,
      rading: 0,
      in_stock: true,
      features: [
        'Speed: 750 RPM',
        'Power Source: Cordless-Electric',
        'Battery Cell Type: Lithium',
        'Voltage: 20 Volts',
        'Battery Capacity: 2 Ah'
      ]
    },
  ]

  /** @type Record<string, string> */
  const imgUrls = import.meta.glob( '$lib/images/**/*.{jpg,jpeg,png,gif,svg}', { eager: true, query: { url: true }, import: 'default' } );
  /** @type Record<string, Object> */
  const imgObjs = import.meta.glob( '$lib/images/**/*.{jpg,jpeg,png,gif,svg}', { query: { enhanced: true } } );

  return {
    features,
    filters,
    featured_products,
    imgUrls,
    imgObjs
  };
} )
