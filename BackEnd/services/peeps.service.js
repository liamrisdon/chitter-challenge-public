import Peep from "../models/peep.model.js";

export const getPeeps = async () => {

    try {
        return await Peep.find({});
    }
    catch (e) {
        throw e;
    }

}