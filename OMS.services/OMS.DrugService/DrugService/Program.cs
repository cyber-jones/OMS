using DrugService.Config;
using DrugService.Data;
using Microsoft.EntityFrameworkCore;
using OMS.DrugService.Config;
using OMS.DrugService.Repository.Implementation;
using OMS.DrugService.Repository.Interfaces;
using OMS.DrugService.Utils;
using Serilog;
using Stripe;








var builder = WebApplication.CreateBuilder(args);

SD.Client_Dev_Url = builder.Configuration["OMS.Client_devUrl"]!;
SD.Client_Production_Url = builder.Configuration["OMS.Client_productionUrl"]!;

builder.Services.Configure<StripeSettings>(builder.Configuration.GetSection("Stripe"));
// Add services to the container.
Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Information()
    .WriteTo.File("Logs/log.txt", rollingInterval: RollingInterval.Hour)
    .CreateLogger();

builder.Host.UseSerilog();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("drug")));


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

StripeConfiguration.ApiKey = builder.Configuration.GetSection("Stripe:Secret_Key").Get<string>();

app.MapControllers();

app.Run();

// "drug": "Server=db21791.public.databaseasp.net; Database=db21791; User Id=db21791; Password=Zc9-%Qy8w@5H; Encrypt=True; TrustServerCertificate=True; MultipleActiveResultSets=True;"