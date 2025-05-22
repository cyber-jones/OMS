export const verifyRoles = (allowedRoles) => {
    return (req, res, next) => {
        try {
            const roles = req.roles;
            const isValidRole = roles.map(role => allowedRoles.includes(role)).find(value => value == true);
            
            if (!isValidRole)
                return res.status(404).json({ success: false, message: "Unauthorized role" });

            return next();
        } catch (err) {
            next(err);
        }
    }
}