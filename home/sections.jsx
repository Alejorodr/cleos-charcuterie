// Cleo's marketing site — page sections. Compose DS components + chrome helpers.
const DSx = window.CleoSDesignSystem_33cea7;

const CONTAINER = { maxWidth: 1180, margin: '0 auto', padding: '0 32px' };

function Hero({ onOrder, onMenu }) {
  return (
    <section style={{ background: 'var(--wash-paper)', padding: '64px 32px 76px', textAlign: 'center' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <img src="assets/food-cluster.png" alt="Engraved charcuterie & oysters" style={{ width: '76%', maxWidth: 540, height: 'auto', margin: '0 auto 8px' }} />
        <div style={{ height: 1, background: 'var(--gold-400)', width: '70%', margin: '0 auto 26px', opacity: 0.7 }} />
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--clay-500)', letterSpacing: '0.3em', fontSize: 64, margin: '0 0 6px', paddingLeft: '0.3em' }}>CLEO&rsquo;S</h1>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, color: 'var(--gold-600)', letterSpacing: '0.24em', fontSize: 15, marginBottom: 26 }}>CHARCUTERIE &amp; OYSTERS CO.</div>
        <p style={{ fontFamily: 'var(--font-script)', fontSize: 46, color: 'var(--ink-700)', lineHeight: 1.15, margin: '0 0 30px' }}>
          Simple. Beautiful. Made to Share. <span style={{ color: 'var(--gold-500)' }}>&#9825;</span>
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
          <DSx.Button variant="olive" size="lg" onClick={onOrder}>Order a Board</DSx.Button>
          <DSx.Button variant="outline" size="lg" onClick={onMenu}>View the Menu</DSx.Button>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    ['utensils-crossed', 'Charcuterie Boards'],
    ['shell', 'Seafood Platters'],
    ['grape', 'Grazing Tables'],
    ['gift', 'Perfect for Any Occasion'],
  ];
  return (
    <section style={{ padding: '54px 32px', background: 'var(--paper-1)' }}>
      <div style={{ ...CONTAINER, display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 24 }}>
        {items.map(([icon, label]) => (
          <div key={label} style={{ textAlign: 'center', width: 200 }}>
            <DSx.IconCircle size={104} style={{ margin: '0 auto 14px' }}>
              <window.CleoIcon name={icon} size={42} color="var(--clay-500)" stroke={1.25} />
            </DSx.IconCircle>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-900)' }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const BOARDS = [
  { name: 'Mini Board', people: '2–4 people', price: '$40', popular: false, items: ['2 cheeses', '2 meats', 'Crackers', 'Fruit', 'Olives & pickles', 'Nuts', 'Sweet touch'] },
  { name: 'Classic Board', people: '5–7 people', price: '$75', popular: true, items: ['3 cheeses', '3 meats', 'Crackers & breadsticks', 'Seasonal fruit', 'Olives & pickles', 'Jam or honey', 'Nuts', 'Chocolates'] },
  { name: 'Large Board', people: '8–12 people', price: '$110', popular: false, items: ['4 cheeses', '4 meats', 'Crackers & pretzels', 'Fruit variety', 'Nuts & dips', 'Olives & pickles', 'Chocolates'] },
  { name: 'Party Board', people: '15–20 people', price: '$175', popular: false, items: ['4+ cheeses', '4+ meats', 'Crackers & pretzels', 'Fruit variety', 'Nuts & dips', 'Olives & pickles', 'Chocolates'] },
];

function Boards({ onOrder, bare = false }) {
  return (
    <section id="boards" style={{ padding: bare ? '20px 32px 70px' : '70px 32px', background: 'var(--paper-2)' }}>
      <div style={CONTAINER}>
        {!bare && <DSx.SectionHeading kicker="Made to share" title="Charcuterie Boards" style={{ marginBottom: 14 }} />}
        {!bare && <p style={{ textAlign: 'center', fontFamily: 'var(--font-serif)', fontSize: 19, color: 'var(--text-muted)', maxWidth: 560, margin: '0 auto 44px' }}>
          A mix of cheeses, meats, seasonal fruit, crackers, nuts, olives, pickles, spreads &amp; a little something sweet.
        </p>}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22 }}>
          {BOARDS.map((b) => (
            <DSx.Card key={b.name} framed={b.popular} padding="0" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
              {b.popular && (
                <div style={{ position: 'absolute', top: 14, right: 14 }}><DSx.Badge tone="olive">Most Popular</DSx.Badge></div>
              )}
              <div style={{ padding: '26px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--clay-500)', margin: '0 0 4px' }}>{b.name}</h3>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 16 }}>{b.people}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'grid', gap: 7, flex: 1 }}>
                  {b.items.map((it) => (
                    <li key={it} style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-body)', display: 'flex', gap: 8, alignItems: 'center' }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--gold-500)', flex: 'none' }} />{it}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                  <DSx.PriceTag price={b.price} />
                  <DSx.Button variant="ghost" size="sm" onClick={onOrder} style={{ color: 'var(--clay-500)' }}>Order &rarr;</DSx.Button>
                </div>
              </div>
            </DSx.Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Seafood({ bare = false }) {
  const sizes = [
    ['Small', '2–3 people', '$50'],
    ['Medium', '4–6 people', '$80'],
    ['Large', '7–10 people', '$115'],
  ];
  const items = [
    ['Smoked Oysters', 'Rich, smoky & full of flavor.'],
    ['Shrimp', 'Juicy, fresh & perfectly cooked.'],
    ['Ceviche', 'Zesty, refreshing & made fresh.'],
    ['Smoked Mussels', 'Delicate, smoky & irresistible.'],
  ];
  return (
    <section id="seafood" style={{ padding: bare ? '24px 32px 70px' : '70px 32px', background: 'var(--paper-1)' }}>
      <div style={{ ...CONTAINER, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <DSx.SectionHeading kicker="Smoked. Fresh. Flavorful." title="Seafood Platter" align="left" rule={false} style={{ marginBottom: 18 }} />
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: 'var(--text-muted)', margin: '0 0 26px' }}>
            Served with crackers, lemon &amp; sauce. Smoked oysters, shrimp, ceviche &amp; smoked mussels.
          </p>
          <div style={{ display: 'grid', gap: 14 }}>
            {sizes.map(([size, people, price]) => (
              <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 16, paddingBottom: 14, borderBottom: '1px solid var(--hairline)' }}>
                <window.CleoIcon name="anchor" size={22} color="var(--clay-500)" />
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-900)' }}>{size}</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{people}</div>
                </div>
                <DSx.PriceTag price={price} size="sm" />
              </div>
            ))}
          </div>
        </div>
        <DSx.Card padding="32px">
          <div style={{ display: 'grid', gap: 18 }}>
            {items.map(([name, desc]) => (
              <div key={name} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <DSx.IconCircle size={52} style={{ flex: 'none' }}>
                  <window.CleoIcon name="fish" size={22} color="var(--gold-600)" stroke={1.25} />
                </DSx.IconCircle>
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-900)' }}>{name}</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: 'var(--text-muted)' }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </DSx.Card>
      </div>
    </section>
  );
}

function Values() {
  const vals = [
    ['leaf', 'Locally Sourced', 'We shop local & support PEI producers.'],
    ['heart', 'Made Fresh', 'Every board is made just for you.'],
    ['recycle', 'Sustainable', 'Eco-friendly packaging whenever possible.'],
    ['calendar-heart', 'Order Ahead', '24–48 hours notice appreciated.'],
  ];
  return (
    <section id="about" style={{ padding: '64px 32px', background: 'var(--paper-2)' }}>
      <div style={CONTAINER}>
        <DSx.SectionHeading title="Good to Know" style={{ marginBottom: 40 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22 }}>
          {vals.map(([icon, title, desc]) => (
            <div key={title} style={{ textAlign: 'center' }}>
              <DSx.IconCircle size={72} style={{ margin: '0 auto 14px' }}>
                <window.CleoIcon name={icon} size={28} color="var(--clay-500)" stroke={1.3} />
              </DSx.IconCircle>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-900)', marginBottom: 6 }}>{title}</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>{desc}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center' }}>
          <div style={{ background: 'var(--olive-500)', color: 'var(--text-on-dark)', fontFamily: 'var(--font-script)', fontSize: 30, padding: '16px 52px', borderRadius: '120px 90px 110px 80px / 40px 50px 38px 46px', boxShadow: 'var(--shadow-md)' }}>
            Locally sourced. Made with love in PEI. <span style={{ color: 'var(--gold-400)' }}>&#9825;</span>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CleoHero: Hero, CleoFeatures: Features, CleoBoards: Boards, CleoSeafood: Seafood, CleoValues: Values });
