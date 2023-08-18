import User from "../models/user.model.js";

export const getUsers = async () => {

    try {
        return await User.find({});
    }
    catch (e) {
        throw e;
    }

}

export const newUserService = async (newUser) => {

    try {
        const addUser = new User(newUser);
        return await addUser.save();
    }
    catch (e) {
        console.log("error saving user: ", e);
        throw e;
    }
}