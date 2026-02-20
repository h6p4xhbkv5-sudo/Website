export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid request: messages array required' });
  }

  // API key is stored securely in Vercel environment variables — never exposed to the browser
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured. Please add ANTHROPIC_API_KEY to your Vercel environment variables.' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',  // Fast + affordable for tutoring
        max_tokens: 1024,
        system: `You are Lumina AI, an expert educational tutor for students studying GCSEs and A-Levels in the UK. 
You specialise in helping students understand difficult concepts, practise exam questions, and build confidence.
- Always explain things clearly and step by step
- Use relatable examples where possible
- Encourage the student and be supportive
- If asked to generate practice questions, create realistic exam-style questions with mark schemes
- Keep responses focused and not overly long`,
        messages: messages
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || 'Claude API error' });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Server error: ' + error.message });
  }
}
