import { loginUserService } from "../services/loginUser.service.js";

export const loginUser = async (req, res) => {
    try {
        const user = await loginUserService(req.body);
        res.status(201).json(user);
    }
    catch (e) {
        res.status(400).send("Failed to login");
    }
}