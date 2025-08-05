import express from 'express';
import User from '../models/user-model.js';

export const home = async (req, res) => {
    try{
res.status(200).send("Hello World");
    }
    catch(err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

export const register = async (req, res) => {
    try{
        console.log(req.body);
        const { username, email, phone, password } = req.body;

        const userExit = await User.findOne({ email});
        if(userExit) {
            return res.status(400).json("Email already exists");
        }

        //hash the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        const createUser = await User.create ({ username, email, phone, password });
        console.log("User Created:", createUser);
        res.status(200).json({ 
            msg: createUser,
            token: await createUser.generateToken(),
            userId: createUser._id.toString(),
        });
    }
    catch (err) {
        console.error("Register Error:", err);
        res.status(500).send("Internal Server Error");
    }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    console.log(userExist);

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials " });
    }

    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

export const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
};
