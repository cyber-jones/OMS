using System;
using OMS.StaffService.Utils;

namespace OMS.StaffService.Config;

internal static class CorsConfig
{
    public static IServiceCollection AddCorsConfig(this IServiceCollection services)
    {
        services.AddCors(option => 
            option.AddPolicy(Policies.LOCAL, policy =>
                policy.WithOrigins([SD.AuthService_DevUrl, SD.AuthService_ProdductionUrl])
                    .WithMethods(["GET, POST, PATCH, DELETE"])
                    .WithHeaders(["accept", "content-type", "origin", "X-InclineCount"])
                    .AllowCredentials()
            )
        );

        return services;
    }
}
