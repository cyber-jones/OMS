using Microsoft.EntityFrameworkCore;
using OMS.StaffService.Config;
using OMS.StaffService.Data;
using OMS.StaffService.HttpRepo.Implemenation;
using OMS.StaffService.HttpRepo.Implementation;
using OMS.StaffService.HttpRepo.Interfaces;
using OMS.StaffService.Utils;
using Serilog;








var builder = WebApplication.CreateBuilder(args);
SD.AuthService_DevUrl = builder.Configuration["OMS.AuthService_devUrl"]!;
SD.ClientService_DevUrl = builder.Configuration["OMS.ClientService_devUrl"]!;
SD.AuthService_ProductionUrl = builder.Configuration["OMS.AuthService_productionUrl"]!;
SD.ClientService_ProductionUrl = builder.Configuration["OMS.ClientService_productionUrl"]!;

// Add services to the container.
Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Information()
    .WriteTo.File("Logs/log.txt", rollingInterval: RollingInterval.Hour)
    .CreateLogger();

builder.Host.UseSerilog();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("staff")));


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

// "staff": "Data Source=CYBER-DECK\\SQLEXPRESS01;Initial Catalog=OMS.StaffService;Integrated Security=True;Trust Server Certificate=True"
// "staff" : "Server=db21968.public.databaseasp.net; Database=db21968; User Id=db21968; Password=9z!YgM7+6@Qe; Encrypt=True; TrustServerCertificate=True; MultipleActiveResultSets=True;"