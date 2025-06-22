import Log from "../models/logModel.js"

export const Logger = async (Blame, Description, Victim) => {
    try {
        const log = new Log({ Blame, Description, Victim });
        await log.save();
    } catch (err) {
        new Promise.reject(err);
    }
}