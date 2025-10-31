import express from "express";
import router from "./app/routers/index.js";
import { errorHandler } from "./app/middlewares/Error.middleware.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
app.use("/", router);

app.use(errorHandler);

app.listen(1234, () => console.log("Running it on port 1234"));
