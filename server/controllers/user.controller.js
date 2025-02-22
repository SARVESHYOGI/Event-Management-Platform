import User from '../models/User.models.js';
import bcrypt from "bcryptjs";
import generatedAccessToken from '../utils/generatedAccessToken.js';
import generatedRefreshToken from '../utils/generatedRefreshToken.js';

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

    const accesstoken = await generatedAccessToken(user._id)
    const refreshToken = await generatedRefreshToken(user._id)


    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None"
    }
    res.cookie('accessToken', accesstoken, cookiesOption)
    res.cookie('refreshToken', refreshToken, cookiesOption)

    return res.json({
      message: "Login successfully",
      error: false,
      success: true,
      data: {
        accesstoken,
        refreshToken
      }
    })
  } catch (error) {
    console.log(error);
  }
}

export async function logoutuser(req, res) {
  try {
    const userid = req.userId

    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None"
    }
    res.clearCookie('accessToken', cookiesOption)
    res.clearCookie('refreshToken', cookiesOption)

    const removeToken = await User.findByIdAndUpdate(userid, {
      refresh_token: ""
    })
    return res.json({
      message: "Logout successfully",
      error: false,
      success: true
    })

  } catch (error) {
    console.log(error);
  }
}

export async function refreshToken(request, response) {
  try {
    const refreshToken = request.cookies.refreshToken || request?.headers?.authorization?.split(" ")[1]  /// [ Bearer token]

    if (!refreshToken) {
      return response.status(401).json({
        message: "Invalid token",
        error: true,
        success: false
      })
    }

    const verifyToken = await jwt.verify(refreshToken, process.env.SECRET_KEY_REFRESH_TOKEN)

    if (!verifyToken) {
      return response.status(401).json({
        message: "token is expired",
        error: true,
        success: false
      })
    }

    const userId = verifyToken?._id

    const newAccessToken = await generatedAccessToken(userId)

    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None"
    }

    response.cookie('accessToken', newAccessToken, cookiesOption)

    return response.json({
      message: "New Access token generated",
      error: false,
      success: true,
      data: {
        accessToken: newAccessToken
      }
    })


  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false
    })
  }
}