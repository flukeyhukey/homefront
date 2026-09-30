// Shared layout and blocks. Everything renders to static HTML at build time.

export const SITE = {
  url: 'https://homefrontpm.com.au',
  name: 'Homefront',
  legalName: 'Homefront Committed Property Management',
  phone: '0431 259 924',
  phoneHref: 'tel:0431259924',
  phoneIntl: '+61431259924',
  email: 'archie@homefrontpm.com.au',
  locality: 'Brisbane City',
  region: 'QLD',
  postcode: '4007',
};

const PHONE_ICON = (stroke = '#002CDF') =>
  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>`;

const NAV = [
  ['/#service-areas', 'Service areas', 'areas'],
  ['/leased/', 'Recently leased', 'leased'],
  ['/fees/', 'Fees', 'fees'],
  ['/about/', 'About', 'about'],
  ['/contact/', 'Contact', 'contact'],
];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function header(active) {
  const links = NAV.map(([href, label, key]) =>
    `<a href="${href}"${key === active ? ' aria-current="page"' : ''}>${label}</a>`).join('\n');
  return `<header class="site-header">
<div class="wrap header-row">
<a class="brand" href="/" aria-label="Homefront home">
<img src="/assets/img/mark-blue.png" alt="" width="38" height="40">
<span class="brand-name">Homefront</span>
</a>
<nav class="nav" aria-label="Main">
${links}
</nav>
<div class="header-actions">
<a class="phone-link" href="${SITE.phoneHref}">${PHONE_ICON()}${SITE.phone}</a>
<a class="btn btn-primary btn-header" href="/rental-appraisal/">Free rental appraisal</a>
</div>
<button class="menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B1437" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
</button>
</div>
<nav id="mobile-nav" class="mobile-nav" aria-label="Mobile">
<a href="/property-management-brisbane/">Property management Brisbane</a>
<a href="/property-management-gold-coast/">Property management Gold Coast</a>
${NAV.slice(1).map(([href, label]) => `<a href="${href}">${label}</a>`).join('\n')}
<a href="/switch-property-manager/">Switch property managers</a>
<a class="cta" href="/rental-appraisal/">Free rental appraisal</a>
</nav>
</header>`;
}

function footer() {
  const year = new Date().getFullYear();
  return `<footer class="site-footer">
<div class="wrap">
<div class="grid12">
<div class="foot-brand stack gap-16">
<a class="brand" href="/" aria-label="Homefront home"><img src="/assets/img/mark-white.png" alt="" width="34" height="36"><span class="brand-name" style="color:#fff;font-size:1.5rem">Homefront</span></a>
<p style="margin:0;font-size:1rem">Long-term residential property management for Brisbane and the Gold Coast. Your property, our priority.</p>
</div>
<div class="foot-col-a">
<span class="foot-h">Service areas</span>
<a href="/property-management-brisbane/">Property management Brisbane</a>
<a href="/property-management-gold-coast/">Property management Gold Coast</a>
<a href="/rental-appraisal/">Free rental appraisal</a>
<a href="/switch-property-manager/">Switch property managers</a>
</div>
<div class="foot-col-b">
<span class="foot-h">Homefront</span>
<a href="/leased/">Recently leased</a>
<a href="/fees/">Fees</a>
<a href="/about/">About</a>
<a href="/contact/">Contact</a>
</div>
<div class="foot-col-c">
<span class="foot-h">Get in touch</span>
<a href="${SITE.phoneHref}" class="tn" style="color:#fff;font-weight:600">${SITE.phone}</a>
<a href="mailto:${SITE.email}">${SITE.email}</a>
<span>${SITE.locality}, ${SITE.region} ${SITE.postcode}</span>
</div>
</div>
<div class="foot-base">
<span>© ${year} ${SITE.legalName}</span>
<span>[Licence number] · [ABN]</span>
</div>
</div>
</footer>
<nav class="action-bar" aria-label="Quick actions">
<a class="btn btn-ghost-night" href="${SITE.phoneHref}">${PHONE_ICON('#FFFFFF')}Call</a>
<a class="btn btn-on-night" href="/rental-appraisal/">Get appraisal</a>
</nav>`;
}

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': `${SITE.url}/#business`,
  name: SITE.legalName,
  alternateName: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/assets/img/mark-blue.png`,
  image: `${SITE.url}/assets/img/home-gabled-brisbane.jpg`,
  telephone: SITE.phoneIntl,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.locality,
    addressRegion: SITE.region,
    postalCode: SITE.postcode,
    addressCountry: 'AU',
  },
  areaServed: [
    { '@type': 'City', name: 'Brisbane' },
    { '@type': 'City', name: 'Gold Coast' },
  ],
  knowsAbout: ['Residential property management', 'Rental appraisal', 'Tenant screening', 'Routine inspections'],
};

export function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') },
    })),
  };
}

export function breadcrumbSchema(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map(([name, path], i) => ({
      '@type': 'ListItem', position: i + 1, name, item: SITE.url + path,
    })),
  };
}

export function layout({ path, title, description, active = '', body, schema = [], image = '/assets/img/home-gabled-brisbane.jpg' }) {
  const canonical = SITE.url + path;
  const ld = [ORG_SCHEMA, ...schema].map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n');
  return `<!doctype html>
