import { createOperationsModel } from "../models/Operations.model.js";

export async function postOperation(req, res, next) {
  try {
    createOperationsModel(req.body);
    res.status(201).json({ message: "Operações registradas com sucesso" });
  } catch (err) {
    return next(err);
  }
}
