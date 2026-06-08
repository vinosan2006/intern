import React from 'react';
import { Search } from 'lucide-react';

const FilterSidebar = () => {
  const categories = ['All Products', 'Electronics', 'Audio', 'Wearables', 'Accessories', 'Gadgets', 'Furniture'];
  const priceRanges = ['Under $100', '$100 - $500', '$500 - $1000', 'Over $1000'];

  return (
    <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
        <input 
          type="text" 
          placeholder="Search products..." 
          className="w-full bg-surface border border-surface-border rounded-xl py-3 pl-11 pr-4 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-all shadow-glass"
        />
      </div>

      {/* Categories */}
      <div className="glass-panel rounded-2xl p-6">
        <h3 className="text-sm font-display font-semibold uppercase tracking-wider text-text-primary mb-4">Categories</h3>
        <ul className="space-y-3">
          {categories.map((category, i) => (
            <li key={i}>
              <button className={`text-sm transition-colors ${i === 0 ? 'text-electric-400 font-medium' : 'text-text-secondary hover:text-white'}`}>
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div className="glass-panel rounded-2xl p-6">
        <h3 className="text-sm font-display font-semibold uppercase tracking-wider text-text-primary mb-4">Price Range</h3>
        <ul className="space-y-3">
          {priceRanges.map((range, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className="w-4 h-4 rounded border border-surface-border bg-dark-950 flex items-center justify-center cursor-pointer hover:border-electric-500 transition-colors">
                {/* Custom Checkbox visual placeholder */}
              </div>
              <span className="text-sm text-text-secondary cursor-pointer hover:text-white transition-colors">{range}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default FilterSidebar;
