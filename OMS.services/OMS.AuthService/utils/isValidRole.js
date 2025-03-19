import { ROLES } from "./SD.js"



export const isValidRole = (role) => {
    if (role == null) return true;

    const rolesArray = Object.values(ROLES);
    rolesArray.includes(role) ? true : false;
}
