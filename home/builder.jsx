// Cleo's — interactive Order Builder. Pick a board, add extras, see a live total.
const ODS = window.CleoSDesignSystem_33cea7;

const OB_BOARDS = [
  { id: 'mini', name: 'Mini Board', people: '2–4 people', price: 40, blurb: 'Date night, picnics or a little treat.' },
  { id: 'classic', name: 'Classic Board', people: '5–7 people', price: 75, blurb: 'Our most popular size for any occasion.', popular: true },
  { id: 'large', name: 'Large Board', people: '8–12 people', price: 110, blurb: 'Family dinners, cottage nights & parties.' },
  { id: 'party', name: 'Party Board', people: '15–20 people', price: 175, blurb: 'Birthdays, showers & celebrations.' },
];

const OB_ADDONS = [
  { id: 'crackers', name: 'Extra Crackers', price: 6 },
  { id: 'cheese', name: 'Extra Cheese', price: 10 },
  { id: 'meats', name: 'Extra Meats', price: 12 },
  { id: 'fruit', name: 'Extra Fruit', price: 8 },
  { id: 'honey', name: 'Honey / Jam Jar', price: 6 },
  { id: 'gf', name: 'Gluten-Free Crackers', price: 8 },
  { id: 'dessert', name: 'Dessert Add-On', price: 15 },
];

function OB_Icon({ name, size = 18, color = 'currentColor', stroke = 1.4 }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({ attrs: { width: size, height: size, stroke: color, 'stroke-width': stroke }, nameAttr: 'data-lucide' });
    }
  }, [name, size, color, stroke]);
  return <span ref={ref} style={{ display: 'inline-flex', lineHeight: 0 }} />;
}

function BoardOption({ board, selected, onSelect }) {
  return (
    <button onClick={() => onSelect(board.id)} style={{
      textAlign: 'left', cursor: 'pointer', position: 'relative',
      background: selected ? 'var(--paper-1)' : 'var(--paper-0)',
      border: `1.5px solid ${selected ? 'var(--clay-500)' : 'var(--hairline)'}`,
      borderRadius: 'var(--radius-lg)', padding: '18px 20px',
      boxShadow: selected ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transition: 'border-color .2s, box-shadow .2s', width: '100%', fontFamily: 'var(--font-sans)',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--clay-500)' }}>{board.name}</span>
            {board.popular && <ODS.Badge tone="olive">Popular</ODS.Badge>}
          </div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 6 }}>{board.people}</div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 15, color: 'var(--text-muted)' }}>{board.blurb}</div>
        </div>
        <div style={{ textAlign: 'right', flex: 'none' }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--ink-900)' }}>${board.price}</div>
          <div style={{
            width: 20, height: 20, borderRadius: '50%', marginLeft: 'auto', marginTop: 8,
            border: `1.5px solid ${selected ? 'var(--clay-500)' : 'var(--hairline)'}`,
            background: selected ? 'var(--clay-500)' : 'transparent',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {selected && <OB_Icon name="check" size={13} color="#fff" stroke={3} />}
          </div>
        </div>
      </div>
    </button>
  );
}

function AddonChip({ addon, on, onToggle }) {
  return (
    <button onClick={() => onToggle(addon.id)} style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10,
      cursor: 'pointer', fontFamily: 'var(--font-sans)',
      background: on ? 'var(--olive-500)' : 'var(--paper-0)',
      color: on ? 'var(--text-on-dark)' : 'var(--ink-700)',
      border: `1.5px solid ${on ? 'var(--olive-500)' : 'var(--hairline)'}`,
      borderRadius: 'var(--radius-pill)', padding: '9px 16px', fontSize: 13, fontWeight: 600,
      transition: 'background .18s, color .18s, border-color .18s',
    }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
        <OB_Icon name={on ? 'check' : 'plus'} size={14} color={on ? 'var(--gold-300)' : 'var(--gold-600)'} stroke={2.4} />
        {addon.name}
      </span>
      <span style={{ opacity: on ? 0.85 : 0.6, fontWeight: 700 }}>${addon.price}</span>
    </button>
  );
}

function OrderBuilder() {
  const [boardId, setBoardId] = React.useState('classic');
  const [addons, setAddons] = React.useState({});
  const [placed, setPlaced] = React.useState(false);

  const board = OB_BOARDS.find((b) => b.id === boardId);
  const chosenAddons = OB_ADDONS.filter((a) => addons[a.id]);
  const total = board.price + chosenAddons.reduce((s, a) => s + a.price, 0);
  const toggle = (id) => setAddons((p) => ({ ...p, [id]: !p[id] }));

  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  return (
    <div style={{ maxWidth: 1080, margin: '0 auto', padding: '32px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 30, alignItems: 'start' }}>
        {/* Left: choices */}
        <div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 14 }}>1 · Choose your board</div>
          <div style={{ display: 'grid', gap: 12, marginBottom: 30 }}>
            {OB_BOARDS.map((b) => <BoardOption key={b.id} board={b} selected={boardId === b.id} onSelect={setBoardId} />)}
          </div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 14 }}>2 · Add a little extra</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {OB_ADDONS.map((a) => <AddonChip key={a.id} addon={a} on={!!addons[a.id]} onToggle={toggle} />)}
          </div>
        </div>

        {/* Right: sticky summary */}
        <div style={{ position: 'sticky', top: 24 }}>
          <ODS.Card framed padding="26px">
            {placed ? (
              <div style={{ textAlign: 'center', padding: '14px 0' }}>
                <div style={{ fontFamily: 'var(--font-script)', fontSize: 40, color: 'var(--clay-500)', marginBottom: 6 }}>Thank you! <span style={{ color: 'var(--gold-500)' }}>&#9825;</span></div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, color: 'var(--text-muted)' }}>Your request for the <b>{board.name}</b> is in. We&rsquo;ll confirm within 24 hours.</p>
                <div style={{ marginTop: 14 }}><ODS.Button variant="outline" onClick={() => setPlaced(false)}>Edit Order</ODS.Button></div>
              </div>
            ) : (
              <React.Fragment>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-900)', marginBottom: 16 }}>Your Order</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-sans)', fontSize: 14, marginBottom: 10 }}>
                  <span style={{ color: 'var(--ink-700)' }}>{board.name}</span>
                  <span style={{ fontWeight: 700, color: 'var(--ink-900)' }}>${board.price}</span>
                </div>
                {chosenAddons.map((a) => (
                  <div key={a.id} style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-sans)', fontSize: 13, marginBottom: 8, color: 'var(--text-muted)' }}>
                    <span>+ {a.name}</span><span>${a.price}</span>
                  </div>
                ))}
                <div style={{ height: 1, background: 'var(--hairline)', margin: '14px 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Total</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 30, fontWeight: 700, color: 'var(--clay-500)' }}>${total}</span>
                </div>
                <ODS.Button variant="olive" size="lg" block onClick={() => setPlaced(true)}>Request Order</ODS.Button>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--text-faint)', textAlign: 'center', margin: '12px 0 0', letterSpacing: '0.04em' }}>24–48 hours notice appreciated · Made fresh in PEI ♡</p>
              </React.Fragment>
            )}
          </ODS.Card>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { CleoOrderBuilder: OrderBuilder });
