import { Home, Search, Heart, ShoppingBag, User } from 'lucide-react';

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-[600px] mx-auto px-4">
        <div className="flex items-center justify-around py-3">
          <button className="flex flex-col items-center gap-1 text-amber-600">
            <Home className="w-6 h-6" />
            <span className="text-xs font-medium">Home</span>
          </button>

          <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors">
            <Search className="w-6 h-6" />
            <span className="text-xs">Cari</span>
          </button>

          <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors">
            <div className="w-12 h-12 -mt-6 bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
          </button>

          <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors">
            <Heart className="w-6 h-6" />
            <span className="text-xs">Favorit</span>
          </button>

          <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors">
            <User className="w-6 h-6" />
            <span className="text-xs">Profil</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
