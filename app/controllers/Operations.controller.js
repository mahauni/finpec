import { createOperationsModel } from "../models/Operations.model.js";

// Operations
export async function postOperation(req, res, next) {
  const validated = validateBody(req.body);

  if (validated !== "") {
    console.error(`Campos no body foram incorretos: ${validated}`);
    res.status(400).json({ message: validated });
    return;
  }

  try {
    createOperationsModel(req.body);
    res.status(201).json({ message: "Operações registradas com sucesso" });
  } catch (err) {
    return next(err);
  }
}

// Operations Validation
function validateBody(body) {
  if (!Array.isArray(body)) {
    return "O request deve ser um array";
  }

  if (body.length < 1) {
    return "Deve ter no mínimo uma operação";
  }

  for (let i = 0; i < body.length; i++) {
    const { operation, ["unit-cost"]: unitCost, quantity } = body[i];

    if (!(operation === "buy" || operation === "sell")) {
      return "A operação deve ser buy ou sell";
    }

    if (typeof unitCost !== "number" || unitCost < 0) {
      return "O unit cost deve ser um número positivo";
    }

    if (typeof quantity !== "number" || quantity < 0) {
      return "A quantity deve ser um número positivo";
    }
  }

  return "";
}
