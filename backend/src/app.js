import express from "express";
import cors from "cors";
import carsRouter from "./routes/cars.js";

const app = express();

// CORS: the browser blocks the requests from :5173 to :3001
// unless the server says explicitly that it allows them
app.use(cors({ origin: process.env.CORS_ORIGIN || "http://localhost:5173" }));

// Turns the JSON body of the request into req.body
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/cars", carsRouter);

// Unknown route
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Central error handling (Express 5 sends the async errors here too)
app.use((err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  res
    .status(status)
    .json({ error: status === 500 ? "Internal server error" : err.message });
});

export default app;