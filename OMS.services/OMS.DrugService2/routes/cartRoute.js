import { Router } from 'express'
import { verifyRoles } from '../middlewares/verifyRoles.js';
import { ROLES } from '../utils/SD.js';
import { addToCart, createSubscription, getCarts, removeFromCart } from '../controllers/cartController.js';
const cartRouter = Router();




cartRouter.get("/:id", verifyRoles([ROLES[3]]), getCarts);
cartRouter.post("/add-to-cart", verifyRoles([ROLES[3]]), addToCart);
cartRouter.get("/remove-from-cart/:id", verifyRoles([ROLES[3]]), removeFromCart);
cartRouter.get("/create-subcrition/:id", verifyRoles([ROLES[3]]), createSubscription);





export default cartRouter;