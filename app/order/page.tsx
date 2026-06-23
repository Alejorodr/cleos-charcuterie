import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { OrderBuilder } from '@/components/OrderBuilder';

export const metadata: Metadata = { title: "Place an Order — Cleo's Charcuterie & Oysters Co." };

export default function OrderPage() {
  return (
    <>
      <PageHero kicker="Let&apos;s graze!" title="Place an Order" />
      <OrderBuilder />
    </>
  );
}
