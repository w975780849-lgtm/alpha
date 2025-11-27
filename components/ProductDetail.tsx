/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
  onOpenBacktest: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart, onOpenBacktest }) => {
  // Not strictly needed for digital goods, but could be used for "License Tier" (Personal, Pro, Enterprise)
  const [selectedTier, setSelectedTier] = useState<string | null>('个人版');
  
  const tiers = ['个人版', '专业版', '基金版'];
  const showTiers = product.category === '算法' || product.category === '数据';
  const showBacktest = product.category === '算法';

  return (
    <div className="pt-24 min-h-screen bg-[#F8FAFC] animate-fade-in-up">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 pb-24">
        
        {/* Breadcrumb / Back */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors mb-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          返回解决方案
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left: Main Image Only */}
          <div className="flex flex-col gap-4">
            <div className="w-full aspect-[16/9] bg-slate-200 overflow-hidden border border-slate-300 shadow-sm">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover animate-fade-in-up"
              />
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-center max-w-xl">
             <div className="flex items-center gap-2 mb-2">
                 <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                 <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">{product.category}</span>
             </div>
             <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">{product.name}</h1>
             <span className="text-2xl font-mono text-slate-500 mb-8 block">${product.price} <span className="text-sm text-slate-400">/ 授权</span></span>
             
             <p className="text-slate-600 leading-relaxed font-light text-lg mb-8 border-b border-slate-200 pb-8">
               {product.longDescription || product.description}
             </p>

             {showTiers && (
                <div className="mb-8">
                  <span className="block text-xs font-bold uppercase tracking-widest text-slate-900 mb-4">选择授权等级</span>
                  <div className="flex gap-4">
                    {tiers.map(tier => (
                      <button 
                        key={tier}
                        onClick={() => setSelectedTier(tier)}
                        className={`px-6 py-3 border transition-all duration-300 text-sm font-bold uppercase tracking-widest ${
                          selectedTier === tier 
                            ? 'border-blue-900 bg-blue-900 text-white' 
                            : 'border-slate-300 text-slate-500 hover:border-blue-900 hover:text-blue-900'
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>
             )}

             <div className="flex flex-col gap-4">
               <button 
                 onClick={() => onAddToCart(product)}
                 className="w-full py-5 bg-blue-600 text-white uppercase tracking-widest text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
               >
                 获取策略 — ${product.price}
               </button>

               {showBacktest && (
                   <button 
                     onClick={onOpenBacktest}
                     className="w-full py-4 border border-blue-600 text-blue-600 uppercase tracking-widest text-sm font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                   >
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                     </svg>
                     模拟回测表现
                   </button>
               )}

               <ul className="mt-8 space-y-3 text-sm text-slate-600 font-mono">
                 {product.features.map((feature, idx) => (
                   <li key={idx} className="flex items-center gap-3">
                     <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                     </svg>
                     {feature}
                   </li>
                 ))}
               </ul>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;