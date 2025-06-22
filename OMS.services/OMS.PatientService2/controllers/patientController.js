import Patient from "../models/patientModel.js";
import Log from "../models/logModel.js";
import { Logger } from "../utils/log.js";
import axios from "axios"
import { PatientValidator } from "../validators/validateSchema.js";
import { ROLES } from "../utils/SD.js";

export const getPatients = async (req, res, next) => {
  try {
    const patients = await Patient.find();
    return res.status(200).json({ success: true, data: { ...patients } });
  } catch (err) {
    next(err);
  }
};

export const getPatient = async (req, res, next) => {
    try {
        const patient = await Patient.findById(req.params.id);
        return res.status(200).json({ success: true, patient });
    } catch (err) {
        next(err);
    }
}

export const postPatient = async (req, res, next) => {
  try {
    const { error, value } = PatientValidator.validate(req.body);
    const { Password, ...data } = value;

    if (error)
      return res.status(400).json({ success: false, message: error.message });

    const newPatient = new Patient({ ...data });

    await Logger(value.Email, "New Patient", value.Email);

    const body = {
      Email: value.Email,
      Password: Password,
      AccType: ROLES[3],
      Role: ROLES[3],
      User_Profile_Id: newPatient._id,
    };

    await axios.post("http://localhost:7005/api/user/register", body, {
      headers: {
        "Content-Type": "application/json",
      }
    });

    await newPatient.save();
    return res
      .status(201)
      .json({
        success: true,
        data: { ...newPatient },
        message: "Patient created successfully",
      });
  } catch (err) {
    next(err);
  }
};

export const updatePatient = async (req, res, next) => {
  try {
    const { error, value } = PatientValidator.validate(req.body);

    if (error)
      return res.status(400).json({ success: false, message: error.message });

    const updatedPatient = await Patient.findByIdAndUpdate(
      req.params.id,
      { $set: { ...value } },
      { new: true }
    );

    await Logger(req.email, "Updated Patient", value.Email);

    return res
      .status(205)
      .json({
        success: true,
        data: { ...updatedPatient },
        message: "Patient updated successfully",
      });
  } catch (err) {
    next(err);
  }
};

export const deletePatient = async (req, res, next) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    await Logger(
      req.email,
      "Deleted Patient",
      `${patient.First_Name} ${patient.Last_Name} ${patient.Middle_Name}`
    );
    return res
      .status(200)
      .json({ success: true, message: "Patient deleted successfully" });
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
