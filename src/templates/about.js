import { page } from './layout.js'

export function renderAbout() {
  return page({
    title: 'About — The Old Country Customs',
    description: 'Learn about The Old Country Customs — handcrafted leather goods, forged steel, and heirloom jewelry made in the USA since 2020.',
    active: 'about',
    body: `
<!-- HERO -->
<section style="min-height:80vh;display:flex;flex-direction:column;justify-content:flex-end;padding:0 48px 88px;background:#0d0c0a;position:relative;overflow:hidden;">
  <img src="/uploads/about-hero-bg.jpg" alt="" fetchpriority="high" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;">
  <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(6,4,2,0.95) 0%,rgba(6,4,2,0.6) 50%,rgba(6,4,2,0.35) 100%);pointer-events:none;z-index:1;"></div>
  <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:2;" xmlns="http://www.w3.org/2000/svg">
    <defs><pattern id="about-tex" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect x="0" y="0" width="1" height="48" fill="rgba(184,147,90,0.055)"></rect></pattern></defs>
    <rect width="100%" height="100%" fill="url(#about-tex)"></rect>
  </svg>
  <div style="max-width:1344px;margin:0 auto;width:100%;position:relative;z-index:3;">
    <p style="font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#b8935a;margin-bottom:24px;animation:fadeUp 700ms ease both;">Est. 2020</p>
    <h1 style="font-size:clamp(48px,6.5vw,100px);font-weight:900;text-transform:uppercase;letter-spacing:-0.025em;line-height:0.88;color:#f0ebe0;animation:fadeUp 700ms 60ms ease both;">Built by<br>hand. Done<br>right.</h1>
    <div style="margin-top:36px;height:1px;background:rgba(184,147,90,0.2);max-width:480px;"></div>
  </div>
</section>

<!-- STORY -->
<section style="padding:96px 48px;background:#0d0c0a;border-bottom:1px solid rgba(184,147,90,0.1);">
  <div style="max-width:1344px;margin:0 auto;display:grid;grid-template-columns:1fr 1.4fr;gap:96px;align-items:center;">
    <div>
      <img src="/uploads/about-img-1.jpg" alt="Workshop" style="width:100%;aspect-ratio:4/5;object-fit:cover;margin-bottom:3px;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;">
        <img src="/uploads/about-img-2.jpg" alt="Leatherwork" style="width:100%;aspect-ratio:1;object-fit:cover;">
        <img src="/uploads/about-img-3.jpg" alt="Forging" style="width:100%;aspect-ratio:1;object-fit:cover;">
      </div>
    </div>
    <div>
      <p style="font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:#b8935a;margin-bottom:28px;">The Story</p>
      <h2 style="font-size:clamp(28px,3.5vw,52px);font-weight:900;text-transform:uppercase;line-height:0.92;letter-spacing:-0.02em;color:#f0ebe0;margin-bottom:32px;">Started in<br>a garage.<br>Still is.</h2>
      <div style="display:flex;flex-direction:column;gap:20px;font-size:15px;color:rgba(240,235,224,0.5);line-height:1.85;font-weight:300;">
        <p>We started in 2020 making tack for our own horses. Word got around. People asked if we'd make a collar for their dog, a strap for their guitar, a halter with their brand on it.</p>
        <p>We said yes. We kept saying yes. Now we have a full shop, a wait list, and a policy of never taking on more work than we can do properly.</p>
        <p>Every single piece that leaves this shop was touched by human hands for hours. We use full-grain leather — the real stuff, not split leather with a painted surface. We forge our own steel. We do our own finishing. Nothing is farmed out.</p>
        <p>If it's got our name on it, it's right.</p>
      </div>
    </div>
  </div>
</section>

<!-- VALUES -->
<section style="padding:96px 48px;background:#131210;border-bottom:1px solid rgba(184,147,90,0.1);">
  <div style="max-width:1344px;margin:0 auto;">
    <p style="font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:#b8935a;margin-bottom:24px;text-align:center;">What We Stand On</p>
    <h2 style="font-size:clamp(28px,3.5vw,52px);font-weight:900;text-transform:uppercase;letter-spacing:-0.02em;line-height:0.92;color:#f0ebe0;text-align:center;margin-bottom:72px;">Three things,<br>no exceptions.</h2>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid rgba(184,147,90,0.18);">
      ${[
        { img: '/uploads/about-leather.jpg', title: 'Real Materials', body: 'Full-grain leather. High-carbon and Damascus steel. Natural antler, wood, and stone. No shortcuts on materials — the quality of the work starts with what you start with.' },
        { img: '/uploads/about-steel.jpg', title: 'Honest Craft', body: 'We don\'t rush. We don\'t take orders we can\'t fill well. Every stitch, every weld, every edge — done correctly or redone. The work is the reputation.' },
        { img: '/uploads/about-memory.jpg', title: 'Built to Last', body: 'A wallet that outlasts the phone you bought the same year. A halter that your kids use after you. Craft that goes the distance isn\'t just a product — it\'s an heirloom.' },
      ].map((v, i) => `
<div style="${i < 2 ? 'border-right:1px solid rgba(184,147,90,0.18);' : ''}">
  <div style="aspect-ratio:4/3;overflow:hidden;">
    <img src="${v.img}" alt="${v.title}" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;filter:grayscale(0.3);">
  </div>
  <div style="padding:36px;">
    <h3 style="font-size:20px;font-weight:700;color:#f0ebe0;margin-bottom:16px;text-transform:uppercase;letter-spacing:-0.01em;">${v.title}</h3>
    <p style="font-size:14px;color:rgba(240,235,224,0.45);line-height:1.75;font-weight:300;">${v.body}</p>
  </div>
</div>`).join('')}
    </div>
  </div>
</section>

<!-- STATS -->
<section style="padding:80px 48px;background:#0d0c0a;border-bottom:1px solid rgba(184,147,90,0.1);">
  <div style="max-width:1344px;margin:0 auto;display:flex;justify-content:center;gap:80px;align-items:center;">
    ${[['2020', 'Est.'], ['8', 'Collections'], ['100%', 'Handmade'], ['USA', 'Made in']].map(([val, label]) => `
<div style="text-align:center;">
  <div style="font-size:48px;font-weight:900;color:#b8935a;line-height:1;">${val}</div>
  <div style="font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(240,235,224,0.3);margin-top:8px;">${label}</div>
</div>`).join('<div style="width:1px;height:60px;background:rgba(184,147,90,0.14);"></div>')}
  </div>
</section>

<!-- CTA -->
<section style="padding:96px 48px;background:#b8935a;">
  <div style="max-width:1344px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:48px;">
    <div>
      <p style="font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:rgba(15,14,12,0.6);margin-bottom:16px;">Ready to Order?</p>
      <h2 style="font-size:clamp(28px,3.5vw,52px);font-weight:900;text-transform:uppercase;line-height:0.92;letter-spacing:-0.02em;color:#0f0e0c;">Let's build<br>something together.</h2>
    </div>
    <div style="display:flex;gap:16px;flex-shrink:0;">
      <a href="/collection" style="display:inline-flex;align-items:center;padding:16px 36px;background:#0f0e0c;font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#f0ebe0;transition:background 200ms;"
        onmouseover="this.style.background='#2a2218'" onmouseout="this.style.background='#0f0e0c'">Shop Collection</a>
      <a href="/commissions" style="display:inline-flex;align-items:center;padding:16px 36px;border:2px solid rgba(15,14,12,0.4);font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#0f0e0c;transition:border-color 200ms;"
        onmouseover="this.style.borderColor='#0f0e0c'" onmouseout="this.style.borderColor='rgba(15,14,12,0.4)'">Commission a Piece</a>
    </div>
  </div>
</section>`
  })
}
