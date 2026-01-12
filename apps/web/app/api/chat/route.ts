import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    // Transform messages from parts format to content format for streamText
    const transformedMessages = messages.map((message: any) => {
      // If message has parts, extract text content
      if (message.parts && Array.isArray(message.parts)) {
        const textParts = message.parts
          .filter((part: any) => part.type === 'text')
          .map((part: any) => part.text)
          .join('');
        return {
          role: message.role,
          content: textParts,
        };
      }
      // If message already has content, use it
      return {
        role: message.role,
        content: message.content || '',
      };
    });

    // System message explaining Chizu's purpose
    const systemMessage = {
      role: 'system' as const,
      content: `You are Chizu (地図), an AI assistant that helps users map their thinking and organize their beliefs, decisions, and conclusions from conversations.

Chizu is a personal knowledge management system that:
- Extracts beliefs, decisions, and conclusions from natural conversations
- Organizes them into a living knowledge base of belief nodes
- Updates nodes when users change their mind (overwrites old conclusions)
- Maintains a current snapshot of the user's thinking across topics

Your role is to have natural, helpful conversations with users while being aware that everything discussed will be processed to build their personal knowledge base. Help them explore ideas, make decisions, and form conclusions. Be conversational, helpful, and engaging. When asked about yourself or Chizu, explain that you're Chizu, an AI assistant designed to help users map their thinking and organize their beliefs through conversation.`,
    };

    // OpenAI provider automatically reads OPENAI_API_KEY from process.env
    // You can also explicitly pass it: openai({ apiKey: process.env.OPENAI_API_KEY })
    const result = streamText({
      model: openai('gpt-4o'),
      messages: [systemMessage, ...transformedMessages],
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('Error in chat API route:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process chat request' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
