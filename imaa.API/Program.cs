using imaa.API.ExceptionHandler;
using imaa.API.Routes;
using imaa.Application;
using imaa.Application.Example.Commands;
using imaa.Infrastructure;
using imaa.Persistence;
using MediatR;

var builder = WebApplication.CreateBuilder(args);

// Application dependencies
builder.Services.RegisterApplicationDependencies();
builder.Services.RegisterPersistenceDependencies("");
builder.Services.RegisterInfrastructureDependencies("");

// Platform dependencies
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddExceptionHandler<GlobalExceptionHandler>();
builder.Services.AddExceptionHandler<GeneralExceptionHandler>();
builder.Services.AddProblemDetails();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Your API V1");
    });
}

app.UseHttpsRedirection();

app.UseExceptionHandler();

// Route configuration
app.ConfigureWeatherRoutes();

app.Run();
