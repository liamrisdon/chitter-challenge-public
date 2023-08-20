import express from "express";
import User from "../models/user.model.js";
import { getAllUsers } from "../controllers/getUsers.controller.js";

const router = express.Router();

router.route('/')
    .post(async (req, res) => {
        try {
            console.log(req.body);
            const { username, password } = req.body;

            const user = await User.findOne({ username }).exec();

            if (user && (password === user.password)) {
                res.send({ message: `Login was successful`, user });
            } else {
                res.status(404).send({ message: `Details not found` });
            }
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: `An error occurred` });
        }
    });

export { router as loginRouter };