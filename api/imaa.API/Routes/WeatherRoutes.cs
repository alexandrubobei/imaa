using System.Text.Json;
using imaa.Application.Example.Commands;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace imaa.API.Routes;
class Todo
{
}

class ToDoDb
{
}

public static class WeatherRoutes
{
    public static void ConfigureWeatherRoutes(this WebApplication app)
    {
        app.MapGet("/hello", () => "Hello named route")
            .WithName("hi");

        app.MapGet("/weatherforecast", async (HttpResponse response, HttpContext context)  =>
            {
                var mediator = context.RequestServices.GetRequiredService<IMediator>();
                var command = new ExampleCommand();
                var forecast = await mediator.Send(command);
                await context.Response.WriteAsJsonAsync(forecast);
            })
            .WithName("GetWeatherForecast");



        app.MapPost("/todoitems", async (Todo todo, IMediator mediator) =>
        {
            var command = new ExampleCommand();
            await mediator.Send(command);

            return Results.Created("/todoitems/1", todo);
        });

        app.MapPost("/processdata", async (HttpResponse response, HttpContext context, object todo) =>
            {
                return Results.Created($"/asd/{1}", todo);
            })
            .WithName("ProcessData")
            .WithDisplayName("ProcessData")
            .WithOpenApi();

    }
}
