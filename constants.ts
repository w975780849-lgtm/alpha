/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Vector Momentum',
    tagline: '顺势而为。',
    description: '针对动荡市场优化的高频趋势跟踪算法。基于10年逐笔数据回测。',
    longDescription: 'Vector Momentum 利用专有的信号处理技术，在高波动环境中识别微观趋势。与标准的移动平均线交叉不同，Vector 根据实时市场噪音调整其灵敏度，确保在过滤震荡的同时捕捉趋势。专为外汇和加密货币对设计。',
    price: 1299,
    category: '算法',
    imageUrl: 'https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['自适应灵敏度', '夏普比率 > 2.5', 'Python API 集成']
  },
  {
    id: 'p2',
    name: 'Sentiment Oracle',
    tagline: '解读全球思维。',
    description: '对全球新闻和社交信息流进行实时 NLP 分析，构建成可操作的 CSV 数据流。',
    longDescription: '市场在价格变动之前先随情绪变动。Sentiment Oracle 每秒摄取 50,000+ 新闻源和社交媒体动态，使用大语言模型为每个标准普尔 500 指数成分股在 -1 到 +1 的范围内进行市场情绪评分。在价格波动发生前检测恐慌或狂热。',
    price: 499,
    category: '数据',
    imageUrl: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['50毫秒延迟', 'JSON/CSV 输出', '彭博终端插件']
  },
  {
    id: 'p3',
    name: 'RiskGuard Pro',
    tagline: '守护你的 Alpha。',
    description: '机构级风险管理仪表盘。实时计算 VaR、Beta 和相关性矩阵。',
    longDescription: '创造收益很容易，守住收益很难。RiskGuard Pro 充当您的数字风控官。它持续监控您的投资组合风险敞口，在板块相关性收紧或风险价值 (VaR) 超过设定阈值时自动向您发出警报。资本保值的必备工具。',
    price: 899,
    category: '分析',
    imageUrl: 'https://images.unsplash.com/photo-1543286386-713df548e9cc?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1543286386-713df548e9cc?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['蒙特卡洛模拟', '压力测试', '相关性热力图']
  },
  {
    id: 'p4',
    name: 'Quant Starter Kit',
    tagline: '筑牢根基。',
    description: '包含 50 小时 Python 课程、数学入门和样本数据集的综合教育套件。',
    longDescription: '从主观交易过渡到系统化卓越交易。该套件涵盖衍生品数学、随机微积分基础，以及使用 Pandas 和 NumPy 的实用 Python 实现。包含 5 个干净的历史数据集供您练习回测。',
    price: 199,
    category: '教育',
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['50小时视频内容', 'Jupyter Notebooks', '社区访问权限']
  },
  {
    id: 'p5',
    name: 'Mean Reversion X',
    tagline: '从极端中获利。',
    description: '专注于科技和能源板块协整对的统计套利机器人。',
    longDescription: 'Mean Reversion X 识别历史上同步移动但暂时背离的资产对。通过做多表现不佳者并做空表现优异者，它在价差收敛时捕捉利润。一种旨在即使在熊市中也能表现良好的市场中性策略。',
    price: 1499,
    category: '算法',
    imageUrl: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['市场中性', '自动对冲', '协整测试器']
  },
  {
    id: 'p6',
    name: 'Macro Vision',
    tagline: '纵观全局。',
    description: '可视化 G20 国家的利率、通胀和 GDP 流量的全球宏观经济仪表盘。',
    longDescription: '不要与美联储作对。Macro Vision 提供全球流动性状况的鸟瞰图。在一个统一的界面中可视化收益率曲线倒挂、央行资产负债表变化和集装箱运费率。非常适合长期持仓交易者。',
    price: 299,
    category: '分析',
    imageUrl: 'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['央行数据', '收益率曲线可视化', '外汇影响评分']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "技术分析的终结？",
        date: "2025年10月12日",
        excerpt: "为什么在图表上画线正在输给统计推断和机器学习。",
        image: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-slate-600" },
                "图表派的时代正在消逝。几十年来，交易员依赖支撑位、阻力位和杯柄形态。但在由微秒级执行的高频交易算法主导的市场中，这些视觉形态往往只不过是流动性陷阱。"
            ),
            React.createElement("p", { className: "mb-8 text-slate-600" },
                "量化金融不看形状；它看概率。我们不问“这看起来像反转吗？”，我们问“考虑到当前的波动机制，这种价格偏离的统计显著性是多少？”"
            ),
            React.createElement("blockquote", { className: "border-l-2 border-slate-900 pl-6 italic text-xl text-slate-900 my-10 font-serif" },
                "\"市场不是视觉艺术。它是数学混沌。\""
            ),
            React.createElement("p", { className: "mb-6 text-slate-600" },
                "在 AlphaQuant，我们相信用严格的回测取代直觉。我们的算法不猜测。它们计算。"
            )
        )
    },
    {
        id: 2,
        title: "理解波动率聚类",
        date: "2025年9月28日",
        excerpt: "大变动往往伴随着大变动。如何为曼德博效应建模。",
        image: "https://images.unsplash.com/photo-1509869175650-a1d97972541a?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-slate-600" },
                "标准经济理论假设市场回报呈正态分布（钟形曲线）。然而，真实市场表现出“肥尾”和波动率聚类。这意味着平静时期之后是平静，而混乱时期之后是更多的混乱。"
            ),
            React.createElement("p", { className: "mb-8 text-slate-600" },
                "贝努瓦·曼德博 (Benoit Mandelbrot) 曾著名地指出风险不是线性的。要在市场中生存，必须使用 GARCH 模型而不是简单的标准差来预测未来的风险。"
            ),
            React.createElement("div", { className: "my-12 p-8 bg-slate-100 font-serif text-slate-900 italic text-center" },
                React.createElement("p", null, "混沌并非随机。"),
                React.createElement("p", null, "它有结构。"),
                React.createElement("p", null, "我们只需要数学"),
                React.createElement("p", null, "去看见它。")
            ),
            React.createElement("p", { className: "mb-6 text-slate-600" },
                "我们的 RiskGuard Pro 工具专为处理这些非线性事件而构建，确保当分布发生变化时您不会措手不及。"
            )
        )
    },
    {
        id: 3,
        title: "资产定价中的机器学习",
        date: "2025年9月15日",
        excerpt: "从线性回归到神经网络：寻找回报的隐藏因子。",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-slate-600" },
                "传统的资产定价模型（如 CAPM）依赖于单一因子：市场 Beta。但我们知道世界更为复杂。价值、动量、质量和规模都起着作用。"
            ),
            React.createElement("p", { className: "mb-8 text-slate-600" },
                "深度学习使我们能够摄取成千上万个潜在因子——从利率到停车场的卫星图像——以发现简单回归无法捕捉的非线性关系。"
            ),
             React.createElement("div", { className: "my-12 p-8 bg-slate-900 text-white font-serif italic text-center" },
                React.createElement("p", null, "数据是新时代的石油。"),
                React.createElement("p", null, "算力是新时代的引擎。"),
                React.createElement("p", null, "Alpha 是目的地。")
            )
        )
    }
];

export const BRAND_NAME = 'AlphaQuant';
export const PRIMARY_COLOR = 'slate-900'; 
export const ACCENT_COLOR = 'blue-700';