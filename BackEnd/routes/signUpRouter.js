import express from "express";
import { newUser } from "../controllers/newUser.controller.js";

const router = express.Router();

router.route('/signup')
    .post(newUser);

export { router as signUpRouter };