import express from "express";
import { home, register, login, user } from "../Controllers/auth-controller.js";
import validate from "../middlewares/validate_middleware.js";
import { loginSchema, signupSchema } from "../validators/auth-validator.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";

const Router = express.Router();

Router.get("/home", home);
Router.post("/register", validate(signupSchema) ,register);
Router.post("/login", validate(loginSchema) ,login );
Router.get("/user", authMiddleware, user);

export default Router;