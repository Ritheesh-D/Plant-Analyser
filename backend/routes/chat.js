import express from 'express';
import { GoogleGenAI } from '@google/genai';
import { requireAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', requireAuth, async (req, res) => {
  try {
    const { message, language, history = [] } = req.body;
    
    if (!process.env.GEMINI_API_KEY) return res.status(500).json({ error: 'GEMINI_API_KEY not configured' });

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const systemInstruction = `You are a plant expert botanist. Answer only plant-related questions.
Always reply in the following language: ${language === 'ta' ? 'Tamil' : 'English'}.
For each plant query provide minimum 4 paragraphs:
- Plant details
- Herbal and medicinal uses
- Where it grows (habitat)
- Precautions and side effects
If question is not plant-related, politely redirect to plant topics.`;

    const contents = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.message }]
    }));
    
    // Add current user message
    contents.push({ role: 'user', parts: [{ text: message }] });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: { parts: [{ text: systemInstruction }] }
      },
      contents: contents
    });

    res.json({ reply: response.text });
  } catch (error) {
    console.error('Chat Error:', error);
    res.status(500).json({ error: 'Failed to process chat message' });
  }
});

export default router;
