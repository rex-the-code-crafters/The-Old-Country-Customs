import { page } from './layout.js'

export function renderContact(prefillSubject = '') {
  return page({
    title: 'Contact — The Old Country Customs',
    description: 'Get in touch with The Old Country Customs. We reply within 24 hours.',
    active: 'contact',
    body: `
<!-- PAGE HEADER -->
<section style="padding:140px 48px 72px;background:#0d0c0a;border-bottom:1px solid rgba(184,147,90,0.1);position:relative;overflow:hidden;">
  <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;" xmlns="http://www.w3.org/2000/svg">
    <defs><pattern id="contact-tex" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect x="0" y="0" width="1" height="48" fill="rgba(184,147,90,0.055)"></rect></pattern></defs>
    <rect width="100%" height="100%" fill="url(#contact-tex)"></rect>
  </svg>
  <div style="max-width:1344px;margin:0 auto;position:relative;">
    <p style="font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#b8935a;margin-bottom:20px;animation:fadeUp 600ms ease both;">Get in Touch</p>
    <h1 style="font-size:clamp(48px,6vw,96px);font-weight:900;text-transform:uppercase;letter-spacing:-0.025em;line-height:0.88;color:#f0ebe0;animation:fadeUp 600ms 60ms ease both;">Contact</h1>
    <p style="margin-top:24px;font-size:14px;color:rgba(240,235,224,0.38);font-weight:300;animation:fadeUp 600ms 120ms ease both;">We reply within 24 hours. For commissions, use the <a href="/commissions" style="color:#b8935a;border-bottom:1px solid rgba(184,147,90,0.3);">commissions form</a> instead.</p>
  </div>
</section>

<!-- CONTACT BODY -->
<section style="padding:80px 48px 100px;background:#0f0e0c;">
  <div style="max-width:1344px;margin:0 auto;display:grid;grid-template-columns:1fr 1.4fr;gap:96px;align-items:start;">
    <!-- Left: info -->
    <div>
      <div style="display:flex;flex-direction:column;gap:40px;">
        ${[
          { icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm16 2l-8 5-8-5', label: 'Email', value: 'hello@theoldcountrycustoms.com', href: 'mailto:hello@theoldcountrycustoms.com' },
          { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', label: 'Ships from', value: 'United States' },
          { icon: 'M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z', label: 'Response time', value: 'Within 24 hours' },
        ].map(item => `
<div style="display:flex;gap:20px;align-items:flex-start;">
  <div style="width:44px;height:44px;border:1px solid rgba(184,147,90,0.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b8935a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="${item.icon}"></path></svg>
  </div>
  <div>
    <div style="font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(240,235,224,0.3);margin-bottom:6px;">${item.label}</div>
    ${item.href
      ? `<a href="${item.href}" style="font-size:15px;color:rgba(240,235,224,0.65);transition:color 200ms;" onmouseover="this.style.color='#b8935a'" onmouseout="this.style.color='rgba(240,235,224,0.65)'">${item.value}</a>`
      : `<div style="font-size:15px;color:rgba(240,235,224,0.65);">${item.value}</div>`
    }
  </div>
</div>`).join('')}

        <div style="margin-top:8px;padding:24px;border:1px solid rgba(184,147,90,0.12);background:rgba(184,147,90,0.03);">
          <p style="font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#b8935a;margin-bottom:12px;">For custom orders</p>
          <p style="font-size:14px;color:rgba(240,235,224,0.45);line-height:1.7;font-weight:300;">Looking to commission a custom piece? Use our <a href="/commissions" style="color:#b8935a;border-bottom:1px solid rgba(184,147,90,0.3);">commissions form</a> — it has all the fields we need to give you an accurate quote faster.</p>
        </div>
      </div>
    </div>

    <!-- Right: form -->
    <div>
      <div id="form-success" style="display:none;padding:32px;border:1px solid rgba(184,147,90,0.3);background:rgba(184,147,90,0.06);margin-bottom:32px;">
        <div style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#b8935a;margin-bottom:10px;">Message sent</div>
        <p style="font-size:14px;color:rgba(240,235,224,0.6);line-height:1.6;">Thanks for reaching out. We'll get back to you within 24 hours.</p>
      </div>

      <form id="contact-form" action="/api/contact" method="POST" style="display:flex;flex-direction:column;gap:20px;">
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

        <div>
          <label style="display:block;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(240,235,224,0.4);margin-bottom:8px;">Subject</label>
          <input type="text" name="subject" value="${prefillSubject}" style="width:100%;background:#1a1815;color:#f0ebe0;border:1px solid rgba(184,147,90,0.2);padding:14px 18px;font-family:'Archivo',sans-serif;font-size:14px;outline:none;transition:border-color 200ms;" placeholder="What's this about?" onfocus="this.style.borderColor='#b8935a'" onblur="this.style.borderColor='rgba(184,147,90,0.2)'">
        </div>

        <div>
          <label style="display:block;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(240,235,224,0.4);margin-bottom:8px;">Message *</label>
          <textarea name="message" required rows="6" style="width:100%;background:#1a1815;color:#f0ebe0;border:1px solid rgba(184,147,90,0.2);padding:14px 18px;font-family:'Archivo',sans-serif;font-size:14px;outline:none;resize:vertical;transition:border-color 200ms;" placeholder="Your message..." onfocus="this.style.borderColor='#b8935a'" onblur="this.style.borderColor='rgba(184,147,90,0.2)'"></textarea>
        </div>

        <button type="submit" style="padding:18px 36px;background:#b8935a;border:none;font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#0f0e0c;cursor:pointer;font-family:'Archivo',sans-serif;transition:background 200ms;"
          onmouseover="this.style.background='#c9a96e'" onmouseout="this.style.background='#b8935a'">Send Message</button>
      </form>
    </div>
  </div>
</section>

<script>
document.getElementById('contact-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  var btn = this.querySelector('button[type=submit]');
  btn.textContent = 'Sending…';
  btn.disabled = true;
  try {
    var res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(this)))
    });
    if (res.ok) {
      this.style.display = 'none';
      document.getElementById('form-success').style.display = 'block';
    } else { throw new Error(); }
  } catch(err) {
    btn.textContent = 'Send Message';
    btn.disabled = false;
    alert('Something went wrong. Please email us directly.');
  }
});

// Pre-fill subject from URL
(function(){
  var params = new URLSearchParams(window.location.search);
  var subject = params.get('subject');
  if (subject) document.querySelector('[name=subject]').value = subject;
})();
</script>`
  })
}
