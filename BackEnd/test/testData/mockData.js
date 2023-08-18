const mockData = {
    testPeeps: [
        {
            "username": "testUsername",
            "name": "testName",
            "content": "this is a test peep!",
            "dateCreated": "17/08/2023"
        },

        {
            "username": "testUsername2",
            "name": "testName2",
            "content": "this is a second test peep!",
            "dateCreated": "17/08/2023"
        }
    ],

    testUsers: [
        {
            "username": "testUsername",
            "name": "testName",
            "email": "test@testmail.com",
            "password": "test1234"
        },

        {
            "username": "testUsername2",
            "name": "testName2",
            "email": "test2@testmail.com",
            "password": "test123456"
        }
    ],

    testNewPeep: {

        "username": "testNewUsername",
        "name": "testNewName",
        "content": "this is a test new peep!",
        "dateCreated": "17/08/2023"

    },

    testErrorUser: {

        "username": "testErrorUsername",
        "email": "testerror@testmail.com",
        "password": "test1234error"


    }
}



export default mockData;