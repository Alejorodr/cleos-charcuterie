'use client';
import { useState } from 'react';
import { Check } from 'lucide-react';
import { Card } from './Card';
import { PriceTag } from './PriceTag';
import { Button } from './Button';
import { Divider } from './Divider';
import { buildWhatsAppUrl, type BoardOption, type AddonOption } from '@/lib/whatsapp';
import styles from './OrderBuilder.module.css';

const BOARDS: BoardOption[] = [
  { id: 'mini', name: 'Mini Board', people: '2–4', price: 40 },
  { id: 'classic', name: 'Classic Board', people: '5–7', price: 75 },
  { id: 'large', name: 'Large Board', people: '8–12', price: 110 },
  { id: 'party', name: 'Party Board', people: '15–20', price: 175 },
];

const ADDONS: AddonOption[] = [
  { id: 'crackers', name: 'Extra Crackers', price: 6 },
  { id: 'cheese', name: 'Extra Cheese', price: 10 },
  { id: 'meats', name: 'Extra Meats', price: 12 },
  { id: 'fruit', name: 'Extra Fruit', price: 8 },
  { id: 'honey', name: 'Honey / Jam Jar', price: 6 },
  { id: 'gf-crackers', name: 'Gluten-Free Crackers', price: 8 },
  { id: 'dessert', name: 'Dessert Add-On', price: 15 },
];

export function OrderBuilder() {
  const [boardId, setBoardId] = useState<string>('classic');
  const [addonIds, setAddonIds] = useState<Set<string>>(new Set());
  const [placed, setPlaced] = useState(false);

  const selectedBoard = BOARDS.find(b => b.id === boardId)!;
  const selectedAddons = ADDONS.filter(a => addonIds.has(a.id));
  const total = selectedBoard.price + selectedAddons.reduce((s, a) => s + a.price, 0);

  function toggleAddon(id: string) {
    setAddonIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function handleOrder() {
    const url = buildWhatsAppUrl(selectedBoard, selectedAddons);
    window.open(url, '_blank', 'noopener,noreferrer');
    setPlaced(true);
  }

  return (
    <div className={styles.builder}>
      <div className={styles.left}>
        <div className={styles.step}>
          <p className={styles.stepLabel}><span className={styles.stepNum}>1</span> Choose your board</p>
          <div className={styles.boardList}>
            {BOARDS.map(board => (
              <button
                key={board.id}
                className={[styles.boardOption, boardId === board.id ? styles.selected : ''].filter(Boolean).join(' ')}
                onClick={() => setBoardId(board.id)}
                type="button"
                aria-pressed={boardId === board.id}
              >
                <span className={styles.boardCheck}>
                  {boardId === board.id && <Check size={14} strokeWidth={2.5} />}
                </span>
                <span className={styles.boardInfo}>
                  <span className={styles.boardOptionName}>{board.name}</span>
                  <span className={styles.boardOptionPeople}>{board.people} people</span>
                </span>
                <PriceTag>{`$${board.price}`}</PriceTag>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.step}>
          <p className={styles.stepLabel}><span className={styles.stepNum}>2</span> Add a little extra</p>
          <div className={styles.addonList}>
            {ADDONS.map(addon => (
              <button
                key={addon.id}
                className={[styles.addonChip, addonIds.has(addon.id) ? styles.addonOn : ''].filter(Boolean).join(' ')}
                onClick={() => toggleAddon(addon.id)}
                type="button"
                aria-pressed={addonIds.has(addon.id)}
              >
                {addon.name} +${addon.price}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.stickyCard}>
          {placed ? (
            <Card framed padding="var(--space-2xl)">
              <p className={styles.thankYou}>Thank you! &#9825;</p>
              <p className={styles.thankYouSub}>We&apos;ll confirm your order on WhatsApp shortly.</p>
              <Button variant="ghost" size="sm" onClick={() => setPlaced(false)}>Edit Order</Button>
            </Card>
          ) : (
            <Card framed padding="var(--space-xl)">
              <h3 className={styles.summaryTitle}>Your Order</h3>
              <div className={styles.summaryBoard}>
                <span className={styles.summaryItem}>{selectedBoard.name}</span>
                <span className={styles.summaryPrice}>${selectedBoard.price}</span>
              </div>
              {selectedAddons.length > 0 && (
                <div className={styles.summaryAddons}>
                  {selectedAddons.map(a => (
                    <div key={a.id} className={styles.summaryAddon}>
                      <span className={styles.summaryItem}>{a.name}</span>
                      <span className={styles.summaryPrice}>${a.price}</span>
                    </div>
                  ))}
                </div>
              )}
              <Divider />
              <div className={styles.summaryTotal}>
                <span className={styles.totalLabel}>TOTAL</span>
                <span className={styles.totalAmount}>${total}</span>
              </div>
              <Button variant="olive" size="lg" block onClick={handleOrder}>
                Send Order on WhatsApp
              </Button>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
