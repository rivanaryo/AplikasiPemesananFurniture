import { useState } from 'react';
import { Header } from './components/Header';
import { CategoryScroll } from './components/CategoryScroll';
import { ProductGrid } from './components/ProductGrid';
import { BottomNav } from './components/BottomNav';
import { FilterModal } from './components/FilterModal';
import { ProductDetail } from './components/ProductDetail';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  colors: string[];
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000000]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        onBack={() => setSelectedProduct(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF9] pb-20" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onFilterClick={() => setIsFilterOpen(true)}
      />

      <div className="px-4 sm:px-6 pt-4">
        <CategoryScroll
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ProductGrid
          selectedCategory={selectedCategory}
          priceRange={priceRange}
          searchQuery={searchQuery}
          onProductClick={(product) => setSelectedProduct(product)}
        />
      </div>

      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />

      <BottomNav />
    </div>
  );
}
