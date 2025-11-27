/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div className="group flex flex-col gap-6 cursor-pointer" onClick={() => onClick(product)}>
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-200 border border-slate-200">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 grayscale group-hover:grayscale-0"
        />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="bg-white text-slate-900 px-6 py-3 text-xs uppercase tracking-widest font-bold shadow-lg border border-slate-100">
                    查看详情
                </span>
            </div>
        </div>
      </div>
      
      <div className="text-left pl-2 border-l-2 border-transparent group-hover:border-blue-600 transition-all duration-300">
        <h3 className="text-xl font-serif font-medium text-slate-900 mb-1">{product.name}</h3>
        <p className="text-xs font-bold text-blue-600 mb-2 tracking-wide uppercase">{product.category}</p>
        <span className="text-sm font-mono text-slate-500 block">${product.price} / 月</span>
      </div>
    </div>
  );
};

export default ProductCard;