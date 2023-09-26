import User from "../models/user.model.js";

export const loginUserService = async ({ username, password }) => {
    try {
        const user = await User.findOne({ username });
        if (user === null || user.password !== password) {
            throw new Error("Username and Password are incorrect")
        }
        return user
    }
    catch (e) {
        throw error;
    }
}

