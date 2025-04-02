using System;
using OMS.PatientService.Utils;

namespace OMS.PatientService.Config;

internal static class CorsConfig
{
    public static IServiceCollection AddCorsConfig(this IServiceCollection services)
    {
        services.AddCors(option => 
            option.AddPolicy(Policies.LOCAL, policy =>
                policy.WithOrigins([SD.AuthService_Url])
                    .WithMethods(["GET, POST, PATCH, DELETE"])
                    .WithHeaders(["accept", "content-type", "origin", "X-InclineCount"])
            )
        );

        return services;
    }
}
