import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },

  image: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  // price: {
  //   type: Number,
  //   required: true
  // },
}, {
  timestamps: true
});

export default mongoose.model("Event", eventSchema);
