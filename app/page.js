import Image from "next/image";
import "./globals.css";

const STRIPE_LINK = "https://buy.stripe.com/aEU3fgfZqcq8frW3cq";

const benefits = [
  {
    icon: "🎟️",
    title: "Year-Round Event Access",
    body: "Invitations to MEA events throughout the year, including flagship receptions, private briefings, and roundtables.",
  },
  {
    icon: "🔒",
    title: "Private Briefings",
    body: "Access to confidential, off-the-record briefings with industry experts, policymakers, and regional specialists.",
  },
  {
    icon: "🤝",
    title: "Tailored Engagement",
    body: "Support for partner-led engagement, including opportunities to invite VIP guests to MEA flagship events.",
  },
  {
    icon: "📰",
    title: "Insights & Updates",
    body: "Monthly newsletter featuring political, economic, and regional analysis from across the MENA region.",
  },
  {
    icon: "👥",
    title: "Talent & Network Development",
    body: "Unlimited access to the MEA Young Professionals Group, a dedicated network of emerging leaders with MENA interests.",
  },
];

export default function Page() {
  return (
    <>
      {/* ── Header ── */}
      <div className="header">
        <div className="header-inner">
          <div className="logo-wrap">
            <Image src="/mea-logo.png" alt="The Middle East Association" width={64} height={64} />
          </div>
          <div className="header-text">
            <h1>The Middle East Association</h1>
            <p>Corporate Membership</p>
          </div>
        </div>
      </div>
      <div className="header-bar" />

      <div className="form-wrap">
        <div className="form-card">

          {/* ── Overview ── */}
          <div className="section-header">
            <div className="section-icon">🌍</div>
            <div>
              <h2>Membership Overview</h2>
              <p>What your membership includes</p>
            </div>
          </div>

          <div className="form-body">
            <p className="intro-text">
              Since 1961, The Middle East Association has served to foster trade, education,
              investment, and cultural understanding between the UK and the Middle East. We foster
              dialogue, understanding, and collaboration across policy, business, and culture,
              connecting the UK and the Middle East through trade, investment, and partnership.
            </p>
            <p className="intro-text">
              Membership provides structured, year-round access to MEA events, networks, and senior
              engagement opportunities for organisations with interests across the MENA region.
            </p>

            {/* Price block */}
            <div className="price-block">
              <div className="price-block-label">Annual Subscription</div>
              <div className="price-block-figure">
                <span className="price-amount">£2,500</span>
                <span className="price-label">plus VAT per year</span>
              </div>
            </div>

            {/* Benefits */}
            <div className="benefits-label">What is included</div>
            <div className="benefits-grid">
              {benefits.map((b) => (
                <div className="benefit-card" key={b.title}>
                  <div className="benefit-icon">{b.icon}</div>
                  <div className="benefit-title">{b.title}</div>
                  <div className="benefit-body">{b.body}</div>
                </div>
              ))}
            </div>

            {/* Who it's for */}
            <div className="who-box">
              <div className="who-label">Who it is for</div>
              <p>
                Membership is designed for organisations seeking structured engagement
                and ongoing access to MEA events and networks. Members range from multinational
                corporations and financial institutions to government agencies, consultancies,
                and think tanks with active interests across the Middle East and North Africa.
              </p>
            </div>
          </div>

          {/* ── Payment ── */}
          <div className="section-header">
            <div className="section-icon">💳</div>
            <div>
              <h2>Become a Corporate Member</h2>
              <p>Choose how you would like to pay</p>
            </div>
          </div>

          <div className="form-body">
            <p className="intro-text">
              To activate your Corporate Membership, complete payment below.
            </p>

            <a className="submit-btn pay-btn" href={STRIPE_LINK}>
              Pay £2,500 + VAT via Stripe →
            </a>

            <div className="invoice-box">
              <div className="invoice-label">Prefer to be invoiced?</div>
              <p>
                If you would rather pay by invoice, please email{" "}
                <a href="mailto:info@the-mea.com" className="success-link">
                  info@the-mea.com
                </a>{" "}
                and we will arrange this for you.
              </p>
            </div>

            <p className="foot-note">
              By joining, you apply for Corporate Membership of The Middle East Association and agree
              to be bound by its Memorandum and Articles of Association. Membership continues until
              terminated by one month&rsquo;s notice in writing, or non-payment of the annual subscription.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
