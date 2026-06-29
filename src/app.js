import express from "express";
import dotenv from "dotenv";
import newsRoutes from "./routes/newsRoutes.js";
import newsletterRoutes from "./routes/newsletterRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.static("public")); // serve o frontend

app.use("/api/news", newsRoutes);
app.use("/api/newsletter", newsletterRoutes);

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));
