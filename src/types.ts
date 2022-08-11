export interface Assets {
  source: string;
};

export interface Variants {
  id: number;
  name: string;
  priceWithTax: number;
  product: any;
};

export interface Product {
  assets: Assets[];
  description: string;
  id: number;
  name: string;
  slug: string;
  variants: Variants[];
};

export interface CardProps {
  image: string;
  name: string;
  price: number;
  slug: string;
}