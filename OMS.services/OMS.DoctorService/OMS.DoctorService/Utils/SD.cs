using System;

namespace OMS.DoctorService.Utils;

public class SD
{
    public static string AuthService_Dev_Url { get; set; }
    public static string AuthService_Production_Url { get; set; }
    public static string Client_Dev_Url { get; set; }
    public static string Client_Production_Url { get; set; }
    public static string Doctor_Created { get;} = "Created a Doctor";
    public static string Doctor_Updated { get;} = "Updated a Doctor";
    public static string Doctor_Deleted { get;} = "Deleted a Doctor";
    public static string Specialty_Created { get;} = "Created a Specialty";
    public static string Specialty_Updated { get;} = "Updated a Specialty";
    public static string Specialty_Deleted { get;} = "Deleted a Specialty";
}