<html lang="en-AU">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Homefront">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${SITE.url}${image}">
<meta property="og:locale" content="en_AU">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0B1437">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,400..800&family=Public+Sans:wght@400;600;700&display=swap">
<link rel="stylesheet" href="/assets/css/site.css">
${ld}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
${header(active)}
<main id="main">
${body}
</main>
${footer()}
<script src="/assets/js/site.js" defer></script>
</body>
</html>
`;
}

// ---------- Reusable blocks ----------

export function appraisalField({ id, note = true, placeholder = 'e.g. 34 Example St, Paddington' }) {
  return `<form class="appraisal" data-handoff action="/rental-appraisal/" method="get">
<label for="${id}">Your rental’s address</label>
<div class="appraisal-row">
<div class="addr-wrap"><span class="sq"></span><input class="addr-input" id="${id}" name="address" type="text" autocomplete="street-address" placeholder="${placeholder}" required></div>
<button class="btn btn-primary" type="submit">Get a free rental appraisal</button>
</div>
${note ? '<p class="appraisal-note">A local manager will call you with a written estimate. [Confirm response time before launch]</p>' : ''}
</form>`;
}

export function talkToArchie() {
  return `<div class="talk">
<div class="avatar">[Photo]</div>
<div class="stack" style="gap:2px">
<span style="font-weight:700;color:#0B1437">Talk to Archie directly</span>
<span class="muted" style="font-size:0.9375rem"><a href="${SITE.phoneHref}" class="tn link-strong">${SITE.phone}</a> · <a href="mailto:${SITE.email}">${SITE.email}</a></span>
</div>
</div>`;
}

export const SERVICES = [
  ['Tenant screening', 'Full background, rental history and income checks, so the right people move in.'],
  ['Rent collection', 'Secure collection, arrears followed up fast, and clear statements every month.'],
  ['Maintenance coordination', 'Requests handled quickly with trusted local trades, kept to your approval.'],
  ['Routine inspections', 'Regular visits and a written report, so small issues never become big ones.'],
  ['24/7 tenant support', 'Tenants can reach us around the clock, which keeps good tenants staying longer.'],
  ['Leasing and marketing', 'Photos, listings and open homes run for you, with rent set against the local market.'],
];

export function servicesList() {
  return `<div class="services-list">
${SERVICES.map(([t, d]) => `<div class="service"><span class="sq"></span><div><h3 class="title">${t}</h3><p>${d}</p></div></div>`).join('\n')}
</div>`;
}

// Leased examples. Suburb, beds, rent are placeholders until the owner supplies real data.
export const LEASED = [
  { region: 'brisbane', area: 'Brisbane', img: '/assets/img/home-gabled-brisbane.jpg', alt: 'White gabled home with sandstone front wall', beds: '[4]', baths: '[3]', cars: '[2]' },
  { region: 'gold-coast', area: 'Gold Coast', img: '/assets/img/home-pool-gold-coast.jpg', alt: 'Two-storey rendered home with pool at dusk', beds: '[5]', baths: '[3]', cars: '[2]' },
  { region: 'brisbane', area: 'Brisbane', img: null, beds: '[3]', baths: '[2]', cars: '[1]' },
];

export function leasedCard(p) {
  const photo = p.img
    ? `<img src="${p.img}" alt="${p.alt}" loading="lazy" width="600" height="300">`
    : '<div class="ph">[Photo from Recently Leased]</div>';
  return `<article class="card" data-region="${p.region}">
