import express from "express";
import { subscribeUser } from "../services/beehivService.js";

const router = express.Router();

router.post("/subscribe", async (req, res) => {
    const { email } = req.body;
    const result = await subscribeUser(email);
    res.json(result);
});

export default router;
