import express from "express";
import routers from "../routers";
import globalControllers from "../controllers/globalControllers";

const globalRouters = express.Router();

globalRouters.get("/", globalControllers.homeController);
globalRouters.get("/bread", globalControllers.breadController);

export default globalRouters;