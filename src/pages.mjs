import {
  SITE, layout, appraisalField, talkToArchie, servicesList, leasedGrid, regionFilter, LEASED,
  peopleBand, feesPanel, switchPanel, switchSteps, faqBlock, appraisalBand, enquiryForm,
  contactAside, faqSchema, breadcrumbSchema, INCLUDED, SERVICES,
} from './lib.mjs';

const P = `<a href="${SITE.phoneHref}" class="tn">${SITE.phone}</a>`;
const E = `<a href="mailto:${SITE.email}">${SITE.email}</a>`;

// ---------- FAQ content ----------
const FAQ_HOME = [
  ['I want to rent out my property. How do I get started?',
    `<p>Call us on ${P}, email ${E} or <a href="/rental-appraisal/">request a rental appraisal</a>. We’ll guide you through the process and answer any questions you have.</p>`],
  ['What sets Homefront apart from other agencies?',
    `<p>Attention. We’re a small, local team, so the person you meet at the appraisal is the person who manages your property, answers your calls and signs off your inspection reports.</p>`],
  ['How do I switch my property management to Homefront?',
    `<p>You sign our management agreement and give your current agent written notice under your existing agreement. We handle the handover from there: keys, tenancy file, bond paperwork and letting your tenants know. Your tenants stay and their lease carries on. <a href="/switch-property-manager/">How switching works</a>.</p>`],
  ['What’s covered in your management fees?',
    `<p>Rent collection, routine inspections with written reports, maintenance coordination and 24/7 tenant support are all included. Our full fee schedule is on the <a href="/fees/">fees page</a>.</p>`],
  ['How do I request a rental appraisal?',
    `<p>Enter your rental’s address in any appraisal field on this site, or call ${P}. A local manager will contact you and send a written estimate based on what’s leasing near you.</p>`],
  ['How do you keep tenants happy?',
    `<p>By answering quickly and fixing things properly. Tenants can reach us 24/7, maintenance is handled with trusted local trades, and good tenants who feel looked after tend to stay, which means fewer vacant weeks for you.</p>`],
  ['How much are property management fees in Queensland?',
    `<p>Fees vary between agencies and are usually a percentage of the rent collected plus a letting fee when a new tenant is placed. Always compare what’s included, not just the percentage. Our fees are published on the <a href="/fees/">fees page</a>, with a calculator to compare quotes.</p>`],
  ['Can you provide a rental appraisal letter for my bank?',
    `<p>Yes. If you’re buying or refinancing an investment property, tick the lender letter option on the <a href="/rental-appraisal/">appraisal form</a> and we’ll prepare a written rental appraisal on letterhead you can give to your bank or broker.</p>`],
];

// ---------- Pages ----------
const pages = [];

