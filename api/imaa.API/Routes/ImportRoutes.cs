using imaa.Application.Example.Commands.Imports;
using imaa.Application.Example.DTOs.Imports;
using MediatR;

namespace imaa.API.Routes;

public static class ImportRoutes
{
    public static void ConfigureImportRoutes(this WebApplication app)
    {
        app.MapPost("excelImport", async (ExcelImportDto dto, IMediator mediator) =>
        {
            var command = new ExcelImportCommand(dto);
            await mediator.Send(command);

            return Results.Created("/todoitems/1", dto);
        });
    }
}
