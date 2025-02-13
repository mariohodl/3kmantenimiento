import { Star, ShoppingCart } from 'lucide-react';
// import { Product } from '../data/products';
import Image from 'next/image'
export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    discountPrice?: number;
    image: string;
    description: string;
    rating: number;
  }


interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  // const discount = product.discountPrice
  //   ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
  //   : 0;

  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow-md flex flex-col items-end">
          {product.discountPrice ? (
            <>
              <span className="text-red-500">${product.discountPrice}</span>
              <span className="text-gray-400 line-through text-xs">${product.price}</span>
            </>
          ) : (
            <span>${product.price}</span>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 transform translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <button className="w-full bg-white text-gray-900 py-2 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {product.category}
          </span>
          <div className="flex items-center ml-auto">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600 font-medium">{product.rating}</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductCard;