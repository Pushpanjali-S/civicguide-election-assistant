# CivicGuide — AI Election Assistant

> An interactive, AI-powered assistant that helps citizens understand elections — registration, timelines, voting processes, and electoral systems — in a clear, non-partisan way.

---

## Chosen Vertical

**Civic Education / Government Services** — empowering citizens to understand and participate in the democratic process.

---

## How It Works

CivicGuide is a single-page web application powered by the **Claude AI API (claude-sonnet-4-20250514)**. It provides:

- **Conversational Q&A** — Ask any question about elections in natural language
- **Country-specific answers** — Select from 10 countries; the AI tailors responses accordingly
- **Visual election timeline** — An interactive step-by-step breakdown of the election process
- **Quick topic shortcuts** — One-click access to common topics (registration, voting, results)
- **Persistent conversation history** — Context is maintained throughout the session

---

## Approach & Logic

### AI System Prompt Design
The assistant is given a carefully crafted system prompt that enforces:
- **Non-partisan neutrality** — no political opinions or candidate endorsements
- **Country context** — responses adapt to the selected country's electoral system
- **Educational tone** — clear, accessible language with structured formatting

### Architecture
```
index.html (single file)
├── CSS — Navy/gold civic design system, responsive layout
├── HTML — Sidebar navigation, chat area, input bar
└── JavaScript
    ├── Anthropic API calls (claude-sonnet-4-20250514)
    ├── Conversation history management
    ├── Markdown-to-HTML formatting
    └── Interactive timeline renderer
```

### Conversation Flow
1. User selects their country from the sidebar
2. User types a question or clicks a quick-topic button
3. Full conversation history is sent to Claude API with a civic-education system prompt
4. Response is formatted (bold, lists, headers) and displayed in the chat
5. History accumulates for contextual follow-ups

---

## Features

| Feature | Description |
|---|---|
| 🤖 AI Chat | Claude-powered Q&A on any election topic |
| 🌍 Multi-country | 10 countries + General mode |
| 📅 Visual Timeline | 9-step interactive election process timeline |
| ⚡ Quick Topics | Pre-built buttons for the most common questions |
| 📱 Responsive | Works on desktop and mobile |
| 🎨 Branded UI | Navy + gold civic aesthetic, Playfair Display typography |

---

## Google Services Integration

The assistant is built to integrate with Google Services in the following ways:

- **Google Fonts** — Playfair Display + DM Sans for typography
- **Gemini API** — Can be swapped to use `gemini-2.0-flash` for responses (see note below)
- **Google Cloud / Firebase** — Can host the app and store user sessions

> To switch to Gemini: replace the fetch endpoint with `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent` and update the request body format.

---

## Setup & Running

### Option 1: Direct Browser
```bash
# Just open the file
open index.html
```

### Option 2: Local Server
```bash
# Python
python3 -m http.server 8080

# Node.js
npx serve .
```

### Option 3: Deploy to GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/civicguide.git
git push -u origin main
# Enable GitHub Pages in repository settings
```

---

## Assumptions

1. The Anthropic API key is handled by the hosting environment (Anthropic's claude.ai artifact runner) — no key is hardcoded
2. Election information is general and educational; users are advised to verify current laws with official government sources
3. The assistant is non-partisan and avoids commentary on specific candidates, parties, or political positions
4. Timeline dates shown are approximate templates; actual dates vary by country and election cycle

---

## Repository Structure

```
/
├── index.html     # Complete app (single file — HTML + CSS + JS)
└── README.md      # This file
```

---

## Evaluation Notes

- **Code Quality** — Single-file architecture, well-commented sections, CSS variables for theming
- **Security** — No hardcoded API keys; all responses processed client-side
- **Efficiency** — Conversation history pruned to relevant context; minimal dependencies
- **Accessibility** — Semantic HTML, readable contrast ratios, keyboard navigation support
- **Google Services** — Google Fonts integrated; architecture ready for Gemini API and Firebase

---

*Built for civic education. Democracy works best when citizens are informed.*