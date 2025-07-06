//libs
import express from "express";
import NodeCache from "node-cache";

//routers
import contactRouter from "./routes/contacts.routes.js";

export const app = express();

export const cacheDB = new NodeCache();

app.use(express.json());

app.use("/", contactRouter);
