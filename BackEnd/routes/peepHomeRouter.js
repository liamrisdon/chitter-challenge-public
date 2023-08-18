import express from "express";
import { allPeeps } from "../controllers/getPeeps.controller.js";
import { newPeep } from "../controllers/newPeep.controller.js";

const router = express.Router();

router.route('/')
    .get(allPeeps)
    .post(newPeep);

export { router as peepHomeRouter };
