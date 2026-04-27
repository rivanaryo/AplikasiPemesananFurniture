import { X } from 'lucide-react';
import { Slider } from './ui/Slider';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}

export function FilterModal({ isOpen, onClose, priceRange, setPriceRange }: FilterModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-3xl shadow-2xl animate-slide-up max-h-[80vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium" style={{ fontFamily: 'Playfair Display, serif' }}>
              Filter Produk
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Price Range */}
          <div>
            <h3 className="text-base font-medium mb-4">Rentang Harga</h3>
            <div className="mb-6">
              <Slider
                min={0}
                max={50000000}
                step={1000000}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value as [number, number])}
                className="mb-4"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex flex-col">
                <span className="text-gray-500 text-xs mb-1">Minimum</span>
                <span className="font-medium text-amber-900">
                  Rp {(priceRange[0] / 1000000).toFixed(0)}jt
                </span>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-gray-500 text-xs mb-1">Maximum</span>
                <span className="font-medium text-amber-900">
                  Rp {(priceRange[1] / 1000000).toFixed(0)}jt
                </span>
              </div>
            </div>
          </div>

          {/* Materials */}
          <div>
            <h3 className="text-base font-medium mb-4">Material</h3>
            <div className="grid grid-cols-2 gap-3">
              {['Kayu', 'Logam', 'Fabric', 'Kulit'].map((material) => (
                <label
                  key={material}
                  className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-amber-500 transition-colors"
                >
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-sm font-medium">{material}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Sort By */}
          <div>
            <h3 className="text-base font-medium mb-4">Urutkan</h3>
            <div className="space-y-2">
              {['Terbaru', 'Harga: Rendah ke Tinggi', 'Harga: Tinggi ke Rendah', 'Paling Populer'].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-amber-500 transition-colors"
                >
                  <input
                    type="radio"
                    name="sort"
                    className="w-5 h-5 text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-sm font-medium">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <button
            onClick={onClose}
            className="w-full py-4 bg-gray-900 text-white rounded-2xl font-medium hover:bg-gray-800 transition-colors"
          >
            Terapkan Filter
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
