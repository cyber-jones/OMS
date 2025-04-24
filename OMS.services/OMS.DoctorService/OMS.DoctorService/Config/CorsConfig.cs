using System;
using OMS.DoctorService.Utils;

namespace OMS.DoctorService.Config;

internal static class CorsConfig
{
    public static IServiceCollection AddCorsConfig(this IServiceCollection services)
    {
        services.AddCors(option => 
            option.AddPolicy(Policies.LOCAL, policy =>
                policy.WithOrigins([SD.AuthService_Dev_Url, SD.Client_Dev_Url])
                    .WithMethods(["GET", "POST", "PATCH", "DELETE", "PUT"])
                    .WithHeaders(["accept", "content-type", "origin", "X-InclineCount", "Authorization"])
                    .AllowCredentials()
            )
        );

        return services;
    }
}
