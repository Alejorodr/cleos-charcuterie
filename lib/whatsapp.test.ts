import { buildWhatsAppUrl } from './whatsapp';

const CLASSIC: import('./whatsapp').BoardOption = {
  id: 'classic',
  name: 'Classic Board',
  people: '5–7',
  price: 75,
};

const ADDON_CHEESE: import('./whatsapp').AddonOption = {
  id: 'extra-cheese',
  name: 'Extra Cheese',
  price: 10,
};

describe('buildWhatsAppUrl', () => {
  it('builds a wa.me URL with phone number', () => {
    const url = buildWhatsAppUrl(CLASSIC, []);
    expect(url).toMatch(/^https:\/\/wa\.me\/17823778050\?text=/);
  });

  it('encodes board name and price in message', () => {
    const url = buildWhatsAppUrl(CLASSIC, []);
    const decoded = decodeURIComponent(url.split('?text=')[1]);
    expect(decoded).toContain('Classic Board');
    expect(decoded).toContain('$75');
  });

  it('includes addon names and prices', () => {
    const url = buildWhatsAppUrl(CLASSIC, [ADDON_CHEESE]);
    const decoded = decodeURIComponent(url.split('?text=')[1]);
    expect(decoded).toContain('Extra Cheese');
    expect(decoded).toContain('$10');
  });

  it('calculates total correctly', () => {
    const url = buildWhatsAppUrl(CLASSIC, [ADDON_CHEESE]);
    const decoded = decodeURIComponent(url.split('?text=')[1]);
    expect(decoded).toContain('$85');
  });

  it('returns no-addons total when addons array is empty', () => {
    const url = buildWhatsAppUrl(CLASSIC, []);
    const decoded = decodeURIComponent(url.split('?text=')[1]);
    expect(decoded).toContain('$75');
  });
});
