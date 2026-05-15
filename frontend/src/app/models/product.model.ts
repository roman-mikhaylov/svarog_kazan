export interface Product {
  sku: string;        // артикул
  roofType: string;   // тип кровли
  title: string;
  description: string;
  imageUrl: string;
  price?: number;
}