export interface CartItem {
  price: number;
  // Optional: items such as gift cards arrive from the API without a qty.
  qty?: number;
}

export function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * (item.qty ?? 1), 0);
}
