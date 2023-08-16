import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();

dotenv.config({ path: `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}` });

const port = process.env.PORT;
const host = process.env.HOST;

const main = async () => {

    await mongoose.connect(process.env.DBURI);
    console.log(`connected to DB: ${process.env.DBURI}`);

}

main().catch(error => console.log(error));

const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server running at http://${SERVERHOST}:${SERVERPORT}`);
});

export default server;