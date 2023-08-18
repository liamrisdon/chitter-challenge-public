import express from "express";
import { getUsers } from "../controllers/getUsers.controller.js";

const router = express.Router();

router.route('/login')
    .get(getUsers);

export { router as loginRouter };