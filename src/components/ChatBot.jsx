import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, AlertTriangle, Sparkles } from 'lucide-react';
import AshokaChakra from './AshokaChakra';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        'Namaste! 🙏 I am Nyaya Sathi, your legal aid guide. Tell me about your situation, and I will point you to the right government scheme or helpline. I can help in English or Hindi.',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { role: 'user', content: text };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages
            .filter((m) => m.role !== 'system')
            .map(({ role, content }) => ({ role, content })),
        }),
      });

      const data = await res.json();

      if (data.error) {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: data.error },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: data.reply },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Chat is temporarily unavailable. Please call the NALSA helpline at 15100.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {/* Floating Launcher Trigger */}
      <SheetTrigger asChild>
        <button
          className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? 'bg-gray-600 hover:bg-gray-700 rotate-0'
              : 'bg-navy-600 hover:bg-navy-700 animate-bounce-slow'
          }`}
          aria-label={isOpen ? 'Close chatbot' : 'Open Nyaya Sathi chatbot'}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white" />
          )}
        </button>
      </SheetTrigger>

      {/* Slide-Up Panel */}
      <SheetContent
        side="bottom"
        className="h-[85vh] sm:h-[620px] sm:max-w-md sm:bottom-6 sm:right-6 sm:inset-x-auto sm:rounded-2xl rounded-t-2xl p-0 flex flex-col bg-white border border-gray-200 shadow-2xl overflow-hidden"
      >
        {/* Decorative Tricolor Top Accent */}
        <div className="w-full flex h-[3px] shrink-0" aria-hidden="true">
          <div className="w-1/3 bg-[#FF9933]" />
          <div className="w-1/3 bg-white" />
          <div className="w-1/3 bg-[#138808]" />
        </div>

        {/* Header */}
        <SheetHeader className="bg-navy-700 text-white px-5 py-4 shrink-0 border-b border-navy-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-saffron-500 rounded-full flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <SheetTitle className="font-semibold text-sm text-white leading-tight">
                  Nyaya Sathi
                </SheetTitle>
                <AshokaChakra className="w-3.5 h-3.5 text-saffron-300" color="currentColor" />
              </div>
              <SheetDescription className="text-[11px] text-navy-200 mt-0.5">
                Legal Aid Guide • Not a Lawyer
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-0 bg-gray-50/50">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap shadow-sm ${
                  msg.role === 'user'
                    ? 'bg-navy-600 text-white rounded-br-md'
                    : 'bg-white border border-gray-200 text-gray-800 rounded-bl-md'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {/* Async Loading Skeleton with Rotating Ashoka Chakra Animation */}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 p-3.5 rounded-2xl rounded-bl-md space-y-2 max-w-[75%] shadow-sm">
                <div className="flex items-center gap-2 text-xs text-navy-800 font-medium mb-1">
                  <AshokaChakra className="w-4 h-4 animate-spin text-[#000080]" color="#000080" />
                  <span>Searching official schemes…</span>
                </div>
                <Skeleton className="h-3 w-44 bg-gray-200" />
                <Skeleton className="h-3 w-32 bg-gray-200" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input & Legal Disclaimer */}
        <div className="border-t border-gray-200 px-4 py-3 shrink-0 bg-white">
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about legal aid schemes…"
              className="flex-1 rounded-full px-4 py-2.5 text-sm border-gray-300 focus-visible:ring-navy-400"
              disabled={loading}
            />
            <Button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              size="icon"
              className="h-10 w-10 rounded-full bg-navy-600 hover:bg-navy-700 text-white shrink-0 disabled:opacity-40"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-[10px] text-gray-500 mt-2 flex items-center gap-1">
            <AlertTriangle className="w-3 h-3 text-amber-500 shrink-0" />
            <span>Nyaya Sathi is an AI assistant, not a lawyer. For legal representation, contact your DLSA or call 15100.</span>
          </p>
        </div>
      </SheetContent>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-4px); }
        }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
      `}</style>
    </Sheet>
  );
}
