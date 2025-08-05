import express from "express";
import { getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactById } from "../Controllers/admin-controller.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";
import adminMiddleware from "../middlewares/admin-middleware.js";

const Router = express.Router();

Router.get("/users", authMiddleware, adminMiddleware, getAllUsers);
Router.get("/contacts", authMiddleware, adminMiddleware, getAllContacts);
Router.delete("/users/delete/:id", authMiddleware, adminMiddleware, deleteUserById);
Router.get("/users/:id", authMiddleware, adminMiddleware, getUserById);
Router.patch("/users/update/:id", authMiddleware, adminMiddleware, updateUserById);
Router.delete("/contacts/delete/:id", authMiddleware, adminMiddleware, deleteContactById);

export default Router;