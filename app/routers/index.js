import express from "express";
import { postOperation } from "../controllers/Operations.controller.js";
import { getCapitalGain } from "../controllers/CapitalGain.controller.js";
import { healthcheck } from "../controllers/HealthCheck.controller.js";

const router = express.Router();

// Operations
router.post("/operations", postOperation);

// Capital Gains
router.get("/capital-gain", getCapitalGain);

// Health Check
router.get("/healthcheck", healthcheck);

export default router;
