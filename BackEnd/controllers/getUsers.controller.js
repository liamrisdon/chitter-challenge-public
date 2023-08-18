import { getUsers } from "../services/users.service.js";

export const getAllUsers = async (req, res) => {

    try {
        const users = await getUsers();
        res.json(users);
    }
    catch (error) {
        res.status(404).json({ error });
    }
}
