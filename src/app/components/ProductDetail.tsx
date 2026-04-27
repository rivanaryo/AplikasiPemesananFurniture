import { useState } from 'react';
import { ArrowLeft, Heart, Share2, Star, ShoppingCart, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BottomNav } from './BottomNav';
import { motion } from 'motion/react';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  colors: string[];
  rating?: number;
  reviewCount?: number;
  description?: string;
  seller?: string;
  sellerAvatar?: string;
  material?: string;
  style?: string;
}

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

const categoryLabel: Record<string, string> = {
  office: 'Kantor',
  living: 'Ruang Tamu',
  bedroom: 'Kamar Tidur',
  lighting: 'Lampu',
};

export function ProductDetail({ product, onBack }: ProductDetailProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const rating = product.rating ?? 4.7;
  const reviewCount = product.reviewCount ?? 128;
  const description =
    product.description ??
    'Produk furnitur berkualitas tinggi dengan desain modern dan elegan. Dibuat dari bahan pilihan yang tahan lama dan ramah lingkungan. Cocok untuk melengkapi ruangan Anda dengan sentuhan estetika kontemporer.';
  const seller = product.seller ?? 'FurnitureCo Official';
  const material = product.material ?? 'Kayu Jati';
  const style = product.style ?? 'Modern';

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] pb-20" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Image */}
      <div className="relative w-full bg-gray-100" style={{ height: '45vh', minHeight: 260 }}>
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />

        {/* Back button */}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md transition-transform active:scale-95"
        >
          <ArrowLeft className="w-5 h-5 text-gray-800" />
        </button>

        {/* Share button */}
        <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md transition-transform active:scale-95">
          <Share2 className="w-4 h-4 text-gray-800" />
        </button>
      </div>

      {/* Detail Card */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="relative z-10 -mt-6 bg-white rounded-t-3xl px-5 pt-6 pb-4"
        style={{ minHeight: '55vh' }}
      >
        {/* Rating Row */}
        <div className="flex items-center justify-end mb-2">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400 mr-1" />
          <span className="text-sm font-semibold text-gray-800">{rating.toFixed(1)}</span>
          <span className="text-sm text-gray-400 ml-1">({reviewCount} ulasan)</span>
        </div>

        {/* Product Name */}
        <h1
          className="text-2xl font-bold text-gray-900 mb-3 leading-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {product.name}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-medium border border-amber-100">
            {categoryLabel[product.category] ?? product.category}
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-medium">
            {material}
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-medium">
            {style}
          </span>
        </div>

        <div className="border-t border-gray-100 mb-4" />

        {/* Price */}
        <div className="mb-4">
          <p className="text-xs text-gray-400 mb-0.5">Harga</p>
          <p className="text-2xl font-bold text-amber-800">
            Rp {product.price.toLocaleString('id-ID')}
          </p>
        </div>

        {/* Seller Row */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center overflow-hidden flex-shrink-0">
              {product.sellerAvatar ? (
                <img src={product.sellerAvatar} alt={seller} className="w-full h-full object-cover" />
              ) : (
                <span className="text-amber-700 font-semibold text-sm">
                  {seller.charAt(0).toUpperCase()}
                </span>
              )}
            </div>
            <div>
              <p className="text-xs text-gray-400">Penjual</p>
              <p className="text-sm font-semibold text-gray-800">{seller}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-all shadow-sm border ${
                isWishlisted
                  ? 'bg-red-50 border-red-200 text-red-500'
                  : 'bg-gray-50 border-gray-200 text-gray-500 hover:text-gray-800'
              }`}
            >
              <Heart
                className="w-5 h-5"
                fill={isWishlisted ? 'currentColor' : 'none'}
              />
            </button>
            <button className="w-11 h-11 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors shadow-sm">
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-base font-semibold text-gray-800 mb-2">Deskripsi Produk</h2>
          <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
        </div>
      </motion.div>

      {/* Add to Cart Bar */}
      <div className="fixed bottom-16 left-0 right-0 z-40 px-4 pb-2">
        <div className="max-w-[600px] mx-auto">
          <button
            onClick={handleAddToCart}
            className={`w-full py-3.5 rounded-2xl flex items-center justify-center gap-2 font-semibold text-sm transition-all shadow-lg ${
              addedToCart
                ? 'bg-green-600 text-white'
                : 'bg-amber-700 hover:bg-amber-800 text-white'
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
            {addedToCart ? 'Ditambahkan ke Keranjang!' : 'Tambah ke Keranjang'}
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
