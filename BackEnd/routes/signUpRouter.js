import express from "express";
import User from "../models/user.model.js";

// need to refine this - generic error message appears

const router = express.Router();

router.post('/', async (req, res) => {
    const { email, password, username, name } = req.body;

    try {

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'email', message: 'It seems you already have an account with us.' });
        }

        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ error: 'username', message: 'Sorry, this username already exists.' });
        }

        const newUser = new User({
            email,
            password,
            name,
            username,
        });

        await newUser.save();

        res.json({ message: 'Registration successful' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error registering user' });
    }
});

export { router as signUpRouter };