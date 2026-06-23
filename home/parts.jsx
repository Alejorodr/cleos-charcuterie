// Cleo's marketing site — chrome (header + footer) and small helpers.
// Components come from the compiled DS bundle on window.<Namespace>.
const DS = window.CleoSDesignSystem_33cea7;

function Icon({ name, size = 20, color = 'currentColor', stroke = 1.4 }) {
  // Renders a Lucide icon as inline SVG via the global lucide registry.
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: { width: size, height: size, stroke: color, 'stroke-width': stroke },
        nameAttr: 'data-lucide',
      });
    }
  }, [name, size, color, stroke]);
  return <span ref={ref} style={{ display: 'inline-flex', lineHeight: 0 }} />;
}

function Wordmark({ size = 26, stacked = false, href = 'Home Page.html' }) {
  const inner = (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: stacked ? 'center' : 'flex-start', lineHeight: 1 }}>
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--clay-500)',
        letterSpacing: '0.28em', fontSize: size, paddingLeft: '0.28em',
      }}>CLEO&rsquo;S</span>
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 500, color: 'var(--gold-600)',
        letterSpacing: '0.22em', fontSize: size * 0.34, marginTop: size * 0.18, paddingLeft: '0.22em',
      }}>CHARCUTERIE &amp; OYSTERS CO.</span>
    </div>
  );
  if (!href) return inner;
  return <a href={href} style={{ textDecoration: 'none' }}>{inner}</a>;
}

function Header({ active = 'home' }) {
  const links = [['Boards', 'boards', 'Boards.html'], ['Seafood', 'seafood', 'Seafood.html'], ['Grazing', 'grazing', 'Grazing.html'], ['About', 'about', 'About.html']];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 20,
      background: 'rgba(246,240,229,0.86)', backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--hairline)',
    }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto', padding: '16px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Wordmark size={22} />
        <nav style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          {links.map(([label, key, href]) => {
            const isActive = active === key;
            return (
              <a key={label} href={href} style={{
                fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: isActive ? 'var(--clay-500)' : 'var(--ink-700)', textDecoration: 'none',
                paddingBottom: 4, borderBottom: isActive ? '1.5px solid var(--gold-500)' : '1.5px solid transparent',
              }}>{label}</a>
            );
          })}
          <DS.Button variant="olive" size="sm" onClick={() => { window.location.href = 'Order.html'; }}>Order Now</DS.Button>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  const contact = [
    ['instagram', '@cleos_charcuterie'],
    ['mail', 'danibr-11@hotmail.com'],
    ['phone', '782-377-8050'],
    ['map-pin', 'Prince Edward Island'],
  ];
  return (
    <footer style={{ background: 'var(--olive-500)', color: 'var(--text-on-dark)', padding: '56px 32px 40px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 40, justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ maxWidth: 360 }}>
          <div style={{ fontFamily: 'var(--font-script)', fontSize: 38, color: 'var(--gold-300)', marginBottom: 8 }}>Let&rsquo;s graze! <span style={{ color: 'var(--gold-400)' }}>&#9825;</span></div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.7, color: 'rgba(244,236,221,0.82)', margin: 0 }}>
            Beautiful charcuterie boards, seafood platters &amp; grazing tables. Locally sourced and made with love in PEI.
          </p>
        </div>
        <div style={{ display: 'grid', gap: 14 }}>
          {contact.map(([icon, text]) => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-sans)', fontSize: 14, color: 'rgba(244,236,221,0.92)' }}>
              <Icon name={icon} size={18} color="var(--gold-300)" />
              {text}
            </div>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: 1180, margin: '36px auto 0', paddingTop: 22, borderTop: '1px solid rgba(244,236,221,0.18)', textAlign: 'center', fontFamily: 'var(--font-script)', fontSize: 22, color: 'var(--gold-300)' }}>
        Thank you for supporting a small business in PEI! <span style={{ color: 'var(--gold-400)' }}>&#9825;</span>
      </div>
    </footer>
  );
}

Object.assign(window, { CleoIcon: Icon, CleoWordmark: Wordmark, CleoHeader: Header, CleoFooter: Footer });
