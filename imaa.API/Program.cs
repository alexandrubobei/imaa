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

// Route configuration
app.ConfigureWeatherRoutes();

app.Run();
