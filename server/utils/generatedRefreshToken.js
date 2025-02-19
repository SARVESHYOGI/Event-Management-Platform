import User from "../models/User.models.js"
import jwt from 'jsonwebtoken'

const genertedRefreshToken = async (userId) => {
  const token = await jwt.sign({ id: userId },
    process.env.REFRESH_KEY,
    { expiresIn: '7d' }
  )

  const updateRefreshTokenUser = await User.updateOne(
    { _id: userId },
    {
      refresh_token: token
    }
  )

  return token
}

export default genertedRefreshToken