// Home
pages.push({
  path: '/',
  title: 'Property Management Brisbane & Gold Coast | Homefront',
  description: 'Long-term residential property management in Brisbane and on the Gold Coast, from a local team that picks up the phone. Get a free, written rental appraisal.',
  schema: [faqSchema(FAQ_HOME.map(([q, a]) => [q, a]))],
  body: `
<section class="hero">
<div class="wrap grid12 hero-grid">
<div class="hero-copy stack gap-28">
<h1 class="display">We look after your rental like it’s our own.</h1>
<p class="lead">Long-term residential property management across Brisbane and the Gold Coast, from a local team that picks up the phone. Start with a free, written rental appraisal.</p>
${appraisalField({ id: 'addr-hero' })}
${talkToArchie()}
</div>
<div class="hero-media">
<img src="/assets/img/home-gabled-brisbane.jpg" alt="A white gabled home behind a slatted gate and sandstone wall" width="1500" height="1000" fetchpriority="high">
<div class="hero-tag">
<span class="badge" style="align-self:flex-start">Leased</span>
<strong>[Suburb], Brisbane</strong>
<span class="muted tn" style="font-size:0.9375rem">[4] bed · [3] bath · [$000] / week</span>
</div>
</div>
</div>
</section>

<section class="section mist">
<div class="wrap grid12">
<div class="services-intro stack gap-20 reveal">
<h2 class="headline">Residential property management, handled end to end.</h2>
<p class="body-lg">You own the investment. We run the day-to-day of your long-term rental, and you always know who to call.</p>
<a class="link-strong" href="/fees/">What’s included in our fees</a>
</div>
${servicesList()}
</div>
</section>

<section class="section" id="service-areas" style="padding-bottom:0">
<div class="wrap stack gap-40">
<h2 class="headline reveal">Property managers in Brisbane and on the Gold Coast</h2>
<div class="two">
<a class="area-card reveal" href="/property-management-brisbane/">
<h3>Property management Brisbane</h3>
<p>Houses, townhouses and units from the northside to Brisbane’s south, managed by a team based in Brisbane City.</p>
<span class="placeholder">[Suburbs to confirm, e.g. North Lakes · Brisbane northside · Brisbane south]</span>
<span class="go">Brisbane property management</span>
</a>
<a class="area-card reveal" href="/property-management-gold-coast/">
<h3>Property management Gold Coast</h3>
<p>Long-term rentals across the Gold Coast, with the same local manager from appraisal to every inspection.</p>
<span class="placeholder">[Suburbs to confirm, e.g. Southport · Robina · Burleigh]</span>
<span class="go">Gold Coast property management</span>
</a>
</div>
</div>
</section>

<section class="section">
<div class="wrap">
<div class="leased-head">
<div class="stack gap-12">
<h2 class="headline">Recently leased</h2>
<p class="body-lg">Homes we’ve leased across Brisbane and the Gold Coast.</p>
</div>
<div class="leased-tools">
${regionFilter('home-leased')}
<a class="link-strong" href="/leased/">See all</a>
</div>
</div>
${leasedGrid('home-leased')}
</div>
</section>

${peopleBand()}

<section class="section">
<div class="wrap two">
${feesPanel()}
${switchPanel()}
</div>
</section>

${faqBlock(FAQ_HOME)}

${appraisalBand()}
`,
});

