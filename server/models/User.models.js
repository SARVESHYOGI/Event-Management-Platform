import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  refresh_token: {
    type: String,
    default: ""
  }
}, {
  timestamps: true
})

export default mongoose.model("User", userSchema);