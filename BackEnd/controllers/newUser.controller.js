import { newUserService } from "../services/users.service.js";

export const newUser = async (req, res) => {

    try {
        const newUser = await newUserService(req.body);
        res.status(201).json({ newUser });
    }
    catch (error) {
        console.log("error creating new User: ", error);
        res.status(400).send("cannot create new User");
    }
}