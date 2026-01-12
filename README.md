# Chizu

A personal knowledge management system that extracts and maintains your beliefs, decisions, and conclusions from AI conversations.

**Chizu** (地図) means "map" in Japanese—this tool helps you map your thinking and beliefs as they evolve.

## Concept

**Chizu** is an AI-powered conversation tool that automatically extracts your beliefs, decisions, and conclusions from your conversations and maintains them as a living knowledge base. Unlike traditional chat interfaces that leave you scrolling through history, Chizu builds a clear, current picture of what you think about different topics.

## The Problem

When you're deep in AI conversations, ideas pile up fast—recommendations, decisions, preferences, conclusions. It's easy to lose track of where you landed on things. Information overload from AI chats makes it hard to remember what you've decided or learned.

## The Solution

As you chat naturally with the LLM, Chizu:

- **Extracts** your beliefs, decisions, and conclusions from conversations
- **Organizes** them into a knowledge base of belief nodes
- **Updates** nodes when you change your mind (overwrites old conclusions)
- **Maintains** a current snapshot of your thinking across topics

## Key Features

- **Natural conversation** - Chat with an LLM as you normally would
- **Automatic extraction** - Beliefs are extracted and organized automatically
- **Living knowledge base** - Your beliefs update when you change your mind
- **Current state** - Always see what you currently think, not historical noise
- **Personal wiki** - Build a comprehensive picture of your beliefs over time

## Example

After conversations about business models, tech stacks, and strategies:

- Creates nodes like: `Business Model: B2B > B2C`, `Frontend: React`, `Backend: Node.js`
- When you change your mind: `Business Model: B2C > B2B` (updates the existing node)
- Query your beliefs: "What do I think about X?" → Get your current stance

## Vision

Turn the chaos of AI conversations into organized, actionable knowledge. Your thinking evolves, but your knowledge base stays current—like having a second brain that remembers your conclusions so you don't have to.

## Implementation

The core concept is defined, but implementation details are still to be decided:

- How beliefs are stored and structured
- How to match/identify when you're discussing the same topic across conversations
- How beliefs are visualized or accessed
- Technical architecture and stack

## Status

💡 Concept phase - Exploring the idea

---

_Built to help you capture and organize your thinking as you explore ideas with AI._
