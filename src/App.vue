<script setup>
const FORM_LINK =
  "https://forms.office.com/Pages/ResponsePage.aspx?id=93QeMQRMgkCUdSPklkj5A3ns6Vp05XlKpkJF8zsFLTNUMU5STlVaMjRLR0RXQUI3M1FOTlNIWVpGOC4u";
const STRIPE_LINK = "https://buy.stripe.com/aEU3fgfZqcq8frW3cq";

const events = [
  {
    day: "29",
    month: "Sep",
    title: "Troubled Waters: The Strait of Hormuz in Focus",
    when: "29 Sep 2026, 2pm to 4pm",
    where: "",
    href: "https://the-mea.com/events",
  },
  {
    day: "6",
    month: "Oct",
    title: "Iraq and Syria Business Reception",
    when: "6 Oct 2026, 6pm to 9pm",
    where: "Mansion House, London",
    href: "https://us10.campaign-archive.com/?e=%5bUNIQID%5d&u=7148a2798bf88a1f59d6e91f5&id=a3a3258a16",
  },
  {
    day: "12",
    month: "Oct",
    title: "MEA Annual Gala Dinner 2026",
    when: "12 Oct 2026",
    where: "One Great George Street, London",
    href: "https://gala-dinner.the-mea.com/",
  },
  {
    day: "21",
    month: "Oct",
    title: "MEA Young Professionals: Connect & Network",
    when: "21 Oct 2026, 6:30pm",
    where: "Commercial Tavern, London",
    href: "https://the-mea.com/events",
  },
  {
    day: "23",
    month: "Nov",
    title: "MEA UK Roadshow 2026",
    when: "23 to 27 Nov 2026",
    where: "UK-wide",
    href: "https://uk-roadshow.the-mea.com/",
  },
];

const benefits = [
  {
    title: "Events and Briefings",
    body: "Year-round invitations to all MEA events, plus private briefings with industry experts, government officials, and regional specialists.",
  },
  {
    title: "Tailored Engagement",
    body: "Bespoke support with partner events and opportunities to bring VIP guests to MEA flagship occasions, including the Annual Ambassadors' and Parliamentary Receptions.",
  },
  {
    title: "Monthly Intelligence",
    body: "The MEA member newsletter each month — sector insights, regional updates, and opportunities curated by our specialists.",
  },
  {
    title: "Promote Your Events",
    body: "Looking to promote an event to our network? Get in touch and we will be happy to explore how we can support you.",
  },
  {
    title: "Young Professionals Group",
    body: "Unlimited memberships to the MEA YPG, giving your whole team access to networking, mentorship, and regional insight events.",
  },
  {
    title: "Year-Round Network",
    body: "Access to a community spanning government, embassies, businesses, NGOs, and academic institutions, all connected through the MEA.",
  },
];
</script>

