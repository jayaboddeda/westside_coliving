/* ========================================================
   WESTSIDE COLIVING — shared footer
   --------------------------------------------------------
   The footer markup lives in this file (the FOOTER_HTML
   string below). Each page only needs:

       <div id="site-footer"></div>
       <script src="js/footer.js"></script>

   Edit FOOTER_HTML once — every page updates.
   No fetch(), no build step — works offline (file://) too.
   ======================================================== */

(function () {
  'use strict';

  var FOOTER_HTML = [
    '<footer class="bg-ink-soft text-cream/80">',
    '  <div class="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">',
    '    <div>',
    '      <div class="flex items-center mb-5">',
    '        <span class="grid place-items-center rounded-xl bg-cream p-2.5">',
    '          <img src="images/logo_side_icon.png" alt="Westside Coliving" class="h-14 w-auto" />',
    '        </span>',
    '      </div>',
    '      <p class="text-sm leading-relaxed max-w-xs">Premium fully furnished AC co-living in Madhapur, Hyderabad. Your perfect home away from home near Mindspace &amp; HITEC City IT hubs.</p>',
    '      <div class="flex gap-3 mt-6">',
    '        <a href="#" aria-label="Instagram" class="grid place-items-center w-10 h-10 rounded-full bg-white/8 hover:bg-gold hover:text-ink transition-colors"><svg class="ic w-5 h-5"><use href="#i-instagram"/></svg></a>',
    '        <a href="#" aria-label="Facebook" class="grid place-items-center w-10 h-10 rounded-full bg-white/8 hover:bg-gold hover:text-ink transition-colors"><svg class="ic ic-fill w-5 h-5"><use href="#i-facebook"/></svg></a>',
    '        <a href="#" aria-label="YouTube" class="grid place-items-center w-10 h-10 rounded-full bg-white/8 hover:bg-gold hover:text-ink transition-colors"><svg class="ic ic-fill w-5 h-5"><use href="#i-youtube"/></svg></a>',
    '        <a href="https://wa.me/919059434949" aria-label="WhatsApp" class="grid place-items-center w-10 h-10 rounded-full bg-white/8 hover:bg-gold hover:text-ink transition-colors"><svg class="ic ic-fill w-5 h-5"><use href="#i-whatsapp"/></svg></a>',
    '      </div>',
    '    </div>',
    '',
    '    <div>',
    '      <h3 class="font-display text-lg font-semibold text-cream mb-4">Quick Links</h3>',
    '      <div class="flex flex-col gap-2.5 text-sm">',
    '        <a href="index.html" class="hover:text-gold-light transition-colors">Home</a>',
    '        <a href="about.html" class="hover:text-gold-light transition-colors">About Us</a>',
    '        <a href="rooms.html" class="hover:text-gold-light transition-colors">Rooms &amp; Pricing</a>',
    '        <a href="amenities.html" class="hover:text-gold-light transition-colors">Amenities</a>',
    '        <a href="food-menu.html" class="hover:text-gold-light transition-colors">Food Menu</a>',
    '        <a href="gallery.html" class="hover:text-gold-light transition-colors">Gallery</a>',
    '        <a href="faq.html" class="hover:text-gold-light transition-colors">FAQs</a>',
    '        <a href="contact.html" class="hover:text-gold-light transition-colors">Contact</a>',
    '      </div>',
    '    </div>',
    '',
    '    <div>',
    '      <h3 class="font-display text-lg font-semibold text-cream mb-4">Policies</h3>',
    '      <div class="flex flex-col gap-2.5 text-sm">',
    '        <a href="terms.html" class="hover:text-gold-light transition-colors">Terms &amp; Conditions</a>',
    '        <a href="terms.html#lock-in" class="hover:text-gold-light transition-colors">Lock-in Period</a>',
    '        <a href="terms.html#notice" class="hover:text-gold-light transition-colors">Notice Period</a>',
    '        <a href="terms.html#deposit" class="hover:text-gold-light transition-colors">Security Deposit</a>',
    '      </div>',
    '    </div>',
    '',
    '    <div>',
    '      <h3 class="font-display text-lg font-semibold text-cream mb-4">Contact Us</h3>',
    '      <div class="flex flex-col gap-4 text-sm">',
    '        <div class="flex gap-3"><svg class="ic w-5 h-5 text-gold-light shrink-0"><use href="#i-pin"/></svg><span>Plot No 990 &amp; 991, Ayyappa Society, Madhapur, Hyderabad – 500081</span></div>',
    '        <div class="flex gap-3"><svg class="ic w-5 h-5 text-gold-light shrink-0"><use href="#i-phone"/></svg><span><a href="tel:+919059434949" class="hover:text-gold-light">905-943-4949</a><br /><a href="tel:+919059324949" class="hover:text-gold-light">905-932-4949</a></span></div>',
    '        <div class="flex gap-3"><svg class="ic w-5 h-5 text-gold-light shrink-0"><use href="#i-mail"/></svg><span><a href="mailto:westside.coliving@gmail.com" class="hover:text-gold-light break-all">westside.coliving@gmail.com</a></span></div>',
    '        <div class="flex gap-3"><svg class="ic w-5 h-5 text-gold-light shrink-0"><use href="#i-clock"/></svg><span>Enquiry Hours: 9 AM – 9 PM, All Days</span></div>',
    '      </div>',
    '    </div>',
    '  </div>',
    '',
    '  <div class="border-t border-white/10">',
    '    <div class="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[13px] text-cream/55">',
    '      <p>&copy; ' + new Date().getFullYear() + ' Westside Coliving. All rights reserved. | Madhapur, Hyderabad</p>',
    '      <p><a href="terms.html" class="hover:text-gold-light">Terms &amp; Conditions</a> &nbsp;|&nbsp; <a href="contact.html" class="hover:text-gold-light">Contact</a></p>',
    '    </div>',
    '  </div>',
    '</footer>'
  ].join('\n');

  var mount = document.getElementById('site-footer');
  if (!mount) return;

  mount.innerHTML = FOOTER_HTML;
})();
