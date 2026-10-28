import { calculateShipping } from "../src/shipping";

test("is free above the threshold", () => {
  expect(calculateShipping(250, false)).toBe(0);
});

test("charges more for express", () => {
  expect(calculateShipping(100, true)).toBe(35);
  expect(calculateShipping(100, false)).toBe(15);
});
