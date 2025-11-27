/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { JOURNAL_ARTICLES } from '../constants';
import { JournalArticle } from '../types';

interface JournalProps {
  onArticleClick: (article: JournalArticle) => void;
}

const Journal: React.FC<JournalProps> = ({ onArticleClick }) => {
  return (
    <section id="journal" className="bg-[#F8FAFC] py-32 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 pb-8 border-b border-slate-200">
            <div>
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">研究</span>
                <h2 className="text-4xl md:text-6xl font-serif text-slate-900">市场洞察</h2>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {JOURNAL_ARTICLES.map((article) => (
                <div key={article.id} className="group cursor-pointer flex flex-col text-left" onClick={() => onArticleClick(article)}>
                    <div className="w-full aspect-[16/9] overflow-hidden mb-8 bg-slate-200 relative">
                        <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute top-0 left-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">阅读</div>
                    </div>
                    <div className="flex flex-col flex-1 text-left">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">{article.date}</span>
                        <h3 className="text-2xl font-serif text-slate-900 mb-4 leading-tight group-hover:text-blue-800 transition-colors">{article.title}</h3>
                        <p className="text-slate-600 font-light leading-relaxed">{article.excerpt}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;