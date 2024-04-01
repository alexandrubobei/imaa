using System.Text.Json;
using imaa.Application.Example.Commands;
using imaa.Application.Example.DTOs;
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

        app.MapGet("/testBadRequestException", () => { throw new BadHttpRequestException(""); })
            .WithName("testBadRequestException");

        app.MapGet("/testUnauthorizedException", () => { throw new UnauthorizedAccessException(); })
            .WithName("testUnauthorizedException");
    }
}
