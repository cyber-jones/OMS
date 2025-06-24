import Drug from "../models/drugModel.js";
import Log from "../models/logModel.js";
import { v2 as cloudinary } from "cloudinary";
import { Logger } from "../utils/log.js";
import { DrugValidator } from "../validators/validateSchema.js";

export const getDrugs = async (req, res, next) => {
  try {
    const drugs = await Drug.find();
    return res.status(200).json({ success: true, drug: drugs });
  } catch (err) {
    next(err);
  }
};

export const getDrug = async (req, res, next) => {
  try {
    const drug = await Drug.findById(req.params.id);
    return res.status(200).json({ success: true, drug });
  } catch (err) {
    next(err);
  }
};

export const postDrug = async (req, res, next) => {
  try {
    const { error, value } = DrugValidator.validate(req.body);

    if (error)
      return res.status(400).json({ success: false, message: error.message });

    const newDrug = new Drug({ created_By: req.email, ...value });
    await newDrug.save();

    await Logger(req.email, "New Drug", newDrug.Name);

    return res
      .status(201)
      .json({
        success: true,
        drug: newDrug,
        message: "Drug created successfully",
      });
  } catch (err) {
    next(err);
  }
};

export const updateDrug = async (req, res, next) => {
  try {
    const {
      _id,
      updatedAt,
      createdAt,
      __v,
      created_By,
      updated_By,
      image,
      ...data
    } = req.body;
    const { error, value } = DrugValidator.validate(data);

    if (error)
      return res.status(400).json({ success: false, message: error.message });

    const updateDrug = await Drug.findByIdAndUpdate(
      req.params.id,
      { $set: { updated_By: req.email, ...value } },
      { new: true }
    );

    await Logger(req.email, "Updated Drug", updateDrug.Name);

    return res
      .status(205)
      .json({
        success: true,
        drug: updateDrug,
        message: "Drug updated successfully",
      });
  } catch (err) {
    next(err);
  }
};

export const imageUpload = async (req, res, next) => {
  try {
    const imageFile = req.file;
    const cloudImage = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const updatedPatient = await Drug.findByIdAndUpdate(
      req.params.id,
      { $set: { image: cloudImage?.secure_url } },
      { new: true }
    );

    await Logger(req.email, "Updated Drug Image", req.email);

    return res.status(205).json({
      success: true,
      patient: updatedPatient,
      message: "Updated successfully with profile image",
    });
  } catch (err) {
    next(err);
  }
};

export const deleteDrug = async (req, res, next) => {
  try {
    const drug = await Drug.findByIdAndDelete(req.params.id);
    await Logger(req.email, "Deleted Drug", drug.Name);
    return res
      .status(200)
      .json({ success: true, message: "Drug deleted successfully" });
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
