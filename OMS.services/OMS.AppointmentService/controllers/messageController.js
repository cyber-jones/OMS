import { getRecieverSocketId, io } from "../config/socket.io.config.js";
import Message from "../models/messageModel.js";
import { v2 as cloudinary } from "cloudinary";
import { MessageValidator } from "../validators/validateSchema.js";

export const getAllMessages = async (req, res, next) => {
  try {
    const messages = await Message.find();
    return res.status(200).json({ success: true, messages });
  } catch (err) {
    next(err);
  }
};

export const getUserMessages = async (req, res, next) => {
  try {
    const { sender_Id, reciever_Id } = req.params;

    const messages = await Message.find({
      $or: [
        { sender_Id: sender_Id, reciever_Id: reciever_Id },
        { sender_Id: reciever_Id, reciever_Id: sender_Id },
      ],
    });

    return res.status(200).json({ success: true, messages });
  } catch (err) {
    next(err);
  }
};

export const postMessage = async (req, res, next) => {
  try {
    const { text, ...data } = req.body;
    const imageFile = req.file;
    const { error, value } = MessageValidator.validate(data);

    let cloudImage = null;
    if (imageFile) {
      cloudImage = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    }

    if (error)
      return res.status(400).json({ success: false, message: error.message });

    const newMessage = new Message({ ...value, text });
    if (cloudImage) newMessage.image = cloudImage.secure_url
    await newMessage.save();

    const recieverId = getRecieverSocketId(value.reciever_Id);
    if (recieverId) io.to(recieverId).emit("new-message", newMessage);

    return res
      .status(201)
      .json({ success: true, message: "New message sent", newMessage });
  } catch (err) {
    next(err);
  }
};


export const deleteMessage = async (req, res, next) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    return res
      .status(204)
      .json({ success: true, message: "Message deleted successfully" });
  } catch (err) {
    next(err);
  }
};
