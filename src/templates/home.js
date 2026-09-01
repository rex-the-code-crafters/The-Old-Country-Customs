import { page } from './layout.js'

const DIAGONAL_TEXTURE = (id) => `
<svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;" xmlns="http://www.w3.org/2000/svg">
  <defs><pattern id="${id}" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
    <rect x="0" y="0" width="1" height="48" fill="rgba(184,147,90,0.07)"></rect>
  </pattern></defs>
  <rect width="100%" height="100%" fill="url(#${id})"></rect>
</svg>`

const catCard = ({ col, row, img, imgId, kicker, name, href = '/collection' }) => `
<a href="${href}" data-cat="${imgId}" style="grid-column:${col};grid-row:${row};overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;padding:${col.includes('/') ? '40px' : '28px'};cursor:pointer;background:#1a1815;position:relative;"
  onmouseover="this.style.boxShadow='inset 0 0 0 3px #c9a96e'" onmouseout="this.style.boxShadow='none'">
  <img src="${img}" alt="${name}" loading="lazy" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">
  <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(6,4,2,0.92) 0%,rgba(6,4,2,0.45) 50%,rgba(6,4,2,0.1) 100%);pointer-events:none;"></div>
  <div style="position:relative;z-index:1;">
    <div style="font-size:9px;letter-spacing:0.22em;text-transform:uppercase;color:#b8935a;margin-bottom:${col.includes('/') && row === '1/3' ? '14px' : '10px'};">${kicker}</div>
    <h2 style="font-size:clamp(${col.includes('/') && row === '1/3' ? '28px,3.2vw,52px' : '20px,2vw,30px'});font-weight:900;text-transform:uppercase;letter-spacing:-0.02em;line-height:0.9;color:#f0ebe0;">${name}</h2>
    <div style="margin-top:${col.includes('/') && row === '1/3' ? '20px' : '14px'};display:flex;align-items:center;gap:${col.includes('/') && row === '1/3' ? '10px' : '8px'};">
      <span style="font-size:${col.includes('/') && row === '1/3' ? '11px' : '10px'};letter-spacing:0.15em;text-transform:uppercase;color:rgba(240,235,224,0.55);">${col.includes('/') && row === '1/3' ? 'Shop Collection' : 'Shop'}</span>
      <span style="color:#b8935a;font-size:${col.includes('/') && row === '1/3' ? '15px' : '13px'};">→</span>
    </div>
  </div>
</a>`

