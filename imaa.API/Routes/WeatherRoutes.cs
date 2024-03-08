using System.Text.Json;
using imaa.Application.Example.Commands;
using MediatR;

namespace imaa.API.Routes;

public static class WeatherRoutes
{
    public static void ConfigureWeatherRoutes(this WebApplication app)
    {
        app.MapGet("/weatherforecast", async context =>
            {
                var mediator = context.RequestServices.GetRequiredService<IMediator>();
                var command = new ExampleCommand();
                var forecast = await mediator.Send(command);
                await context.Response.WriteAsJsonAsync(forecast);
            })
            .WithName("GetWeatherForecast")
            .WithOpenApi();

        app.MapPost("/processdata", async context =>
            {
                using var reader = new StreamReader(context.Request.Body);
                var body = await reader.ReadToEndAsync();
                var data = JsonSerializer.Deserialize<ExampleCommand>(body, new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });

                if (data != null)
                {
                    var mediator = context.RequestServices.GetRequiredService<IMediator>();

                    await mediator.Send(new ExampleCommand());
                    await context.Response.WriteAsync("Data processed successfully.");
                }
                else
                {
                    context.Response.StatusCode = 400; // Bad Request
                    await context.Response.WriteAsync("Invalid data received in the request body.");
                }
            })
            .WithName("ProcessData")
            .WithOpenApi();
    }
}
