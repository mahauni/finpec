import express from "express";
import { postOperation } from "../controllers/Operations.controller.js";
import { getCapitalGain } from "../controllers/CapitalGain.controller.js";

const router = express.Router();

router.post("/operations", postOperation);
router.get("/capital-gain", getCapitalGain);

export default router;
