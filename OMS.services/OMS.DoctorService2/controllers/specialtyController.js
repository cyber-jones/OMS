import Specialty from "../models/specialtyModel.js";
import { Logger } from "../utils/log.js";
import { SpecialtyValidator } from "../validators/validateSchema.js";

export const getSpecialties = async (req, res, next) => {
  try {
    const specialties = await Specialty.find();
    return res.status(200).json({ success: true, specialty: specialties });
  } catch (err) {
    next(err);
  }
};

export const getSpecialty = async (req, res, next) => {
  try {
    const specialty = await Specialty.findById(req.params.id);
    return res.status(200).json({ success: true, specialty });
  } catch (err) {
    next(err);
  }
};

export const postSpecialty = async (req, res, next) => {
  try {
    const { error, value } = SpecialtyValidator.validate(req.body);

    if (error)
      return res.status(400).json({ success: false, message: error.message });

    const newSpecialty = new Specialty({ created_By: req.email, ...value });
    await newSpecialty.save();

    await Logger(req.email, "New Specialty", newSpecialty.name);

    return res
      .status(201)
      .json({
        success: true,
        specialty: newSpecialty,
        message: "Specialty created successfully",
      });
  } catch (err) {
    next(err);
  }
};

export const updateSpecialty = async (req, res, next) => {
  try {
    const { _id, updatedAt, createdAt, __v, created_By, updated_By, ...data } =
      req.body;
    const { error, value } = SpecialtyValidator.validate(data);

    if (error)
      return res.status(400).json({ success: false, message: error.message });

    const updatedSpecialty = await Specialty.findByIdAndUpdate(
      req.params.id,
      { $set: { created_By: created_By, updated_By: req.email, ...value } },
      { new: true }
    );

    await Logger(req.email, "Updated Specialty", updatedSpecialty.name);

    return res
      .status(205)
      .json({
        success: true,
        specialty: updatedSpecialty,
        message: "Specialty updated successfully",
      });
  } catch (err) {
    next(err);
  }
};

export const deleteSpecialty = async (req, res, next) => {
  try {
    const specialty = await Specialty.findByIdAndDelete(req.params.id);
    await Logger(req.email, "Deleted Specialty", specialty.Name);
    return res
      .status(200)
      .json({ success: true, message: "Specialty deleted successfully" });
  } catch (err) {
    next(err);
  }
};