<template>
  <!-- NAV -->
  <nav class="nav">
    <div class="nav-inner">
      <a class="nav-logo" href="https://the-mea.com" aria-label="The Middle East Association">
        <span class="logo-wrap"><img src="/mea-logo.png" alt="MEA" width="28" height="28" /></span>
        <span class="nav-wordmark">The Middle East Association</span>
      </a>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#benefits">Benefits</a></li>
        <li><a href="#join" class="nav-cta">Join Now</a></li>
      </ul>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero">
    <div class="container">
      <div class="hero-inner">
        <span class="logo-wrap" style="padding: 6px; border-radius: 8px">
          <img src="/mea-logo.png" alt="The Middle East Association" width="72" height="72" />
        </span>
        <p class="hero-eyebrow">Corporate Membership</p>
        <h1>Connecting UK with the<br /><em>Middle East and North Africa</em></h1>
        <div class="hero-price">£2,500 + VAT <small>per year</small></div>
        <div class="hero-actions">
          <a :href="FORM_LINK" class="btn btn-hero" target="_blank" rel="noopener">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><rect x="1" y="1" width="12" height="12" rx="1" stroke="#5C1A6B" stroke-width="1.4" /><path d="M4 5h6M4 8h4" stroke="#5C1A6B" stroke-width="1.4" stroke-linecap="round" /></svg>
            Membership Form
          </a>
          <a :href="STRIPE_LINK" class="btn btn-hero" target="_blank" rel="noopener">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><rect x="1" y="3" width="12" height="9" rx="1.2" stroke="#5C1A6B" stroke-width="1.4" /><path d="M1 6.5h12" stroke="#5C1A6B" stroke-width="1.4" /></svg>
            Pay Now
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section class="section" id="about">
    <div class="container">
      <p class="eyebrow">Who We Are</p>
      <h2 class="section-title">The bridge between the UK and MENA</h2>
      <div class="pillars">
        <div class="pillar">
          <svg class="pillar-icon" viewBox="0 0 36 36" fill="none"><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1.4" /><circle cx="24" cy="12" r="5" stroke="currentColor" stroke-width="1.4" /><circle cx="18" cy="22" r="5" stroke="currentColor" stroke-width="1.4" /><path d="M7 30c0-4 2.5-7 5-8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" /><path d="M29 30c0-4-2.5-7-5-8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" /></svg>
          <h3>Foster Relationships</h3>
          <p>We are cross-industry. Whatever your sector, the MEA connects your business with embassies, government, and the right people across the MENA region.</p>
        </div>
        <div class="pillar">
          <svg class="pillar-icon" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="13" stroke="currentColor" stroke-width="1.4" /><path d="M18 5c0 0 7 7 7 13s-7 13-7 13" stroke="currentColor" stroke-width="1.4" /><path d="M18 5c0 0-7 7-7 13s7 13 7 13" stroke="currentColor" stroke-width="1.4" /><line x1="5" y1="18" x2="31" y2="18" stroke="currentColor" stroke-width="1.4" /></svg>
          <h3>Strengthen Connections</h3>
          <p>Strengthening UK-MENA relationships through strategic partnerships and collaborative initiatives.</p>
        </div>
        <div class="pillar">
          <svg class="pillar-icon" viewBox="0 0 36 36" fill="none"><path d="M18 3L33 11V25L18 33L3 25V11Z" stroke="currentColor" stroke-width="1.4" /><line x1="18" y1="3" x2="18" y2="33" stroke="currentColor" stroke-width="1" opacity="0.4" /><line x1="3" y1="18" x2="33" y2="18" stroke="currentColor" stroke-width="1.4" /><circle cx="18" cy="18" r="3" fill="currentColor" /></svg>
          <h3>Regional Expertise</h3>
          <p>Deep knowledge of MENA markets, providing members with the insight and access they need to grow.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- EVENTS -->
  <section class="section" id="events" style="background: color-mix(in srgb, var(--plum) 3%, var(--bg))">
    <div class="container">
      <p class="eyebrow">Dates for Your Diary</p>
      <h2 class="section-title">Upcoming MEA Events</h2>
      <div class="event-list">
        <a
          v-for="event in events"
          :key="event.title"
          class="event-item"
          :href="event.href"
          target="_blank"
          rel="noopener"
        >
          <div class="event-date">
            <div class="event-day">{{ event.day }}</div>
            <div class="event-month">{{ event.month }}</div>
          </div>
          <div>
            <div class="event-title">{{ event.title }}</div>
            <div class="event-meta">
              <span>{{ event.when }}</span>
              <span v-if="event.where">{{ event.where }}</span>
            </div>
          </div>
          <span class="event-arrow" aria-hidden="true">&#8594;</span>
        </a>
      </div>
      <p style="margin-top: 1rem; font-size: 0.78rem; color: var(--text-muted)">
        Members receive priority invitations. More events added throughout the year.
      </p>
    </div>
  </section>

  <!-- BENEFITS -->
  <section class="section benefits-section" id="benefits">
    <div class="container" style="position: relative; z-index: 2">
      <p class="eyebrow">What You Receive</p>
      <h2 class="section-title">Member Benefits</h2>
      <div class="benefits-grid">
        <div class="benefit" v-for="benefit in benefits" :key="benefit.title">
          <h3>{{ benefit.title }}</h3>
          <p>{{ benefit.body }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- JOIN -->
  <section class="section" id="join">
    <div class="container">
      <p class="eyebrow">Ready to Join?</p>
      <h2 class="section-title">Two steps to membership</h2>
      <div class="join-grid">
        <div class="join-panel">
          <div class="step-label"><span class="step-num">1</span> Membership Form</div>
          <h3>Application Form</h3>
          <a :href="FORM_LINK" class="btn btn-plum" target="_blank" rel="noopener">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><rect x="1" y="1" width="12" height="12" rx="1" stroke="white" stroke-width="1.4" /><path d="M4 5h6M4 8h4" stroke="white" stroke-width="1.4" stroke-linecap="round" /></svg>
            Open Form
          </a>
        </div>
        <div class="join-panel">
          <div class="step-label"><span class="step-num">2</span> Payment</div>
          <h3>Pay £2,500 + VAT</h3>
          <a :href="STRIPE_LINK" class="btn btn-gold" target="_blank" rel="noopener">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><rect x="1" y="3" width="12" height="9" rx="1.2" stroke="white" stroke-width="1.4" /><path d="M1 6.5h12" stroke="white" stroke-width="1.4" /></svg>
            Pay Securely
          </a>
        </div>
      </div>
      <div class="contact-strip">
        <p>Questions? Get in touch with our membership team.</p>
        <div class="contact-links">
          <a href="mailto:Membership@the-mea.com">Membership@the-mea.com</a>
          <a href="tel:+447500684886">+44 7500 684 886</a>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <p class="footer-name">The Middle East Association</p>
        <ul class="footer-links">
          <li><a href="https://the-mea.com" target="_blank" rel="noopener">Website</a></li>
          <li><a href="https://the-mea.com/young-professionals" target="_blank" rel="noopener">Young Professionals</a></li>
          <li><a href="https://gala-dinner.the-mea.com/" target="_blank" rel="noopener">Gala Dinner</a></li>
          <li><a href="mailto:Membership@the-mea.com">Contact</a></li>
        </ul>
        <p class="footer-copy">&copy; 2026 The Middle East Association</p>
      </div>
    </div>
  </footer>
</template>
