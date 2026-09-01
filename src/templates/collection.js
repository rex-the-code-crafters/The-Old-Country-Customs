import { page } from './layout.js'
import { categories, products } from '../data/products.js'

export function renderCollection(activeCat = 'all') {
  const filterBtns = categories.map(c => {
    const isActive = c.id === activeCat
    return `<button data-cat="${c.id}" onclick="filterProducts('${c.id}')" style="padding:8px 18px;background:${isActive ? '#b8935a' : 'transparent'};border:1px solid ${isActive ? '#b8935a' : 'rgba(184,147,90,0.25)'};font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:${isActive ? '#0f0e0c' : 'rgba(240,235,224,0.5)'};cursor:pointer;font-family:'Archivo',sans-serif;transition:all 200ms;" class="filter-btn">${c.label}</button>`
  }).join('')

  const productCards = products.map(p => `
<a href="/product/${p.slug}" data-cat="${p.cat}" class="product-card" style="background:#1a1815;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;text-decoration:none;transition:background 200ms;"
  onmouseover="this.style.background='#201e1a'" onmouseout="this.style.background='#1a1815'">
  <div style="aspect-ratio:1;position:relative;overflow:hidden;background:#252018;">
    <img src="${p.img}" alt="${p.name}" loading="lazy" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform 400ms ease;"
      onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'">
    <div style="position:absolute;top:14px;left:14px;padding:5px 12px;background:rgba(15,14,12,0.72);border:1px solid rgba(184,147,90,0.2);font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:#b8935a;">${p.catLabel}</div>
  </div>
  <div style="padding:20px 22px 24px;display:flex;flex-direction:column;flex:1;">
    <div style="font-size:16px;font-weight:700;color:#f0ebe0;margin-bottom:6px;line-height:1.25;">${p.name}</div>
    <div style="font-size:13px;color:rgba(240,235,224,0.38);margin-bottom:16px;flex:1;">${p.sub}</div>
    <div style="display:flex;align-items:center;justify-content:space-between;">
      <div style="font-size:15px;font-weight:700;color:#b8935a;">$${p.price}</div>
      <span style="font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:rgba(240,235,224,0.3);">View →</span>
    </div>
  </div>
</a>`).join('')

  return page({
    title: 'Collection — The Old Country Customs',
    description: 'Shop handcrafted leather goods, Damascus steel, and heirloom jewelry. All made by hand in the USA.',
    active: 'collection',
    body: `
<!-- PAGE HEADER -->
<section style="padding:140px 48px 64px;border-bottom:1px solid rgba(184,147,90,0.12);background:#0d0c0a;position:relative;overflow:hidden;">
  <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;" xmlns="http://www.w3.org/2000/svg">
    <defs><pattern id="coll-tex" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect x="0" y="0" width="1" height="48" fill="rgba(184,147,90,0.05)"></rect></pattern></defs>
    <rect width="100%" height="100%" fill="url(#coll-tex)"></rect>
  </svg>
  <div style="max-width:1344px;margin:0 auto;position:relative;">
    <p style="font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#b8935a;margin-bottom:20px;animation:fadeUp 600ms ease both;">All Collections</p>
    <h1 style="font-size:clamp(48px,6vw,96px);font-weight:900;text-transform:uppercase;letter-spacing:-0.025em;line-height:0.88;color:#f0ebe0;animation:fadeUp 600ms 60ms ease both;">Shop</h1>
    <p style="margin-top:24px;font-size:14px;color:rgba(240,235,224,0.38);font-weight:300;animation:fadeUp 600ms 120ms ease both;" id="product-count">${products.length} handmade pieces · Filter by category below</p>
  </div>
</section>

<!-- FILTER BAR -->
<div style="padding:20px 48px;border-bottom:1px solid rgba(184,147,90,0.1);position:sticky;top:72px;z-index:50;background:rgba(13,12,10,0.97);backdrop-filter:blur(8px);">
  <div style="max-width:1344px;margin:0 auto;display:flex;gap:8px;flex-wrap:wrap;" id="filter-bar">
    ${filterBtns}
  </div>
</div>

<!-- PRODUCT GRID -->
<section style="padding:48px 48px 80px;background:#0f0e0c;">
  <div style="max-width:1344px;margin:0 auto;">
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:3px;background:rgba(184,147,90,0.12);" id="product-grid">
      ${productCards}
    </div>
    <p id="no-results" style="display:none;text-align:center;padding:80px 0;font-size:16px;color:rgba(240,235,224,0.3);letter-spacing:0.1em;text-transform:uppercase;">No items in this category</p>
  </div>
</section>

<!-- COMMISSION STRIP -->
<section style="padding:0 48px 80px;background:#0f0e0c;">
  <div style="max-width:1344px;margin:0 auto;border:1px solid rgba(184,147,90,0.2);padding:56px 64px;display:flex;align-items:center;justify-content:space-between;gap:48px;">
    <div>
      <p style="font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:#b8935a;margin-bottom:16px;">Don't see what you need?</p>
      <h2 style="font-size:clamp(24px,3vw,42px);font-weight:900;text-transform:uppercase;letter-spacing:-0.02em;line-height:0.95;color:#f0ebe0;">Commission something<br>built for you.</h2>
    </div>
    <a href="/commissions" style="display:inline-flex;align-items:center;gap:12px;padding:16px 40px;background:#b8935a;font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#0f0e0c;white-space:nowrap;transition:background 200ms;"
      onmouseover="this.style.background='#c9a96e'" onmouseout="this.style.background='#b8935a'">Start a Commission</a>
  </div>
</section>

<script>
var allProducts = ${JSON.stringify(products.map(p => ({ slug: p.slug, cat: p.cat })))};

function filterProducts(cat) {
  var cards = document.querySelectorAll('.product-card');
  var count = 0;
  cards.forEach(function(card) {
    var show = cat === 'all' || card.dataset.cat === cat;
    card.style.display = show ? 'flex' : 'none';
    if (show) count++;
  });
  document.getElementById('no-results').style.display = count === 0 ? 'block' : 'none';
  document.getElementById('product-count').textContent = count + ' handmade pieces · Filter by category below';
  document.querySelectorAll('.filter-btn').forEach(function(btn) {
    var isActive = btn.dataset.cat === cat;
    btn.style.background = isActive ? '#b8935a' : 'transparent';
    btn.style.borderColor = isActive ? '#b8935a' : 'rgba(184,147,90,0.25)';
    btn.style.color = isActive ? '#0f0e0c' : 'rgba(240,235,224,0.5)';
  });
  history.pushState(null, '', cat === 'all' ? '/collection' : '/collection?cat=' + cat);
}

// Apply filter from URL on load
(function() {
  var params = new URLSearchParams(window.location.search);
  var cat = params.get('cat');
  if (cat) filterProducts(cat);
})();
</script>`
  })
}
