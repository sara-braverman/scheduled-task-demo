export interface CartItem {
  price: number;
  // Some items (e.g. gift cards) arrive from the API without a qty; default to 1.
  qty?: number;
}

export function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * (item.qty ?? 1), 0);
}
