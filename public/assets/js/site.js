(function () {
  document.documentElement.classList.add('js');

  // Sticky header gains the float shadow once scrolled
  var header = document.querySelector('.site-header');
  function onScroll() { if (header) header.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var menuBtn = document.querySelector('.menu-btn');
  var mobileNav = document.getElementById('mobile-nav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
  }

  // Reveal once on first view
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Leased region filter
  document.querySelectorAll('[data-filter-group]').forEach(function (group) {
    var target = document.getElementById(group.getAttribute('data-filter-group'));
    if (!target) return;
    group.querySelectorAll('button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var region = btn.getAttribute('data-region');
        group.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
        target.querySelectorAll('[data-region]').forEach(function (card) {
          card.hidden = region !== 'all' && card.getAttribute('data-region') !== region;
        });
      });
    });
  });

  // Short address forms hand off to the full appraisal page with the address prefilled
  document.querySelectorAll('form[data-handoff]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input[name="address"]');
      var v = input ? input.value.trim() : '';
      if (!v) { input && input.focus(); return; }
      window.location.href = '/rental-appraisal/?address=' + encodeURIComponent(v) + '#details';
    });
  });

  // Prefill address on the appraisal page
  var params = new URLSearchParams(window.location.search);
  var pre = params.get('address');
  var full = document.querySelector('form[data-enquiry] input[name="address"]');
  if (pre && full) full.value = pre;

  // Full enquiry forms post to /api/enquiry
  document.querySelectorAll('form[data-enquiry]').forEach(function (form) {
    var status = form.querySelector('.form-status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var btn = form.querySelector('button[type="submit"]');
      var data = Object.fromEntries(new FormData(form).entries());
      data.type = form.getAttribute('data-enquiry');
      data.page = window.location.pathname;
      btn.disabled = true;
      status.className = 'form-status';
      status.textContent = '';
      fetch('/api/enquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
        .then(function (r) { if (!r.ok) throw new Error(); return r.json(); })
        .then(function () {
          form.reset();
          status.className = 'form-status ok';
          status.textContent = 'Thanks, we have your details. Archie will be in touch shortly.';
        })
        .catch(function () {
          status.className = 'form-status err';
          status.textContent = 'That did not send. Please call 0431 259 924 or email archie@homefrontpm.com.au.';
        })
        .finally(function () { btn.disabled = false; });
    });
  });

  // Fee calculator
  var calc = document.getElementById('fee-calc');
  if (calc) {
    var fmt = function (n) { return '$' + n.toLocaleString('en-AU', { minimumFractionDigits: 0, maximumFractionDigits: 0 }); };
    var run = function () {
      var rent = parseFloat(calc.rent.value) || 0;
      var pct = parseFloat(calc.pct.value) || 0;
      var letting = parseFloat(calc.letting.value) || 0;
      var annualRent = rent * 52;
      var mgmt = annualRent * pct / 100;
      var let_ = rent * letting;
      calc.querySelector('[data-out="annual"]').textContent = fmt(annualRent);
      calc.querySelector('[data-out="mgmt"]').textContent = fmt(mgmt);
      calc.querySelector('[data-out="letting"]').textContent = fmt(let_);
      calc.querySelector('[data-out="total"]').textContent = fmt(mgmt + let_);
    };
    calc.addEventListener('input', run);
    run();
  }
})();
