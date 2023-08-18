import Peep from "../models/peep.model.js";

export const getPeeps = async () => {

    try {
        return await Peep.find({});
    }
    catch (e) {
        throw e;
    }

}

export const newPeepService = async (newPeep) => {

    try {
        const addPeep = new Peep(newPeep);
        return await addPeep.save();
    }
    catch (e) {
        throw e;
    }

}