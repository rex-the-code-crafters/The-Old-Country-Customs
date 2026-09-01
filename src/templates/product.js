import { page } from './layout.js'

export function renderProduct(product) {
  if (!product) return renderNotFound()
  return page({
    title: `${product.name} — The Old Country Customs`,
    description: product.description,
    active: 'collection',
    body: `
<!-- BREADCRUMB -->
<div style="padding:100px 48px 0;background:#0d0c0a;">
  <div style="max-width:1344px;margin:0 auto;">
    <div style="display:flex;align-items:center;gap:10px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:rgba(240,235,224,0.3);">
      <a href="/" style="transition:color 200ms;" onmouseover="this.style.color='#b8935a'" onmouseout="this.style.color='rgba(240,235,224,0.3)'">Home</a>
      <span>›</span>
      <a href="/collection" style="transition:color 200ms;" onmouseover="this.style.color='#b8935a'" onmouseout="this.style.color='rgba(240,235,224,0.3)'">Collection</a>
      <span>›</span>
      <a href="/collection?cat=${product.cat}" style="transition:color 200ms;" onmouseover="this.style.color='#b8935a'" onmouseout="this.style.color='rgba(240,235,224,0.3)'">${product.catLabel}</a>
      <span>›</span>
      <span style="color:rgba(240,235,224,0.5);">${product.name}</span>
    </div>
  </div>
</div>

<!-- PRODUCT -->
<section style="padding:48px 48px 96px;background:#0d0c0a;">
  <div style="max-width:1344px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;">
    <!-- Image -->
    <div style="position:sticky;top:104px;">
      <div style="aspect-ratio:1;overflow:hidden;background:#252018;position:relative;">
        <img src="${product.img}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;">
        <div style="position:absolute;top:20px;left:20px;padding:6px 14px;background:rgba(15,14,12,0.75);border:1px solid rgba(184,147,90,0.2);font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:#b8935a;">${product.catLabel}</div>
      </div>
    </div>

    <!-- Details -->
    <div style="padding-top:8px;">
      <p style="font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#b8935a;margin-bottom:20px;">${product.catLabel}</p>
      <h1 style="font-size:clamp(32px,4vw,56px);font-weight:900;text-transform:uppercase;letter-spacing:-0.025em;line-height:0.92;color:#f0ebe0;margin-bottom:24px;">${product.name}</h1>
      <p style="font-size:14px;color:rgba(240,235,224,0.45);font-weight:300;margin-bottom:28px;">${product.sub}</p>

      <div style="display:flex;align-items:baseline;gap:12px;margin-bottom:36px;padding-bottom:36px;border-bottom:1px solid rgba(184,147,90,0.12);">
        <div style="font-size:36px;font-weight:900;color:#b8935a;">$${product.price}</div>
        <div style="font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:rgba(240,235,224,0.3);">Starting price · Commission for exact quote</div>
      </div>

      <p style="font-size:15px;color:rgba(240,235,224,0.65);line-height:1.8;font-weight:300;margin-bottom:40px;">${product.description}</p>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;border:1px solid rgba(184,147,90,0.15);margin-bottom:40px;">
        <div style="padding:20px 24px;border-right:1px solid rgba(184,147,90,0.15);">
          <div style="font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(184,147,90,0.6);margin-bottom:8px;">Materials</div>
          <div style="font-size:13px;color:rgba(240,235,224,0.65);line-height:1.5;">${product.materials}</div>
        </div>
        <div style="padding:20px 24px;">
          <div style="font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(184,147,90,0.6);margin-bottom:8px;">Lead Time</div>
          <div style="font-size:13px;color:rgba(240,235,224,0.65);">${product.leadTime}</div>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:12px;">
        <a href="/commissions?item=${encodeURIComponent(product.name)}" style="display:flex;align-items:center;justify-content:center;padding:18px 36px;background:#b8935a;font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#0f0e0c;transition:background 200ms;"
          onmouseover="this.style.background='#c9a96e'" onmouseout="this.style.background='#b8935a'">Commission This Piece</a>
        <a href="/contact?subject=${encodeURIComponent('Question about: ' + product.name)}" style="display:flex;align-items:center;justify-content:center;padding:18px 36px;border:1px solid rgba(184,147,90,0.3);font-size:12px;font-weight:500;letter-spacing:0.14em;text-transform:uppercase;color:rgba(240,235,224,0.6);transition:all 200ms;"
          onmouseover="this.style.borderColor='#b8935a';this.style.color='#f0ebe0'" onmouseout="this.style.borderColor='rgba(184,147,90,0.3)';this.style.color='rgba(240,235,224,0.6)'">Ask a Question</a>
      </div>

      <div style="margin-top:32px;padding:20px 24px;border:1px solid rgba(184,147,90,0.1);background:rgba(184,147,90,0.03);">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#b8935a" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          <span style="font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(184,147,90,0.7);">Every piece is made to order</span>
        </div>
        <p style="font-size:13px;color:rgba(240,235,224,0.35);line-height:1.6;font-weight:300;">All items are handmade when ordered. Pricing shown is a starting point — exact quotes depend on size, material, and customization. We'll confirm everything before you pay.</p>
      </div>
    </div>
  </div>
</section>`
  })
}

function renderNotFound() {
  return page({
    title: 'Product Not Found — The Old Country Customs',
    active: 'collection',
    body: `
<section style="min-height:60vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:140px 48px 80px;background:#0d0c0a;text-align:center;">
  <p style="font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:#b8935a;margin-bottom:24px;">404</p>
  <h1 style="font-size:clamp(36px,5vw,72px);font-weight:900;text-transform:uppercase;letter-spacing:-0.025em;color:#f0ebe0;margin-bottom:24px;">Product Not Found</h1>
  <p style="font-size:15px;color:rgba(240,235,224,0.4);margin-bottom:40px;">That piece has either sold or never existed. Browse what's available.</p>
  <a href="/collection" style="display:inline-flex;align-items:center;padding:16px 36px;background:#b8935a;font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#0f0e0c;">Browse Collection</a>
</section>`
  })
}
