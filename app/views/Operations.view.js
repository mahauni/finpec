import { DB } from "../../db.js";

// Operation
// operation: "buy" | "sell"
// unit-cost: number
// quantity: number

export function createOperation(operation, unitCost, quantity) {
  DB.push({ operation: operation, "unit-cost": unitCost, quantity: quantity });

  return 1;
}

export function getOperations() {
  return DB;
}

// get the current available quantity of items
export function getAvailableQuantity() {
  let total = 0;
  for (let i = 0; i < DB.length; i++) {
    const { operation, quantity } = DB[i];

    if (operation === "buy") {
      total += quantity;
    }

    if (operation === "sell") {
      total -= quantity;
    }
  }

  return total;
}
