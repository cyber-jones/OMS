using System;
using OMS.DrugService.Utils;

namespace OMS.DrugService.Config;

internal static class CorsConfig
{
    public static IServiceCollection AddCorsConfig(this IServiceCollection services)
    {
        services.AddCors(option => 
            option.AddPolicy(Policies.LOCAL, policy =>
                policy.WithOrigins([SD.Client_Dev_Url])
                    .WithMethods(["GET", "POST", "PATCH", "DELETE", "PUT"])
                    .WithHeaders(["accept", "content-type", "origin", "X-InclineCount", "Authorization"])
                    .AllowCredentials()
            )
        );

        return services;
    }
}
