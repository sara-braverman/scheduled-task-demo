export interface CartItem {
  price: number;
  qty: number;
}

export function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}
