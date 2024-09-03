/** @type {import('./$types').PageLoad} */
export const load = async () => {
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
  ];

  const filters = [
    { key: "power", value: "Power Tools" },
    { key: "hand", value: "Hand Tools" },
    { key: "plumb", value: "Plumbing" },
  ];

  const video_reviews = [
    {
      title: "Drill Series 3 Brandix KSR4590PQS 1500 Watts",
      imgUrl: "/src/lib/images/video-reviews/review-1.png",
      url: "https://www.youtube.com/@Mrwhosetheboss",
      created_at: "9 months ago",
      rating: 4,
    },
    {
      title: "Brandix Router Power Tool 2017ERXPK",
      imgUrl: "/src/lib/images/video-reviews/review-2.png",
      url: "https://www.youtube.com/@Mrwhosetheboss",
      created_at: "9 months ago",
      rating: 4,
    },
    {
      title: "Undefined Tool IRadix DPS3000SY 2700 Watts",
      imgUrl: "/src/lib/images/video-reviews/review-3.png",
      url: "https://www.youtube.com/@Mrwhosetheboss",
      created_at: "9 months ago",
      rating: 4,
    },
    {
      title: "Drill Series 3 Brandix KSR4590PQS 1500 Watts",
      imgUrl: "/src/lib/images/video-reviews/review-4.png",
      url: "https://www.youtube.com/@Mrwhosetheboss",
      created_at: "9 months ago",
      rating: 4,
    },
    {
      title: "Brandix Router Power Tool 2017ERXPK",
      imgUrl: "/src/lib/images/video-reviews/review-5.png",
      url: "https://www.youtube.com/@Mrwhosetheboss",
      created_at: "9 months ago",
      rating: 4,
    },
    {
      title: "Undefined Tool IRadix DPS3000SY 2700 Watts",
      imgUrl: "/src/lib/images/video-reviews/review-6.png",
      url: "https://www.youtube.com/@Mrwhosetheboss",
      created_at: "9 months ago",
      rating: 4,
    },
  ];

  const featured_review = {
    title: "Undefined Tool IRadix DPS3000SY 2700 Watts",
    imgUrl: "/src/lib/images/video-reviews/featured-review.png",
    url: "https://www.youtube.com/@Mrwhosetheboss",
    created_at: "9 months ago",
    rating: 5
  };

  const new_arrivals = [
    [
      {
        name: "IPhone 15 Pro max",
        imgUrl: "/src/lib/images/products/phone-1.webp",
        tags: ["sale"],
        price: 100,
        sale_price: 12,
        reviews: 0,
        rating: 2,
      },
      {
        name: "IPhone 12 Pro",
        imgUrl: "/src/lib/images/products/phone-10.webp",
        tags: ["hot"],
        price: 100,
        sale_price: 12,
        reviews: 0,
        rating: 5,
      },
    ],
    [
      {
        name: "IPhone X",
        imgUrl: "/src/lib/images/products/phone-6.webp",
        tags: ["hot"],
        price: 100,
        sale_price: 12,
        reviews: 0,
        rating: 4,
      },
      {
        name: "IPhone Xr",
        imgUrl: "/src/lib/images/products/phone-4.webp",
        tags: [],
        price: 100,
        sale_price: 12,
        reviews: 0,
        rating: 4,
      },
    ],
    [
      {
        name: "Samsung Galaxy S10 Plus",
        imgUrl: "/src/lib/images/products/phone-10.jpg",
        tags: ["sale"],
        price: 100,
        sale_price: 12,
        reviews: 0,
        rating: 2,
      },
      {
        name: "Samsung Galaxy S10",
        imgUrl: "/src/lib/images/products/phone-8.jpg",
        tags: ["hot"],
        price: 100,
        sale_price: 12,
        reviews: 0,
        rating: 5,
      },
    ],
    [
      {
        name: "Samsung Galaxy Note 20",
        imgUrl: "/src/lib/images/products/phone-1.png",
        tags: ["hot"],
        price: 100,
        sale_price: 12,
        reviews: 0,
        rating: 4,
      },
      {
        name: "Samsung Galaxy Note 20 Pro",
        imgUrl: "/src/lib/images/products/phone-3.webp",
        tags: [],
        price: 100,
        sale_price: 12,
        reviews: 0,
        rating: 4,
      },
    ],
    [
      {
        name: "IPhone 12 Pro max",
        imgUrl: "/src/lib/images/products/phone-12.jpg",
        tags: ["sale"],
        price: 100,
        sale_price: 12,
        reviews: 0,
        rating: 2,
      },
      {
        name: "IPhone 13 Pro",
        imgUrl: "/src/lib/images/products/phone-13.jpg",
        tags: ["hot"],
        price: 100,
        sale_price: 12,
        reviews: 0,
        rating: 5,
      },
    ],
    [
      {
        name: "Samsung Galaxy S10 5G",
        imgUrl: "/src/lib/images/products/phone-11.jpg",
        tags: ["hot"],
        price: 100,
        sale_price: 12,
        reviews: 0,
        rating: 4,
      },
      {
        name: "One Plus 12",
        imgUrl: "/src/lib/images/products/phone-5.jpg",
        tags: [],
        price: 100,
        sale_price: 12,
        reviews: 0,
        rating: 4,
      },
    ],
  ];

  const bestsellers = [
    {
      name: "Drill Series 3 Brandix KSR4590PQS 1500 Watts",
      imgUrl: "/src/lib/images/products/phone-10.jpg",
      tags: ["sale", "new"],
      price: 100,
      sale_price: 12,
      reviews: 0,
      rating: 2,
      in_stock: true,
      features: ["Speed: 750 RPM", "Power Source: Cordless-Electric", "Battery Cell Type: Lithium", "Voltage: 20 Volts", "Battery Capacity: 2 Ah"],
    },
    {
      name: "Brandix Router Power Tool 2017ERXPK",
      imgUrl: "/src/lib/images/products/phone-8.jpg",
      tags: ["hot"],
      price: 100,
      sale_price: 12,
      reviews: 0,
      rating: 5,
      in_stock: true,
      features: ["Speed: 750 RPM", "Power Source: Cordless-Electric", "Battery Cell Type: Lithium", "Voltage: 20 Volts", "Battery Capacity: 2 Ah"],
    },
    {
      name: "Undefined Tool IRadix DPS3000SY 2700 Watts",
      imgUrl: "/src/lib/images/products/phone-1.png",
      tags: [],
      price: 100,
      sale_price: 12,
      reviews: 0,
      rating: 4,
      in_stock: true,
      features: ["Speed: 750 RPM", "Power Source: Cordless-Electric", "Battery Cell Type: Lithium", "Voltage: 20 Volts", "Battery Capacity: 2 Ah"],
    },
  ];

  const featured_bestseller = {
    name: "Featured Bestseller Drill Series 3 1500 Watts",
    imgUrl: "/src/lib/images/products/phone-12.gif",
    tags: ["featured"],
    price: 100,
    sale_price: 12,
    reviews: 0,
    rating: 2,
    in_stock: true,
    features: ["Speed: 750 RPM", "Power Source: Cordless-Electric", "Battery Cell Type: Lithium", "Voltage: 20 Volts", "Battery Capacity: 2 Ah"],
  };

  const featured_products = [
    {
      name: "Drill Series 3 Brandix KSR4590PQS 1500 Watts",
      imgUrl: "/src/lib/images/products/laptop-4.png",
      tags: ["sale", "new"],
      price: 100,
      sale_price: 12,
      reviews: 0,
      rating: 0,
      in_stock: true,
      features: ["Speed: 750 RPM", "Power Source: Cordless-Electric", "Battery Cell Type: Lithium", "Voltage: 20 Volts", "Battery Capacity: 2 Ah"],
    },
    {
      name: "Brandix Router Power Tool 2017ERXPK",
      imgUrl: "/src/lib/images/products/phone-7.png",
      tags: ["hot"],
      price: 100,
      sale_price: 12,
      reviews: 12,
      rating: 5,
      in_stock: true,
      features: ["Speed: 750 RPM", "Power Source: Cordless-Electric", "Battery Cell Type: Lithium", "Voltage: 20 Volts", "Battery Capacity: 2 Ah"],
    },
    {
      name: "Undefined Tool IRadix DPS3000SY 2700 Watts",
      imgUrl: "/src/lib/images/products/phone-8.jpg",
      tags: [],
      price: 100,
      sale_price: 12,
      reviews: 0,
      rating: 0,
      in_stock: true,
      features: ["Speed: 750 RPM", "Power Source: Cordless-Electric", "Battery Cell Type: Lithium", "Voltage: 20 Volts", "Battery Capacity: 2 Ah"],
    },
  ];

  const categories = [
    {
      name: "Phones",
      imgUrl: "/src/lib/images/categories/category-1.jpg",
      product_count: 5762,
    },
    {
      name: "Laptops",
      imgUrl: "/src/lib/images/categories/category-2.jpg",
      product_count: 3021,
    },
    {
      name: "Desktops",
      imgUrl: "/src/lib/images/categories/category-3.jpg",
      product_count: 743,
    },
    {
      name: "Gaming Consoles",
      imgUrl: "/src/lib/images/categories/category-4.png",
      product_count: 89,
    },
  ];

  const brand_logos = [
    {
      url: "",
      logoUrl: "/src/lib/images/logos/logo-1.png",
      cardBkg: "/src/lib/images/logos/logo-1.png",
    },
    {
      url: "",
      logoUrl: "/src/lib/images/logos/logo-2.png",
      cardBkg: "/src/lib/images/logos/logo-2.png",
    },
    {
      url: "",
      logoUrl: "/src/lib/images/logos/logo-3.png",
      cardBkg: "/src/lib/images/logos/logo-3.png",
    },
    {
      url: "",
      logoUrl: "/src/lib/images/logos/logo-4.png",
      cardBkg: "/src/lib/images/logos/logo-4.png",
    },
    {
      url: "",
      logoUrl: "/src/lib/images/logos/logo-6.png",
      cardBkg: "/src/lib/images/logos/logo-6.png",
    },
    {
      url: "",
      logoUrl: "/src/lib/images/logos/logo-7.png",
      cardBkg: "/src/lib/images/logos/logo-7.png",
    },
  ];

  const news_articles = [
    {
      title: "Some Philosophers Specialize In One Or More Historical Periods",
      created_at: "5th Sept 2024",
      summary:
        "Modi animi illo eum tempore earum quo dicta sunt. Ducimus rem quibusdam et repudiandae sint et dolorem facere. Occaecati sequi consequatur blanditiis ut doloribus ut asperiores totam. Rerum voluptatum asperiores magni repellendus. Sunt expedita optio sit quis.",
      imgUrl: "/src/lib/images/posts/post-1.jpg",
      url: "/",
    },
    {
      title: "Logic Is The Study Of Reasoning And Argument Part 2",
      created_at: "5th Sept 2024",
      summary:
        "Modi animi illo eum tempore earum quo dicta sunt. Ducimus rem quibusdam et repudiandae sint et dolorem facere. Occaecati sequi consequatur blanditiis ut doloribus ut asperiores totam. Rerum voluptatum asperiores magni repellendus. Sunt expedita optio sit quis.",
      imgUrl: "/src/lib/images/posts/post-10.jpg",
      url: "/",
    },
    {
      title: "A Variety Of Other Academic And Non-Academic Approaches Have Been Explored",
      created_at: "5th Sept 2024",
      summary:
        "Modi animi illo eum tempore earum quo dicta sunt. Ducimus rem quibusdam et repudiandae sint et dolorem facere. Occaecati sequi consequatur blanditiis ut doloribus ut asperiores totam. Rerum voluptatum asperiores magni repellendus. Sunt expedita optio sit quis.",
      imgUrl: "/src/lib/images/posts/post-6.jpg",
      url: "/",
    },
    {
      title: "Germany Was The First Country To Professionalize Philosophy",
      created_at: "5th Sept 2024",
      summary:
        "Modi animi illo eum tempore earum quo dicta sunt. Ducimus rem quibusdam et repudiandae sint et dolorem facere. Occaecati sequi consequatur blanditiis ut doloribus ut asperiores totam. Rerum voluptatum asperiores magni repellendus. Sunt expedita optio sit quis.",
      imgUrl: "/src/lib/images/posts/post-8.jpg",
      url: "/",
    },
    {
      title: "Many Inquiries Outside Of Academia Are Philosophical In The Broad Sense",
      created_at: "5th Sept 2024",
      summary:
        "Modi animi illo eum tempore earum quo dicta sunt. Ducimus rem quibusdam et repudiandae sint et dolorem facere. Occaecati sequi consequatur blanditiis ut doloribus ut asperiores totam. Rerum voluptatum asperiores magni repellendus. Sunt expedita optio sit quis.",
      imgUrl: "/src/lib/images/posts/post-3.jpg",
      url: "/",
    },
  ];

  const minicard_items = {
    trending_phones: [
      {
        name: "IPhone 15 Pro Max",
        imgUrl: "/src/lib/images/products/15-pro-max.jpg",
        url: "https://www.youtube.com/@Mrwhosetheboss",
        rating: 5,
        reviews: 47,
        price: 2200000,
        sale_price: 0,
        tags: ["hot"],
      },
      {
        name: "IPhone 14 Pro Max",
        imgUrl: "/src/lib/images/products/14-pro-max.avif",
        url: "https://www.youtube.com/@Mrwhosetheboss",
        rating: 5,
        reviews: 83,
        price: 9300000,
        sale_price: 0,
        tags: ["new"],
      },
      {
        name: "Samsung Galaxy S24 Ultra",
        imgUrl: "/src/lib/images/products/s24-ultra.avif",
        url: "https://www.youtube.com/@Mrwhosetheboss",
        rating: 5,
        reviews: 29,
        price: 9700000,
        sale_price: 0,
        tags: [],
      },
    ],
    trending_laptops: [
      {
        name: "MacBook Pro M3 Max",
        imgUrl: "/src/lib/images/products/m3-max.avif",
        url: "https://www.youtube.com/@Mrwhosetheboss",
        rating: 5,
        reviews: 109,
        price: 3200000,
        sale_price: 0,
        tags: [],
      },
      {
        name: "Dell Alienware X7",
        imgUrl: "/src/lib/images/products/alienware.avif",
        url: "https://www.youtube.com/@Mrwhosetheboss",
        rating: 5,
        reviews: 11,
        price: 11700000,
        sale_price: 0,
        tags: ["hot"],
      },
      {
        name: "Macbook Pro M2 Pro",
        imgUrl: "/src/lib/images/products/m2-pro.avif",
        url: "https://www.youtube.com/@Mrwhosetheboss",
        rating: 4,
        reviews: 35,
        price: 24700000,
        sale_price: 0,
        tags: [],
      },
    ],
    trending_accessories: [
      {
        name: "XBox Gaming Pad",
        imgUrl: "/src/lib/images/products/xbox-pad.avif",
        url: "https://www.youtube.com/@Mrwhosetheboss",
        rating: 4,
        reviews: 17,
        price: 70000,
        sale_price: 0,
        tags: ["new"],
      },
      {
        name: "Areabi Wireless Earbuds",
        imgUrl: "/src/lib/images/products/areabi-earphones.avif",
        url: "https://www.youtube.com/@Mrwhosetheboss",
        rating: 5,
        reviews: 17,
        price: 123000,
        sale_price: 105000,
        tags: ["sale"],
      },
      {
        name: "Hugo Boss Headphones",
        imgUrl: "/src/lib/images/products/boss-headphones.avif",
        url: "https://www.youtube.com/@Mrwhosetheboss",
        rating: 4,
        reviews: 7,
        price: 87000,
        sale_price: 0,
        tags: [],
      },
    ],
  };

  return {
    new_arrivals,
    features,
    bestsellers: [...bestsellers, ...featured_products],
    featured_bestseller,
    video_reviews,
    featured_review,
    filters,
    featured_products,
    categories,
    brand_logos,
    news_articles,
    minicard_items
  };
};
