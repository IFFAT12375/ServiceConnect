import express from 'express';
import Contact from "../Models/contact-model.js";

export const contactForm = async (req, res) => {
    try {
    const response = req.body;
    console.log(response);
    const message = await Contact.create(response);
    console.log("Message sent:", message);
    return res.status(200).json({ message: "message send successfully" });
  } catch (error) {
    return res.status(500).json({ message: "message not delivered" });
  }
};

