/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Product } from '../types';

interface CheckoutProps {
  items: Product[];
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onBack }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const shipping = 0; // Digital Delivery
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 bg-[#F8FAFC] animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          返回平台
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Form */}
          <div>
            <h1 className="text-3xl font-serif text-slate-900 mb-4">安全结账</h1>
            <p className="text-sm text-slate-500 mb-12">通过 256 位加密进行数字资产交付。</p>
            
            <div className="space-y-12">
              {/* Section 1: Contact */}
              <div>
                <h2 className="text-xl font-serif text-slate-900 mb-6">用户身份</h2>
                <div className="space-y-4">
                   <input type="email" placeholder="企业邮箱" className="w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-600 transition-colors cursor-not-allowed font-mono text-sm" disabled />
                   <div className="flex items-center gap-2">
                     <input type="checkbox" id="newsletter" className="accent-blue-600 cursor-not-allowed" disabled />
                     <label htmlFor="newsletter" className="text-sm text-slate-500 cursor-not-allowed">订阅 AlphaQuant 每周报告</label>
                   </div>
                </div>
              </div>

              {/* Section 2: Billing */}
              <div>
                <h2 className="text-xl font-serif text-slate-900 mb-6">账单详情</h2>
                <div className="space-y-4">
                   <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="名" className="w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-600 transition-colors cursor-not-allowed font-mono text-sm" disabled />
                      <input type="text" placeholder="姓" className="w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-600 transition-colors cursor-not-allowed font-mono text-sm" disabled />
                   </div>
                   <input type="text" placeholder="公司名称 (选填)" className="w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-600 transition-colors cursor-not-allowed font-mono text-sm" disabled />
                </div>
              </div>

               {/* Section 3: Payment (Mock) */}
              <div>
                <h2 className="text-xl font-serif text-slate-900 mb-6">支付方式</h2>
                <div className="p-6 border border-slate-300 bg-white space-y-4">
                   <div className="flex justify-between items-center mb-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">加密交易</p>
                        <div className="flex gap-2">
                            <div className="w-8 h-5 bg-slate-200 rounded"></div>
                            <div className="w-8 h-5 bg-slate-200 rounded"></div>
                        </div>
                   </div>
                   <input type="text" placeholder="卡号" className="w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-600 transition-colors cursor-not-allowed font-mono text-sm" disabled />
                   <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="月/年" className="w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-600 transition-colors cursor-not-allowed font-mono text-sm" disabled />
                      <input type="text" placeholder="CVC" className="w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-600 transition-colors cursor-not-allowed font-mono text-sm" disabled />
                   </div>
                </div>
              </div>

              <div>
                <button 
                    disabled
                    className="w-full py-5 bg-slate-800 text-white uppercase tracking-widest text-sm font-bold cursor-not-allowed opacity-80"
                >
                    授权支付 — ${total}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Summary */}
          <div className="lg:pl-12 lg:border-l border-slate-200">
            <h2 className="text-xl font-serif text-slate-900 mb-8">订单清单</h2>
            
            <div className="space-y-6 mb-8">
               {items.map((item, idx) => (
                 <div key={idx} className="flex gap-4">
                    <div className="w-16 h-16 bg-slate-100 relative border border-slate-200">
                       <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover grayscale" />
                       <span className="absolute -top-2 -right-2 w-5 h-5 bg-blue-600 text-white text-[10px] flex items-center justify-center rounded-full font-bold">1</span>
                    </div>
                    <div className="flex-1">
                       <h3 className="font-serif text-slate-900 text-base">{item.name}</h3>
                       <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">{item.category}</p>
                    </div>
                    <span className="text-sm font-mono text-slate-600">${item.price}</span>
                 </div>
               ))}
            </div>

            <div className="border-t border-slate-200 pt-6 space-y-2">
              <div className="flex justify-between text-sm text-slate-600">
                 <span>小计</span>
                 <span className="font-mono">${subtotal}</span>
              </div>
              <div className="flex justify-between text-sm text-slate-600">
                 <span>交付</span>
                 <span className="text-green-600 font-bold">即时</span>
              </div>
            </div>
            
            <div className="border-t border-slate-200 mt-6 pt-6">
               <div className="flex justify-between items-center">
                 <span className="font-serif text-xl text-slate-900">应付总额</span>
                 <div className="flex items-end gap-2">
                   <span className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-widest">USD</span>
                   <span className="font-serif text-2xl text-slate-900">${total}</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;