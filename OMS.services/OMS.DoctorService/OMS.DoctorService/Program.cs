using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using OMS.DoctorService.Config;
using OMS.DoctorService.Data;
using OMS.DoctorService.HttpRepo.Implementation;
using OMS.DoctorService.HttpRepo.Interfaces;
using OMS.DoctorService.Utils;










var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("doctor")));

string OMS_AuthService_devUrl = builder.Configuration["OMS.AuthService_devUrl"]!;
SD.AuthService_Url = OMS_AuthService_devUrl;

builder.Services.AddHttpContextAccessor();
builder.Services.AddHttpClient();
builder.Services.AddHttpClient<IUserService, UserService>();

builder.Services.AddScoped<IHttpService, HttpService>();
builder.Services.AddScoped<IUserService, UserService>();

builder.Services.AddAutoMapper(typeof(AutoMapperConfig));



builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
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
        ValidIssuer = builder.Configuration.GetValue<string>("JWT:issuer"),
        ValidAudience = builder.Configuration.GetValue<string>("JWT:audience"),
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration.GetValue<string>("JWT:accessTokenSecret")!))
    };
});



//Map Role Claims for Jwt
builder.Services.Configure<JwtBearerOptions>(JwtBearerDefaults.AuthenticationScheme, options =>
{
    options.TokenValidationParameters.RoleClaimType = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"; //  Explicitly tell ASP.NET to recognize "roles"
    options.TokenValidationParameters.NameClaimType = ClaimValueTypes.Email;
 });

builder.Services.AddAuthorization();
builder.Services.AddControllers();



// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(
    options =>
    {
        options.AddSecurityDefinition(JwtBearerDefaults.AuthenticationScheme, new OpenApiSecurityScheme
        {
            Name = "Authorization",
            In = ParameterLocation.Header,
            Type = SecuritySchemeType.ApiKey,
            BearerFormat = "JWT",
            Scheme = JwtBearerDefaults.AuthenticationScheme,
            Description = "Write the word Bearer give a space and paste the token `Bearer {Token}`"
        });

        options.AddSecurityRequirement(new OpenApiSecurityRequirement
        {
            {
                new OpenApiSecurityScheme
                {
                    Name = JwtBearerDefaults.AuthenticationScheme,
                    In = ParameterLocation.Header,
                    Reference = new OpenApiReference
                    {
                        Id = JwtBearerDefaults.AuthenticationScheme,
                        Type = ReferenceType.SecurityScheme
                    }
                },

                new List<string>()
            }
        });
    }
);



builder.Services.AddCors(option => 
    option.AddPolicy(Policies.LOCAL, policy =>
        policy.WithOrigins([OMS_AuthService_devUrl])
            .WithMethods(["GET, POST, PATCH, DELETE"])
            .WithHeaders(["accept", "content-type", "origin", "X-InclineCount"])
    )
);





var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(Policies.LOCAL);

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
