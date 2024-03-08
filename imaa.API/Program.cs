using imaa.API.Routes;
using imaa.Application;
using imaa.Persistence;

var builder = WebApplication.CreateBuilder(args);

// Application dependencies
builder.Services.RegisterApplicationDependencies();
builder.Services.RegisterPersistenceDependencies("");

// Platform dependencies
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Route configuration
app.ConfigureWeatherRoutes();

app.Run();
