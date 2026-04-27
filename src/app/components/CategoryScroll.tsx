import { Sofa, Armchair, Lamp, Bed, Sparkles } from 'lucide-react';

interface CategoryScrollProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export function CategoryScroll({ selectedCategory, setSelectedCategory }: CategoryScrollProps) {
  const categories = [
    { id: 'all', name: 'Semua', icon: Sparkles },
    { id: 'living', name: 'Ruang Tamu', icon: Sofa },
    { id: 'office', name: 'Kantor', icon: Armchair },
    { id: 'bedroom', name: 'Kamar Tidur', icon: Bed },
    { id: 'lighting', name: 'Lampu', icon: Lamp },
  ];

  return (
    <div className="mb-6">
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selectedCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className="flex-shrink-0 flex flex-col items-center gap-2 min-w-[70px]"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                  isSelected
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-200'
                }`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <span
                className={`text-xs font-medium transition-colors ${
                  isSelected ? 'text-gray-900' : 'text-gray-500'
                }`}
              >
                {category.name}
              </span>
            </button>
          );
        })}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
