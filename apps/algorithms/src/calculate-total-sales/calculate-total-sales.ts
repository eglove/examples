export type Product = {
  name: string;
  price: number;
  quantity: number;
};

export function calculateTotalSales(
  products: Product[],
  taxRate: number,
): number {
  let sum = 0;

  for (const product of products) {
    sum += product.price * product.quantity;
  }

  return sum + sum * (taxRate / 100);
}
