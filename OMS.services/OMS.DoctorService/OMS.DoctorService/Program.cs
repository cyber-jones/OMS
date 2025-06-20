using Microsoft.EntityFrameworkCore;
using OMS.DoctorService.Config;
using OMS.DoctorService.Data;
using OMS.DoctorService.HttpRepo.Implementation;
using OMS.DoctorService.HttpRepo.Interfaces;
using OMS.DoctorService.Utils;
using Serilog;








var builder = WebApplication.CreateBuilder(args);

SD.AuthService_Dev_Url = builder.Configuration["OMS.AuthService_devUrl"]!;
SD.Client_Dev_Url = builder.Configuration["OMS.Client_devUrl"]!;
SD.AuthService_Production_Url = builder.Configuration["OMS.AuthService_productionUrl"]!;
SD.Client_Production_Url = builder.Configuration["OMS.Client_productionUrl"]!;

// Add services to the container.
Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Information()
    .WriteTo.File("Logs/log.txt", rollingInterval: RollingInterval.Hour)
    .CreateLogger();

builder.Host.UseSerilog();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("doctor")));


builder.Services.AddHttpContextAccessor();
builder.Services.AddHttpClient();
builder.Services.AddHttpClient<IAuthService, AuthService>();

builder.Services.AddScoped<IHttpService, HttpService>();
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<ILogService, LogService>();

builder.Services.AddAutoMapper(typeof(AutoMapperConfig));


builder.Services.AddCorsConfig();
builder.Services.AddAuthConfig(builder.Configuration);
//Map Role Claims for Jwt
builder.Services.MapJwtDataConfig();

builder.Services.AddAuthorization();
builder.Services.AddControllers();



// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerConfig();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(Policies.LOCAL);

// app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();

// "doctor": "Data Source=CYBER-DECK\\SQLEXPRESS01;Initial Catalog=OMS.DoctorService;Integrated Security=True;Trust Server Certificate=True"
// "doctor": "Server=db21956.public.databaseasp.net; Database=db21956; User Id=db21956; Password=8n%Gb#M2B9=d; Encrypt=True; TrustServerCertificate=True; MultipleActiveResultSets=True;"