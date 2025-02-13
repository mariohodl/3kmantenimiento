

import React from 'react';
// import { products, Product } from './data/products';
import ProductList from './ProductList';
import OurWarranties from '@/components/common/OurWarranties';
import Container from '@/components/ui/Container';
export interface ProductType {
  id: string;
  name: string;
  category: string;
  price: number;
  discountPrice?: number;
  image: string;
  description: string;
  rating: number;
}
  
const myProducts: ProductType[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    category: 'Electronics',
    price: 299.99,
    discountPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    description: 'High-quality wireless headphones with noise cancellation',
    rating: 4.5
  },
  {
    id: '2',
    name: 'Minimalist Watch',
    category: 'Accessories',
    price: 199.99,
    discountPrice: 159.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    description: 'Elegant minimalist watch with leather strap',
    rating: 4.8
  },
  {
    id: '3',
    name: 'Smart Speaker',
    category: 'Electronics',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&q=80&w=800',
    description: 'Voice-controlled smart speaker with premium sound',
    rating: 4.3
  },
  {
    id: '4',
    name: 'Leather Wallet',
    category: 'Accessories',
    price: 79.99,
    discountPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800',
    description: 'Handcrafted leather wallet with multiple compartments',
    rating: 4.6
  },
  {
    id: '5',
    name: 'Wireless Earbuds',
    category: 'Electronics',
    price: 159.99,
    discountPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800',
    description: 'True wireless earbuds with premium sound quality',
    rating: 4.7
  },
  {
    id: '6',
    name: 'Sunglasses',
    category: 'Accessories',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800',
    description: 'Classic design sunglasses with UV protection',
    rating: 4.4
  }
];

const Products = () => {


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm font-medium">
            🎉 Free shipping on orders over $200! Limited time offer
          </p>
        </div>
      </div>

      <div className='bg-white'>
        <Container>
            <OurWarranties/>
        </Container>
      </div>
     

      <div className="max-w-7xl mx-auto px-4 py-8">
        <ProductList products={myProducts} />
      </div>
    </div>
  );
}

export default Products;