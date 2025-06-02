import jwt from "jsonwebtoken";
import User from "../models/userModel.js";




export const getRefresh = async (req, res, next) => {
    try {
        const cookies = req.cookies;
        console.log(cookies?.jwt);
        if (!cookies?.jwt) 
            return res.status(401).json({ success: false, message: "Unauthorized!" });
    
        const userFromDb = await User.findOne({ refreshToken: cookies?.jwt }).lean();

        if (!userFromDb)
            return res.status(401).json({ success: false, message: "Unauthorized!" });

        jwt.verify(userFromDb.refreshToken, process.env.REFRESH_TOKEN_SECRETE, (err, user) => {
            if (err || userFromDb._id.toString() !== user.id.toString()) 
                return res.status(403).json({ success: false, message: "Forbidden!" });

            const accessToken = jwt.sign(
                { id: userFromDb._id, email: userFromDb.email, roles: userFromDb.roles }, 
                process.env.ACCESS_TOKEN_SECRETE, 
                { expiresIn: "60s", issuer: process.env.ISSUER, audience: process.env.AUDIENCE }
            );

            const { password: password, ...rest } = userFromDb._doc;
            res.status(200).json({ success: true, user: { ...rest, accessToken } });
        });
    } catch (err) {
        next(err);
    }
}