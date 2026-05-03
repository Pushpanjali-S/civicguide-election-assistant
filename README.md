# CivicGuide — AI Election Assistant

> An interactive election education assistant — fully self-contained, zero API keys, zero backend. Works offline.

**Live Demo:** [https://civicguide-app-281537708673.us-central1.run.app](https://civicguide-app-281537708673.us-central1.run.app)  
**Test Suite:** [https://civicguide-app-281537708673.us-central1.run.app/test/](https://civicguide-app-281537708673.us-central1.run.app/test/)

---

## 📸 Screenshots

*(To be added: Add screenshots of the interface here)*

---

## ✨ Feature List

CivicGuide is packed with features to deliver a seamless and accessible civic education experience:

- **Interactive Conversational UI:** Ask questions in natural language and receive immediate responses.
- **Offline & Serverless:** A 100% static client-side application. No backend needed, ultra-fast loading, fully offline-capable once loaded.
- **Multi-Country Support:** Tailors responses for specific electoral systems (US, UK, India, Canada, Australia).
- **Dynamic Timelines:** Generates step-by-step visual election timelines on demand.
- **Smart Topic Suggestions:** Context-aware chips offer relevant follow-up questions.
- **Multi-language Support:** Integrated Google Translate for global accessibility.
- **Polling Locator:** Embeds Google Maps based on user intent.
- **Robust Testing Suite:** Visual test runner to validate all knowledge paths.

---

## ♿ Accessibility Notes (WCAG Compliant)

Accessibility is a core priority of this application. CivicGuide adheres to WCAG standards:

- **High Contrast Mode:** Dedicated toggle (top right) persisting user preference via `localStorage` for improved readability.
- **Keyboard Navigation:** Full support with visible focus rings (`:focus-visible`) across all interactive elements.
- **Screen Reader Support:** 
  - ARIA labels on semantic HTML landmarks (`<nav>`, `<main>`, `<aside>`).
  - `aria-live="polite"` regions for dynamic chat updates.
  - "Skip to Main Content" links to bypass navigation.
- **Responsive Layout:** Perfectly scales from mobile devices to large desktop monitors.

---

## 🧪 Testing Instructions

The application includes a built-in automated visual test runner.

1. Navigate to the `/test/` directory (`http://localhost:8080/test/` locally, or via the live demo link above).
2. The browser runs 18 distinct test cases against the core knowledge engine.
3. It validates that all 15 core topics resolve to the correct HTML payload.
4. It ensures negative edge cases trigger the fallback catch-all response correctly.
5. The UI prints out a summary (e.g. `18 / 18 Tests Passed`).

---

## ☁️ Google Services Integration

The project is heavily integrated with the Google ecosystem:

- **Google Cloud Run:** Hosts the Dockerized static site in a highly scalable serverless container.
- **Google Translate:** Injected to dynamically translate the UI into dozens of languages.
- **Google Maps:** Embedded dynamically via iframe for "Where is my polling station?" queries.
- **Google Analytics (gtag):** Event tracking hooked into the `ask()` function to measure the most queried election topics.
- **Google Fonts:** Utilizes Playfair Display and DM Sans for modern typography.
- **Google Antigravity:** Developed end-to-end within the Deepmind Antigravity environment.

---

## 🏗 Architecture & Repository Structure

```
/
├── index.html       # UI Shell + Styling + Event Handling
├── knowledge.js     # Extracted Knowledge Base Engine & Country Data
├── Dockerfile       # nginx:alpine configuration for Cloud Run
├── README.md        # This file
└── test/
    ├── index.html   # Visual Test Runner UI
    └── test.js      # 18-case validation script against knowledge.js
```

### Knowledge Topics Covered

| Topic | Details |
|---|---|
| Voter Registration | Eligibility, documents, deadlines, online portals — per country |
| Electoral Systems | FPTP, Proportional Representation, Ranked Choice, Two-Round |
| Election Day | Polling hours, what to bring, accessibility, rights |
| Mail-in / Absentee Voting | How to request, complete, and return a ballot |
| Vote Counting | Step-by-step from polls close to results declared |
| Certification & Inauguration | Canvassing, certification, transition, swearing in |
| Types of Elections | General, local, primary, by-election, referendum |
| Voter Rights | Secret ballot, non-discrimination, accessibility, complaints |
| Running for Office | Filing, nomination, campaign finance |
| Gerrymandering | Packing, cracking, redistricting, independent commissions |
| Misinformation | How to spot & fact-check election claims |
| Coalition / Hung Parliament | What happens when no majority is won |
| Early Voting | Advance polls, pre-poll voting by country |
| Recounts & Disputes | Types of recounts, audits, legal challenges |
| Election Timeline | Visual 9-step interactive timeline |

---

## 🚀 Running the App

### Option 1 — Open directly in browser (no server needed)
```bash
open index.html
# or double-click the file
```

### Option 2 — Local server
```bash
python3 -m http.server 8080
# visit http://localhost:8080
```

### Option 3 — Docker locally
```bash
docker build -t civicguide .
docker run -p 8080:8080 civicguide
# visit http://localhost:8080
```

---

## ☁️ Deploying to Google Cloud Run

```bash
# Authenticate
gcloud auth login
gcloud config set project YOUR_PROJECT_ID

# Deploy (builds container and deploys in one command)
gcloud run deploy civicguide \
  --source . \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated \
  --port 8080
```