// City pages
function cityPage({ slug, city, title, description, h1, lead, img, imgAlt, intro, areasNote, sections, faq }) {
  const path = `/${slug}/`;
  return {
    path, title, description, active: 'areas', image: img,
    schema: [faqSchema(faq), breadcrumbSchema([['Home', '/'], [`Property management ${city}`, path]]),
      { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Residential property management', provider: { '@id': `${SITE.url}/#business` }, areaServed: { '@type': 'City', name: city }, url: SITE.url + path }],
    body: `
<section class="hero">
<div class="wrap grid12 hero-grid">
<div class="hero-copy stack gap-28">
<nav class="crumbs" aria-label="Breadcrumb" style="margin:0"><a href="/">Home</a> / Property management ${city}</nav>
<h1 class="display">${h1}</h1>
<p class="lead">${lead}</p>
${appraisalField({ id: 'addr-hero' })}
${talkToArchie()}
</div>
<div class="hero-media">
<img src="${img}" alt="${imgAlt}" width="1500" height="1000" fetchpriority="high">
</div>
</div>
</section>

<section class="section mist">
<div class="wrap grid12">
<div class="services-intro stack gap-20 reveal">
<h2 class="headline">${intro.h2}</h2>
<p class="body-lg">${intro.p}</p>
<a class="link-strong" href="/fees/">What’s included in our fees</a>
</div>
${servicesList()}
</div>
</section>

<section class="section">
<div class="wrap prose">
${sections}
<h2 class="headline-sm">Areas we manage in ${city}</h2>
<p>${areasNote}</p>
<p class="placeholder">[Suburb list to confirm before launch. Only list suburbs where Homefront genuinely manages homes.]</p>
</div>
</section>

<section class="section" style="padding-top:0">
<div class="wrap">
<div class="leased-head"><h2 class="headline">Recently leased in ${city}</h2><a class="link-strong" href="/leased/">See all leased homes</a></div>
${leasedGrid('city-leased', LEASED.filter((l) => l.area === city).concat([1, 2, 3].map(() => ({ region: slug, area: city, img: null, beds: '[3]', baths: '[2]', cars: '[1]' }))).slice(0, 3))}
</div>
</section>

${peopleBand()}

<section class="section">
<div class="wrap two">
${feesPanel()}
${switchPanel()}
</div>
</section>

${faqBlock(faq, { title: `Property management ${city}: questions` })}

${appraisalBand({ heading: `Free rental appraisal, ${city}`, copy: `Find out what your ${city} property could rent for. Written, local, and free.` })}
`,
  };
}

pages.push(cityPage({
  slug: 'property-management-brisbane',
  city: 'Brisbane',
  title: 'Property Management Brisbane | Local Property Managers | Homefront',
  description: 'Residential property management in Brisbane from a local team based in Brisbane City. Tenant screening, rent collection, inspections and 24/7 tenant support. Free rental appraisal.',
  h1: 'Property management in Brisbane, done properly.',
  lead: 'Local property managers for houses, townhouses and units across Brisbane, from the northside to the south. One person looks after your home from appraisal to every inspection.',
  img: '/assets/img/home-gabled-brisbane.jpg',
  imgAlt: 'A white gabled Brisbane home behind a slatted gate and sandstone wall',
  intro: { h2: 'Residential property management Brisbane owners can rely on.', p: 'We run the day-to-day of your long-term rental so you don’t have to, and you always know exactly who to call.' },
  sections: `<h2 class="headline-sm">Why Brisbane owners choose a smaller agency</h2>
<p>At large agencies, one property manager can carry a very large portfolio, which is where slow replies and missed maintenance come from. Homefront keeps portfolios small on purpose, so your property gets real attention and your calls get answered.</p>
<h3>Rental management that shows its work</h3>
<p>Every routine inspection comes with a written report and photos. Maintenance is quoted and approved by you before work starts. Rent statements arrive monthly, in plain numbers.</p>
<h3>Brisbane northside and Brisbane south</h3>
<p>We manage long-term rentals on both sides of the river. Wherever your property is, you get the same local manager and the same standard of care.</p>`,
  areasNote: 'Homefront is based in Brisbane City and manages long-term residential rentals across Brisbane, including the northside and southside.',
  faq: [
    ['How much does property management cost in Brisbane?', `<p>Most Brisbane agencies charge a percentage of rent collected plus a letting fee. Our fees are published on the <a href="/fees/">fees page</a>, with a calculator so you can compare quotes like for like.</p>`],
    ['Do you manage properties on the Brisbane northside and southside?', '<p>Yes. We manage long-term residential rentals across Brisbane, north and south of the river.</p>'],
    ['Can I get a rental appraisal for my Brisbane property?', `<p>Yes, it’s free. Enter your address above or <a href="/rental-appraisal/">request an appraisal</a> and a local manager will send a written estimate.</p>`],
    ['Can I switch to Homefront if my property is already tenanted?', `<p>Yes. Your tenants stay and their lease continues. We handle the handover with your current agent. <a href="/switch-property-manager/">How switching works</a>.</p>`],
  ],
}));

pages.push(cityPage({
  slug: 'property-management-gold-coast',
  city: 'Gold Coast',
  title: 'Property Management Gold Coast | Property Managers | Homefront',
  description: 'Long-term rental property management on the Gold Coast. One local manager from appraisal to every inspection. Tenant screening, rent collection and 24/7 support. Free rental appraisal.',
  h1: 'Gold Coast property management with a person, not a portfolio.',
  lead: 'Long-term rentals across the Gold Coast, with the same local manager from appraisal to every inspection. Start with a free, written rental appraisal.',
  img: '/assets/img/home-pool-gold-coast.jpg',
  imgAlt: 'A two-storey rendered Gold Coast home with a pool at dusk',
  intro: { h2: 'Rental property management on the Gold Coast, handled end to end.', p: 'Tenant screening, rent, maintenance and inspections, all run for you by someone you can actually call.' },
  sections: `<h2 class="headline-sm">Long-term rentals only</h2>
<p>We manage long-term residential tenancies. No holiday letting, no short stays. That focus means your tenants are screened for the long run and your property is looked after like a home.</p>
<h3>Southport and surrounds</h3>
<p>We manage homes and units across the Gold Coast, with the same process and reporting as our Brisbane properties.</p>
<h3>Written reports, plain numbers</h3>
<p>Routine inspections come with a written report and photos. Maintenance is approved by you first. Statements are monthly and clear.</p>`,
  areasNote: 'Homefront manages long-term residential rentals across the Gold Coast.',
  faq: [
    ['Do you manage holiday or short-term rentals on the Gold Coast?', '<p>No. We focus only on long-term residential property management.</p>'],
    ['How much are property management fees on the Gold Coast?', `<p>Fees are usually a percentage of rent collected plus a letting fee. Ours are published on the <a href="/fees/">fees page</a>, with a calculator to compare quotes.</p>`],
    ['Can I get a rental appraisal for my Gold Coast property?', `<p>Yes, it’s free and written. <a href="/rental-appraisal/">Request an appraisal</a> or enter your address above.</p>`],
    ['Can I switch from my current Gold Coast agent?', `<p>Yes. Your tenants stay put and we handle the handover. <a href="/switch-property-manager/">How switching works</a>.</p>`],
  ],
}));

// Rental appraisal
const FAQ_APPRAISAL = [
  ['What is a rental appraisal?', '<p>A rental appraisal is a written estimate of the weekly rent your property could achieve, based on comparable homes currently leasing and recently leased nearby, and your property’s features and condition.</p>'],
  ['Is the rental appraisal really free?', '<p>Yes. There’s no cost and no obligation to sign with us.</p>'],
  ['Can I get a rental appraisal online?', '<p>Yes. Fill in the form on this page. For the most accurate figure we may ask for photos or arrange a quick visit.</p>'],
  ['Can you write a rental appraisal letter for my lender?', '<p>Yes. If you’re buying or refinancing, tick the lender letter option and we’ll prepare a written appraisal on letterhead for your bank or broker.</p>'],
  ['Which areas do you appraise?', '<p>Brisbane and the Gold Coast.</p>'],
];
pages.push({
  path: '/rental-appraisal/',
  title: 'Free Rental Appraisal Brisbane & Gold Coast | Homefront',
  description: 'Get a free, written rental appraisal for your Brisbane or Gold Coast property. Based on what’s actually leasing near you. Lender appraisal letters available.',
  schema: [faqSchema(FAQ_APPRAISAL), breadcrumbSchema([['Home', '/'], ['Free rental appraisal', '/rental-appraisal/']])],
  body: `
<section class="page-hero">
<div class="wrap">
<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / Free rental appraisal</nav>
<h1 class="display" style="max-width:14ch">Free rental appraisal</h1>
<p class="lead">Find out what your Brisbane or Gold Coast property could rent for. A local manager prepares a written estimate based on what’s actually leasing near you.</p>
</div>
</section>
<section class="section" id="details" style="padding-top:0">
<div class="wrap split">
<div>
${enquiryForm({ type: 'appraisal' })}
<p class="appraisal-note" style="margin-top:16px">A local manager will call you with a written estimate. [Confirm response time before launch]</p>
</div>
${contactAside()}
</div>
</section>
<section class="section mist">
<div class="wrap">
<div class="section-head"><h2 class="headline">How it works</h2></div>
<ol class="steps" style="max-width:720px">
<li><span class="step-n tn">1</span><div><strong>Send your address</strong><span>Use the form above or call ${P}.</span></div></li>
<li><span class="step-n tn">2</span><div><strong>We look at the local market</strong><span>Comparable homes leasing now and recently leased nearby, plus your property’s features and condition.</span></div></li>
<li><span class="step-n tn">3</span><div><strong>You get a written estimate</strong><span>A weekly rent range in plain numbers, and the reasoning behind it. No obligation.</span></div></li>
</ol>
</div>
</section>
<section class="section">
<div class="wrap">
<div class="section-head"><h2 class="headline">Rental appraisal questions</h2></div>
${faqBlock(FAQ_APPRAISAL, { intro: false })}
</div>
</section>
`,
});

// Fees
const FAQ_FEES = [
  ['Are property management fees tax deductible?', '<p>Generally yes. For an income-producing rental property, property management fees are usually a deductible expense. Check your own situation with your accountant or the ATO’s rental property guidance.</p>'],
  ['What is a letting fee?', '<p>A one-off fee charged when a new tenant is found and placed, usually expressed as a number of weeks’ rent. It covers advertising, open homes, screening and preparing the lease.</p>'],
  ['What should I compare between agencies?', '<p>Compare what’s included, not just the percentage. Some low headline fees add separate charges for inspections, statements or tribunal attendance.</p>'],
];
pages.push({
  path: '/fees/',
  title: 'Property Management Fees Brisbane & QLD | Homefront',
  description: 'Homefront’s property management fees in plain numbers: management fee, letting fee and what’s included. Plus a calculator to compare property management fees in QLD.',
  active: 'fees',
  schema: [faqSchema(FAQ_FEES), breadcrumbSchema([['Home', '/'], ['Fees', '/fees/']])],
  body: `
<section class="page-hero">
<div class="wrap">
<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / Fees</nav>
<h1 class="display" style="max-width:16ch">Property management fees, in plain numbers</h1>
<p class="lead">What we charge, what’s included and what isn’t. No surprises on your statement.</p>
</div>
</section>
<section class="section night">
<div class="wrap two">
<div class="stack gap-24">
<h2 class="headline-sm">Our fees</h2>
<div class="fee-figs">
<div class="fee-fig"><span class="n" style="color:#fff">[X.X]%</span><span class="l" style="color:var(--on-night-2)">Management fee of rent collected, incl. GST</span></div>
<div class="fee-fig"><span class="n" style="color:#fff">[X] weeks</span><span class="l" style="color:var(--on-night-2)">Letting fee, incl. GST</span></div>
</div>
<p style="margin:0;color:var(--on-night-2);font-size:0.875rem">[Fees to be supplied before launch]</p>
</div>
<div class="stack gap-24">
<div>
<h3 class="title" style="margin-bottom:12px">Included</h3>
<ul class="incl-grid">
${INCLUDED.concat(['Tenant screening', 'Monthly statements']).map((i) => `<li><span class="sq sq-sm" style="background:#fff"></span>${i}</li>`).join('\n')}
</ul>
</div>
<div>
<h3 class="title" style="margin-bottom:12px">Charged separately</h3>
<ul class="incl-grid">
<li><span class="sq sq-sm" style="background:#fff"></span>[To be supplied]</li>
</ul>
</div>
</div>
</div>
</section>
<section class="section mist">
<div class="wrap">
<div class="section-head">
<h2 class="headline">Property management fee calculator</h2>
<p class="body-lg">Compare any agency’s quote. Enter the weekly rent and the fees you’ve been quoted.</p>
</div>
<form class="calc" id="fee-calc" onsubmit="return false">
<div class="form">
<div class="field"><label for="c-rent">Weekly rent ($)</label><input id="c-rent" name="rent" type="number" inputmode="decimal" min="0" step="5" value="650"></div>
<div class="field"><label for="c-pct">Management fee (% of rent, incl. GST)</label><input id="c-pct" name="pct" type="number" inputmode="decimal" min="0" max="20" step="0.1" value="7.7"></div>
<div class="field"><label for="c-letting">Letting fee (weeks of rent)</label><input id="c-letting" name="letting" type="number" inputmode="decimal" min="0" max="6" step="0.25" value="1"></div>
<p class="hint" style="margin:0">Example values only. They are not Homefront’s fees.</p>
</div>
<div class="calc-out" aria-live="polite">
<div><span>Annual rent</span><span class="figure" data-out="annual">$0</span></div>
<div><span>Management fees per year</span><span class="figure" data-out="mgmt">$0</span></div>
<div><span>Letting fee per new tenant</span><span class="figure" data-out="letting">$0</span></div>
<div><span><strong>Year one total</strong></span><span class="figure" data-out="total">$0</span></div>
</div>
</form>
</div>
</section>
<section class="section">
<div class="wrap prose">
<h2 class="headline-sm" style="margin-top:0">Property management fees in Queensland, explained</h2>
<p>Most Queensland agencies charge two main fees: an ongoing management fee, taken as a percentage of the rent collected, and a letting fee when a new tenant is placed. Some add further charges for inspections, statements, advertising or tribunal attendance.</p>
<p>A lower percentage isn’t always cheaper. When comparing quotes, add up everything you’d pay in a year, and check how many properties your manager looks after. That number decides how quickly your calls get returned.</p>
<h3>Questions about fees</h3>
</div>
<div class="wrap">${faqBlock(FAQ_FEES, { intro: false })}</div>
</section>
${appraisalBand()}
`,
});

// Switch
const FAQ_SWITCH = [
  ['Do my tenants have to move out if I change property manager?', '<p>No. The tenancy agreement stays in place. Only the managing agent changes, and we let your tenants know.</p>'],
  ['How much notice do I need to give my current agent?', '<p>It depends on your current management appointment. Check the termination clause in your agreement (in Queensland this is usually a Form 6 appointment). We’ll help you read it if you’re unsure.</p>'],
  ['What happens to the bond?', '<p>Bonds in Queensland are held by the Residential Tenancies Authority, not the agent, so the bond stays where it is. The agent details are updated as part of the handover.</p>'],
  ['Is there a cost to switch?', '<p>We don’t charge to take over your property. Your current agreement may have its own terms, so check it first.</p>'],
];
pages.push({
  path: '/switch-property-manager/',
  title: 'How to Change Property Managers in QLD | Homefront',
  description: 'Unhappy with your property manager? How to switch property managers in Queensland in three steps. Your tenants stay, and we handle the handover.',
  schema: [faqSchema(FAQ_SWITCH), breadcrumbSchema([['Home', '/'], ['Switch property managers', '/switch-property-manager/']])],
  body: `
<section class="page-hero">
<div class="wrap">
<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / Switch property managers</nav>
<h1 class="display" style="max-width:16ch">How to switch property managers in QLD</h1>
<p class="lead">Slow replies, missed maintenance, long vacancies? Changing agents is simpler than most owners expect. Your tenants stay, and we do the legwork.</p>
</div>
</section>
<section class="section" style="padding-top:0">
<div class="wrap split">
<div class="stack gap-40">
${switchSteps()}
<div class="prose">
<h2 class="headline-sm">What we take care of</h2>
<ul>
<li>Liaising with your current agent and collecting keys and the tenancy file</li>
<li>Updating the agent details for the bond with the RTA</li>
<li>Introducing ourselves to your tenants and setting up rent payments</li>
<li>A first inspection so we know the property from day one</li>
</ul>
</div>
</div>
<div class="aside stack gap-16">
<h2 class="title">Start switching</h2>
<p class="muted" style="margin:0">Tell us about the property and we’ll call you to talk it through.</p>
${enquiryForm({ type: 'switch', submit: 'Start switching' })}
</div>
</div>
</section>
${faqBlock(FAQ_SWITCH, { title: 'Switching questions' })}
${appraisalBand()}
`,
});

// Leased
const MORE = LEASED.concat([
  { region: 'gold-coast', area: 'Gold Coast', img: null, beds: '[3]', baths: '[2]', cars: '[2]' },
  { region: 'brisbane', area: 'Brisbane', img: null, beds: '[2]', baths: '[1]', cars: '[1]' },
  { region: 'gold-coast', area: 'Gold Coast', img: null, beds: '[4]', baths: '[2]', cars: '[2]' },
]);
pages.push({
  path: '/leased/',
  title: 'Recently Leased Properties | Homefront Property Management',
  description: 'Homes Homefront has recently leased across Brisbane and the Gold Coast.',
  active: 'leased',
  schema: [breadcrumbSchema([['Home', '/'], ['Recently leased', '/leased/']])],
  body: `
<section class="page-hero" style="padding-bottom:48px">
<div class="wrap">
<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / Recently leased</nav>
<div class="leased-head" style="margin:0">
<div class="stack gap-16"><h1 class="display">Recently leased</h1><p class="lead" style="margin:0">Homes we’ve leased across Brisbane and the Gold Coast.</p></div>
${regionFilter('all-leased')}
</div>
</div>
</section>
<section class="section" style="padding-top:0">
<div class="wrap">
${leasedGrid('all-leased', MORE)}
<p class="placeholder mt-8">[Replace with real leased homes: photo, suburb, beds, baths, cars and weekly rent.]</p>
</div>
</section>
${appraisalBand()}
`,
});

// About
pages.push({
  path: '/about/',
  title: 'About Homefront | Local Property Managers Brisbane & Gold Coast',
  description: 'Homefront is a young, owner-led property management agency in Brisbane City. Small portfolios, direct phone numbers and real attention for every rental.',
  active: 'about',
  schema: [breadcrumbSchema([['Home', '/'], ['About', '/about/']])],
  body: `
<section class="page-hero">
<div class="wrap">
<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / About</nav>
<h1 class="display" style="max-width:15ch">We treat every property as if it were our own.</h1>
<p class="lead">Homefront Committed Property Management is a young, owner-led agency based in Brisbane City, managing long-term rentals across Brisbane and the Gold Coast.</p>
</div>
</section>
<section class="section" style="padding-top:0">
<div class="wrap prose">
<h2 class="headline-sm" style="margin-top:0">Why we started Homefront</h2>
<p>Plenty of owners hand over their investment and then can’t get a call back. At big agencies one property manager can look after a very large number of homes, and it shows: slow replies, maintenance that drifts, vacancies that run longer than they should.</p>
<p>We built Homefront the other way round. Small portfolios, one named manager for each property, and a direct mobile number you can actually call.</p>
<h2 class="headline-sm">How we work</h2>
<ul>
<li><strong>One person, start to finish.</strong> The manager who appraises your property manages it.</li>
<li><strong>Show the work.</strong> Written inspection reports with photos, maintenance approved by you, clear monthly statements.</li>
<li><strong>Plain speaking.</strong> Rent, fees and next steps in plain numbers.</li>
</ul>
<p class="placeholder">[Add Archie’s story, licence details and any team members before launch.]</p>
</div>
</section>
${peopleBand()}
${appraisalBand()}
`,
});

// Contact
pages.push({
  path: '/contact/',
  title: 'Contact Homefront | Property Management Brisbane & Gold Coast',
  description: `Call ${SITE.phone} or email ${SITE.email}. Homefront Committed Property Management, Brisbane City QLD 4007.`,
  active: 'contact',
  schema: [breadcrumbSchema([['Home', '/'], ['Contact', '/contact/']])],
  body: `
<section class="page-hero">
<div class="wrap">
<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / Contact</nav>
<h1 class="display">Talk to Archie</h1>
<p class="lead">Call, email or send a message. Owners and tenants both welcome.</p>
</div>
</section>
<section class="section" style="padding-top:0">
<div class="wrap split">
<div>
${enquiryForm({ type: 'contact', withAddress: false, submit: 'Send message' })}
</div>
<aside class="aside stack gap-16">
<h2 class="title">Contact details</h2>
<div class="stack gap-8">
<span class="muted" style="font-size:0.875rem">Phone</span>
<a href="${SITE.phoneHref}" class="tn link-strong" style="font-size:1.25rem">${SITE.phone}</a>
</div>
<div class="stack gap-8">
<span class="muted" style="font-size:0.875rem">Email</span>
${E}
</div>
<div class="stack gap-8">
<span class="muted" style="font-size:0.875rem">Office</span>
<span>${SITE.locality}, ${SITE.region} ${SITE.postcode}</span>
</div>
<div class="stack gap-8">
<span class="muted" style="font-size:0.875rem">Tenants</span>
<span>24/7 support for current tenants on ${P}.</span>
</div>
</aside>
</div>
</section>
${appraisalBand()}
`,
});

// 404
pages.push({
  path: '/404.html',
  file: '404.html',
  noindex: true,
  title: 'Page not found | Homefront',
  description: 'This page could not be found.',
  body: `
<section class="page-hero">
<div class="wrap stack gap-24">
<h1 class="display">That page isn’t here.</h1>
<p class="lead">It may have moved. Try the homepage, or get your free rental appraisal.</p>
<div class="btn-row"><a class="btn btn-primary" href="/rental-appraisal/">Free rental appraisal</a><a class="btn btn-secondary" href="/">Go to homepage</a></div>
</div>
</section>
`,
});

export default pages;
