import { useState } from 'react';
import { Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  colors: string[];
}

export function ProductCard({ product, onClick }: { product: Product; onClick?: () => void }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {/* Wishlist Button */}
        <button
          onClick={(e) => { e.stopPropagation(); setIsWishlisted(!isWishlisted); }}
          className={`absolute top-2 right-2 p-2 rounded-full backdrop-blur-md transition-all ${
            isWishlisted
              ? 'bg-red-500 text-white'
              : 'bg-white/90 text-gray-700'
          }`}
        >
          <Heart
            className="w-4 h-4"
            fill={isWishlisted ? 'currentColor' : 'none'}
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-3">
        <h3 className="text-sm font-medium mb-1 line-clamp-2 leading-snug">
          {product.name}
        </h3>

        <p className="text-base font-semibold text-amber-900">
          Rp {(product.price / 1000000).toFixed(1)}jt
        </p>
      </div>
    </motion.div>
  );
}
