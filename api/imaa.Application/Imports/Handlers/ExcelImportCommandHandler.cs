using MediatR;
using FluentValidation;
using Microsoft.Extensions.Logging;

using imaa.Application.Example.Commands.Imports;
using imaa.Application.Example.DTOs.Imports;
using imaa.Domain.Repositories.Imports;

namespace imaa.Application.Imports.Handlers;

public class ExcelImportCommandHandler(
    IExcelImportRepository repository,
    IValidator<ExcelImportDto> validator
) : IRequestHandler<ExcelImportCommand, bool>
{
    public async Task<bool> Handle(ExcelImportCommand request, CancellationToken cancellationToken)
    {
        var validationResult = await validator.ValidateAsync(request.Dto, cancellationToken);

        if (validationResult.IsValid)
        {
            return await repository.ImportFile();
        }

        //logger.LogError($"Validation failed for {nameof(ExcelImportDto)}");

        foreach (var error in validationResult.Errors)
        {
            // logger.LogError(
            //     "Validation for {ErrorPropertyName} failed with {ErrorErrorMessage}",
            //     error.PropertyName, error.ErrorMessage
            // );
        }

        return false;
    }
}
