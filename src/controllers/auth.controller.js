import { comparePassword, hashPassword } from "../utils/hash.js";
import jwt from "jsonwebtoken";

const users = [];

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res
        .status(401)
        .json({ success: false, message: "All fields are required" });

    const userAlreadyExists = users.find((u) => username === u.username);
    if (userAlreadyExists)
      return res.status(401).json({
        success: false,
        message: "A user with this email is already registered",
      });

    const hashedPassword = await hashPassword(password);

    users.push({ username, password: hashedPassword });

    res.status(200).json({ success: true, message: "Registered successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res
        .status(401)
        .json({ success: false, message: "All fields are required" });

    const user = users.find((u) => username === u.username);
    if (!user)
      return res
        .status(401)
        .json({ succes: false, message: "username not founded" });

    const isMatch = await comparePassword(password, user.password)

    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES,
    });
    res.json({ success: true, message: "User logged in successfully", token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const getProtected = (req,res) => {
  res.status(200).json({message: `Hello ${req.user.username}, this is protected data`})
}