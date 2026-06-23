export interface BoardOption {
  id: string;
  name: string;
  people: string;
  price: number;
}

export interface AddonOption {
  id: string;
  name: string;
  price: number;
}

export function buildWhatsAppUrl(board: BoardOption, addons: AddonOption[]): string {
  const phone = '17823778050';
  const total = board.price + addons.reduce((sum, a) => sum + a.price, 0);

  const addonLines = addons.length > 0
    ? addons.map(a => `• ${a.name} — $${a.price}`).join('\n')
    : '• None';

  const message = [
    "Hello! I'd like to place an order:",
    '',
    `Board: ${board.name} (${board.people} people) — $${board.price}`,
    'Add-ons:',
    addonLines,
    '',
    `Total: $${total}`,
    '',
    'Thank you! ♡',
  ].join('\n');

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
