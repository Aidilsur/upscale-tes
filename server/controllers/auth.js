import bcrypt from "bcrypt";
import User from "../models/user.js";
import { signPayload } from "../helper/jwt.js";

export async function register(req, res, next) {
  try {
    const { email, password, username } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already used" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({ email, password: hashedPassword, username });
    await newUser.save();

    const token = signPayload({ id: newUser._id, email: newUser.email });

    res.status(201).json({
      message: "register success",
      token,
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error(error);
    next(error);
    res.status(500).json({ message: "Server error" });
  }
}

export async function login(req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const token = signPayload({ id: user._id, email: user.email });
    res.json({ message: "Login success", token });
  } catch (error) {
    next(error);
    console.log(error);
  }
}

export async function getProfile(req, res, next) {
  try {
    const user = await User.findById(req.user.id).select("-password"); // exclude password
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

export async function getAllUser(req, res) {
  try {
    const users = await User.find({}).select("-password"); // exclude password
    if (!users) {
      return res.status(404).json({ message: "User not found" });
    }

    const response = users.map((item) => ({
      label: item.username,
      value: item?._id,
    }));

    res.json(response);
  } catch (err) {
    console.log("err :", err);
  }
}
