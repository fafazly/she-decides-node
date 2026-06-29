import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const noticiasPath = path.join(__dirname, "../data/noticias.json");
const noticias = JSON.parse(fs.readFileSync(noticiasPath, "utf-8"));

const router = express.Router();

router.get("/", (req, res) => {
    res.json(noticias);
});

export default router;
