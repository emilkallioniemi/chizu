export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Navigation */}
        <nav className="px-6 py-8 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="text-xl font-medium text-[#1a1a1a]">地図</div>
            <a
              href="/app"
              className="text-sm text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors"
            >
              Get Started
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-24 md:px-12 lg:px-16 md:py-32">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight text-[#1a1a1a] mb-8">
              Map your thinking.
              <br />
              <span className="gradient-text">Organize your beliefs.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4a4a4a] leading-relaxed mb-12 max-w-2xl">
              A personal knowledge management system that extracts and maintains
              your beliefs, decisions, and conclusions from AI conversations.
              Turn the chaos of AI chats into organized, actionable knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/app"
                className="px-8 py-3 gradient-button text-sm font-medium text-center"
              >
                Start Mapping
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-3 border border-[#1a1a1a]/10 text-[#1a1a1a] text-sm font-medium hover:border-[#1a1a1a]/20 transition-colors text-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="px-6 py-20 md:px-12 lg:px-16 md:py-32 border-t border-[#1a1a1a]/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-6">
              The Problem
            </h2>
            <p className="text-lg text-[#4a4a4a] leading-relaxed mb-4">
              When you&apos;re deep in AI conversations, ideas pile up
              fast—recommendations, decisions, preferences, conclusions.
              It&apos;s easy to lose track of where you landed on things.
            </p>
            <p className="text-lg text-[#4a4a4a] leading-relaxed">
              Information overload from AI chats makes it hard to remember what
              you&apos;ve decided or learned. Unlike traditional chat interfaces
              that leave you scrolling through history, you need a clear,
              current picture of what you think about different topics.
            </p>
          </div>
        </section>

        {/* Solution Section */}
        <section
          id="how-it-works"
          className="px-6 py-20 md:px-12 lg:px-16 md:py-32 border-t border-[#1a1a1a]/5"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-12">
              How It Works
            </h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">
                  Natural Conversation
                </h3>
                <p className="text-[#4a4a4a] leading-relaxed">
                  Chat with an LLM as you normally would. No special formatting
                  or commands needed.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">
                  Automatic Extraction
                </h3>
                <p className="text-[#4a4a4a] leading-relaxed">
                  As you chat naturally, Chizu extracts your beliefs, decisions,
                  and conclusions from conversations and organizes them into a
                  knowledge base of belief nodes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">
                  Living Knowledge Base
                </h3>
                <p className="text-[#4a4a4a] leading-relaxed">
                  Your beliefs update when you change your mind—nodes are
                  overwritten with new conclusions. Always see your current
                  state, not historical noise.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">
                  Personal Wiki
                </h3>
                <p className="text-[#4a4a4a] leading-relaxed">
                  Build a comprehensive picture of your beliefs over time. Query
                  your beliefs: &quot;What do I think about X?&quot; → Get your
                  current stance. Your second brain that remembers your
                  conclusions so you don&apos;t have to.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Example Section */}
        <section className="px-6 py-20 md:px-12 lg:px-16 md:py-32 border-t border-[#1a1a1a]/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-6">
              Example
            </h2>
            <p className="text-lg text-[#4a4a4a] leading-relaxed mb-6">
              After conversations about business models, tech stacks, and
              strategies:
            </p>
            <div className="bg-[#1a1a1a]/2 p-6 rounded-lg mb-6">
              <p className="text-sm text-[#4a4a4a] mb-2 font-mono">
                Creates nodes like:
              </p>
              <p className="text-sm text-[#1a1a1a] font-mono mb-1">
                Business Model: B2B → B2C
              </p>
              <p className="text-sm text-[#1a1a1a] font-mono mb-1">
                Frontend: React
              </p>
              <p className="text-sm text-[#1a1a1a] font-mono">
                Backend: Node.js
              </p>
            </div>
            <p className="text-lg text-[#4a4a4a] leading-relaxed">
              When you change your mind:{" "}
              <span className="font-mono text-[#1a1a1a]">
                Business Model: B2C → B2B
              </span>{" "}
              (updates the existing node). Your knowledge base stays
              current—like having a second brain that remembers your
              conclusions.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="get-started"
          className="px-6 py-20 md:px-12 lg:px-16 md:py-32 border-t border-[#1a1a1a]/5"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-6">
              Ready to map your thinking?
            </h2>
            <p className="text-lg text-[#4a4a4a] leading-relaxed mb-10 max-w-2xl mx-auto">
              Turn the chaos of AI conversations into organized, actionable
              knowledge. Your thinking evolves, but your knowledge base stays
              current.
            </p>
            <a
              href="/app"
              className="inline-block px-10 py-4 gradient-button text-base font-medium"
            >
              Get Started Free
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 md:px-12 lg:px-16 border-t border-[#1a1a1a]/5">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm text-[#4a4a4a]">
              Built to help you capture and organize your thinking as you
              explore ideas with AI.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
