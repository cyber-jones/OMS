import { connect } from "mongoose";
import Specialty from "../models/specialtyModel.js";

export const connectDb = async (uri) => {
  try {
    await connect(uri);
    console.log("connected to OMS_DoctorService DB");
  } catch (err) {
    throw err;
  }
};

const specialities = [
  {
    created_By: "admin",
    name: "Allergist",
    description:
      "Focuses on diagnosing and treating allergies, asthma, and conditions related to the immune system",
  },
  {
    created_By: "admin",
    name: "Anesthesiologist",
    description:
      "Manages pain and monitors vital signs during surgery and medical procedures",
  },
  {
    created_By: "admin",
    name: "Cardiologist",
    description:
      "Specializes in the heart and blood vessels, diagnosing and treating conditions like heart disease",
  },
  {
    created_By: "admin",
    name: "Dermatologist",
    description:
      "Focuses on the skin, hair, and nails, diagnosing and treating conditions like acne, eczema, and skin cancer",
  },
  {
    created_By: "admin",
    name: "Endocrinologist",
    description:
      "Specializes in the endocrine system (hormones), diagnosing and treating conditions like diabetes and thyroid disorders",
  },
  {
    created_By: "admin",
    name: "Gastroenterologist",
    description:
      "Focuses on the digestive system, diagnosing and treating conditions like ulcers, colitis, and irritable bowel syndrome",
  },
  {
    created_By: "admin",
    name: "General Surgeon",
    description:
      "Performs a wide range of surgical procedures, often specializing in a specific area like abdominal, thoracic, or vascular surgery",
  },
  {
    created_By: "admin",
    name: "Internal Medicine (Internist)",
    description:
      "Focuses on diagnosing and treating allergies, asthma, and conditions related to the immune system",
  },
  {
    created_By: "admin",
    name: "Neurologist",
    description:
      "Specializes in the nervous system (brain and spinal cord), diagnosing and treating conditions like stroke, epilepsy, and multiple sclerosis",
  },
  {
    created_By: "admin",
    name: "Obstetrician",
    description:
      "Specializes in the care of women during pregnancy, childbirth, and the postpartum period",
  },
  {
    created_By: "admin",
    name: "Oncologist",
    description:
      "Focuses on the diagnosis, treatment, and prevention of cancer",
  },
  {
    created_By: "admin",
    name: "Ophthalmologist",
    description:
      "Specializes in the eyes and vision, diagnosing and treating conditions like cataracts, glaucoma, and vision problems",
  },
  {
    created_By: "admin",
    name: "Orthopedic Surgeon",
    description:
      "Specializes in the musculoskeletal system (bones, joints, muscles), diagnosing and treating conditions like fractures, arthritis, and sports injuries",
  },
  {
    created_By: "admin",
    name: "Otolaryngologist (ENT)",
    description:
      "Specializes in the ears, nose, and throat, diagnosing and treating conditions like ear infections, sinus problems, and voice disorders",
  },
  {
    created_By: "admin",
    name: "Pathologist",
    description:
      "Analyzes tissues, cells, and fluids to diagnose diseases, often working in a laboratory setting",
  },
  {
    created_By: "admin",
    name: "Pediatrician",
    description:
      "Specializes in the care of infants, children, and adolescents",
  },
  {
    created_By: "admin",
    name: "Psychiatrist",
    description:
      "Specializes in mental health, diagnosing and treating conditions like depression, anxiety, and schizophrenia",
  },
  {
    created_By: "admin",
    name: "Pulmonologist",
    description:
      "Focuses on the lungs and respiratory system, diagnosing and treating conditions like asthma, pneumonia, and COPD",
  },
  {
    created_By: "admin",
    name: "Radiologist",
    description:
      "Uses imaging techniques (X-rays, MRI, CT scans) to diagnose and treat medical conditions",
  },
  {
    created_By: "admin",
    name: "Rheumatologist",
    description:
      "Specializes in autoimmune and inflammatory diseases that affect joints, muscles, and other tissues",
  },
  {
    created_By: "admin",
    name: "Urologist",
    description:
      "Specializes in the urinary tract and male reproductive organs, diagnosing and treating conditions like kidney stones, bladder cancer, and prostate problems",
  },
];

export const Migration = async () => {
  try {
    console.log("Migration started!")
    await Specialty.insertMany(specialities);
    console.log("Data migrated successfully!");
  } catch {
    console.log("Migration Failed!");
    throw err;
  }
};
