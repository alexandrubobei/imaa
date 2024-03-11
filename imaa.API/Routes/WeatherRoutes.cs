using System.Text.Json;
using imaa.Application.Example.Commands;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace imaa.API.Routes;

public static class WeatherRoutes
{
    public static void ConfigureWeatherRoutes(this WebApplication app)
    {
        app.MapGet("/weatherforecast", async (HttpResponse response, HttpContext context) =>
        {
            var mediator = context.RequestServices.GetRequiredService<IMediator>();
            var command = new ExampleCommand();
            var forecast = await mediator.Send(command);
            await context.Response.WriteAsJsonAsync(forecast);
        })
        .WithName("GetWeatherForecast");

        app.MapPost("/processdata", async (HttpResponse response, HttpContext context, object todo) =>
            {
                return Results.Created($"/asd/{1}", todo);
            })
            .WithName("ProcessData")
            .WithOpenApi();

        app.MapGet("/testBadRequestException", async (HttpResponse response, HttpContext context) =>
        {
            throw new BadHttpRequestException("");
        })
        .WithName("testBadRequestException");

        app.MapGet("/testUnauthorizedException", async (HttpResponse response, HttpContext context) =>
        {
            throw new UnauthorizedAccessException();
        })
        .WithName("testUnauthorizedException");

    }
}
