import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! Ask me any botanical questions.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const { language } = useLanguage();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (text) => {
    const userMessage = text || input.trim();
    if (!userMessage) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          language: language,
          history: messages.slice(-6)
        })
      });

      const data = await response.json();
      const reply = data.reply || data.message || 'Sorry, I could not understand that.';

      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);

    } catch (err) {
      console.error('Chat error:', err);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: language === 'ta'
          ? 'மன்னிக்கவும், சேவை தற்காலிகமாக கிடைக்கவில்லை.'
          : 'Sorry, service temporarily unavailable. Please try again.'
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([{ role: 'assistant', content: 'Hello! Ask me any botanical questions.' }]);
  };

  const suggestions = language === 'ta'
    ? ['துளசி பற்றி சொல்லு', 'காய்ச்சலை குணப்படுத்தும் தாவரங்கள்']
    : ['Tell me about Tulsi', 'What plants cure fever?'];

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: 'fixed', bottom: '32px', right: '32px',
            width: '56px', height: '56px', borderRadius: '50%',
            background: 'var(--neon-green)', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: 'var(--shadow-neon)', zIndex: 999,
            fontSize: '24px'
          }}
        >
          💬
        </button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div style={{
          position: 'fixed', bottom: '20px', right: '20px',
          width: '380px', height: '520px',
          background: 'var(--bg-card)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--neon-green-dim)',
          borderRadius: '20px',
          display: 'flex', flexDirection: 'column',
          zIndex: 999,
          boxShadow: 'var(--shadow-neon)',
          animation: 'slideUp 0.3s ease'
        }}>

          {/* Header */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '16px 20px',
            borderBottom: '1px solid var(--glass-border)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '20px' }}>🌿</span>
              <span style={{ color: 'var(--neon-green)', fontWeight: '700', fontSize: '16px' }}>
                AI Botanist
              </span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={clearChat} style={{
                background: 'transparent', border: 'none',
                color: 'var(--text-muted)', cursor: 'pointer', fontSize: '16px', padding: '4px'
              }}>🗑️</button>
              <button onClick={() => setIsOpen(false)} style={{
                background: 'transparent', border: 'none',
                color: 'var(--text-muted)', cursor: 'pointer', fontSize: '16px', padding: '4px'
              }}>✕</button>
            </div>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1, overflowY: 'auto', padding: '16px',
            display: 'flex', flexDirection: 'column', gap: '12px'
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start'
              }}>
                <div style={{
                  maxWidth: '80%',
                  padding: '10px 14px',
                  borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  background: msg.role === 'user'
                    ? 'var(--neon-green-glow)'
                    : 'var(--bg-secondary)',
                  border: msg.role === 'user'
                    ? '1px solid var(--neon-green-dim)'
                    : '1px solid var(--glass-border)',
                  color: 'var(--text-primary)',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  whiteSpace: 'pre-wrap'
                }}>
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div style={{ display: 'flex', gap: '4px', padding: '8px 14px' }}>
                {[0,1,2].map(i => (
                  <div key={i} style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    background: 'var(--neon-green)',
                    animation: `bounce 1s ${i * 0.2}s infinite`
                  }} />
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {messages.length <= 1 && (
            <div style={{ padding: '0 16px 8px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {suggestions.map((s, i) => (
                <button key={i} onClick={() => sendMessage(s)} style={{
                  background: 'transparent',
                  border: '1px solid var(--neon-green-dim)',
                  color: 'var(--neon-green)', padding: '6px 12px',
                  borderRadius: '20px', cursor: 'pointer',
                  fontSize: '12px', whiteSpace: 'nowrap'
                }}>
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{
            padding: '12px 16px',
            borderTop: '1px solid rgba(0,255,153,0.1)',
            display: 'flex', gap: '8px', alignItems: 'center'
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={language === 'ta' ? 'உங்கள் கேள்வியை தட்டச்சு செய்யுங்கள்...' : 'Type your question...'}
              style={{
                flex: 1, padding: '10px 14px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--neon-green-dim)',
                borderRadius: '20px', color: 'var(--text-primary)',
                fontSize: '14px', outline: 'none'
              }}
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: input.trim() ? 'var(--neon-green)' : 'var(--neon-green-glow)',
                border: 'none', cursor: input.trim() ? 'pointer' : 'not-allowed',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '16px', transition: 'all 0.2s ease',
                color: input.trim() ? 'var(--bg-dark)' : 'var(--text-muted)'
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  );
};

export default Chatbot;
