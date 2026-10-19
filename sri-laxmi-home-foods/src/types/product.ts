export type SpiceLevel = 'Mild' | 'Medium' | 'Hot';

export interface ProductVariant {
  id: string;
  label: string;
  price: number;
  mrp: number;
  stock: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  images: string[];
  variants: ProductVariant[];
  spiceLevel: SpiceLevel;
  ingredients: string[];
  allergens: string[];
  storage: string;
  tags: string[];
  createdAt: string;
  isOutOfStock?: boolean;
}

export interface CategoryItem {
  slug: string;
  name: string;
  subtitle: string;
  accent: string;
}
