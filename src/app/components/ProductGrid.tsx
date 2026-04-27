import { ProductCard } from './ProductCard';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  colors: string[];
}

interface ProductGridProps {
  selectedCategory: string;
  priceRange: [number, number];
  searchQuery: string;
  onProductClick?: (product: Product) => void;
}

const products = [
  {
    id: 1,
    name: 'Kursi Modern Olive',
    category: 'office',
    price: 12990000,
    image: 'https://images.unsplash.com/photo-1760716478137-d861d5b354e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwY2hhaXIlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzc3MjcxNzk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['#6B7A5E', '#8B9A7A', '#4A5943'],
  },
  {
    id: 2,
    name: 'Lounge Chair Kurva',
    category: 'living',
    price: 18750000,
    image: 'https://images.unsplash.com/photo-1760716478125-aa948e99ef85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwY2hhaXIlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzc3MjcxNzk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['#2C2C2C', '#4A4A4A', '#1A1A1A'],
  },
  {
    id: 3,
    name: 'Chaise Lounge Emas',
    category: 'bedroom',
    price: 27450000,
    image: 'https://images.unsplash.com/photo-1760716478152-f70694d134e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwY2hhaXIlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzc3MjcxNzk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['#D4AF37', '#C5A028', '#B8941F'],
  },
  {
    id: 4,
    name: 'Kursi Kayu Klasik',
    category: 'office',
    price: 10850000,
    image: 'https://images.unsplash.com/photo-1771573753404-0f99dbccd842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwY2hhaXIlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzc3MjcxNzk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['#8B6F47', '#A0826D', '#7A5F3F'],
  },
  {
    id: 5,
    name: 'Kursi Minimalis Hitam',
    category: 'living',
    price: 9390000,
    image: 'https://images.unsplash.com/photo-1766033238716-88d566a7d5c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwY2hhaXIlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzc3MjcxNzk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['#1A1A1A', '#2C2C2C', '#000000'],
  },
  {
    id: 6,
    name: 'Sofa Scandinavian',
    category: 'living',
    price: 36150000,
    image: 'https://images.unsplash.com/photo-1759743918954-f373b0d8a891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBzb2ZhJTIwZnVybml0dXJlfGVufDF8fHx8MTc3NzI3MTc5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['#E8E4DC', '#D4CFC4', '#C9C3B8'],
  },
  {
    id: 7,
    name: 'Lampu Vintage Emas',
    category: 'lighting',
    price: 5050000,
    image: 'https://images.unsplash.com/photo-1759978257038-ff90be507a3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzY2FuZGluYXZpYW4lMjBzb2ZhJTIwZnVybml0dXJlfGVufDF8fHx8MTc3NzI3MTc5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['#D4AF37', '#B8941F', '#9A7D1A'],
  },
  {
    id: 8,
    name: 'Ruang Tamu Modern',
    category: 'living',
    price: 47690000,
    image: 'https://images.unsplash.com/photo-1772797583328-f83bc3f94f80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzY2FuZGluYXZpYW4lMjBzb2ZhJTIwZnVybml0dXJlfGVufDF8fHx8MTc3NzI3MTc5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['#8B7355', '#A08968', '#6F5E4C'],
  },
  {
    id: 9,
    name: 'Meja Kayu Antik',
    category: 'office',
    price: 21690000,
    image: 'https://images.unsplash.com/photo-1772761482020-3cea792b5de7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjB0YWJsZSUyMGRlc2slMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzc3MjcxNzk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['#6F4E37', '#8B6F47', '#5D4E37'],
  },
];

export function ProductGrid({ selectedCategory, priceRange, searchQuery, onProductClick }: ProductGridProps) {
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium" style={{ fontFamily: 'Playfair Display, serif' }}>
          Produk Pilihan
        </h2>
        <p className="text-sm text-gray-500">
          {filteredProducts.length} produk
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onClick={() => onProductClick?.(product)} />
        ))}
      </div>
    </div>
  );
}
