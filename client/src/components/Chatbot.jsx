import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Trash2, Sprout } from 'lucide-react';
import { supabase } from '../services/supabase';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Chatbot.css';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const { user } = useAuth();
  const { language, t } = useLanguage();
  const chatEndRef = useRef(null);

  // Suggested questions based on language
  const suggestions = language === 'ta' 
    ? ["துளசி பற்றி சொல்லுங்கள்", "காய்ச்சலை குணப்படுத்தும் மூலிகைகள் எவை?"]
    : ["Tell me about Tulsi", "What plants cure fever?"];

  const togglePanel = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const handleSend = async (messageText) => {
    const text = messageText || inputValue.trim();
    if (!text) return;

    if (!user) {
      setMessages(prev => [...prev, 
        { role: 'user', message: text },
        { role: 'bot', message: t('chatLogin') }
      ]);
      setInputValue('');
      return;
    }

    // Add user message
    const userMsg = { role: 'user', message: text };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      const payload = {
        message: text,
        language,
        history: messages // pass previous history
      };

      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('API Error');

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'bot', message: data.reply }]);

    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { 
        role: 'bot', 
        message: t('chatError')
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const parseBotText = (text) => {
    // Basic markdown formatting (splitting paragraphs)
    return text.split('\n\n').map((paragraph, i) => (
      <p key={i}>{paragraph}</p>
    ));
  };

  return (
    <>
      <button 
        className={`chatbot-fab ${isOpen ? 'pulse-open' : ''}`}
        onClick={togglePanel}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>

      <div className={`chat-panel ${isOpen ? 'open' : ''}`}>
        
        <div className="chat-header">
          <div className="chat-title">
            <Sprout size={20} className="glow-icon" /> {t('aiAssistant')}
          </div>
          <div className="chat-actions">
            <button className="chat-action-btn danger" onClick={() => setMessages([])} title="Clear Chat">
              <Trash2 size={16} />
            </button>
            <button className="chat-action-btn" onClick={togglePanel}>
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="chat-messages">
          {messages.length === 0 && (
            <div className="text-secondary" style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem' }}>
              {t('chatHello')}
            </div>
          )}

          {messages.map((msg, idx) => (
            <div key={idx} className={`message-node ${msg.role === 'user' ? 'msg-user' : 'msg-bot'}`}>
              {msg.role === 'bot' ? parseBotText(msg.message) : msg.message}
            </div>
          ))}

          {isTyping && (
            <div className="message-node msg-bot">
              <div className="typing-dots">
                <span></span><span></span><span></span>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Suggestions Row */}
        {messages.length === 0 && user && (
          <div className="chat-suggestions">
            {suggestions.map((sug, i) => (
              <div key={i} className="suggest-chip" onClick={() => handleSend(sug)}>
                {sug}
              </div>
            ))}
          </div>
        )}

        <div className="chat-input-area">
          <form 
            className="chat-input-wrapper"
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          >
            <input 
              type="text" 
              className="chat-input"
              placeholder={t('chatPlaceholder')}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isTyping}
            />
            <button 
              type="submit" 
              className="chat-send-btn"
              disabled={!inputValue.trim() || isTyping}
            >
              <Send size={16} style={{ marginLeft: '2px' }} />
            </button>
          </form>
        </div>

      </div>
    </>
  );
}

export default Chatbot;
