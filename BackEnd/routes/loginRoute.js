import express from "express";
import { getAllUsers } from "../controllers/getUsers.controller.js";

const router = express.Router();

router.route('/login')
    .get(getAllUsers);

export { router as loginRouter };