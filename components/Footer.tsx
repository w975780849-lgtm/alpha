/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) return;
    setSubscribeStatus('loading');
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <footer className="bg-slate-900 pt-24 pb-12 px-6 text-slate-400">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        <div className="md:col-span-4">
          <h4 className="text-2xl font-serif text-white mb-6 flex items-center gap-2">
             <div className="w-3 h-3 bg-blue-500 rounded-sm rotate-45"></div>
             AlphaQuant
          </h4>
          <p className="max-w-xs font-light leading-relaxed text-slate-400">
            量化混沌。
            为现代投资者提供机构级的算法、数据和风险管理。
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-bold text-white mb-6 tracking-widest text-xs uppercase">平台</h4>
          <ul className="space-y-4 font-light text-sm">
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-blue-400 transition-colors">算法</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-blue-400 transition-colors">数据源</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-blue-400 transition-colors">风险分析</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="font-bold text-white mb-6 tracking-widest text-xs uppercase">公司</h4>
          <ul className="space-y-4 font-light text-sm">
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-blue-400 transition-colors">方法论</a></li>
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-blue-400 transition-colors">招聘</a></li>
            <li><a href="#journal" onClick={(e) => onLinkClick(e, 'journal')} className="hover:text-blue-400 transition-colors">研究洞察</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-bold text-white mb-6 tracking-widest text-xs uppercase">智能简报</h4>
          <div className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="analyst@firm.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
              className="bg-transparent border-b border-slate-600 py-2 text-lg outline-none focus:border-blue-500 transition-colors placeholder-slate-600 text-white disabled:opacity-50 font-mono" 
            />
            <button 
              onClick={handleSubscribe}
              disabled={subscribeStatus !== 'idle' || !email}
              className="self-start text-xs font-bold uppercase tracking-widest mt-2 hover:text-blue-400 disabled:cursor-default disabled:hover:text-slate-400 disabled:opacity-50 transition-opacity"
            >
              {subscribeStatus === 'idle' && '订阅报告'}
              {subscribeStatus === 'loading' && '处理中...'}
              {subscribeStatus === 'success' && '已订阅'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest opacity-60">
        <p>© 2025 AlphaQuant Technologies. 版权所有。</p>
      </div>
    </footer>
  );
};

export default Footer;