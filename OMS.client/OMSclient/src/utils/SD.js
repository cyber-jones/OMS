export const oms_url = {
    home: "/",
    dashBoard: "/dashboard",
    specialty: "/specialty",
    specialties: "/specialties",
    consultation: "/consultation",
    patients: "/patients",
    prescription: "/prescription",
    prescriptions: "/prescriptions",
    appointments: "/appointments",
    newAppointment: "/appointment/new",
    newPrescription: "/prescription/new",
    profile: "/profile",
    login: "/login",
    auth: "/auth",
    forgetPassword: "/forget-password",
    verifyOtp: "/verify-otp",
    resetPassword: "/reset-password",
    drugs: "/drugs",
    logs: "/logs",
    settings: "/settings",
    registerDoctor: "/register/doctor",
    registerStaff: "/register/staff",
    registerDrug: "/register/drug",
    registerSpecialty: "/register/pecialty",
    doctor: "/doctor",
    staff: "/staff",
    patient: "/patient",
    drug: "/drug",
    appointment: "/appointment",
    doctorList: "/doctor/all",
    staffList: "/staff/all",
    patientList: "/patient/all",
    drugList: "/drug/all",
    specialtyList: "/specialty/all",
    appointmentList: "/appointment/all",
    updateDoctor: "/update/doctor",
    updateStaff: "/update/staff",
    updateDrug: "/update/drug",
    updateSpecialty: "/update/specialty",
    updatePatient: "/update/patient",
    updateAppointment: "/update/appointment"
}


export const oms_server_dev_url = {
    doctor: "http://localhost:7002/api",
    staff: "http://localhost:7004/api",
    patient: "http://localhost:7001/api",
    auth: "http://localhost:7005/api",
    drug: "http://localhost:7003/api",
    appointment: "http://localhost:7006/api",
}


export const oms_server_production_url = {
    //  doctor: "http://localhost:7002/api",
    doctor: "https://oms-doctor-api.onrender.com/api",
    // patient: "http://localhost:7001/api",
    patient: "https://oms-patient-api.onrender.com/api",
    // staff: "http://localhost:7004/api",
    staff: "https://oms-staff-api.onrender.com/api",
    // auth: "http://localhost:7005/api",
    auth: "https://oms-auth-api.onrender.com/api",
    // drug: "http://localhost:7003/api",
    drug: "https://oms-drug-api.onrender.com/api",
    // appointment: "http://localhost:7006/api",
    appointment: "https://oms-appointment-api.onrender.com/api",
}


export const Roles = {
    ADMIN: "admin",
    PATIENT: "patient",
    DOCTOR: "doctor",
    STAFF: "staff"
}


export const Status = {
    APPROVED: "approved",
    DISAPPROVED: "disapproved",
    PENDING: "pending",
    CANCLE: "cancle"
}


export const socket_connect_dev_url = "http://localhost:7006";
export const socket_connect_production_url = "https://oms-appointment-api.onrender.com";