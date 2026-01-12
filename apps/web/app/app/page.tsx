"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function AppPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
    }
  }, [input]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
    setIsLoading(true);

    try {
      // TODO: Replace with actual LLM API call
      // For now, simulating a response
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `I received your message: "${userMessage.content}". This is a placeholder response. To enable real LLM functionality, you'll need to integrate with an LLM API (e.g., OpenAI, Anthropic, or a local model).`,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen bg-white flex flex-col overflow-hidden">
      {/* Navigation */}
      <nav className="px-6 py-4 md:px-12 lg:px-16 border-b border-[#1a1a1a]/5 shrink-0">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-medium text-[#1a1a1a] hover:opacity-80 transition-opacity"
          >
            地図
          </Link>
          <div className="text-sm text-[#4a4a4a]">Chat</div>
        </div>
      </nav>

      {/* Chat Container */}
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-6 md:px-12 lg:px-16 py-8 min-h-0">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto mb-6 space-y-8 min-h-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-20">
              <h2 className="text-2xl md:text-3xl font-light text-[#1a1a1a] mb-4">
                Start a conversation
              </h2>
              <p className="text-[#4a4a4a] max-w-md">
                Chat with an LLM to extract and organize your beliefs,
                decisions, and conclusions. Your conversations will be processed
                to build your knowledge base.
              </p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex flex-col ${
                  message.role === "user" ? "items-end" : "items-start"
                }`}
              >
                <div className="max-w-[80%] md:max-w-[70%]">
                  <p className="text-xs text-[#4a4a4a] mb-1">
                    {message.role === "user" ? "You" : "Chizu"}
                  </p>
                  <p className="text-[#1a1a1a] leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-[#4a4a4a] rounded-full animate-bounce"></div>
                <div
                  className="w-1 h-1 bg-[#4a4a4a] rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-1 h-1 bg-[#4a4a4a] rounded-full animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form
          onSubmit={handleSubmit}
          className="flex gap-3 border-t border-[#1a1a1a]/5 pt-6 shrink-0 items-end"
        >
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder="Type your message..."
            className="flex-1 px-0 py-2 border-0 focus:outline-none text-[#1a1a1a] placeholder:text-[#4a4a4a] bg-transparent resize-none overflow-hidden"
            disabled={isLoading}
            rows={1}
            style={{ maxHeight: "120px" }}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="px-6 py-2 text-sm font-medium text-[#1a1a1a] hover:text-[#4a4a4a] disabled:opacity-30 disabled:cursor-not-allowed transition-colors shrink-0"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
