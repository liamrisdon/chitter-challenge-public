import User from "../models/user.model.js";

export const getUsers = async () => {

    try {
        return await User.find({});
    }
    catch (e) {
        throw e;
    }

}