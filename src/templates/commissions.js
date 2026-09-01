import { page } from './layout.js'
import { categories } from '../data/products.js'

export function renderCommissions(prefillItem = '') {
  const catOptions = categories.filter(c => c.id !== 'all').map(c =>
    `<option value="${c.id}">${c.label}</option>`
  ).join('')

  return page({
    title: 'Commissions — The Old Country Customs',
    description: 'Order a custom handcrafted piece. Leather goods, Damascus steel, rings, and memorial jewelry made to your specs.',
    active: 'commissions',
    body: `
<!-- PAGE HEADER -->
<section style="padding:140px 48px 80px;background:#0d0c0a;border-bottom:1px solid rgba(184,147,90,0.12);position:relative;overflow:hidden;">
  <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;" xmlns="http://www.w3.org/2000/svg">
    <defs><pattern id="comm-tex" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect x="0" y="0" width="1" height="48" fill="rgba(184,147,90,0.055)"></rect></pattern></defs>
    <rect width="100%" height="100%" fill="url(#comm-tex)"></rect>
  </svg>
  <div style="max-width:1344px;margin:0 auto;position:relative;">
    <p style="font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#b8935a;margin-bottom:20px;animation:fadeUp 600ms ease both;">Custom Orders</p>
    <h1 style="font-size:clamp(48px,6vw,96px);font-weight:900;text-transform:uppercase;letter-spacing:-0.025em;line-height:0.88;color:#f0ebe0;animation:fadeUp 600ms 60ms ease both;">Commissions</h1>
    <p style="margin-top:24px;font-size:15px;color:rgba(240,235,224,0.4);font-weight:300;max-width:560px;line-height:1.75;animation:fadeUp 600ms 120ms ease both;">Tell us what you want built. A sketch, a measurement, or just the idea — send us what you have and we'll quote you within 24 hours.</p>
  </div>
</section>

<!-- PROCESS STEPS -->
<section style="padding:80px 48px;background:#131210;border-bottom:1px solid rgba(184,147,90,0.1);">
  <div style="max-width:1344px;margin:0 auto;">
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0;border:1px solid rgba(184,147,90,0.18);">
      ${[
        ['01', 'Talk it through', 'We agree the piece, the hide or steel, and the price before anything moves.'],
        ['02', 'Half down', 'A deposit books your slot on the bench. The rest is due when the piece ships.'],
        ['03', 'Built & shown', 'We send photos at key stages. You can still make changes before finishing.'],
        ['04', 'Shipped & kept', 'Care card in the box. We stand behind the work. Repairs for life.'],
      ].map((s, i) => `
<div style="padding:36px;${i < 3 ? 'border-right:1px solid rgba(184,147,90,0.18);' : ''}">
  <div style="font-size:11px;font-weight:700;letter-spacing:0.1em;color:#b8935a;margin-bottom:16px;">${s[0]}</div>
  <div style="font-size:20px;font-weight:700;color:#f0ebe0;margin-bottom:12px;">${s[1]}</div>
  <p style="font-size:14px;color:rgba(240,235,224,0.45);line-height:1.65;font-weight:300;">${s[2]}</p>
</div>`).join('')}
    </div>
  </div>
</section>

<!-- FORM -->
<section style="padding:80px 48px 100px;background:#0f0e0c;">
  <div style="max-width:1344px;margin:0 auto;display:grid;grid-template-columns:1fr 1.2fr;gap:96px;align-items:start;">
    <!-- Left: examples -->
    <div>
      <p style="font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:#b8935a;margin-bottom:24px;">Recent Work</p>
      <h2 style="font-size:clamp(28px,3.5vw,48px);font-weight:900;text-transform:uppercase;letter-spacing:-0.02em;line-height:0.92;color:#f0ebe0;margin-bottom:32px;">Built for<br>real people</h2>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;background:rgba(184,147,90,0.12);margin-bottom:36px;">
        <img src="/uploads/comm-work-1.jpg" alt="Commission work" style="width:100%;aspect-ratio:1;object-fit:cover;">
        <img src="/uploads/comm-work-2.jpg" alt="Commission work" style="width:100%;aspect-ratio:1;object-fit:cover;">
        <img src="/uploads/comm-work-3.jpg" alt="Commission work" style="width:100%;aspect-ratio:1;object-fit:cover;">
        <img src="/uploads/comm-work-4.jpg" alt="Commission work" style="width:100%;aspect-ratio:1;object-fit:cover;">
      </div>
      <div style="padding:24px;border:1px solid rgba(184,147,90,0.15);background:rgba(184,147,90,0.03);">
        <p style="font-size:13px;color:rgba(240,235,224,0.4);line-height:1.75;font-weight:300;font-style:italic;">"We don't take on more work than we can do well. Slots fill up — if you've been thinking about it, send the message."</p>
      </div>
    </div>

    <!-- Right: form -->
    <div>
      <div id="form-success" style="display:none;padding:32px;border:1px solid rgba(184,147,90,0.3);background:rgba(184,147,90,0.06);margin-bottom:32px;">
        <div style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#b8935a;margin-bottom:10px;">Message received</div>
        <p style="font-size:14px;color:rgba(240,235,224,0.6);line-height:1.6;">We'll be in touch within 24 hours with a quote and timeline.</p>
      </div>

      <form id="commission-form" action="/api/commission" method="POST" style="display:flex;flex-direction:column;gap:20px;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
          <div>
            <label style="display:block;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(240,235,224,0.4);margin-bottom:8px;">Name *</label>
            <input type="text" name="name" required style="width:100%;background:#1a1815;color:#f0ebe0;border:1px solid rgba(184,147,90,0.2);padding:14px 18px;font-family:'Archivo',sans-serif;font-size:14px;outline:none;transition:border-color 200ms;" placeholder="Your name" onfocus="this.style.borderColor='#b8935a'" onblur="this.style.borderColor='rgba(184,147,90,0.2)'">
          </div>
          <div>
            <label style="display:block;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(240,235,224,0.4);margin-bottom:8px;">Email *</label>
            <input type="email" name="email" required style="width:100%;background:#1a1815;color:#f0ebe0;border:1px solid rgba(184,147,90,0.2);padding:14px 18px;font-family:'Archivo',sans-serif;font-size:14px;outline:none;transition:border-color 200ms;" placeholder="your@email.com" onfocus="this.style.borderColor='#b8935a'" onblur="this.style.borderColor='rgba(184,147,90,0.2)'">
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
          <div>
            <label style="display:block;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(240,235,224,0.4);margin-bottom:8px;">Phone</label>
            <input type="tel" name="phone" style="width:100%;background:#1a1815;color:#f0ebe0;border:1px solid rgba(184,147,90,0.2);padding:14px 18px;font-family:'Archivo',sans-serif;font-size:14px;outline:none;transition:border-color 200ms;" placeholder="(555) 000-0000" onfocus="this.style.borderColor='#b8935a'" onblur="this.style.borderColor='rgba(184,147,90,0.2)'">
          </div>
          <div>
            <label style="display:block;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(240,235,224,0.4);margin-bottom:8px;">Category *</label>
            <select name="category" required id="cat-select" style="width:100%;background:#1a1815;color:#f0ebe0;border:1px solid rgba(184,147,90,0.2);padding:14px 18px;font-family:'Archivo',sans-serif;font-size:14px;outline:none;transition:border-color 200ms;appearance:none;cursor:pointer;" onfocus="this.style.borderColor='#b8935a'" onblur="this.style.borderColor='rgba(184,147,90,0.2)'">
              <option value="">Select a category</option>
              ${catOptions}
            </select>
          </div>
        </div>

        <div>
          <label style="display:block;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(240,235,224,0.4);margin-bottom:8px;">Item name / idea *</label>
          <input type="text" name="item" required value="${prefillItem}" style="width:100%;background:#1a1815;color:#f0ebe0;border:1px solid rgba(184,147,90,0.2);padding:14px 18px;font-family:'Archivo',sans-serif;font-size:14px;outline:none;transition:border-color 200ms;" placeholder="e.g. Tooled horse halter, size 30&quot;" onfocus="this.style.borderColor='#b8935a'" onblur="this.style.borderColor='rgba(184,147,90,0.2)'">
        </div>

        <div>
          <label style="display:block;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(240,235,224,0.4);margin-bottom:8px;">Describe what you want *</label>
          <textarea name="description" required rows="5" style="width:100%;background:#1a1815;color:#f0ebe0;border:1px solid rgba(184,147,90,0.2);padding:14px 18px;font-family:'Archivo',sans-serif;font-size:14px;outline:none;resize:vertical;transition:border-color 200ms;" placeholder="Size, color, tooling pattern, materials, any special details..." onfocus="this.style.borderColor='#b8935a'" onblur="this.style.borderColor='rgba(184,147,90,0.2)'"></textarea>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
          <div>
            <label style="display:block;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(240,235,224,0.4);margin-bottom:8px;">Budget range</label>
            <select name="budget" style="width:100%;background:#1a1815;color:#f0ebe0;border:1px solid rgba(184,147,90,0.2);padding:14px 18px;font-family:'Archivo',sans-serif;font-size:14px;outline:none;appearance:none;cursor:pointer;" onfocus="this.style.borderColor='#b8935a'" onblur="this.style.borderColor='rgba(184,147,90,0.2)'">
              <option value="">Not sure yet</option>
              <option value="under-100">Under $100</option>
              <option value="100-250">$100 – $250</option>
              <option value="250-500">$250 – $500</option>
              <option value="500-plus">$500+</option>
            </select>
          </div>
          <div>
            <label style="display:block;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(240,235,224,0.4);margin-bottom:8px;">Timeline</label>
            <select name="timeline" style="width:100%;background:#1a1815;color:#f0ebe0;border:1px solid rgba(184,147,90,0.2);padding:14px 18px;font-family:'Archivo',sans-serif;font-size:14px;outline:none;appearance:none;cursor:pointer;" onfocus="this.style.borderColor='#b8935a'" onblur="this.style.borderColor='rgba(184,147,90,0.2)'">
              <option value="flexible">Flexible</option>
              <option value="1-month">Within 1 month</option>
              <option value="3-months">Within 3 months</option>
              <option value="gift">It's a gift (has a date)</option>
            </select>
          </div>
        </div>

        <button type="submit" style="padding:18px 36px;background:#b8935a;border:none;font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#0f0e0c;cursor:pointer;font-family:'Archivo',sans-serif;transition:background 200ms;margin-top:4px;"
          onmouseover="this.style.background='#c9a96e'" onmouseout="this.style.background='#b8935a'">Send Commission Request</button>

        <p style="font-size:12px;color:rgba(240,235,224,0.25);line-height:1.6;font-weight:300;">No payment until we've agreed on the piece and price. We'll reply within 24 hours.</p>
      </form>
    </div>
  </div>
</section>

<script>
document.getElementById('commission-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  var btn = this.querySelector('button[type=submit]');
  btn.textContent = 'Sending…';
  btn.disabled = true;
  try {
    var res = await fetch('/api/commission', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(this)))
    });
    if (res.ok) {
      this.style.display = 'none';
      document.getElementById('form-success').style.display = 'block';
    } else { throw new Error(); }
  } catch(err) {
    btn.textContent = 'Send Commission Request';
    btn.disabled = false;
    alert('Something went wrong. Please try emailing us directly.');
  }
});

// Pre-fill category from URL if item param set
(function(){
  var params = new URLSearchParams(window.location.search);
  var item = params.get('item');
  if (item) document.querySelector('[name=item]').value = item;
})();
</script>`
  })
}
