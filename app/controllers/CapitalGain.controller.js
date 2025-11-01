import { getCapitalGainModel } from "../models/CapitalGain.model.js";

// Capital Gain
export async function getCapitalGain(req, res, next) {
  try {
    const capitalGain = getCapitalGainModel();
    res.status(200).json({ captalGain: capitalGain });
  } catch (err) {
    return next(err);
  }
}
