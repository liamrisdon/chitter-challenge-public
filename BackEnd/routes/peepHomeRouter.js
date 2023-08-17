import express from "express";
import { allPeeps } from "../controllers/getPeeps.controller.js";
import { allUsers } from "../controllers/getUsers.controller.js";

const router = express.Router();

router.route('/')
    .get(allPeeps, allUsers)

export { router as peepHomeRouter };
