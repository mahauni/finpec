import { createError } from "../utils/utils.js";
import {
  createOperation,
  getAvailableQuantity,
} from "../views/Operations.view.js";

export function createOperationsModel(body) {
  // Need a SQL Transaction for if something goes wrong
  const availableQuantity = getAvailableQuantity();
  for (let i = 0; i < body.length; i++) {
    const { operation, ["unit-cost"]: unitCost, quantity } = body[i];

    if (operation === "sell" && availableQuantity - quantity <= 0) {
      throw createError(400, "Operação inválida");
    }

    try {
      createOperation(operation, unitCost, quantity);
    } catch (err) {
      throw createError(401, "Could not create operation");
    }
  }
  return 1;
}
