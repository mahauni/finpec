import { getOperations } from "../views/Operations.view.js";

export function getCapitalGainModel() {
  let total = 0;
  let totalCost = 0;
  let buyTimes = 0;
  const operations = getOperations();

  for (let i = 0; i < operations.length; i++) {
    const { operation, ["unit-cost"]: unitCost, quantity } = operations[i];

    if (operation === "buy") {
      buyTimes += quantity;
      totalCost += unitCost * quantity;
    }

    if (operation === "sell") {
      const averageCost = totalCost / buyTimes;
      total += (unitCost - averageCost) * quantity;
    }
  }

  return total;
}
