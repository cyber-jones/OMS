import mongoose, { Schema, model } from "mongoose";




const cartSchema = new Schema({
    User_Id: {
        required: true,
        unique: true,
        type: String
    },
    Price: {
        type: Number,
        required: true
    },
    Count: {
        type: Number,
        required: true
    },
    Product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Drug"
    },
    Cart_Header_Id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CartHeader"
    }
}, { timestamps: true });

const Cart = model("Cart", cartSchema);

export default Cart;