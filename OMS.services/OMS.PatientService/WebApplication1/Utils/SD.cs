using System;

namespace OMS.PatientService.Utils;

public class SD
{
    public static string AuthService_Dev_Url { get; set; }
    public static string Client_Dev_Url { get; set; }
    public static string AuthService_Production_Url { get; set; }
    public static string Client_Production_Url { get; set; }
    public static string Patient_Created { get;} = "Created a Patient";
    public static string Patient_Updated { get;} = "Updated a Patient";
    public static string Patient_Deleted { get;} = "Deleted a Patient";
}
