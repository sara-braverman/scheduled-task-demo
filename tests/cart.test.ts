import { calculateTotal } from "../src/cart";

test("sums price times quantity", () => {
  expect(calculateTotal([{ price: 10, qty: 2 }])).toBe(20);
});

test("returns 0 for an empty cart", () => {
  expect(calculateTotal([])).toBe(0);
});
