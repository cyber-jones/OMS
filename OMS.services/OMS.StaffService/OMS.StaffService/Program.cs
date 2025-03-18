using Microsoft.EntityFrameworkCore;
using OMS.StaffService.Config;
using OMS.StaffService.Data;
using OMS.StaffService.HttpRepo.Implemenation;
using OMS.StaffService.HttpRepo.Implementation;
using OMS.StaffService.HttpRepo.Interfaces;
using OMS.StaffService.Utils;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("staff")));

SD.UserService_Url = builder.Configuration["OMS.UserService_devUrl"]!;

builder.Services.AddHttpContextAccessor();
builder.Services.AddHttpClient();
builder.Services.AddHttpClient<IUserService, UserService>();

builder.Services.AddScoped<IHttpService, HttpService>();
builder.Services.AddScoped<IUserService, UserService>();

builder.Services.AddAutoMapper(typeof(AutoMapperConfig));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