<div class="card-photo">${photo}<span class="badge">Leased</span></div>
<div class="card-body">
<h3 class="title">[Suburb], ${p.area}</h3>
<span class="card-meta">${p.beds} bed · ${p.baths} bath · ${p.cars} car</span>
<span class="rent">[$000] <small>/ week</small></span>
</div>
</article>`;
}

export function leasedGrid(id, items = LEASED) {
  return `<div class="cards" id="${id}">
${items.map(leasedCard).join('\n')}
</div>`;
}

export function regionFilter(target) {
  return `<div class="seg" role="group" aria-label="Region" data-filter-group="${target}">
<button type="button" aria-pressed="true" data-region="all">All</button>
<button type="button" aria-pressed="false" data-region="brisbane">Brisbane</button>
<button type="button" aria-pressed="false" data-region="gold-coast">Gold Coast</button>
</div>`;
}

export function peopleBand() {
  return `<section class="section night">
<div class="wrap grid12" style="align-items:center">
<div class="people-card reveal">
<div class="people-photo">[Photo of Archie]</div>
<div class="stack gap-8" style="padding-top:8px">
<span style="font-family:var(--display);font-size:1.5rem;font-weight:700;color:#fff">Archie</span>
<span style="font-size:0.9375rem;color:var(--on-night-2)">[Role] · Brisbane and Gold Coast</span>
<a href="${SITE.phoneHref}" class="tn" style="margin-top:12px;font-size:1.125rem;font-weight:600">${SITE.phone}</a>
<a href="mailto:${SITE.email}">${SITE.email}</a>
</div>
</div>
<div class="people-copy stack gap-28 reveal">
<h2>You’ll always know who’s looking after your property.</h2>
<p>We’re a young, local agency, and we keep it that way on purpose. No call centre, no passing you between departments: the person you meet is the person who manages your home.</p>
<div class="btn-row" style="margin-top:8px">
<a class="btn btn-on-night" href="/contact/">Book a call with Archie</a>
<a class="btn btn-ghost-night" href="/about/">About us</a>
</div>
</div>
</div>
</section>`;
}

export const INCLUDED = ['Rent collection', 'Routine inspections', 'Maintenance coordination', '24/7 tenant support'];

export function feesPanel() {
  return `<div class="panel panel-mist reveal">
<h2 class="headline-sm">Property management fees, published</h2>
<div class="fee-figs">
<div class="fee-fig"><span class="n">[X.X]%</span><span class="l">Management fee, incl. GST</span></div>
<div class="fee-fig"><span class="n">[X] weeks</span><span class="l">Letting fee, incl. GST</span></div>
</div>
<div class="incl">
<span style="font-size:0.9375rem;font-weight:600;color:#0B1437">Included</span>
<ul class="incl-grid">
${INCLUDED.map((i) => `<li><span class="sq sq-sm"></span>${i}</li>`).join('\n')}
</ul>
</div>
<div style="display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap"><a class="link-strong" href="/fees/">How our fees work, and a fee calculator</a><span class="placeholder">[Fees to be supplied]</span></div>
</div>`;
}

export const SWITCH_STEPS = [
  ['Tell us about your property', 'Call, email or send your address. We’ll talk through the tenancy and what you want to change.'],
  ['Sign our management agreement', 'One agreement, fees in plain numbers. Your tenants stay put.'],
  ['We handle the handover', 'We deal with your current agent, collect the keys and the tenancy file, and let your tenants know.'],
];

export function switchSteps() {
  return `<ol class="steps">
${SWITCH_STEPS.map(([t, d], i) => `<li><span class="step-n tn">${i + 1}</span><div><strong>${t}</strong><span>${d}</span></div></li>`).join('\n')}
</ol>`;
}

export function switchPanel() {
  return `<div class="panel panel-line reveal">
