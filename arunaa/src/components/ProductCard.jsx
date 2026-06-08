import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card-premium group flex flex-col overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-dark-900">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-dark-950/80 backdrop-blur-md text-xs font-medium px-3 py-1.5 rounded-full border border-surface-border text-text-secondary">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-display font-medium text-text-primary line-clamp-1 group-hover:text-electric-400 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 bg-surface-muted px-2 py-1 rounded-lg border border-surface-border">
            <Star className="w-3.5 h-3.5 text-electric-400" fill="currentColor" />
            <span className="text-xs font-medium">{product.rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-text-secondary mb-6 line-clamp-2 flex-1">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-display font-bold text-white">
            ${product.price}
          </span>
          <button 
            onClick={() => addToCart(product)}
            className="w-10 h-10 rounded-xl bg-surface-muted border border-surface-border flex items-center justify-center text-text-primary hover:bg-electric-600 hover:border-electric-600 hover:text-white transition-all shadow-glass hover:shadow-glow-blue group/btn"
          >
            <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
