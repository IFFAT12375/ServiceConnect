import express from 'express';
import { contactForm } from '../Controllers/contact-controller.js';

const Router = express.Router();
Router.post("/contact", contactForm);

export default Router;