<h2 class="headline-sm">How to switch property managers in QLD</h2>
${switchSteps()}
<a class="btn btn-secondary" style="align-self:flex-start" href="/switch-property-manager/">Start switching</a>
</div>`;
}

export function faqBlock(items, { intro = true, title = 'Common questions' } = {}) {
  const list = items.map(([q, a], i) => `<details${i === 0 ? ' open' : ''}>
<summary>${q}</summary>
<div class="answer">${a}</div>
</details>`).join('\n');
  if (!intro) return `<div class="faq faq-full">${list}</div>`;
  return `<section class="section mist" id="faq">
<div class="wrap grid12">
<div class="faq-intro stack gap-16">
<h2 class="headline">${title}</h2>
<p class="body-lg">Something else on your mind? Call <a href="${SITE.phoneHref}" class="tn link-strong">${SITE.phone}</a>.</p>
</div>
<div class="faq">
${list}
</div>
</div>
</section>`;
}

export function appraisalBand({ heading = 'What could your property rent for?', copy = 'A free rental appraisal for Brisbane and Gold Coast properties: written, and based on what’s actually leasing near you.', id = 'addr-band' } = {}) {
  return `<section class="section blue">
<div class="wrap grid12" style="align-items:center">
<div class="band-copy stack gap-16">
<h2>${heading}</h2>
<p>${copy}</p>
</div>
<form class="band-form appraisal-band" data-handoff action="/rental-appraisal/" method="get">
<label for="${id}">Your rental’s address</label>
<input id="${id}" name="address" type="text" autocomplete="street-address" placeholder="Start typing your address" required>
<button class="btn btn-night" type="submit">Get my free rental appraisal</button>
</form>
</div>
</section>`;
}

export function enquiryForm({ type = 'appraisal', withAddress = true, submit = 'Request my free appraisal' } = {}) {
  return `<form class="form" data-enquiry="${type}" novalidate>
${withAddress ? `<div class="field"><label for="f-address">Rental property address</label><input id="f-address" name="address" type="text" autocomplete="street-address" required></div>` : ''}
<div class="form-row">
<div class="field"><label for="f-name">Your name</label><input id="f-name" name="name" type="text" autocomplete="name" required></div>
<div class="field"><label for="f-phone">Phone</label><input id="f-phone" name="phone" type="tel" autocomplete="tel" required></div>
</div>
<div class="field"><label for="f-email">Email</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
${type === 'appraisal' ? `<div class="form-row">
<div class="field"><label for="f-type">Property type</label><select id="f-type" name="propertyType"><option>House</option><option>Townhouse</option><option>Unit or apartment</option><option>Other</option></select></div>
<div class="field"><label for="f-status">Current status</label><select id="f-status" name="status"><option>Vacant or about to be</option><option>Tenanted, managed by another agent</option><option>Tenanted, self-managed</option><option>Buying or building</option></select></div>
</div>
<div class="field"><label for="f-letter"><input id="f-letter" name="bankLetter" type="checkbox" value="yes" style="width:auto;min-height:0;margin-right:8px">I need a rental appraisal letter for my lender</label></div>` : ''}
<div class="field"><label for="f-msg">Anything we should know? (optional)</label><textarea id="f-msg" name="message"></textarea></div>
<div class="hp" aria-hidden="true"><label for="f-web">Leave this empty</label><input id="f-web" name="website" type="text" tabindex="-1" autocomplete="off"></div>
<div><button class="btn btn-primary" type="submit">${submit}</button></div>
<p class="form-status" role="status" aria-live="polite"></p>
</form>`;
}

export function contactAside() {
  return `<aside class="aside stack gap-16">
<div class="people-photo" style="width:120px;height:140px;background:var(--mist);color:var(--slate);font-size:0.75rem">[Photo of Archie]</div>
<div class="stack gap-8">
<span class="title" style="font-family:var(--display);color:#0B1437">Archie</span>
<span class="muted" style="font-size:0.9375rem">[Role] · Brisbane and Gold Coast</span>
</div>
<a href="${SITE.phoneHref}" class="tn link-strong" style="font-size:1.125rem">${SITE.phone}</a>
<a href="mailto:${SITE.email}">${SITE.email}</a>
<p class="muted" style="margin:0;font-size:0.9375rem">Prefer to talk it through? Call and you’ll get Archie, not a call centre.</p>
</aside>`;
}
