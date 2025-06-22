import mongoose, { Schema, model } from "mongoose";




const cartSchema = new Schema({
    user_Id: {
        required: true,
        unique: true,
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Drug"
    },
    cart_Header_Id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CartHeader"
    }
}, { timestamps: true });

const Cart = model("Cart", cartSchema);

export default Cart;