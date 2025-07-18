using System;

namespace OMS.DrugService.Utils;

public class SD
{
    public static string Client_Production_Url { get; set; }
    public static string Client_Dev_Url { get; set; }
    public static string Pending { get; set; } = "Pending";
    public static string Paid { get; set; } = "Paid";
    public static string Drug_Created { get;} = "Created a Drug";
    public static string Drug_Updated { get;} = "Updated a Drug";
    public static string Drug_Deleted { get;} = "Deleted a Drug";
}
