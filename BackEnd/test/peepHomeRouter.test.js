import Peep from "../models/peep.model.js";


import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import Server from "../server.js";

import mockData from "./testData/mockData.js";

chai.use(chaiHttp);

describe("peepHomeRouter tests", () => {

    const testServer = chai.request(Server).keepOpen();
    const mockPeepArray = mockData.testPeeps;

    beforeEach(async () => {
        try {
            await Peep.deleteMany();
            console.log("database cleared");
        }
        catch (error) {
            console.log("error clearing database: ", error.message);
            throw new Error();
        };

        try {
            await Peep.insertMany(mockPeepArray);
            console.log("database populated with testPeeps");
        }
        catch (error) {
            console.log("error populating: ", error.message);
            throw new Error();
        };

    })

    it('/GET peeps', async () => {

        const res = await testServer
            .get("/")
            .send();

        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        expect(res.body.length).to.equal(mockPeepArray.length);


    })

    it('/POST new peep', async () => {

        const res = await testServer
            .post("/")
            .send({
                "username": "testNewUsername",
                "name": "testNewName",
                "content": "this is a test new peep!",
                "dateCreated": "17/08/2023"
            })


        expect(res).to.have.status(201);
        expect(res.body).to.be.an("object");

    })


})