// Cleo's marketing site — additional page sections (Boards, Seafood, Grazing, About).
// Composes DS components + chrome helpers. Shares window.Cleo* globals.
const DSp = window.CleoSDesignSystem_33cea7;
const PWRAP = { maxWidth: 1180, margin: '0 auto', padding: '0 32px' };

// ---- Page banner: script kicker + Cinzel title + serif lead, gold rule ----
function PageHero({ kicker, title, lead }) {
  return (
    <section style={{ background: 'var(--wash-paper)', padding: '58px 32px 50px', textAlign: 'center' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        {kicker && <div style={{ fontFamily: 'var(--font-script)', fontSize: 34, color: 'var(--gold-600)', lineHeight: 1, marginBottom: 10 }}>{kicker}</div>}
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--clay-500)', letterSpacing: '0.18em', fontSize: 46, margin: '0 0 18px', paddingLeft: '0.18em', textTransform: 'uppercase' }}>{title}</h1>
        <div style={{ height: 1, background: 'var(--gold-400)', width: 200, margin: '0 auto 20px', opacity: 0.7 }} />
        {lead && <p style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>{lead}</p>}
      </div>
    </section>
  );
}

// ---- Add-ons grid (from the menu sheet) ----
const ADDONS = [
  ['cookie', 'Extra Crackers', '$6'],
  ['grip', 'Extra Cheese', '$10'],
  ['beef', 'Extra Meats', '$12'],
  ['cherry', 'Extra Fruit', '$8'],
  ['droplet', 'Honey / Jam Jar', '$6'],
  ['wheat-off', 'Gluten-Free Crackers', '$8'],
  ['cake-slice', 'Dessert Add-On', '$12–$18'],
];
function AddOns() {
  return (
    <section style={{ padding: '64px 32px', background: 'var(--paper-1)' }}>
      <div style={PWRAP}>
        <DSp.SectionHeading kicker="A little extra" title="Add-Ons" style={{ marginBottom: 36 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {ADDONS.map(([icon, name, price]) => (
            <DSp.Card key={name} padding="22px" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <DSp.IconCircle size={56} style={{ flex: 'none' }}>
                <window.CleoIcon name={icon} size={24} color="var(--gold-600)" stroke={1.3} />
              </DSp.IconCircle>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-900)' }}>{name}</div>
              </div>
              <DSp.PriceTag price={price} size="sm" />
            </DSp.Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Grazing tables: three event tiers (from the menu sheet) ----
const GRAZING = [
  { name: 'Small Event', people: '25–35 people', pp: '$15–$18', total: '$375–$630' },
  { name: 'Medium Event', people: '40–50 people', pp: '$13–$16', total: '$520–$800', popular: true },
  { name: 'Large Event', people: '60–100 people', pp: '$12–$15', total: '$720–$1,500' },
];
function GrazingTables() {
  return (
    <section style={{ padding: '70px 32px', background: 'var(--paper-2)' }}>
      <div style={PWRAP}>
        <DSp.SectionHeading kicker="Perfect for any event" title="Grazing Tables" style={{ marginBottom: 14 }} />
        <p style={{ textAlign: 'center', fontFamily: 'var(--font-serif)', fontSize: 19, color: 'var(--text-muted)', maxWidth: 600, margin: '0 auto 44px' }}>
          A beautiful display with variety, abundance &amp; fresh local ingredients — made for birthdays, showers &amp; celebrations.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {GRAZING.map((g) => (
            <DSp.Card key={g.name} framed={g.popular} padding="32px" style={{ textAlign: 'center', position: 'relative' }}>
              {g.popular && <div style={{ position: 'absolute', top: 16, right: 16 }}><DSp.Badge tone="olive">Most Popular</DSp.Badge></div>}
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--clay-500)', margin: '0 0 6px' }}>{g.name}</h3>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 22 }}>{g.people}</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 40, fontWeight: 700, color: 'var(--ink-900)', lineHeight: 1 }}>{g.pp}<span style={{ fontSize: 15, color: 'var(--text-muted)', fontWeight: 600 }}> pp</span></div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 17, color: 'var(--text-muted)', marginTop: 8 }}>{g.total} total</div>
            </DSp.Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Included in a grazing table ----
function GrazingIncludes() {
  const items = [
    ['utensils-crossed', 'Artisan Cheeses', 'A generous variety of local & imported cheeses.'],
    ['beef', 'Cured Meats', 'Salami, prosciutto & charcuterie selections.'],
    ['cherry', 'Seasonal Fruit', 'Fresh, colourful & in-season produce.'],
    ['wheat', 'Crackers & Breads', 'Crackers, breadsticks & artisan breads.'],
    ['nut', 'Nuts & Spreads', 'Olives, pickles, honey, jams & dips.'],
    ['flower', 'Beautiful Styling', 'Styled with edible flowers & garnishes.'],
  ];
  return (
    <section style={{ padding: '64px 32px', background: 'var(--paper-1)' }}>
      <div style={PWRAP}>
        <DSp.SectionHeading title="What's Included" style={{ marginBottom: 40 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30 }}>
          {items.map(([icon, title, desc]) => (
            <div key={title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <DSp.IconCircle size={60} style={{ flex: 'none' }}>
                <window.CleoIcon name={icon} size={26} color="var(--clay-500)" stroke={1.3} />
              </DSp.IconCircle>
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-900)', marginBottom: 5 }}>{title}</div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- About story: script lead + editorial prose, engraved cluster ----
function AboutStory() {
  return (
    <section style={{ padding: '70px 32px', background: 'var(--paper-1)' }}>
      <div style={{ ...PWRAP, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
        <div>
          <img src="assets/food-cluster.png" alt="Engraved charcuterie & oysters" style={{ width: '100%', maxWidth: 460, height: 'auto', margin: '0 auto', display: 'block' }} />
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-script)', fontSize: 40, color: 'var(--clay-500)', lineHeight: 1.05, marginBottom: 18 }}>Made with love in PEI <span style={{ color: 'var(--gold-500)' }}>&#9825;</span></div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 19, color: 'var(--text-body)', lineHeight: 1.65, margin: '0 0 16px' }}>
            Cleo&rsquo;s began with a simple love of bringing people together around beautiful food. Every board is built by hand from cheeses, meats, seasonal fruit &amp; a little something sweet — made just for you.
          </p>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 19, color: 'var(--text-body)', lineHeight: 1.65, margin: '0 0 16px' }}>
            We shop local &amp; support Prince Edward Island producers, so what lands on your table is fresh, abundant &amp; close to home. Whether it&rsquo;s a date night, a picnic or a celebration, we&rsquo;d love to graze with you.
          </p>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 19, fontStyle: 'italic', color: 'var(--text-muted)', margin: 0 }}>Simple. Beautiful. Made to Share.</p>
        </div>
      </div>
    </section>
  );
}

// ---- Contact block ----
function Contact() {
  const rows = [
    ['instagram', 'Instagram', '@cleos_charcuterie'],
    ['mail', 'Email', 'danibr-11@hotmail.com'],
    ['phone', 'Phone', '782-377-8050'],
    ['map-pin', 'Where', 'Prince Edward Island'],
  ];
  return (
    <section style={{ padding: '64px 32px', background: 'var(--paper-2)' }}>
      <div style={{ ...PWRAP, maxWidth: 760 }}>
        <DSp.SectionHeading kicker="Let's graze!" title="Get in Touch" style={{ marginBottom: 36 }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {rows.map(([icon, label, value]) => (
            <DSp.Card key={label} padding="22px" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <DSp.IconCircle size={54} style={{ flex: 'none' }}>
                <window.CleoIcon name={icon} size={23} color="var(--clay-500)" stroke={1.3} />
              </DSp.IconCircle>
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 3 }}>{label}</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: 'var(--ink-900)' }}>{value}</div>
              </div>
            </DSp.Card>
          ))}
        </div>
        <div style={{ marginTop: 36, textAlign: 'center' }}>
          <DSp.Button variant="olive" size="lg" onClick={() => { window.location.href = 'Order.html'; }}>Place an Order</DSp.Button>
        </div>
      </div>
    </section>
  );
}

// ---- Simple call-to-action band ----
function CTABand({ text = 'Ready to graze?', sub = '24–48 hours notice appreciated.' }) {
  return (
    <section style={{ padding: '56px 32px', background: 'var(--paper-2)', textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-script)', fontSize: 40, color: 'var(--clay-500)', marginBottom: 8 }}>{text} <span style={{ color: 'var(--gold-500)' }}>&#9825;</span></div>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', margin: '0 0 24px' }}>{sub}</p>
      <DSp.Button variant="olive" size="lg" onClick={() => { window.location.href = 'Order.html'; }}>Order Now</DSp.Button>
    </section>
  );
}

Object.assign(window, {
  CleoPageHero: PageHero, CleoAddOns: AddOns, CleoGrazingTables: GrazingTables,
  CleoGrazingIncludes: GrazingIncludes, CleoAboutStory: AboutStory, CleoContact: Contact, CleoCTABand: CTABand,
});
