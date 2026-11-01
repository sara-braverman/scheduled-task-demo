export interface CartItem {
  price: number;
  qty?: number; // gift cards arrive from the API without a qty
}

export function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * (item.qty ?? 1), 0);
}