export function renderHome() {
  return page({
    title: 'The Old Country Customs — Handcrafted Leather, Steel & Jewelry',
    description: 'Handcrafted leather goods, forged Damascus steel, and heirloom jewelry. Built to outlast generations. USA made.',
    active: 'home',
    body: `
<!-- HERO -->
<section style="min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;padding:0 48px 72px;background:#0f0e0c;position:relative;overflow:hidden;">
  ${DIAGONAL_TEXTURE('hero-texture')}
  <div style="position:absolute;right:-60px;top:50%;transform:translateY(-55%);pointer-events:none;opacity:0.05;">
    <img src="/uploads/logo-1788168413553-yoaq.jpeg" alt="" style="width:680px;height:680px;object-fit:cover;border-radius:50%;filter:grayscale(1);">
  </div>
  <div style="max-width:1344px;margin:0 auto;width:100%;position:relative;">
    <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:48px;">
      <div style="flex:1;">
        <p style="font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#b8935a;margin-bottom:28px;animation:fadeUp 700ms ease both;">Hand Crafted · Est. 2020</p>
        <h1 style="font-size:clamp(56px,7.5vw,120px);font-weight:900;text-transform:uppercase;line-height:0.87;letter-spacing:-0.025em;animation:fadeUp 700ms 80ms ease both;color:#f0ebe0;">The Old<br>Country<br>Customs</h1>
        <p style="margin-top:36px;font-size:14px;color:rgba(240,235,224,0.42);line-height:1.75;max-width:440px;font-weight:300;animation:fadeUp 700ms 160ms ease both;">Handcrafted leather goods, forged Damascus steel, and heirloom jewelry — built to outlast generations.</p>
        <div style="margin-top:44px;display:flex;gap:16px;animation:fadeUp 700ms 240ms ease both;">
          <a href="/collection" style="display:inline-flex;align-items:center;gap:10px;padding:15px 36px;background:#b8935a;font-size:12px;font-weight:700;letter-spacing:0.13em;text-transform:uppercase;color:#0f0e0c;transition:background 200ms;"
            onmouseover="this.style.background='#c9a96e'" onmouseout="this.style.background='#b8935a'">Explore Collection</a>
          <a href="/about" style="display:inline-flex;align-items:center;gap:10px;padding:15px 36px;border:1px solid rgba(184,147,90,0.3);font-size:12px;font-weight:500;letter-spacing:0.13em;text-transform:uppercase;color:rgba(240,235,224,0.6);transition:all 200ms;"
            onmouseover="this.style.borderColor='#b8935a';this.style.color='#f0ebe0'" onmouseout="this.style.borderColor='rgba(184,147,90,0.3)';this.style.color='rgba(240,235,224,0.6)'">Our Story</a>
        </div>
      </div>
      <div style="flex-shrink:0;animation:fadeUp 700ms 120ms ease both;">
        <img src="/uploads/logo-1788168413553-yoaq.jpeg" alt="The Old Country Customs" fetchpriority="high" style="width:200px;height:200px;object-fit:cover;border-radius:50%;border:1px solid rgba(184,147,90,0.22);">
      </div>
    </div>
    <div style="margin-top:72px;display:flex;align-items:center;gap:24px;animation:fadeUp 700ms 300ms ease both;">
      <div style="flex:1;height:1px;background:rgba(184,147,90,0.18);"></div>
      <span style="font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:rgba(184,147,90,0.45);">8 Collections</span>
      <div style="flex:1;height:1px;background:rgba(184,147,90,0.18);"></div>
    </div>
  </div>
</section>

<!-- CATEGORY GRID -->
<section style="background:#0f0e0c;">
  <div style="padding:40px 48px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(184,147,90,0.1);border-top:1px solid rgba(184,147,90,0.1);">
    <span style="font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:rgba(184,147,90,0.65);">Shop by Category</span>
    <span style="font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(240,235,224,0.2);">All Handmade</span>
  </div>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(3,300px);gap:3px;background:#b8935a;">
    ${catCard({ col: '1/3', row: '1/3', img: '/uploads/cat-halters.jpg', imgId: 'halters', kicker: 'Leather & Paracord', name: 'Horse<br>Halters', href: '/collection?cat=horse-halters' })}
    ${catCard({ col: '3', row: '1', img: '/uploads/cat-guitar.jpg', imgId: 'guitar', kicker: 'Custom Straps', name: 'Guitar Strap', href: '/collection?cat=guitar-straps' })}
    ${catCard({ col: '4', row: '1', img: '/uploads/cat-wallet.jpg', imgId: 'wallet', kicker: 'Everyday Carry', name: 'Wallet / Purse', href: '/collection?cat=wallets' })}
    ${catCard({ col: '3', row: '2', img: '/uploads/cat-dog.jpg', imgId: 'dog', kicker: 'K9 Leatherwork', name: 'Dog Collar', href: '/collection?cat=dog-collars' })}
    ${catCard({ col: '4', row: '2', img: '/uploads/cat-rings-knives.jpg', imgId: 'rings', kicker: 'Steel & Craft', name: 'Rings & Knives', href: '/collection?cat=rings-knives' })}
    ${catCard({ col: '1', row: '3', img: '/uploads/cat-inhouse.jpg', imgId: 'inhouse', kicker: 'Handmade Bands', name: 'In House Rings', href: '/collection?cat=in-house-rings' })}
    ${catCard({ col: '2/4', row: '3', img: '/uploads/cat-cremation.jpg', imgId: 'cremation', kicker: 'Memorial Pieces', name: 'Cremation Jewelry', href: '/collection?cat=cremation-jewelry' })}
    ${catCard({ col: '4', row: '3', img: '/uploads/cat-damascus.jpg', imgId: 'damascus', kicker: 'Forged Steel', name: 'Damascus', href: '/collection?cat=damascus' })}
  </div>
</section>

<!-- CRAFT STRIP -->
<section style="padding:112px 48px;border-top:1px solid rgba(184,147,90,0.12);border-bottom:1px solid rgba(184,147,90,0.12);background:#0d0c0a;">
  <div style="max-width:1344px;margin:0 auto;display:flex;align-items:center;gap:96px;">
    <div style="flex-shrink:0;">
      <img src="/uploads/logo-1788168413553-yoaq.jpeg" alt="The Old Country Customs" style="width:156px;height:156px;object-fit:cover;border-radius:50%;border:1px solid rgba(184,147,90,0.18);filter:grayscale(0.15);">
    </div>
    <div style="flex:1;">
      <p style="font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:#b8935a;margin-bottom:24px;">The Craft</p>
      <h2 style="font-size:clamp(32px,4.5vw,64px);font-weight:900;text-transform:uppercase;line-height:0.92;letter-spacing:-0.025em;margin-bottom:32px;color:#f0ebe0;">Every piece,<br>built by hand.</h2>
      <p style="font-size:15px;color:rgba(240,235,224,0.45);line-height:1.8;max-width:540px;font-weight:300;">From hand-stitched leather halters to forged Damascus blades and custom cremation jewelry — every item is made with intention, built to last, and finished by skilled hands.</p>
      <div style="margin-top:48px;display:flex;align-items:stretch;gap:48px;">
        <div>
          <div style="font-size:36px;font-weight:900;color:#b8935a;line-height:1;">8</div>
          <div style="font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(240,235,224,0.3);margin-top:6px;">Collections</div>
        </div>
        <div style="width:1px;background:rgba(184,147,90,0.14);"></div>
        <div>
          <div style="font-size:36px;font-weight:900;color:#b8935a;line-height:1;">100%</div>
          <div style="font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(240,235,224,0.3);margin-top:6px;">Handmade</div>
        </div>
        <div style="width:1px;background:rgba(184,147,90,0.14);"></div>
        <div>
          <div style="font-size:36px;font-weight:900;color:#b8935a;line-height:1;">USA</div>
          <div style="font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(240,235,224,0.3);margin-top:6px;">Made</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- COMMISSIONS SECTION -->
<section style="padding:112px 48px;background:#131210;border-top:1px solid rgba(184,147,90,0.12);">
  <div style="max-width:1344px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;">
    <div>
      <p style="font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#b8935a;margin-bottom:24px;">Commissions</p>
      <h2 style="font-size:clamp(36px,4.5vw,64px);font-weight:900;text-transform:uppercase;line-height:0.92;letter-spacing:-0.025em;color:#f0ebe0;margin-bottom:28px;">Tell us what<br>you need built</h2>
      <p style="font-size:16px;color:rgba(240,235,224,0.5);line-height:1.75;font-weight:300;max-width:400px;margin-bottom:40px;">A halter for a hard-headed colt. A strap tooled with a brand. A ring holding ashes. Send measurements, a sketch, or just the idea.</p>
      <a href="/commissions" style="display:inline-flex;align-items:center;gap:12px;padding:16px 36px;background:#b8935a;font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#0f0e0c;transition:background 200ms;"
        onmouseover="this.style.background='#c9a96e'" onmouseout="this.style.background='#b8935a'">Start a Commission</a>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;border:1px solid rgba(184,147,90,0.2);">
      <div style="padding:32px;border-right:1px solid rgba(184,147,90,0.2);border-bottom:1px solid rgba(184,147,90,0.2);">
        <div style="font-size:11px;font-weight:700;letter-spacing:0.1em;color:#b8935a;margin-bottom:14px;">01</div>
        <div style="font-size:18px;font-weight:700;color:#f0ebe0;margin-bottom:10px;">Talk it through</div>
        <p style="font-size:14px;color:rgba(240,235,224,0.45);line-height:1.65;font-weight:300;">We agree the piece, the hide or steel, and the number.</p>
      </div>
      <div style="padding:32px;border-bottom:1px solid rgba(184,147,90,0.2);">
        <div style="font-size:11px;font-weight:700;letter-spacing:0.1em;color:#b8935a;margin-bottom:14px;">02</div>
        <div style="font-size:18px;font-weight:700;color:#f0ebe0;margin-bottom:10px;">Half down</div>
        <p style="font-size:14px;color:rgba(240,235,224,0.45);line-height:1.65;font-weight:300;">Deposit books your slot on the bench.</p>
      </div>
      <div style="padding:32px;border-right:1px solid rgba(184,147,90,0.2);">
        <div style="font-size:11px;font-weight:700;letter-spacing:0.1em;color:#b8935a;margin-bottom:14px;">03</div>
        <div style="font-size:18px;font-weight:700;color:#f0ebe0;margin-bottom:10px;">Built &amp; shown</div>
        <p style="font-size:14px;color:rgba(240,235,224,0.45);line-height:1.65;font-weight:300;">Photos before finishing, changes while it's still possible.</p>
      </div>
      <div style="padding:32px;">
        <div style="font-size:11px;font-weight:700;letter-spacing:0.1em;color:#b8935a;margin-bottom:14px;">04</div>
        <div style="font-size:18px;font-weight:700;color:#f0ebe0;margin-bottom:10px;">Shipped &amp; kept</div>
        <p style="font-size:14px;color:rgba(240,235,224,0.45);line-height:1.65;font-weight:300;">Care notes in the box. Repairs for life.</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA BANNER -->
<section style="background:#b8935a;padding:96px 48px;">
  <div style="max-width:1344px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:48px;">
    <div>
      <p style="font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:rgba(15,14,12,0.6);margin-bottom:16px;">Handmade to Order</p>
      <h2 style="font-size:clamp(32px,4vw,60px);font-weight:900;text-transform:uppercase;line-height:0.92;letter-spacing:-0.025em;color:#0f0e0c;">Quality that<br>outlasts generations.</h2>
    </div>
    <div style="display:flex;gap:16px;flex-shrink:0;">
      <a href="/collection" style="display:inline-flex;align-items:center;padding:16px 36px;background:#0f0e0c;font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#f0ebe0;transition:background 200ms;"
        onmouseover="this.style.background='#2a2218'" onmouseout="this.style.background='#0f0e0c'">Shop All Collections</a>
      <a href="/commissions" style="display:inline-flex;align-items:center;padding:16px 36px;border:2px solid rgba(15,14,12,0.4);font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#0f0e0c;transition:border-color 200ms;"
        onmouseover="this.style.borderColor='#0f0e0c'" onmouseout="this.style.borderColor='rgba(15,14,12,0.4)'">Custom Order</a>
    </div>
  </div>
</section>`
  })
}
