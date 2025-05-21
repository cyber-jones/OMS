import Message from "../models/messageModel.js";
import { MessageValidator } from "../validators/validateSchema.js";








export const getAllMessages = async (req, res, next) => {
    try {
        const messages = await Message.find();
        return res.status(200).json({ success: true, messages });
    } catch (err) {
        next(err);
    }
}  


export const getUserMessages = async (req, res, next) => {
    try {
        const messages = await Message.find({ sender_Id: req.params.id });
        return res.status(200).json({ success: true, messages });
    } catch (err) {
        next(err);
    }
}  


export const getUserPrivateMessages = async (req, res, next) => {
    try {
        const { sender_Id, reciever_Id } = req.params;
        const messages = await Message.find({ sender_Id: sender_Id, reciever_Id: reciever_Id });
        return res.status(200).json({ success: true, messages });
    } catch (err) {
        next(err);
    }
}  


export const postMessage = async (req, res, next) => {
    try {
        const { error, value } = MessageValidator.validate(req.body);

        if (error)
            return res.status(400).json({ success: false, message: error.message });

        const newMessage = new Message({ ...value });
        await newMessage.save();  

        return res.status(201).json({ success: true, newMessage });
    } catch (err) {
        next(err);
    }
} 


export const deleteMessage = async (req, res, next) => {
    try {
        await Message.findByIdAndDelete(req.params.id);
        return res.status(204).json({ success: true, message: "Message deleted successfully" });
    } catch (err) {
        next(err);
    }
}