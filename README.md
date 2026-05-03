# CivicGuide — AI Election Assistant

> An interactive election education assistant — fully self-contained, zero API keys, zero backend. Works offline.

**Live Demo:** `https://YOUR-SERVICE-abc123-uc.a.run.app`  
**GitHub:** `https://github.com/YOUR_USERNAME/civicguide`

---

## Chosen Vertical

**Civic Education / Government Services** — helping citizens understand elections, their rights, and the democratic process in a clear, non-partisan way.

---

## How It Works

CivicGuide is a **100% static single-file web app** — no API keys, no server, no backend. It runs entirely in the browser using a built-in knowledge engine.

### Architecture

```
index.html  (single file — HTML + CSS + JS)
│
├── Built-in Knowledge Base (KB)
│   ├── 15+ topic modules covering all major election topics
│   ├── Country-specific data for US, India, UK, Canada, Australia + General
│   └── Keyword matching engine with fuzzy topic detection
│
├── Interactive UI
│   ├── Conversational chat interface
│   ├── Visual 9-step election timeline
│   ├── Country selector (10 countries)
│   ├── Quick topic sidebar with 11 topics
│   └── Follow-up suggestion chips
│
└── Dockerfile
    └── nginx:alpine — serves index.html on port 8080 for Cloud Run
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

## Running the App

### Option 1 — Open directly in browser (no server needed)
```bash
open index.html
# or double-click the file
```

### Option 2 — Run in Antigravity
1. Open Antigravity
2. Clone this repo into a workspace
3. Open `index.html` in the browser panel — it runs immediately

### Option 3 — Local server
```bash
python3 -m http.server 8080
# visit http://localhost:8080
```

### Option 4 — Docker locally
```bash
docker build -t civicguide .
docker run -p 8080:8080 civicguide
# visit http://localhost:8080
```

---

## Deploying to Google Cloud Run

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

No environment variables, no secrets, no API keys needed. The deployment completes in ~2 minutes.

---

## Google Services Used

- **Google Fonts** — Playfair Display + DM Sans typography
- **Google Cloud Run** — Serverless container hosting
- **Google Antigravity** — Used to develop, test, and deploy the application
- **Built to integrate with Gemini** — The knowledge engine can be augmented with Gemini API calls with zero structural changes

---

## Assumptions

1. The app covers general election education — users are directed to official government sources for jurisdiction-specific current rules
2. Country data covers the most common scenarios; local elections may vary
3. The app is intentionally non-partisan — it explains processes, not political positions
4. All information is built-in; no internet connection required after the initial page load

---

## Repository Structure

```
/
├── index.html    # Complete app — HTML + CSS + JS knowledge engine
├── Dockerfile    # nginx:alpine container for Cloud Run
└── README.md     # This file
```

---