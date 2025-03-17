export const client_dev_uri = process.env.CLIENT_DEV_URI;
export const client_production_uri = process.env.CLIENT_PRODUCTION_URI;
export const ROLES = { admin: 1001, doctor: 2002, staff: 3003, patient: 4004 };
export const ALLOWEDORIGINS = ["http://localhost:7001", "http://localhost:7002", "http://localhost:7003", "http://localhost:7004"];
export const ALLOWEDMETHODS = ['GET', 'POST', 'PUT', 'DELETE'];
export const ALLOWEDHEADERS = ['Authorization', 'Content-Type', 'Accept'];