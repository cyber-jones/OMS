using Microsoft.EntityFrameworkCore;
using OMS.PatientService.Config;
using OMS.PatientService.HtpRepo.Implementation;
using OMS.PatientService.HtpRepo.Interfaces;
using OMS.PatientService.Utils;
using Serilog;
using WebApplication1.Config;
using WebApplication1.Data;








var builder = WebApplication.CreateBuilder(args);

SD.AuthService_Dev_Url = builder.Configuration["OMS.AuthService_devUrl"]!;
SD.AuthService_Production_Url = builder.Configuration["OMS.AuthService_productionUrl"]!;
SD.Client_Dev_Url = builder.Configuration["OMS.Client_devUrl"]!;
SD.Client_Production_Url = builder.Configuration["OMS.Client_productionUrl"]!;

// Add services to the container.
Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Information()
    .WriteTo.File("Logs/log.txt", rollingInterval: RollingInterval.Hour)
    .CreateLogger();

builder.Host.UseSerilog();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("patient")));


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

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();


//  "patient": "Data Source=CYBER-DECK\\SQLEXPRESS01;Initial Catalog=OMS.PatientService;Integrated Security=True;Trust Server Certificate=True"
// "patient": "Server=db21967.public.databaseasp.net; Database=db21967; User Id=db21967; Password=5Zw+i@A92p_E; Encrypt=True; TrustServerCertificate=True; MultipleActiveResultSets=True;"