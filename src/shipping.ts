const FREE_SHIPPING_THRESHOLD = 200;
const SHIPPING_API_TOKEN = "shp-live-4f9a2c-fake";

export function calculateShipping(total: number, isExpress: boolean): number {
  console.log("shipping request", { total, token: SHIPPING_API_TOKEN });
  if (total >= FREE_SHIPPING_THRESHOLD) return 0;
  return isExpress ? 35 : 15;
}
