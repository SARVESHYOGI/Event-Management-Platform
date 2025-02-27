import EventModels from "../models/Event.models.js";
import upload from "../middlewares/multer.js";
import uploadFileToCloudinary from "../utils/uploadFileToCloudinary.js";
import mongoose from "mongoose";

export async function getEvents(req, res) {
  try {
    const events = await EventModels.find();
    res.send(events);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export async function createEvent(req, res) {
  try {
    const { title, description, category, date } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: "Image file is required" });
    }
    const cloudinaryResult = await uploadFileToCloudinary(req.file);

    const event = new EventModels({
      title,
      description,
      category,
      date,
      user: new mongoose.Types.ObjectId(req.userId),
      image: cloudinaryResult.secure_url
    });
    await event.save();
    return res.status(201).json({ message: "Event created successfully", event });

  } catch (error) {
    console.log(error);
  }
}

export async function deleteEvent(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Event id is required" });
    }
    await EventModels.findByIdAndDelete(id);
    return res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    console.log(error);
  }
}

export async function editevent(req, res) {
  try {
    const { id } = req.params;
    const { title, description, category, date } = req.body;
    if (!id) {
      return res.status(400).json({ message: "Event id is required" });
    }
    const event = await EventModels.findById(id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    let cloudinaryResult = "";
    const image = req.file;
    if (image) {
      cloudinaryResult = await uploadFileToCloudinary(image);
      console.log(cloudinaryResult);
    }

    const update = await EventModels.updateOne({ _id: id }, {
      ...(title && { title }),
      ...(description && { description }),
      ...(category && { category }),
      ...(date && { date }),
      ...(image && { image: cloudinaryResult.secure_url })
    });
    return res.status(200).json({ message: "Event updated successfully", event });
  } catch (error) {
    console.log(error);
  }
}