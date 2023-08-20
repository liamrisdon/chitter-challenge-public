import * as api from "../asyncFunctions/peepAPICall";
// import { postNewPeep } from "../src/components/NewPeep"
import axios from 'axios';
import { describe, expect, vi, it } from "vitest";
import mockPeeps from "./mockPeeps.json";

vi.mock('axios');

describe("API getPeeps test", () => {

    it('should make the call with the correct address', async () => {
        axios.get.mockResolvedValueOnce({ data: { peeps: mockPeeps } });
        await api.getPeeps();
        expect(axios.get).toHaveBeenCalledWith(import.meta.env.VITE_CHITTERURL)
    });

    // it('should return the correct peeps', async () => {
    //     axios.get.mockResolvedValueOnce({ data: mockPeeps });
    //     console.log({ data: mockPeeps });
    //     const result = await api.getPeeps();
    //     expect(result.peeps).toBe(mockPeeps.peeps);
    // })

    // it('should return the correct peeps', async () => {
    //     axios.get.mockResolvedValueOnce({ data: mockPeeps });
    //     const result = await getPeeps();
    //     expect(result).toEqual({ peeps: mockPeeps.peeps, status: 200 }); 
    // });

    // describe("Peep post request test", () => {

    //     it('should make the correct call to post peep', async () => {
    //         axios.post.mockResolvedValueOnce({ data: { peeps: mockPeeps } });
    //         // console.log(mockPeeps.peeps[0]);
    //         await postNewPeep(mockPeeps.peeps[0]);
    //         expect(axios.post).toHaveBeenCalledWith(import.meta.env.VITE_CHITTERURL)
    //     })

    // })






})