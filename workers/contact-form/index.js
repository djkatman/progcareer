const ALLOWED_ORIGIN = 'https://progcareer.com';

const TYPES = {
  article: '記事内容の誤り',
  school: 'スクール・エージェント情報について',
  ad: '広告・アフィリエイトに関して',
  other: 'その他',
};

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(request) });
    }

    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response('Bad Request', { status: 400 });
    }

    const { name, email, type, message } = body;
    if (!name || !email || !type || !message) {
      return json({ ok: false, error: 'missing fields' }, 400, request);
    }

    const typeLabel = TYPES[type] ?? type;
    const toAddress = env.CONTACT_TO_EMAIL ?? 'djkatman@gmail.com';

    const mailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'ProgCareer お問い合わせ <onboarding@resend.dev>',
        to: [toAddress],
        reply_to: email,
        subject: `[ProgCareer] ${typeLabel}`,
        text: `お名前: ${name}\nメール: ${email}\n種別: ${typeLabel}\n\n${message}`,
      }),
    });

    if (!mailRes.ok) {
      const err = await mailRes.text();
      console.error('MailChannels error:', err);
      return json({ ok: false }, 500, request);
    }

    return json({ ok: true }, 200, request);
  },
};

function json(data, status, request) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(request) },
  });
}

function corsHeaders(request) {
  const origin = request.headers.get('Origin') ?? '';
  const allowed = origin === ALLOWED_ORIGIN ? origin : ALLOWED_ORIGIN;
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}
