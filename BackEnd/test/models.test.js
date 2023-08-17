import { expect } from "chai";
import User from "../models/user.model.js";
import Peep from "../models/peep.model.js";

describe("Model tests", () => {

    const testPeepModel = {
        username: "lrisdon",
        name: "liam",
        content: "testing peep",
        dateCreated: "17/08/2023"
    }

    const testUserModel = {
        username: "lrisdon",
        name: "liam",
        email: "liam@email.com",
        password: "testpassword"
    }


    it('should have testPeep be an instance of Peep', () => {

        const testPeep = new Peep(testPeepModel);
        console.log(`this is the peep ${JSON.stringify(testPeep)}`)
        expect(testPeep).instanceOf(Peep);

    })

    it('should have testUserModel be an instance of User', () => {

        const testUser = new User(testUserModel);
        console.log(`this is the user ${JSON.stringify(testUser)}`);
        expect(testUser).instanceOf(User);

    })
})