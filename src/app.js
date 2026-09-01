import { Hono } from 'hono'
import { compress } from 'hono/compress'
import { renderHome } from './templates/home.js'
import { renderCollection } from './templates/collection.js'
import { renderProduct } from './templates/product.js'
import { renderCommissions } from './templates/commissions.js'
import { renderAbout } from './templates/about.js'
import { renderContact } from './templates/contact.js'
import { products } from './data/products.js'

const app = new Hono()

// Gzip/Brotli compress all responses
app.use('*', compress())

// Long-lived cache on images (1 year) — fingerprint changes when files change
app.use('/uploads/*', async (c, next) => {
  await next()
  c.header('Cache-Control', 'public, max-age=31536000, immutable')
})

// Short cache on HTML pages — fresh content, but reuse if unchanged
app.use('*', async (c, next) => {
  await next()
  const ct = c.res.headers.get('Content-Type') || ''
  if (ct.includes('text/html')) {
    c.header('Cache-Control', 'public, max-age=300, stale-while-revalidate=3600')
  }
})

const html = (content) => new Response(content, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })
const json = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } })

// Pages
app.get('/', (c) => html(renderHome()))

app.get('/collection', (c) => {
  const cat = c.req.query('cat') || 'all'
  return html(renderCollection(cat))
})

app.get('/product/:slug', (c) => {
  const product = products.find(p => p.slug === c.req.param('slug'))
  return html(renderProduct(product))
})

app.get('/commissions', (c) => {
  const item = c.req.query('item') || ''
  return html(renderCommissions(item))
})

app.get('/about', (c) => html(renderAbout()))

app.get('/contact', (c) => {
  const subject = c.req.query('subject') || ''
  return html(renderContact(subject))
})

// Simple pages
app.get('/shipping', (c) => html(simplePage('Shipping & Returns', `
<p style="font-size:15px;color:rgba(240,235,224,0.55);line-height:1.85;max-width:640px;font-weight:300;">All orders ship via USPS Priority or UPS Ground. Tracking provided on every shipment. Most items ship within the quoted lead time — we'll email you when yours ships.</p>
<br>
<p style="font-size:15px;color:rgba(240,235,224,0.55);line-height:1.85;max-width:640px;font-weight:300;"><strong style="color:#f0ebe0;">Returns:</strong> Because every piece is custom-made, we don't accept returns. If something arrives damaged or wrong, we'll make it right. Email us within 7 days of delivery.</p>`)))

app.get('/faq', (c) => html(simplePage('FAQ', `
${[
  ['How long does a commission take?', 'Lead times vary by piece — from 3 days for a paracord collar to 8 weeks for a complex Damascus knife. We quote the expected time before you commit.'],
  ['Can I request a specific design?', 'Yes. Send us a photo, sketch, or just a description. We can replicate most tooling patterns and are open to completely original designs.'],
  ['Do you offer repairs?', 'Yes. We repair our own work for life. Bring or ship it back and we\'ll fix it.'],
  ['What leather do you use?', 'We use Hermann Oak, Horween, and other premium vegetable-tanned leathers. All full-grain — not split leather with a surface coat.'],
  ['Do you ship internationally?', 'Currently US only. We\'re looking at expanding. Email us and we\'ll see what we can work out.'],
].map(([q, a]) => `
<div style="padding:28px 0;border-bottom:1px solid rgba(184,147,90,0.1);">
  <h3 style="font-size:16px;font-weight:700;color:#f0ebe0;margin-bottom:12px;">${q}</h3>
  <p style="font-size:14px;color:rgba(240,235,224,0.5);line-height:1.75;font-weight:300;">${a}</p>
</div>`).join('')}`)))

app.get('/privacy', (c) => html(simplePage('Privacy Policy', `
<p style="font-size:15px;color:rgba(240,235,224,0.55);line-height:1.85;max-width:640px;font-weight:300;">We collect your name and email only to fulfill your order or commission request. We don't sell or share your information with third parties. Email addresses collected via newsletter signup are used only to send occasional updates about new pieces and commission availability.</p>`)))

app.get('/terms', (c) => html(simplePage('Terms of Service', `
<p style="font-size:15px;color:rgba(240,235,224,0.55);line-height:1.85;max-width:640px;font-weight:300;">All items are made to order. A deposit is required to begin work on a commission. The remaining balance is due before shipping. All sales are final unless the item arrives damaged or materially different from what was agreed.</p>`)))

// API endpoints
app.post('/api/commission', async (c) => {
  try {
    const body = await c.req.json()
    console.log('Commission request:', body)
    // TODO: connect to email service (Resend, SendGrid, etc.)
    return json({ ok: true, message: 'Commission request received' })
  } catch {
    return json({ ok: false }, 400)
  }
})

app.post('/api/contact', async (c) => {
  try {
    const body = await c.req.json()
    console.log('Contact form:', body)
    // TODO: connect to email service
    return json({ ok: true, message: 'Message received' })
  } catch {
    return json({ ok: false }, 400)
  }
})

app.post('/api/subscribe', async (c) => {
  try {
    const form = await c.req.formData()
    const email = form.get('email')
    console.log('Newsletter subscribe:', email)
    // TODO: connect to email list (Mailchimp, ConvertKit, etc.)
    return new Response(null, { status: 302, headers: { Location: '/?subscribed=1' } })
  } catch {
    return new Response(null, { status: 302, headers: { Location: '/?subscribed=error' } })
  }
})

// 404
app.notFound((c) => {
  return new Response(simplePage('Page Not Found', `
<p style="font-size:15px;color:rgba(240,235,224,0.55);">That page doesn't exist.</p>
<br>
<a href="/" style="display:inline-flex;align-items:center;padding:14px 28px;background:#b8935a;font-size:12px;font-weight:700;letter-spacing:0.13em;text-transform:uppercase;color:#0f0e0c;">Back to Home</a>`), {
    status: 404,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
})

function simplePage(title, bodyHtml) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title} — The Old Country Customs</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300&display=swap" rel="stylesheet">
  <style>*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}body{background:#0f0e0c;color:#f0ebe0;font-family:'Archivo',sans-serif;-webkit-font-smoothing:antialiased}a{color:#b8935a;text-decoration:none}</style>
</head>
<body>
  <div style="padding:140px 48px 80px;max-width:1344px;margin:0 auto;">
    <a href="/" style="font-size:11px;letter-spacing:0.13em;text-transform:uppercase;color:rgba(240,235,224,0.3);display:inline-flex;align-items:center;gap:6px;margin-bottom:40px;">← Back</a>
    <h1 style="font-size:clamp(32px,4vw,64px);font-weight:900;text-transform:uppercase;letter-spacing:-0.025em;line-height:0.92;color:#f0ebe0;margin-bottom:40px;">${title}</h1>
    ${bodyHtml}
  </div>
</body>
</html>`
}

export default app
