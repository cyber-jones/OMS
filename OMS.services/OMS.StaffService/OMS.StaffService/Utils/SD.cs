using System;

namespace OMS.StaffService.Utils;

public class SD
{
    public static string AuthService_DevUrl { get; set; }
    public static string ClientService_DevUrl { get; set; }
    public static string AuthService_ProductionUrl { get; set; }
    public static string ClientService_ProductionUrl { get; set; }
    public static string Staff_Created { get;} = "Created a Staff";
    public static string Staff_Updated { get;} = "Updated a Staff";
    public static string Staff_Deleted { get;} = "Deleted a Staff";
}
