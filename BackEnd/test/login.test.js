import User from "../models/user.model.js"

import chai from "chai";
import chaiHttp from "chai-http";
import { expect } from "chai";

import Server from "../server.js";
import mockData from "./testData/mockData.js";

chai.use(chaiHttp);

describe('login tests', () => {

    const testServer = chai.request(Server).keepOpen();
    const mockUser = mockData.testUser;

    beforeEach(async () => {
        try {
            await User.deleteMany();
            console.log("database cleared");
        }
        catch (error) {
            console.log("error clearing database: ", error.message);
            throw new Error();
        }

        try {
            await User.insertMany(mockUser);
            console.log("database populated with testUser");
        }
        catch (error) {
            console.log("error populating: ", error.message);
            throw new Error();
        }

    })

    it('should allow passingUser to login', async () => {

        let passingUser = { username: mockUser.username, password: mockUser.password };
        const res = await testServer.post('/login').send(passingUser);
        expect(res.status).to.equal(201);
        expect(res.body.user?.error === undefined);
        expect(res.body.username).to.equal(mockUser.username);

    })

    it('should login failingUser should return with code 400 ', async () => {

        let failingUser = { username: "failingUsername", password: mockUser.password };
        const res = await testServer.post('/login').send(failingUser);
        expect(res.status).to.equal(400);
        expect(res).to.have.property("error");
        expect(res.text).to.be.equal("Failed to login");

    })
})
