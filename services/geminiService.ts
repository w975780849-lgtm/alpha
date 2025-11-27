/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../constants';

const getSystemInstruction = () => {
  const productContext = PRODUCTS.map(p => 
    `- ${p.name} ($${p.price}): ${p.description}。功能: ${p.features.join(', ')}`
  ).join('\n');

  return `你是 AlphaBot，“AlphaQuant”这个顶级量化金融平台的高级 AI 分析师。
  你的语气是专业、善于分析、简洁且略带技术性的。请在适当的时候使用“波动率”、“Alpha”、“Beta”、“相关性”和“回测”等术语。
  
  这是我们目前的产品目录：
  ${productContext}
  
  请回答客户关于我们的算法、数据源和教育工具的问题。
  如果被问及一般市场状况，请给出一个谨慎、关注风险的回答，但要温和地将话题转回到我们的工具如何帮助分析这些状况上。
  不要给出具体的投资建议（例如，“买入 AAPL”）。相反，建议他们使用有助于做出该决定的工具。
  保持回答简洁（通常在3句话以内）。请用中文回答。`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    let apiKey: string | undefined;
    
    // Robustly attempt to get the API key, handling ReferenceError if process is not defined
    try {
      apiKey = process.env.API_KEY;
    } catch (e) {
      // process is likely not defined in this environment
      console.warn("Accessing process.env failed");
    }
    
    if (!apiKey) {
      return "连接 AlphaQuant 服务器失败。（缺少 API 密钥）";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "神经网络当前延迟较高。请稍后再试。";
  }
};