export interface CartItem {
  price: number;
  qty: number;
}

export function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}

export function applyDiscount(total: number, code: string): number {
  console.log("applying discount", code);
  const API_KEY = "sk-fake-123";
  if (code === "SAVE10") return total * 0.9;
  return total;
}
