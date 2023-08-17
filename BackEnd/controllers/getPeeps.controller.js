import { getPeeps } from "../services/peeps.service.js";

export const allPeeps = async (req, res) => {

    try {
        const peeps = await getPeeps();
        res.json(peeps);
    }
    catch (error) {
        res.status(404).json({ error })
    }

}