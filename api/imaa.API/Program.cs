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
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new() { Title = $"{builder.Environment.ApplicationName} v1", Version = "v1" });
    options.SwaggerDoc("v2", new() { Title = $"{builder.Environment.ApplicationName} v2", Version = "v2" });
});
var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger(options =>
    {
        options.SerializeAsV2 = true;
    });
    app.UseSwaggerUI(options =>
    {
        options.EnableTryItOutByDefault();
        options.SwaggerEndpoint("/swagger/v1/swagger.json", $"{builder.Environment.ApplicationName} v1");
        options.SwaggerEndpoint("/swagger/v2/swagger.json", $"{builder.Environment.ApplicationName} v2");
    });
}

app.UseHttpsRedirection();

// Route configuration
app.ConfigureWeatherRoutes();

app.Run();