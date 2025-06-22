import Log from "../models/logModel.js"

export const Logger = async (values) => {
    try {
        const log = new Log({ ...values });
        await log.save();
    } catch (err) {
        new Promise.reject(err);
    }
}