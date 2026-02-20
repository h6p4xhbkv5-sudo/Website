# Lumina AI — Setup Guide

## Your project contains:
```
lumina-ai/
├── public/
│   └── index.html        ← Your full website
├── api/
│   └── chat.js           ← Secure Claude AI backend
├── vercel.json           ← Hosting configuration
└── README.md
```

---

## How to deploy (step by step)

### Step 1 — Get your Claude API key
1. Go to **https://console.anthropic.com**
2. Sign up / log in
3. Click **"API Keys"** in the sidebar
4. Click **"Create Key"** — copy it somewhere safe

---

### Step 2 — Create a free Vercel account
1. Go to **https://vercel.com**
2. Sign up (you can use your GitHub or Google account)

---

### Step 3 — Upload your project
1. In Vercel dashboard, click **"Add New Project"**
2. Choose **"Deploy from your computer"** (or connect GitHub if you use it)
3. Upload this entire `lumina-ai` folder

---

### Step 4 — Add your API key (IMPORTANT — keeps your key secret)
1. In your Vercel project, go to **Settings → Environment Variables**
2. Add a new variable:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** paste your Claude API key here
3. Click **Save**
4. Go to **Deployments** and click **Redeploy**

---

### Step 5 — Your site is live!
Vercel gives you a free URL like `lumina-ai-yourname.vercel.app`

---

## Important notes
- Your API key is **never visible** in the website code — it stays secret on Vercel's servers
- The AI tutor uses **Claude Haiku** (fast and affordable)
- Anthropic charges per use — monitor your usage at console.anthropic.com
- New Anthropic accounts get **free credits** to start

---

## Need help?
- Vercel docs: https://vercel.com/docs
- Anthropic docs: https://docs.anthropic.com
