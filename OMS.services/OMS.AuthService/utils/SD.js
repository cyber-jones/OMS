export const client_dev_uri = process.env.CLIENT_DEV_URI;

export const client_production_uri = process.env.CLIENT_PRODUCTION_URI;

export const ROLES = ["admin", "doctor", "staff", "patient"];

export const ALLOWEDORIGINS = [
  "http://localhost:7001",
  "http://localhost:7002",
  "http://localhost:7003",
  "http://localhost:7004",
  "http://localhost:5173",
  "https://oms-ochre.vercel.app",
  "https://oms-doctor-api.onrender.com/api",
  "https://oms-staff-api.onrender.com/api",
  "https://oms-patient-api.onrender.com/api",
  "https://oms-drug-api.onrender.com/api",
];

export const ALLOWEDMETHODS = ["GET", "POST", "PUT", "DELETE"];

export const ALLOWEDHEADERS = ["Authorization", "Content-Type", "Accept"];
