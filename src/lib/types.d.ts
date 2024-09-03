export type Product = {
  name: string,
  imgUrl: string,
  tags: Array<string>,
  price: number,
  reviews: number,
  rating: number,
  in_stock: boolean,
  features: Array<string>,
  sale_price: number,
}

export type ProductFilter = {
  key: string,
  value: string,
}

export type ProductCategory = {
  name: string,
  imgUrl: string,
  product_count: string,
}

export type BrandLogo = {
  url: string,
  logoUrl: string,
  cardBkg: string,
}

export type NewsArticle = {
  title: string,
  created_at: string,
  summary: string,
  imgUrl: string,
  url: string,
}

export type VideoReview = {
  title: string,
  created_at: string,
  imgUrl: string,
  url: string,
  rating: number,
}

export type SiteFeature = {
  title: string
  description: string
  svg_url: string
}
