import User from '../models/user.models.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function getusers(req, res) {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export async function createUser(req, res) {
  try {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).send("User already exists");
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    return res.status(201).json({ message: "User created successfully", user });

  } catch (error) {
    console.log(error);
  }
}

export async function loginuser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("User not found");
    }
    const validpassword = bcrypt.compareSync(password, user.password);
    if (!validpassword) {
      return res.status(400).send("Invalid Password");
    }

  } catch (error) {
    console.log(error);
  }
}