export const ROLES = ["admin", "doctor", "staff", "patient"];

export const STATUS = {
  pending: "pending",
  approved: "approved",
  disapproved: "disapproved",
  cancle: "cancle",
};

export const ALLOWEDORIGINS = [
  "http://localhost:5173",
  "https://oms-ochre.vercel.app",
  
]; 

export const ALLOWEDMETHODS = ["GET", "POST", "PUT", "DELETE"];

export const ALLOWEDHEADERS = ["Authorization", "Content-Type", "Accept"];
