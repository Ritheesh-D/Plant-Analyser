import express from 'express';
import dotenv from 'dotenv';
import Groq from 'groq-sdk';

dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { message, language, history } = req.body;
    if (!message) return res.status(400).json({ error: 'No message' });

    console.log('--- Chatbot Request (Groq) ---');
    console.log('Language:', language);

    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

    const systemPrompt = language === 'ta'
      ? `நீங்கள் ஒரு தாவரவியல் நிபுணர். தாவரங்கள் பற்றிய கேள்விகளுக்கு மட்டும் தமிழில் பதில் தரவும். ஒவ்வொரு தாவரம் பற்றியும் விரிவாக சொல்லவும்: 1. தாவரத்தின் பெயர் மற்றும் விவரம் 2. மூலிகை பயன்கள் 3. மருத்துவ பயன்கள் 4. வாழிடம் 5. பக்க விளைவுகள். குறைந்தது 4 பத்திகளில் பதில் தரவும்.`
      : `You are an expert botanist. Answer only plant-related questions in detail. For each plant provide minimum 4 paragraphs: 1. Plant name description and origin 2. Herbal and medicinal uses 3. Habitat where it grows 4. Precautions and side effects. If not plant-related politely redirect to plant topics.`;

    const messages = [{ role: 'system', content: systemPrompt }];

    if (history && history.length > 0) {
      history.slice(-6).forEach(msg => {
        if (msg.role === 'user' || msg.role === 'assistant') {
          messages.push({ role: msg.role, content: msg.content });
        }
      });
    }

    messages.push({ role: 'user', content: message });

    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: messages,
      max_tokens: 1024,
      temperature: 0.7
    });

    const reply = completion.choices[0]?.message?.content || 'Sorry could not generate response.';
    console.log('✅ Groq reply generated');
    return res.json({ reply });

  } catch (err) {
    console.error('❌ GROQ CHATBOT ERROR:', err.message);
    
    if (err.message.includes('organization_restricted') || err.message.includes('403')) {
      return res.json({ 
        reply: "⚠️ Your Groq API account is restricted or the model is unavailable. Please visit https://console.groq.com/ to check your account status, billing, or usage limits. You might need to add a payment method even for the free tier now." 
      });
    }

    return res.json({ reply: 'Sorry, I am temporarily unavailable. Please try again later. Error: ' + err.message });
  }
});

export default router;
