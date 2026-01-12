"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useChat } from "@ai-sdk/react";

export default function AppPage() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, isLoading } = useChat({
    api: "/api/chat",
  });

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
  }, [input || ""]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
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
                  <div className="text-[#1a1a1a] leading-relaxed whitespace-pre-wrap">
                    {message.parts && message.parts.length > 0
                      ? message.parts
                          .filter((part) => part.type === "text")
                          .map((part, index) => (
                            <span key={index}>{part.text}</span>
                          ))
                      : message.content || ""}
                  </div>
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
          onSubmit={onSubmit}
          className="flex gap-3 border-t border-[#1a1a1a]/5 pt-6 shrink-0 items-end"
        >
          <textarea
            ref={textareaRef}
            value={input || ""}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                onSubmit(e as any);
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
            disabled={!input?.trim() || isLoading}
            className="px-6 py-2 text-sm font-medium text-[#1a1a1a] hover:text-[#4a4a4a] disabled:opacity-30 disabled:cursor-not-allowed transition-colors shrink-0"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
