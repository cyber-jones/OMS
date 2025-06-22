import Log from "../models/logModel.js"

export const Logger = async (blame, description, victim) => {
    try {
        const log = new Log({ blame, description, victim });
        await log.save();
    } catch (err) {
        throw err
    }
}