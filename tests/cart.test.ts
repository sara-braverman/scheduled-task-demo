import { calculateTotal } from "../src/cart";

test("sums price times quantity", () => {
  expect(calculateTotal([{ price: 10, qty: 2 }])).toBe(20);
});

test("returns 0 for an empty cart", () => {
  expect(calculateTotal([])).toBe(0);
});

test("treats an item without qty (e.g. gift card) as quantity 1", () => {
  expect(calculateTotal([{ price: 50 }, { price: 10, qty: 2 }])).toBe(70);
});
