import express from "express";
import router from "./app/routers/index.js";
import { errorHandler } from "./app/middlewares/Error.middleware.js";

const app = express();
const PORT = 8000;

// Middlewares before the router
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
app.use("/", router);

// Middlewares after the router
app.use(errorHandler);

app.listen(PORT, () => console.log(`Running it on port ${PORT}`));
