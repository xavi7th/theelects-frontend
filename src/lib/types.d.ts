export type Product = {
  [name]: string,
  [imgUrl]: string,
  [tags]: Array<string>,
  [price]: Number,
  [reviews]: Number,
  [rating]: Number,
  [in_stock]: Boolean,
  [features]: Array<String>,
}

/**
 * @extends Product
 */
export type BestsellingProduct = {
  sale_price: Number,
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
