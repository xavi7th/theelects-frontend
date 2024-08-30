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

  const bestsellers = [
    {
      name: "Drill Series 3 Brandix KSR4590PQS 1500 Watts",
      imgUrl: "/src/lib/images/products/product-4.jpg",
      tags: ["sale", 'new'],
      price: 100,
      sale_price: 12,
      reviews: 0,
      rating: 2,
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
      rating: 5,
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
      rating: 4,
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

  const featured_bestseller = {
    name: "Featured Bestseller Drill Series 3 1500 Watts",
    imgUrl: "/src/lib/images/products/product-6.jpg",
    tags: ['featured'],
    price: 100,
    sale_price: 12,
    reviews: 0,
    rating: 2,
    in_stock: true,
    features: [
      'Speed: 750 RPM',
      'Power Source: Cordless-Electric',
      'Battery Cell Type: Lithium',
      'Voltage: 20 Volts',
      'Battery Capacity: 2 Ah'
    ]
  }

  const featured_products = [
    {
      name: "Drill Series 3 Brandix KSR4590PQS 1500 Watts",
      imgUrl: "/src/lib/images/products/product-4.jpg",
      tags: ["sale", 'new'],
      price: 100,
      sale_price: 12,
      reviews: 0,
      rating: 0,
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
      reviews: 12,
      rating: 5,
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
      rating: 0,
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

  const categories = [
    {
      name: 'Phones',
      imgUrl: '/src/lib/images/categories/category-3.jpg',
      product_count: 5762
    },
    {
      name: 'Laptops',
      imgUrl: '/src/lib/images/categories/category-5.jpg',
      product_count: 3021
    },
    {
      name: 'Desktops',
      imgUrl: '/src/lib/images/categories/category-2.jpg',
      product_count: 743
    },
    {
      name: 'Gaming Consoles',
      imgUrl: '/src/lib/images/categories/category-4.jpg',
      product_count: 89
    },
  ]

  const brand_logos = [
    {
      url: '',
      logoUrl: '/src/lib/images/logos/logo-1.png',
      cardBkg: '/src/lib/images/logos/logo-1.png'
    },
    {
      url: '',
      logoUrl: '/src/lib/images/logos/logo-2.png',
      cardBkg: '/src/lib/images/logos/logo-2.png'
    },
    {
      url: '',
      logoUrl: '/src/lib/images/logos/logo-3.png',
      cardBkg: '/src/lib/images/logos/logo-3.png'
    },
    {
      url: '',
      logoUrl: '/src/lib/images/logos/logo-4.png',
      cardBkg: '/src/lib/images/logos/logo-4.png'
    },
    {
      url: '',
      logoUrl: '/src/lib/images/logos/logo-6.png',
      cardBkg: '/src/lib/images/logos/logo-6.png'
    },
    {
      url: '',
      logoUrl: '/src/lib/images/logos/logo-7.png',
      cardBkg: '/src/lib/images/logos/logo-7.png'
    }
  ]

  const articles = [
    {
      title: 'Some Philosophers Specialize In One Or More Historical Periods',
      created_at: '5th Sept 2024',
      summary: 'Modi animi illo eum tempore earum quo dicta sunt. Ducimus rem quibusdam et repudiandae sint et dolorem facere. Occaecati sequi consequatur blanditiis ut doloribus ut asperiores totam. Rerum voluptatum asperiores magni repellendus. Sunt expedita optio sit quis.',
      imgUrl: '/src/lib/images/posts/post-1.jpg',
      url: '/'
    },
    {
      title: 'Logic Is The Study Of Reasoning And Argument Part 2',
      created_at: '5th Sept 2024',
      summary: 'Modi animi illo eum tempore earum quo dicta sunt. Ducimus rem quibusdam et repudiandae sint et dolorem facere. Occaecati sequi consequatur blanditiis ut doloribus ut asperiores totam. Rerum voluptatum asperiores magni repellendus. Sunt expedita optio sit quis.',
      imgUrl: '/src/lib/images/posts/post-10.jpg',
      url: '/'
    },
    {
      title: 'A Variety Of Other Academic And Non-Academic Approaches Have Been Explored',
      created_at: '5th Sept 2024',
      summary: 'Modi animi illo eum tempore earum quo dicta sunt. Ducimus rem quibusdam et repudiandae sint et dolorem facere. Occaecati sequi consequatur blanditiis ut doloribus ut asperiores totam. Rerum voluptatum asperiores magni repellendus. Sunt expedita optio sit quis.',
      imgUrl: '/src/lib/images/posts/post-6.jpg',
      url: '/'
    },
    {
      title: 'Germany Was The First Country To Professionalize Philosophy',
      created_at: '5th Sept 2024',
      summary: 'Modi animi illo eum tempore earum quo dicta sunt. Ducimus rem quibusdam et repudiandae sint et dolorem facere. Occaecati sequi consequatur blanditiis ut doloribus ut asperiores totam. Rerum voluptatum asperiores magni repellendus. Sunt expedita optio sit quis.',
      imgUrl: '/src/lib/images/posts/post-8.jpg',
      url: '/'
    },
    {
      title: 'Many Inquiries Outside Of Academia Are Philosophical In The Broad Sense',
      created_at: '5th Sept 2024',
      summary: 'Modi animi illo eum tempore earum quo dicta sunt. Ducimus rem quibusdam et repudiandae sint et dolorem facere. Occaecati sequi consequatur blanditiis ut doloribus ut asperiores totam. Rerum voluptatum asperiores magni repellendus. Sunt expedita optio sit quis.',
      imgUrl: '/src/lib/images/posts/post-3.jpg',
      url: '/'
    },
  ]

  return {
    features,
    bestsellers: [...bestsellers, ...featured_products],
    featured_bestseller,
    filters,
    featured_products,
    categories,
    brand_logos
  };
} )
