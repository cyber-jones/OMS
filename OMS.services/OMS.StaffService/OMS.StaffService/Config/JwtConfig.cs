using System;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace OMS.StaffService.Config;

internal static class JwtConfig
{
    public static IServiceCollection AddAuthConfig(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
        .AddJwtBearer(options =>
        {
            options.SaveToken = true;
            options.RequireHttpsMetadata = false;
            options.TokenValidationParameters = new TokenValidationParameters()
            {
                // RoleClaimType = "roles",
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                ValidIssuer = configuration.GetValue<string>("JWT:issuer"),
                ValidAudience = configuration.GetValue<string>("JWT:audience"),
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration.GetValue<string>("JWT:accessTokenSecret")!))
            };
        });
        
        return services;
    }

    public static IServiceCollection MapJwtDataConfig(this IServiceCollection services)
    {
        services.Configure<JwtBearerOptions>(JwtBearerDefaults.AuthenticationScheme, options =>
        {
            options.TokenValidationParameters.RoleClaimType = ClaimsIdentity.DefaultRoleClaimType; //  Explicitly tell ASP.NET to recognize "roles"
            options.TokenValidationParameters.NameClaimType = ClaimValueTypes.Email;
        });
        
        return services;
    }
}

