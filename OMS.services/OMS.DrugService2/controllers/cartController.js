import CartHeader from "../models/cartHeaderModel.js";
import Cart from "../models/cartModel.js";
import { CartValidator } from "../validators/validateSchema.js";
import Stripe from "stripe";


export const getCarts = async (req, res, next) => {
    try {
        const carts = await Cart.find({ cart_Header_Id: req.params.id, user_Id: req.user });
        return res.status(200).json({ success: true, carts });
    } catch (err) {
        next(err);
    }
}  


export const addToCart = async (req, res, next) => {
    try {
        const { error, value } = CartValidator.validate(req.body);

        if (error)
            return res.status(400).json({ success: false, message: error.message });

        const cartHeader = await CartHeader.findOne({ user_Id: req.user, payment_Intentent_Id: null });

        if (cartHeader) {
            const cart = new Cart({ user_Id: req.user, cart_Header_Id: cartHeader._id, ...value });
            await cart.save();
        }
        else {
            const newCartHeader = new CartHeader({ user_Id: req.user });
            const newCart = new Cart({ user_Id: req.user, cart_Header_Id: newCartHeader._id, ...value });

            await newCartHeader.save();
            await newCart.save();

            await Logger(req.email, "New Cart", newCartHeader._id);
        }

        return res.status(200).json({ success: true, message: "Added to cart successfully" });
    } catch (err) {
        next(err);
    }
}  


export const removeFromCart = async (req, res, next) => {
    try {
        const cart = await Cart.findByIdAndDelete(req.params.id);

        if (!cart) {
            const cartHeader = await CartHeader.findOneAndDelete({ user_Id: req.user, payment_Intentent_Id: null });
            await Logger(req.email, "Dropped Cart", cartHeader._id);
        }

        return res.status(205).json({ success: true, message: "product removed successfully" });
    } catch (err) {
        next(err);
    }
}  


export const createSubscription = async (req, res, next) => {
    try {
        const cartHeader = await CartHeader.findById(id);
        if (!cartHeader)
            return res.status(400).json({ success: false, message: "No cart available" });

        const carts = await Cart.find({ cart_Header_Id: cartHeader._id }).populate("Products");
        if (carts.length < 1)
            return res.status(400).json({ success: false, message: "No cart available" });

        const stripe = Stripe(process.env.SECRET_KEY)
        const subscription = await stripe.subscriptions.create({
            customer: 'cus_Na6dX7aXxi11N4',
            items: [
                {
                price: 'ngn',
                },
            ],
            successUrl: "",
            cancleUrl: ""
        });

        return res.status(200).json({ success: true, newDrug, message: "Drug created successfully" });
    } catch (err) {
        next(err);
    }
}  

