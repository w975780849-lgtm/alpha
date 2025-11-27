/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-slate-100">
      
      {/* Introduction / Story */}
      <div className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col md:flex-row items-start gap-16 md:gap-32">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
            数据驱动， <br/> 结果定义。
          </h2>
        </div>
        <div className="md:w-2/3 max-w-2xl">
          <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-8">
            AlphaQuant 建立在一个数学确定性之上：市场是有效的，但并不完美。在效率与现实之间的缝隙中——人类情感制造波动的地方——有着等待被获取的利润。
          </p>
          <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-8">
            我们为个人投资者提供机构级的量化工具。从大语言模型驱动的情绪分析到高频动量算法，我们让普通人也能掌握华尔街的武器。
          </p>
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
            alt="Global Data Network" 
            className="w-full h-[400px] object-cover grayscale contrast-[1.1] brightness-90 mt-12"
          />
          <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mt-4">
            AlphaQuant 总部，纽约 / 伦敦 / 新加坡
          </p>
        </div>
      </div>

      {/* Philosophy Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="order-2 lg:order-1 relative h-[500px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200" 
             alt="Code Screen" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-blue-900/20"></div>
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center p-12 lg:p-24 bg-white">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-6">方法论</span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 text-slate-900 leading-tight">
             拒绝猜测。 <br/> 只信概率。
           </h3>
           <p className="text-lg text-slate-600 font-light leading-relaxed mb-12 max-w-md">
             我们摒弃直觉。我们提供的每一个策略都经过了不同市场制度下的严格回测，从2008年的崩盘到2020年的波动性激增。如果数据不支持，我们就不会发布。
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-slate-900 text-white">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-6">技术</span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 text-white leading-tight">
             速度即功能。
           </h3>
           <p className="text-lg text-slate-400 font-light leading-relaxed mb-12 max-w-md">
             我们的基础设施与主要交易所托管在一起，以确保最小的延迟。我们的数据管道每天处理太字节级的替代数据，以在噪音中寻找信号。
           </p>
        </div>
        <div className="relative h-[500px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
             alt="Financial Charts" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 brightness-75 grayscale"
           />
        </div>
      </div>
    </section>
  );
};

export default About;