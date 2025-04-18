import { middleware } from "#middlewares/middleware.js";
import cors from "cors";
import express from "express";

const app = express();

app.use(express.json());

// desabilita o fingerprinting do express
app.disable("x-powered-by");

// configuranção do CORS
const allowedOrigins = ["http://localhost:6621"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));

app.use((req, res) => {
  res.status(404).json({ message: "Rota não encontrada" });
});

app.get("/", middleware);

export default app;
