const BASE_CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #0f0e0c; color: #f0ebe0; font-family: 'Archivo', sans-serif; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
  a { color: inherit; text-decoration: none; }
  img { display: block; max-width: 100%; }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }
  :focus-visible { outline: 2px solid #b8935a; outline-offset: 2px; }
`

const NAV_SCRIPT = `
<script>
(function(){
  var h = document.querySelector('header');
  if (!h) return;
  function update() {
    var s = window.scrollY > 40;
    h.style.background = s ? 'rgba(15,14,12,0.97)' : h.dataset.initBg || 'rgba(15,14,12,0)';
    h.style.borderBottomColor = s ? 'rgba(184,147,90,0.15)' : 'transparent';
  }
  update();
  window.addEventListener('scroll', update, { passive: true });
})();
</script>
`

export function nav(active = '') {
  const link = (page, href, label) => {
    const isActive = page === active
    return `<a href="${href}" style="font-size:11px;letter-spacing:0.13em;text-transform:uppercase;color:${isActive ? '#b8935a' : 'rgba(240,235,224,0.5)'};transition:color 200ms;"
      onmouseover="this.style.color='${isActive ? '#b8935a' : '#f0ebe0'}'"
      onmouseout="this.style.color='${isActive ? '#b8935a' : 'rgba(240,235,224,0.5)'}'">${label}</a>`
  }
  const initBg = active === 'home' ? 'rgba(15,14,12,0)' : 'rgba(15,14,12,0.97)'
  return `
<header data-init-bg="${initBg}" style="position:fixed;top:0;left:0;right:0;z-index:100;height:72px;display:flex;align-items:center;justify-content:space-between;padding:0 48px;background:${initBg};border-bottom:1px solid transparent;transition:background 400ms ease,border-color 400ms ease;">
  <a href="/" style="display:flex;align-items:center;gap:14px;">
    <img src="/uploads/logo-1788168413553-yoaq.jpeg" alt="The Old Country Customs" style="width:42px;height:42px;object-fit:cover;border-radius:50%;border:1px solid rgba(184,147,90,0.3);">
    <div>
      <div style="font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;line-height:1.2;color:#f0ebe0;">The Old Country Customs</div>
      <div style="font-size:9px;letter-spacing:0.22em;text-transform:uppercase;color:#b8935a;line-height:1.4;">Hand Crafted</div>
    </div>
  </a>
  <nav style="display:flex;align-items:center;gap:40px;">
    ${link('collection', '/collection', 'Collection')}
    ${link('commissions', '/commissions', 'Commissions')}
    ${link('about', '/about', 'About')}
    ${link('contact', '/contact', 'Contact')}
    <a href="/collection" style="display:inline-flex;align-items:center;padding:10px 22px;background:#b8935a;font-size:11px;font-weight:700;letter-spacing:0.13em;text-transform:uppercase;color:#0f0e0c;transition:background 200ms;"
      onmouseover="this.style.background='#c9a96e'" onmouseout="this.style.background='#b8935a'">Shop Now</a>
  </nav>
</header>
${NAV_SCRIPT}`
}

export function footer() {
  const col = (title, links) => `
<div>
  <div style="font-size:10px;letter-spacing:0.24em;text-transform:uppercase;color:#b8935a;margin-bottom:20px;padding-bottom:14px;border-bottom:1px solid rgba(184,147,90,0.15);">${title}</div>
  <div style="display:flex;flex-direction:column;gap:12px;">
    ${links.map(([href, label]) => `<a href="${href}" style="font-size:14px;color:rgba(240,235,224,0.4);transition:color 200ms;" onmouseover="this.style.color='#f0ebe0'" onmouseout="this.style.color='rgba(240,235,224,0.4)'">${label}</a>`).join('')}
  </div>
</div>`

  return `
<footer style="background:#080706;border-top:1px solid rgba(184,147,90,0.15);">
  <!-- Newsletter -->
  <div style="border-bottom:1px solid rgba(184,147,90,0.1);padding:56px 48px;">
    <div style="max-width:1344px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:48px;flex-wrap:wrap;">
      <div>
        <p style="font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:#b8935a;margin-bottom:12px;">Stay in the loop</p>
        <h3 style="font-size:clamp(20px,2.4vw,34px);font-weight:900;text-transform:uppercase;letter-spacing:-0.02em;line-height:0.95;color:#f0ebe0;">New pieces. Commission spots.<br>Nothing else.</h3>
      </div>
      <form action="/api/subscribe" method="POST" style="display:flex;gap:0;max-width:420px;width:100%;flex-shrink:0;">
        <input type="email" name="email" placeholder="your@email.com" required style="flex:1;background:#1a1815;color:#f0ebe0;border:1px solid rgba(184,147,90,0.25);border-right:none;padding:14px 18px;font-family:'Archivo',sans-serif;font-size:14px;outline:none;min-width:0;">
        <button type="submit" style="padding:14px 28px;background:#b8935a;border:none;font-size:11px;font-weight:700;letter-spacing:0.13em;text-transform:uppercase;color:#0f0e0c;cursor:pointer;font-family:'Archivo',sans-serif;white-space:nowrap;flex-shrink:0;transition:background 200ms;"
          onmouseover="this.style.background='#c9a96e'" onmouseout="this.style.background='#b8935a'">Subscribe</button>
      </form>
    </div>
  </div>
  <!-- Main columns -->
  <div style="padding:72px 48px 56px;border-bottom:1px solid rgba(184,147,90,0.1);">
    <div style="max-width:1344px;margin:0 auto;display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:56px;">
      <!-- Brand -->
      <div>
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px;">
          <img src="/uploads/logo-1788168413553-yoaq.jpeg" alt="" style="width:52px;height:52px;object-fit:cover;border-radius:50%;border:1px solid rgba(184,147,90,0.25);">
          <div>
            <div style="font-size:12px;font-weight:700;letter-spacing:0.09em;text-transform:uppercase;color:#f0ebe0;line-height:1.3;">The Old Country<br>Customs</div>
            <div style="font-size:9px;letter-spacing:0.22em;text-transform:uppercase;color:#b8935a;margin-top:3px;">Hand Crafted</div>
          </div>
        </div>
        <p style="font-size:14px;color:rgba(240,235,224,0.38);line-height:1.8;font-weight:300;margin-bottom:28px;">Handcrafted leather goods, forged steel, and heirloom jewelry for those who value quality that endures.</p>
        <div style="display:flex;gap:10px;margin-bottom:28px;">
          <a href="https://instagram.com" aria-label="Instagram" style="width:38px;height:38px;border:1px solid rgba(184,147,90,0.22);display:flex;align-items:center;justify-content:center;transition:border-color 200ms,background 200ms;"
            onmouseover="this.style.borderColor='#b8935a';this.style.background='rgba(184,147,90,0.08)'" onmouseout="this.style.borderColor='rgba(184,147,90,0.22)';this.style.background='transparent'">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(240,235,224,0.5)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="5"></circle><circle cx="17.5" cy="6.5" r="1" fill="rgba(240,235,224,0.5)" stroke="none"></circle></svg>
          </a>
          <a href="https://facebook.com" aria-label="Facebook" style="width:38px;height:38px;border:1px solid rgba(184,147,90,0.22);display:flex;align-items:center;justify-content:center;transition:border-color 200ms,background 200ms;"
            onmouseover="this.style.borderColor='#b8935a';this.style.background='rgba(184,147,90,0.08)'" onmouseout="this.style.borderColor='rgba(184,147,90,0.22)';this.style.background='transparent'">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(240,235,224,0.5)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
        </div>
        <div style="display:inline-flex;align-items:center;gap:10px;padding:10px 16px;border:1px solid rgba(184,147,90,0.18);background:rgba(184,147,90,0.04);">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#b8935a" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          <span style="font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(184,147,90,0.7);">Made by Hand · USA</span>
        </div>
      </div>
      ${col('Shop', [
        ['/collection?cat=horse-halters', 'Horse Halters'],
        ['/collection?cat=guitar-straps', 'Guitar Straps'],
        ['/collection?cat=wallets', 'Wallets & Purses'],
        ['/collection?cat=dog-collars', 'Dog Collars'],
        ['/collection?cat=rings-knives', 'Rings & Knives'],
        ['/collection?cat=cremation-jewelry', 'Cremation Jewelry'],
        ['/collection?cat=damascus', 'Damascus'],
      ])}
      ${col('Company', [
        ['/about', 'About Us'],
        ['/commissions', 'Commissions'],
        ['/contact', 'Contact'],
        ['/shipping', 'Shipping & Returns'],
        ['/faq', 'FAQ'],
      ])}
      <div>
        <div style="font-size:10px;letter-spacing:0.24em;text-transform:uppercase;color:#b8935a;margin-bottom:20px;padding-bottom:14px;border-bottom:1px solid rgba(184,147,90,0.15);">Get in Touch</div>
        <div style="display:flex;flex-direction:column;gap:18px;margin-bottom:28px;">
          <div>
            <div style="font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(240,235,224,0.25);margin-bottom:6px;">Email</div>
            <a href="mailto:hello@theoldcountrycustoms.com" style="font-size:13px;color:rgba(240,235,224,0.4);transition:color 200ms;word-break:break-all;"
              onmouseover="this.style.color='#b8935a'" onmouseout="this.style.color='rgba(240,235,224,0.4)'">hello@theoldcountrycustoms.com</a>
          </div>
          <div>
            <div style="font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(240,235,224,0.25);margin-bottom:6px;">Response time</div>
            <div style="font-size:14px;color:rgba(240,235,224,0.4);">Within 24 hours</div>
          </div>
          <div>
            <div style="font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(240,235,224,0.25);margin-bottom:6px;">Ships from</div>
            <div style="font-size:14px;color:rgba(240,235,224,0.4);">United States</div>
          </div>
        </div>
        <a href="/commissions" style="display:inline-flex;align-items:center;gap:8px;padding:13px 22px;border:1px solid rgba(184,147,90,0.28);font-size:11px;font-weight:700;letter-spacing:0.13em;text-transform:uppercase;color:rgba(240,235,224,0.55);transition:all 200ms;"
          onmouseover="this.style.borderColor='#b8935a';this.style.color='#f0ebe0'" onmouseout="this.style.borderColor='rgba(184,147,90,0.28)';this.style.color='rgba(240,235,224,0.55)'">Start a Commission →</a>
      </div>
    </div>
  </div>
  <!-- Bottom bar -->
  <div style="padding:22px 48px;">
    <div style="max-width:1344px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;">
      <span style="font-size:12px;color:rgba(240,235,224,0.2);letter-spacing:0.06em;">© 2026 The Old Country Customs. All rights reserved.</span>
      <div style="display:flex;gap:28px;align-items:center;">
        <a href="/privacy" style="font-size:12px;color:rgba(240,235,224,0.2);letter-spacing:0.06em;transition:color 200ms;" onmouseover="this.style.color='rgba(240,235,224,0.5)'" onmouseout="this.style.color='rgba(240,235,224,0.2)'">Privacy Policy</a>
        <a href="/terms" style="font-size:12px;color:rgba(240,235,224,0.2);letter-spacing:0.06em;transition:color 200ms;" onmouseover="this.style.color='rgba(240,235,224,0.5)'" onmouseout="this.style.color='rgba(240,235,224,0.2)'">Terms of Service</a>
        <span style="font-size:12px;color:rgba(240,235,224,0.2);letter-spacing:0.06em;">Hand Crafted with Pride</span>
      </div>
    </div>
  </div>
</footer>`
}

export function page({ title, description = 'Handcrafted leather goods, forged Damascus steel, and heirloom jewelry — built to outlast generations.', active = '', body }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300&display=swap" rel="stylesheet">
  <style>${BASE_CSS}</style>
</head>
<body>
  ${nav(active)}
  <main>${body}</main>
  ${footer()}
</body>
</html>`
}
