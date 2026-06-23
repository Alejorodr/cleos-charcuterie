/* @ds-bundle: {"format":3,"namespace":"CleoSDesignSystem_33cea7","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"PriceTag","sourcePath":"components/buttons/PriceTag.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Divider","sourcePath":"components/display/Divider.jsx"},{"name":"IconCircle","sourcePath":"components/display/IconCircle.jsx"},{"name":"SectionHeading","sourcePath":"components/display/SectionHeading.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"ad0e847fc6b4","components/buttons/PriceTag.jsx":"80e72973a092","components/display/Badge.jsx":"de65c2461415","components/display/Card.jsx":"8c62d6fef641","components/display/Divider.jsx":"4728ed27b5f3","components/display/IconCircle.jsx":"63833bafa23a","components/display/SectionHeading.jsx":"da6b1a19b9bc","components/forms/Input.jsx":"cd17a6948c88","components/forms/Select.jsx":"3cf0de1477bc","ui_kits/order-menu/builder.jsx":"8374f3a30427","ui_kits/website/parts.jsx":"0febf7dff418","ui_kits/website/sections.jsx":"8539c1ee5e0b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CleoSDesignSystem_33cea7 = window.CleoSDesignSystem_33cea7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cleo's primary action button.
 * Variants echo the brand: `olive` (the price-chip look), `terracotta`
 * (rust wordmark color), `gold`, `outline`, and `ghost`.
 */
function Button({
  children,
  variant = 'olive',
  size = 'md',
  block = false,
  disabled = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 18px',
      fontSize: '11px',
      letterSpacing: '0.14em'
    },
    md: {
      padding: '12px 28px',
      fontSize: '12px',
      letterSpacing: '0.16em'
    },
    lg: {
      padding: '16px 40px',
      fontSize: '13px',
      letterSpacing: '0.18em'
    }
  };
  const variants = {
    olive: {
      background: 'var(--olive-500)',
      color: 'var(--text-on-dark)',
      border: '1.5px solid var(--olive-500)'
    },
    terracotta: {
      background: 'var(--clay-500)',
      color: '#fff',
      border: '1.5px solid var(--clay-500)'
    },
    gold: {
      background: 'var(--gold-500)',
      color: '#fff',
      border: '1.5px solid var(--gold-500)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--clay-500)',
      border: '1.5px solid var(--clay-500)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-700)',
      border: '1.5px solid transparent'
    }
  };
  const base = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    display: block ? 'flex' : 'inline-flex',
    width: block ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'transform var(--dur-fast) var(--ease-soft), filter var(--dur-base) var(--ease-soft), background var(--dur-base) var(--ease-soft)',
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
  };
  const onUp = e => {
    e.currentTarget.style.transform = 'scale(1)';
  };
  const onEnter = e => {
    if (!disabled) e.currentTarget.style.filter = 'brightness(1.08)';
  };
  const onLeave = e => {
    e.currentTarget.style.filter = 'none';
    e.currentTarget.style.transform = 'scale(1)';
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseDown: onDown,
    onMouseUp: onUp,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/PriceTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The signature olive price chip from the menu artwork — a rounded
 * olive pill with a large price. Also supports a `gold` and `outline`
 * treatment for variety.
 */
function PriceTag({
  price,
  label,
  variant = 'olive',
  size = 'md',
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '6px 18px',
      fontSize: '15px'
    },
    md: {
      padding: '10px 30px',
      fontSize: '20px'
    },
    lg: {
      padding: '14px 42px',
      fontSize: '26px'
    }
  };
  const variants = {
    olive: {
      background: 'var(--olive-500)',
      color: 'var(--text-on-dark)',
      border: 'none'
    },
    gold: {
      background: 'var(--gold-500)',
      color: '#fff',
      border: 'none'
    },
    outline: {
      background: 'transparent',
      color: 'var(--clay-500)',
      border: '1.5px solid var(--gold-400)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      letterSpacing: '0.02em',
      borderRadius: 'var(--radius-sm)',
      boxShadow: variant === 'outline' ? 'none' : 'var(--shadow-sm)',
      ...sizes[size],
      ...variants[variant]
    }
  }, price), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '10px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small wide-tracked caps badge — e.g. "LOCALLY SOURCED", "MADE FRESH",
 * "MOST POPULAR". Tones map to the brand palette.
 */
