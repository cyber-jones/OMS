import mongoose, { Schema, model } from "mongoose";




const cartHeaderSchema = new Schema({
    user_Id: {
        required: true,
        unique: true,
        type: String
    },
    sesssion_Id: {
        unique: true,
        type: String
    },
    payment_Intentent_Id: {
        unique: true,
        type: String
    },
    total_Count: {
        type: Number,
    },
    total_Price: {
        type: Number
    }  
}, { timestamps: true });

const CartHeader = model("CartHeader", cartHeaderSchema);

export default CartHeader;