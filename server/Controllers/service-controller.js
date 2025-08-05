import express from "express";
import Service from "../Models/service-model.js";

export const Services = async (req, res) => {
    try {
        const response = await Service.find();
        if (!response) {
            return res.status(404).json({ message: "No services found" });
        }
        res.status(200).json(response);
    } catch (error) {
        console.error("Error fetching services:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};