function Badge({
  children,
  tone = 'gold',
  style,
  ...rest
}) {
  const tones = {
    gold: {
      background: 'var(--gold-100)',
      color: 'var(--gold-700)',
      border: '1px solid var(--gold-300)'
    },
    terracotta: {
      background: 'var(--clay-100)',
      color: 'var(--clay-600)',
      border: '1px solid var(--clay-300)'
    },
    olive: {
      background: 'var(--olive-500)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--olive-500)'
    },
    plain: {
      background: 'var(--paper-3)',
      color: 'var(--ink-700)',
      border: '1px solid var(--hairline)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-sans)',
      fontSize: '10px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Paper surface card with a soft warm shadow. Optional gold hairline
 * frame (the logo's double-rule feel) via `framed`.
 */
function Card({
  children,
  framed = false,
  padding = 'var(--space-6)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--bg-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      border: framed ? '1.5px solid var(--gold-400)' : '1px solid var(--hairline)',
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Gold hairline divider with an optional centered heart or dot — the
 * brand's signature separator.
 */
function Divider({
  ornament = 'heart',
  color = 'var(--gold-500)',
  style,
  ...rest
}) {
  const line = {
    height: '1px',
    flex: 1,
    background: 'linear-gradient(90deg, transparent, var(--gold-400) 15%, var(--gold-400) 85%, transparent)'
  };
  const ornaments = {
    heart: /*#__PURE__*/React.createElement("span", {
      style: {
        color,
        fontSize: '15px',
        lineHeight: 1
      }
    }, "\u2661"),
    dot: /*#__PURE__*/React.createElement("span", {
      style: {
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        background: 'var(--clay-500)'
      }
    }),
    none: null
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: line
  }), ornaments[ornament], /*#__PURE__*/React.createElement("span", {
    style: line
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Divider.jsx", error: String((e && e.message) || e) }); }

// components/display/IconCircle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Gold-ringed circular icon badge — the flyer's "CHARCUTERIE BOARDS",
 * "SEAFOOD PLATTERS" feature circles. Pass an emoji-free glyph, an
 * <img>, or any node as children.
 */
function IconCircle({
  children,
  size = 96,
  ringColor = 'var(--gold-400)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: '50%',
      border: `1.5px solid ${ringColor}`,
      background: 'var(--paper-1)',
      color: 'var(--ink-700)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconCircle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/IconCircle.jsx", error: String((e && e.message) || e) }); }

// components/display/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The brand's section header: an optional script kicker above a
 * Cinzel caps title, centered, with the gold rule beneath. Mirrors
 * the "Simple. Beautiful." / "CHARCUTERIE BOARDS" stacking.
 */
function SectionHeading({
  kicker,
  title,
  align = 'center',
  rule = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), kicker && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '30px',
      color: 'var(--clay-500)',
      lineHeight: 1.1,
      marginBottom: '4px'
    }
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '28px',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      margin: 0
    }
  }, title), rule && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      color: 'var(--gold-500)',
      marginTop: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: '1px',
      width: '64px',
      background: 'var(--gold-400)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px'
    }
  }, "\u2661"), /*#__PURE__*/React.createElement("span", {
    style: {
      height: '1px',
      width: '64px',
      background: 'var(--gold-400)'
    }
  })));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with a wide-tracked caps label, used in order forms.
 */
function Input({
  label,
  hint,
  id,
  style,
  ...rest
}) {
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '10px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      color: 'var(--ink-900)',
      background: 'var(--paper-0)',
      border: `1.5px solid ${focus ? 'var(--gold-400)' : 'var(--hairline)'}`,
      borderRadius: 'var(--radius-sm)',
      padding: '11px 14px',
      outline: 'none',
      boxShadow: focus ? 'var(--ring)' : 'none',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)'
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '11px',
      color: 'var(--text-faint)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select dropdown styled to match the order form inputs.
 * Pass `options` as an array of strings or {value,label}.
 */
function Select({
  label,
  options = [],
  id,
  style,
  ...rest
}) {
  const selId = id || (label ? `sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [focus, setFocus] = React.useState(false);
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '10px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      color: 'var(--ink-900)',
      background: 'var(--paper-0)',
      border: `1.5px solid ${focus ? 'var(--gold-400)' : 'var(--hairline)'}`,
      borderRadius: 'var(--radius-sm)',
      padding: '11px 38px 11px 14px',
      outline: 'none',
      cursor: 'pointer',
      boxShadow: focus ? 'var(--ring)' : 'none',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)'
    }
  }, rest), norm.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '14px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--gold-600)',
      fontSize: '11px'
    }
  }, "\u25BC")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/order-menu/builder.jsx
try { (() => {
// Cleo's — interactive Order Builder. Pick a board, add extras, see a live total.
const ODS = window.CleoSDesignSystem_33cea7;
const OB_BOARDS = [{
  id: 'mini',
  name: 'Mini Board',
  people: '2–4 people',
  price: 40,
  blurb: 'Date night, picnics or a little treat.'
}, {
  id: 'classic',
  name: 'Classic Board',
  people: '5–7 people',
  price: 75,
  blurb: 'Our most popular size for any occasion.',
  popular: true
}, {
  id: 'large',
  name: 'Large Board',
  people: '8–12 people',
  price: 110,
  blurb: 'Family dinners, cottage nights & parties.'
}, {
  id: 'party',
  name: 'Party Board',
  people: '15–20 people',
  price: 175,
  blurb: 'Birthdays, showers & celebrations.'
}];
const OB_ADDONS = [{
  id: 'crackers',
  name: 'Extra Crackers',
  price: 6
}, {
  id: 'cheese',
  name: 'Extra Cheese',
  price: 10
}, {
  id: 'meats',
  name: 'Extra Meats',
  price: 12
}, {
  id: 'fruit',
  name: 'Extra Fruit',
  price: 8
}, {
  id: 'honey',
  name: 'Honey / Jam Jar',
  price: 6
}, {
  id: 'gf',
  name: 'Gluten-Free Crackers',
  price: 8
}, {
  id: 'dessert',
  name: 'Dessert Add-On',
  price: 15
}];
function OB_Icon({
  name,
  size = 18,
  color = 'currentColor',
  stroke = 1.4
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          stroke: color,
          'stroke-width': stroke
        },
        nameAttr: 'data-lucide'
      });
    }
  }, [name, size, color, stroke]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      lineHeight: 0
    }
  });
}
function BoardOption({
  board,
  selected,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onSelect(board.id),
    style: {
      textAlign: 'left',
      cursor: 'pointer',
      position: 'relative',
      background: selected ? 'var(--paper-1)' : 'var(--paper-0)',
      border: `1.5px solid ${selected ? 'var(--clay-500)' : 'var(--hairline)'}`,
      borderRadius: 'var(--radius-lg)',
      padding: '18px 20px',
      boxShadow: selected ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transition: 'border-color .2s, box-shadow .2s',
      width: '100%',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--clay-500)'
    }
  }, board.name), board.popular && /*#__PURE__*/React.createElement(ODS.Badge, {
    tone: "olive"
  }, "Popular")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 6
    }
  }, board.people), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, board.blurb)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, "$", board.price), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      marginLeft: 'auto',
      marginTop: 8,
      border: `1.5px solid ${selected ? 'var(--clay-500)' : 'var(--hairline)'}`,
      background: selected ? 'var(--clay-500)' : 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, selected && /*#__PURE__*/React.createElement(OB_Icon, {
    name: "check",
    size: 13,
    color: "#fff",
    stroke: 3
  })))));
}
function AddonChip({
  addon,
  on,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onToggle(addon.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      background: on ? 'var(--olive-500)' : 'var(--paper-0)',
      color: on ? 'var(--text-on-dark)' : 'var(--ink-700)',
      border: `1.5px solid ${on ? 'var(--olive-500)' : 'var(--hairline)'}`,
      borderRadius: 'var(--radius-pill)',
      padding: '9px 16px',
      fontSize: 13,
      fontWeight: 600,
      transition: 'background .18s, color .18s, border-color .18s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(OB_Icon, {
    name: on ? 'check' : 'plus',
    size: 14,
    color: on ? 'var(--gold-300)' : 'var(--gold-600)',
    stroke: 2.4
  }), addon.name), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: on ? 0.85 : 0.6,
      fontWeight: 700
    }
  }, "$", addon.price));
}
function OrderBuilder() {
  const [boardId, setBoardId] = React.useState('classic');
  const [addons, setAddons] = React.useState({});
  const [placed, setPlaced] = React.useState(false);
  const board = OB_BOARDS.find(b => b.id === boardId);
  const chosenAddons = OB_ADDONS.filter(a => addons[a.id]);
  const total = board.price + chosenAddons.reduce((s, a) => s + a.price, 0);
  const toggle = id => setAddons(p => ({
    ...p,
    [id]: !p[id]
  }));
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement(ODS.SectionHeading, {
    kicker: "Build your board",
    title: "Place an Order",
    align: "left",
    rule: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 360px',
      gap: 30,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 14
    }
  }, "1 \xB7 Choose your board"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12,
      marginBottom: 30
    }
  }, OB_BOARDS.map(b => /*#__PURE__*/React.createElement(BoardOption, {
    key: b.id,
    board: b,
    selected: boardId === b.id,
    onSelect: setBoardId
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 14
    }
  }, "2 \xB7 Add a little extra"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, OB_ADDONS.map(a => /*#__PURE__*/React.createElement(AddonChip, {
    key: a.id,
    addon: a,
    on: !!addons[a.id],
    onToggle: toggle
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 24
    }
  }, /*#__PURE__*/React.createElement(ODS.Card, {
    framed: true,
    padding: "26px"
  }, placed ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '14px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 40,
      color: 'var(--clay-500)',
      marginBottom: 6
    }
  }, "Thank you! ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-500)'
    }
  }, "\u2661")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--text-muted)'
    }
  }, "Your request for the ", /*#__PURE__*/React.createElement("b", null, board.name), " is in. We\u2019ll confirm within 24 hours."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(ODS.Button, {
    variant: "outline",
    onClick: () => setPlaced(false)
  }, "Edit Order"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      marginBottom: 16
    }
  }, "Your Order"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-700)'
    }
  }, board.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, "$", board.price)), chosenAddons.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      marginBottom: 8,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "+ ", a.name), /*#__PURE__*/React.createElement("span", null, "$", a.price))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--hairline)',
      margin: '14px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 30,
      fontWeight: 700,
      color: 'var(--clay-500)'
    }
  }, "$", total)), /*#__PURE__*/React.createElement(ODS.Button, {
    variant: "olive",
    size: "lg",
    block: true,
    onClick: () => setPlaced(true)
  }, "Request Order"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'var(--text-faint)',
      textAlign: 'center',
      margin: '12px 0 0',
      letterSpacing: '0.04em'
    }
  }, "24\u201348 hours notice appreciated \xB7 Made fresh in PEI \u2661"))))));
}
Object.assign(window, {
  CleoOrderBuilder: OrderBuilder
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/order-menu/builder.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts.jsx
try { (() => {
// Cleo's marketing site — chrome (header + footer) and small helpers.
// Components come from the compiled DS bundle on window.<Namespace>.
const DS = window.CleoSDesignSystem_33cea7;
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  stroke = 1.4
}) {
  // Renders a Lucide icon as inline SVG via the global lucide registry.
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          stroke: color,
          'stroke-width': stroke
        },
        nameAttr: 'data-lucide'
      });
    }
  }, [name, size, color, stroke]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      lineHeight: 0
    }
  });
}
function Wordmark({
  size = 26,
  stacked = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: stacked ? 'center' : 'flex-start',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      color: 'var(--clay-500)',
      letterSpacing: '0.28em',
      fontSize: size,
      paddingLeft: '0.28em'
    }
  }, "CLEO\u2019S"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      color: 'var(--gold-600)',
      letterSpacing: '0.22em',
      fontSize: size * 0.34,
      marginTop: size * 0.18,
      paddingLeft: '0.22em'
    }
  }, "CHARCUTERIE & OYSTERS CO."));
}
function Header({
  onOrder,
  active = 'home'
}) {
  const links = [['Boards', 'boards'], ['Seafood', 'seafood'], ['Grazing', 'grazing'], ['About', 'about']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(246,240,229,0.86)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '16px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 22
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }
  }, links.map(([label]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-700)',
      textDecoration: 'none'
    }
  }, label)), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "olive",
    size: "sm",
    onClick: onOrder
  }, "Order Now"))));
}
function Footer() {
  const contact = [['instagram', '@cleos_charcuterie'], ['mail', 'danibr-11@hotmail.com'], ['phone', '782-377-8050'], ['map-pin', 'Prince Edward Island']];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--olive-500)',
      color: 'var(--text-on-dark)',
      padding: '56px 32px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 40,
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 38,
      color: 'var(--gold-300)',
      marginBottom: 8
    }
  }, "Let\u2019s graze! ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-400)'
    }
  }, "\u2661")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      lineHeight: 1.7,
      color: 'rgba(244,236,221,0.82)',
      margin: 0
    }
  }, "Beautiful charcuterie boards, seafood platters & grazing tables. Locally sourced and made with love in PEI.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14
    }
  }, contact.map(([icon, text]) => /*#__PURE__*/React.createElement("div", {
    key: text,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'rgba(244,236,221,0.92)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    color: "var(--gold-300)"
  }), text)))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '36px auto 0',
      paddingTop: 22,
      borderTop: '1px solid rgba(244,236,221,0.18)',
      textAlign: 'center',
      fontFamily: 'var(--font-script)',
      fontSize: 22,
      color: 'var(--gold-300)'
    }
  }, "Thank you for supporting a small business in PEI! ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-400)'
    }
  }, "\u2661")));
}
Object.assign(window, {
  CleoIcon: Icon,
  CleoWordmark: Wordmark,
  CleoHeader: Header,
  CleoFooter: Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
// Cleo's marketing site — page sections. Compose DS components + chrome helpers.
const DSx = window.CleoSDesignSystem_33cea7;
const CONTAINER = {
  maxWidth: 1180,
  margin: '0 auto',
  padding: '0 32px'
};
function Hero({
  onOrder,
  onMenu
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--wash-paper)',
      padding: '64px 32px 76px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/food-cluster.png",
    alt: "Engraved charcuterie & oysters",
    style: {
      width: '76%',
      maxWidth: 540,
      height: 'auto',
      margin: '0 auto 8px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--gold-400)',
      width: '70%',
      margin: '0 auto 26px',
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      color: 'var(--clay-500)',
      letterSpacing: '0.3em',
      fontSize: 64,
      margin: '0 0 6px',
      paddingLeft: '0.3em'
    }
  }, "CLEO\u2019S"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      color: 'var(--gold-600)',
      letterSpacing: '0.24em',
      fontSize: 15,
      marginBottom: 26
    }
  }, "CHARCUTERIE & OYSTERS CO."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 46,
      color: 'var(--ink-700)',
      lineHeight: 1.15,
      margin: '0 0 30px'
    }
  }, "Simple. Beautiful. Made to Share. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-500)'
    }
  }, "\u2661")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(DSx.Button, {
    variant: "olive",
    size: "lg",
    onClick: onOrder
  }, "Order a Board"), /*#__PURE__*/React.createElement(DSx.Button, {
    variant: "outline",
    size: "lg",
    onClick: onMenu
  }, "View the Menu"))));
}
function Features() {
  const items = [['utensils-crossed', 'Charcuterie Boards'], ['shell', 'Seafood Platters'], ['grape', 'Grazing Tables'], ['gift', 'Perfect for Any Occasion']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '54px 32px',
      background: 'var(--paper-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      gap: 24
    }
  }, items.map(([icon, label]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      textAlign: 'center',
      width: 200
    }
  }, /*#__PURE__*/React.createElement(DSx.IconCircle, {
    size: 104,
    style: {
      margin: '0 auto 14px'
    }
  }, /*#__PURE__*/React.createElement(window.CleoIcon, {
    name: icon,
    size: 42,
    color: "var(--clay-500)",
    stroke: 1.25
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)'
    }
  }, label)))));
}
const BOARDS = [{
  name: 'Mini Board',
  people: '2–4 people',
  price: '$40',
  popular: false,
  items: ['2 cheeses', '2 meats', 'Crackers', 'Fruit', 'Olives & pickles', 'Nuts', 'Sweet touch']
}, {
  name: 'Classic Board',
  people: '5–7 people',
  price: '$75',
  popular: true,
  items: ['3 cheeses', '3 meats', 'Crackers & breadsticks', 'Seasonal fruit', 'Olives & pickles', 'Jam or honey', 'Nuts', 'Chocolates']
}, {
  name: 'Large Board',
  people: '8–12 people',
  price: '$110',
  popular: false,
  items: ['4 cheeses', '4 meats', 'Crackers & pretzels', 'Fruit variety', 'Nuts & dips', 'Olives & pickles', 'Chocolates']
}, {
  name: 'Party Board',
  people: '15–20 people',
  price: '$175',
  popular: false,
  items: ['4+ cheeses', '4+ meats', 'Crackers & pretzels', 'Fruit variety', 'Nuts & dips', 'Olives & pickles', 'Chocolates']
}];
function Boards({
  onOrder
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "boards",
    style: {
      padding: '70px 32px',
      background: 'var(--paper-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: CONTAINER
  }, /*#__PURE__*/React.createElement(DSx.SectionHeading, {
    kicker: "Made to share",
    title: "Charcuterie Boards",
    style: {
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-serif)',
      fontSize: 19,
      color: 'var(--text-muted)',
      maxWidth: 560,
      margin: '0 auto 44px'
    }
  }, "A mix of cheeses, meats, seasonal fruit, crackers, nuts, olives, pickles, spreads & a little something sweet."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 22
    }
  }, BOARDS.map(b => /*#__PURE__*/React.createElement(DSx.Card, {
    key: b.name,
    framed: b.popular,
    padding: "0",
    style: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      position: 'relative'
    }
  }, b.popular && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      right: 14
    }
  }, /*#__PURE__*/React.createElement(DSx.Badge, {
    tone: "olive"
  }, "Most Popular")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 22px 22px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--clay-500)',
      margin: '0 0 4px'
    }
  }, b.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 16
    }
  }, b.people), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '0 0 20px',
      display: 'grid',
      gap: 7,
      flex: 1
    }
  }, b.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-body)',
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: 'var(--gold-500)',
      flex: 'none'
    }
  }), it))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(DSx.PriceTag, {
    price: b.price
  }), /*#__PURE__*/React.createElement(DSx.Button, {
    variant: "ghost",
    size: "sm",
    onClick: onOrder,
    style: {
      color: 'var(--clay-500)'
    }
  }, "Order \u2192"))))))));
}
function Seafood() {
  const sizes = [['Small', '2–3 people', '$50'], ['Medium', '4–6 people', '$80'], ['Large', '7–10 people', '$115']];
  const items = [['Smoked Oysters', 'Rich, smoky & full of flavor.'], ['Shrimp', 'Juicy, fresh & perfectly cooked.'], ['Ceviche', 'Zesty, refreshing & made fresh.'], ['Smoked Mussels', 'Delicate, smoky & irresistible.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "seafood",
    style: {
      padding: '70px 32px',
      background: 'var(--paper-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DSx.SectionHeading, {
    kicker: "Smoked. Fresh. Flavorful.",
    title: "Seafood Platter",
    align: "left",
    rule: false,
    style: {
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: 'var(--text-muted)',
      margin: '0 0 26px'
    }
  }, "Served with crackers, lemon & sauce. Smoked oysters, shrimp, ceviche & smoked mussels."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14
    }
  }, sizes.map(([size, people, price]) => /*#__PURE__*/React.createElement("div", {
    key: size,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      paddingBottom: 14,
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement(window.CleoIcon, {
    name: "anchor",
    size: 22,
    color: "var(--clay-500)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)'
    }
  }, size), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)',
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }
  }, people)), /*#__PURE__*/React.createElement(DSx.PriceTag, {
    price: price,
    size: "sm"
  }))))), /*#__PURE__*/React.createElement(DSx.Card, {
    padding: "32px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 18
    }
  }, items.map(([name, desc]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(DSx.IconCircle, {
    size: 52,
    style: {
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(window.CleoIcon, {
    name: "fish",
    size: 22,
    color: "var(--gold-600)",
    stroke: 1.25
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--text-muted)'
    }
  }, desc))))))));
}
function Values() {
  const vals = [['leaf', 'Locally Sourced', 'We shop local & support PEI producers.'], ['heart', 'Made Fresh', 'Every board is made just for you.'], ['recycle', 'Sustainable', 'Eco-friendly packaging whenever possible.'], ['calendar-heart', 'Order Ahead', '24–48 hours notice appreciated.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      padding: '64px 32px',
      background: 'var(--paper-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: CONTAINER
  }, /*#__PURE__*/React.createElement(DSx.SectionHeading, {
    title: "Good to Know",
    style: {
      marginBottom: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 22
    }
  }, vals.map(([icon, title, desc]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(DSx.IconCircle, {
    size: 72,
    style: {
      margin: '0 auto 14px'
    }
  }, /*#__PURE__*/React.createElement(window.CleoIcon, {
    name: icon,
    size: 28,
    color: "var(--clay-500)",
    stroke: 1.3
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      marginBottom: 6
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--text-muted)',
      margin: 0,
      lineHeight: 1.45
    }
  }, desc)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--olive-500)',
      color: 'var(--text-on-dark)',
      fontFamily: 'var(--font-script)',
      fontSize: 30,
      padding: '16px 52px',
      borderRadius: '120px 90px 110px 80px / 40px 50px 38px 46px',
      boxShadow: 'var(--shadow-md)'
    }
  }, "Locally sourced. Made with love in PEI. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-400)'
    }
  }, "\u2661")))));
}
Object.assign(window, {
  CleoHero: Hero,
  CleoFeatures: Features,
  CleoBoards: Boards,
  CleoSeafood: Seafood,
  CleoValues: Values
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.IconCircle = __ds_scope.IconCircle;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
