import mail from "../config/emailConfig";
import { EmailValidator } from "../validator/validateSchema";

export const sendMail = async (req, res, next) => {
    try {
        const { error, values } = EmailValidator(req.body);

        if (error)
            return res.status(400).json({ success: false, message: error.message });

        const sent  = await mail(...values);
        console.log(sent);

        return res.status(200).json({ success: true, message: "Mail sent" });
    } catch (err) {
        next(err);
    }
}