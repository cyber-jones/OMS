import Staff from "../models/staffModel.js";
import Log from "../models/logModel.js";
import { Logger } from "../utils/log.js";
import axios from "axios"
import { StaffValidator } from "../validators/validateSchema.js";
import { ROLES } from "../utils/SD.js";

export const getStaffs = async (req, res, next) => {
  try {
    const staffs = await Staff.find();
    return res.status(200).json({ success: true, staff: staffs });
  } catch (err) {
    next(err);
  }
};

export const getStaff = async (req, res, next) => {
    try {
        const staff = await Staff.findById(req.params.id);
        return res.status(200).json({ success: true, staff });
    } catch (err) {
        next(err);
    }
}

export const postStaff = async (req, res, next) => {
  try {
    const { error, value } = StaffValidator.validate(req.body);
    const { Password, ...data } = value;

    if (error)
      return res.status(400).json({ success: false, message: error.message });

    const newStaff = new Staff({ ...data });

    await Logger(value.Email, "New Staff", value.Email);

    const body = {
      Email: value.Email,
      Password: Password,
      AccType: ROLES[2],
      Role: ROLES[2],
      User_Profile_Id: newStaff._id,
    };

    await axios.post("http://localhost:7005/api/user/register", body, {
      headers: {
        "Content-Type": "application/json",
      }
    });

    await newStaff.save();
    return res
      .status(201)
      .json({
        success: true,
        staff: newStaff,
        message: "Staff created successfully",
      });
  } catch (err) {
    next(err);
  }
};

export const updateStaff = async (req, res, next) => {
  try {
    const { error, value } = StaffValidator.validate(req.body);

    if (error)
      return res.status(400).json({ success: false, message: error.message });

    const updatedStaff = await Staff.findByIdAndUpdate(
      req.params.id,
      { $set: { ...value } },
      { new: true }
    );

    await Logger(req.email, "Updated Staff", value.Email);

    return res
      .status(205)
      .json({
        success: true,
        staff: updatedStaff,
        message: "Staff updated successfully",
      });
  } catch (err) {
    next(err);
  }
};

export const deleteStaff = async (req, res, next) => {
  try {
    const Staff = await Staff.findByIdAndDelete(req.params.id);
    await Logger(
      req.email,
      "Deleted Staff",
      `${Staff.First_Name} ${Staff.Last_Name} ${Staff.Middle_Name}`
    );
    return res
      .status(200)
      .json({ success: true, message: "Staff deleted successfully" });
  } catch (err) {
    next(err);
  }
};

export const getLogs = async (req, res, next) => {
  try {
    const logs = await Log.find();
    return res.status(200).json({ success: true, data: logs });
  } catch (err) {
    next(err);
  }
};
