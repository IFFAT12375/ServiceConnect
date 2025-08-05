import express from "express";
import { Services } from "../Controllers/service-controller.js";

const Router = express.Router();

Router.get("/service", Services);

export default Router;