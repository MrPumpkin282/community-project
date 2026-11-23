const SYSTEM_PROMPT = `You are Nyaya Sathi, a helpful assistant on an Indian legal aid awareness website. You help users understand which free legal aid scheme or government helpline applies to their situation (farmers, the poor, women, children, senior citizens, workers, SC/ST, disaster or crime victims, students facing ragging, persons with disabilities, cyber fraud victims, consumer disputes, RTI inquiries, etc.), and you point them to the correct official channel: their District Legal Services Authority (DLSA), the NALSA helpline (15100), the Cybercrime helpline (1930), the Consumer helpline (1915), the Anti-Ragging helpline (1800-180-5522), Elder Line (14567), or the relevant government portal. You are not a lawyer and must never give specific legal advice, predict case outcomes, or draft legal documents for a real dispute. Always recommend contacting DLSA or a licensed advocate for anything beyond general guidance. Keep answers short, clear, and in plain language; offer Hindi or other Indian languages if the user writes in them.`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return res.status(503).json({
      error: 'Chat is temporarily unavailable. Please call the NALSA helpline at 15100.',
    });
  }

  const { messages } = req.body || {};

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid request: messages array required.' });
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'qwen/qwen3.8-27b',
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      const errBody = await response.text();
      console.error('Groq API error:', response.status, errBody);
      return res.status(502).json({
        error: 'Chat is temporarily unavailable. Please call the NALSA helpline at 15100.',
      });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content ?? '';

    return res.status(200).json({ reply });
  } catch (err) {
    console.error('Chat proxy error:', err);
    return res.status(500).json({
      error: 'Chat is temporarily unavailable. Please call the NALSA helpline at 15100.',
    });
  }
}
