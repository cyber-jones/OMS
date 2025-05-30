export const client_dev_uri = process.env.CLIENT_DEV_URI;

export const client_production_uri = process.env.CLIENT_PRODUCTION_URI;

export const ROLES = [ "admin", "doctor", "staff", "patient" ];

export const STATUS = { pending: "pending", approved: "approved", disapproved: "disapproved" };

export const ALLOWEDORIGINS = ["http://localhost:5173"];

export const ALLOWEDMETHODS = ['GET', 'POST', 'PUT', 'DELETE'];

export const ALLOWEDHEADERS = ['Authorization', 'Content-Type', 'Accept'];