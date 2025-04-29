import { Schema, model } from "mongoose";




const messageSchema = new Schema({
    sender_Id: {
        required: true,
        unique: true,
        type: String
    },
    reciever_Id: {
        required: true,
        unique: true,
        type: String
    },
    text: {
        type: String
    },
    image: {
        type: String
    }
}, { timestamps: true });

const message = model("Message", messageSchema);

export default message;