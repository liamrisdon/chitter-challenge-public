import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import { peepHomeRouter } from "./routes/peepHomeRouter.js";

const app = express();

dotenv.config({ path: `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}` });

const port = process.env.PORT;
const host = process.env.HOST;


app.use(express.json());
app.use(cors())
app.use('/', peepHomeRouter);


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