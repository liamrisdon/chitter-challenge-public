import express from "express";
import { newUser } from "../controllers/newUser.controller.js";

const router = express.Router();

router.route('/')
    .post(newUser);

export { router as signUpRouter };