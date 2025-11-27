/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect, useMemo } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

interface BacktestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: Product;
}

const TIMEFRAMES = ['1M', '3M', '6M', '1Y', 'YTD'];

const BacktestModal: React.FC<BacktestModalProps> = ({ isOpen, onClose, initialProduct }) => {
  const algoProducts = useMemo(() => PRODUCTS.filter(p => p.category === '算法'), []);
  
  // Safe default ID
  const defaultAlgoId = algoProducts.length > 0 ? algoProducts[0].id : '';

  // Use a string for ID to avoid undefined issues
  const [selectedAlgoId, setSelectedAlgoId] = useState<string>(() => {
    if (initialProduct?.id && algoProducts.find(p => p.id === initialProduct.id)) {
        return initialProduct.id;
    }
    return defaultAlgoId;
  });

  const [timeframe, setTimeframe] = useState('6M');
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Update selection if initialProduct changes and modal is open
  useEffect(() => {
    if (isOpen && initialProduct && algoProducts.find(p => p.id === initialProduct.id)) {
      setSelectedAlgoId(initialProduct.id);
    }
  }, [isOpen, initialProduct, algoProducts]);

  useEffect(() => {
    if (isOpen) {
        setIsAnimating(true);
        const timer = setTimeout(() => setIsAnimating(false), 800);
        return () => clearTimeout(timer);
    }
  }, [isOpen, selectedAlgoId, timeframe]);

  // Mock Data Generation
  const simulationData = useMemo(() => {
    if (!selectedAlgoId) return [];

    const points = 100;
    const data: number[] = [];
    let value = 10000;
    
    // Seed logic based on Algo ID
    const algoIndex = algoProducts.findIndex(p => p.id === selectedAlgoId);
    
    // Safety check
    if (algoIndex === -1) return [];

    const volatility = algoIndex === 0 ? 0.02 : 0.012; // First algo (Momentum) is more volatile
    const trend = algoIndex === 0 ? 0.0015 : 0.0008; // Momentum has higher trend
    
    // Safe seed generation
    const seedStr = selectedAlgoId || 'default';
    let seed = seedStr.charCodeAt(0) + timeframe.length;
    
    const random = () => {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    };

    for (let i = 0; i < points; i++) {
        const change = (random() - 0.5) * 2 * volatility + trend;
        value = value * (1 + change);
        data.push(value);
    }
    return data;
  }, [selectedAlgoId, timeframe, algoProducts]);

  if (!isOpen) return null;

  // Defensive metrics calculation
  let totalReturn = 0;
  let maxDrawdown = 0;
  let chartPath = '';
  
  const hasData = simulationData && simulationData.length > 0;

  if (hasData) {
      const startValue = simulationData[0];
      const endValue = simulationData[simulationData.length - 1];
      totalReturn = ((endValue - startValue) / startValue) * 100;
      
      // Calculate Drawdown
      let peak = -Infinity;
      simulationData.forEach(v => {
        if (v > peak) peak = v;
        const dd = (peak - v) / peak;
        if (dd > maxDrawdown) maxDrawdown = dd;
      });

      // SVG Chart Logic
      const width = 800;
      const height = 300;
      const minVal = Math.min(...simulationData);
      const maxVal = Math.max(...simulationData);
      const range = maxVal - minVal;
      
      // Prevent division by zero if flat line
      const safeRange = range === 0 ? 1 : range;

      chartPath = simulationData.map((val, idx) => {
        const x = (idx / (simulationData.length - 1)) * width;
        const y = height - ((val - minVal) / safeRange) * (height - 40) - 20; 
        // Ensure not NaN
        if (isNaN(x) || isNaN(y)) return `0,${height}`;
        return `${x},${y}`;
      }).join(' ');
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md" onClick={onClose} />
      
      {/* Main Window */}
      <div className="relative bg-slate-900 w-[95vw] md:w-[1000px] h-[80vh] border border-slate-700 shadow-2xl flex flex-col md:flex-row overflow-hidden animate-fade-in-up">
        
        {/* Sidebar Controls */}
        <div className="w-full md:w-64 bg-slate-800 border-r border-slate-700 p-6 flex flex-col gap-8">
            <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">回测实验室</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-xs text-slate-400 mb-2">策略</label>
                        <select 
                            value={selectedAlgoId}
                            onChange={(e) => setSelectedAlgoId(e.target.value)}
                            className="w-full bg-slate-900 text-white text-sm border border-slate-600 p-2 outline-none focus:border-blue-500 font-mono"
                        >
                            {algoProducts.map(p => (
                                <option key={p.id} value={p.id}>{p.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs text-slate-400 mb-2">时间范围</label>
                        <div className="grid grid-cols-3 gap-2">
                            {TIMEFRAMES.map(t => (
                                <button
                                    key={t}
                                    onClick={() => setTimeframe(t)}
                                    className={`text-xs py-1 border ${timeframe === t ? 'border-blue-500 text-blue-400' : 'border-slate-600 text-slate-500 hover:border-slate-500'}`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-auto">
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-widest transition-colors">
                    部署策略
                </button>
            </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col bg-slate-900 relative">
            {/* Header */}
            <div className="h-16 border-b border-slate-700 flex items-center justify-between px-8 bg-slate-800/50">
                <span className="font-mono text-sm text-green-400 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    系统在线
                </span>
                <button onClick={onClose} className="text-slate-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {hasData ? (
                <>
                {/* Metrics Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 border-b border-slate-800">
                    <div>
                        <span className="text-xs text-slate-500 uppercase tracking-wider block mb-1">总回报</span>
                        <span className={`text-2xl font-mono ${totalReturn >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {totalReturn > 0 ? '+' : ''}{totalReturn.toFixed(2)}%
                        </span>
                    </div>
                    <div>
                        <span className="text-xs text-slate-500 uppercase tracking-wider block mb-1">最大回撤</span>
                        <span className="text-2xl font-mono text-red-400">
                            -{(maxDrawdown * 100).toFixed(2)}%
                        </span>
                    </div>
                    <div>
                        <span className="text-xs text-slate-500 uppercase tracking-wider block mb-1">夏普比率</span>
                        <span className="text-2xl font-mono text-slate-200">
                            {(1.5 + (totalReturn / 100)).toFixed(2)}
                        </span>
                    </div>
                    <div>
                        <span className="text-xs text-slate-500 uppercase tracking-wider block mb-1">交易次数</span>
                        <span className="text-2xl font-mono text-slate-200">
                            {Math.floor(simulationData.length * 0.4)}
                        </span>
                    </div>
                </div>

                {/* Chart Container */}
                <div className="flex-1 p-8 relative">
                    <div className="absolute inset-x-8 inset-y-8 border border-slate-800 bg-slate-900/50">
                        {/* Grid Lines */}
                        {[0, 1, 2, 3, 4].map(i => (
                            <div key={i} className="absolute w-full border-t border-slate-800" style={{ top: `${i * 25}%` }}></div>
                        ))}
                        {[0, 1, 2, 3, 4].map(i => (
                            <div key={i} className="absolute h-full border-l border-slate-800" style={{ left: `${i * 25}%` }}></div>
                        ))}

                        <svg viewBox={`0 0 800 300`} className="w-full h-full overflow-visible preserve-3d">
                            <defs>
                                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5"/>
                                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
                                </linearGradient>
                            </defs>
                            {/* Area under curve */}
                            <path 
                                d={`${chartPath} L 800,300 L 0,300 Z`} 
                                fill="url(#chartGradient)" 
                                className="opacity-20"
                            />
                            {/* Line */}
                            <path 
                                d={`M ${chartPath}`} 
                                fill="none" 
                                stroke="#3b82f6" 
                                strokeWidth="2" 
                                vectorEffect="non-scaling-stroke"
                                className={isAnimating ? 'animate-draw-line' : ''}
                                strokeDasharray={isAnimating ? "2000" : "none"}
                                strokeDashoffset={isAnimating ? "2000" : "0"}
                            />
                        </svg>

                        {/* Chart Tooltip / Cursor Mockup */}
                        <div className="absolute top-4 right-4 bg-slate-800 px-3 py-1 text-xs font-mono text-white border border-slate-600 rounded">
                            模拟表现
                        </div>
                    </div>
                </div>
                </>
            ) : (
                <div className="flex-1 flex items-center justify-center text-slate-500">
                    <p>请选择一个策略进行模拟。</p>
                </div>
            )}
        </div>
      </div>
      <style>{`
        @keyframes draw-line {
            to { stroke-dashoffset: 0; }
        }
        .animate-draw-line {
            animation: draw-line 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default BacktestModal;