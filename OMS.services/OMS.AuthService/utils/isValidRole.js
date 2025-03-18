import { ROLES } from "./SD.js"



export const isValidRole = (role) => {
    ROLES.includes(role) ? true : false;
}
