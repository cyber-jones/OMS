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
    Name: "Allergist",
    Description:
      "Focuses on diagnosing and treating allergies, asthma, and conditions related to the immune system",
  },
  {
    Name: "Anesthesiologist",
    Description:
      "Manages pain and monitors vital signs during surgery and medical procedures",
  },
  {
    Name: "Cardiologist",
    Description:
      "Specializes in the heart and blood vessels, diagnosing and treating conditions like heart disease",
  },
  {
    Name: "Dermatologist",
    Description:
      "Focuses on the skin, hair, and nails, diagnosing and treating conditions like acne, eczema, and skin cancer",
  },
  {
    Name: "Endocrinologist",
    Description:
      "Specializes in the endocrine system (hormones), diagnosing and treating conditions like diabetes and thyroid disorders",
  },
  {
    Name: "Gastroenterologist",
    Description:
      "Focuses on the digestive system, diagnosing and treating conditions like ulcers, colitis, and irritable bowel syndrome",
  },
  {
    Name: "General Surgeon",
    Description:
      "Performs a wide range of surgical procedures, often specializing in a specific area like abdominal, thoracic, or vascular surgery",
  },
  {
    Name: "Internal Medicine (Internist)",
    Description:
      "Focuses on diagnosing and treating allergies, asthma, and conditions related to the immune system",
  },
  {
    Name: "Neurologist",
    Description:
      "Specializes in the nervous system (brain and spinal cord), diagnosing and treating conditions like stroke, epilepsy, and multiple sclerosis",
  },
  {
    Name: "Obstetrician",
    Description:
      "Specializes in the care of women during pregnancy, childbirth, and the postpartum period",
  },
  {
    Name: "Oncologist",
    Description:
      "Focuses on the diagnosis, treatment, and prevention of cancer",
  },
  {
    Name: "Ophthalmologist",
    Description:
      "Specializes in the eyes and vision, diagnosing and treating conditions like cataracts, glaucoma, and vision problems",
  },
  {
    Name: "Orthopedic Surgeon",
    Description:
      "Specializes in the musculoskeletal system (bones, joints, muscles), diagnosing and treating conditions like fractures, arthritis, and sports injuries",
  },
  {
    Name: "Otolaryngologist (ENT)",
    Description:
      "Specializes in the ears, nose, and throat, diagnosing and treating conditions like ear infections, sinus problems, and voice disorders",
  },
  {
    Name: "Pathologist",
    Description:
      "Analyzes tissues, cells, and fluids to diagnose diseases, often working in a laboratory setting",
  },
  {
    Name: "Pediatrician",
    Description:
      "Specializes in the care of infants, children, and adolescents",
  },
  {
    Name: "Psychiatrist",
    Description:
      "Specializes in mental health, diagnosing and treating conditions like depression, anxiety, and schizophrenia",
  },
  {
    Name: "Pulmonologist",
    Description:
      "Focuses on the lungs and respiratory system, diagnosing and treating conditions like asthma, pneumonia, and COPD",
  },
  {
    Name: "Radiologist",
    Description:
      "Uses imaging techniques (X-rays, MRI, CT scans) to diagnose and treat medical conditions",
  },
  {
    Name: "Rheumatologist",
    Description:
      "Specializes in autoimmune and inflammatory diseases that affect joints, muscles, and other tissues",
  },
  {
    Name: "Urologist",
    Description:
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
