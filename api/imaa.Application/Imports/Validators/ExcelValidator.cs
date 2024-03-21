using FluentValidation;
using imaa.Application.Example.DTOs.Imports;

namespace imaa.Application.Validators;

public class ExcelValidator : AbstractValidator<ExcelImportDto>
{
    public ExcelValidator()
    {
        RuleFor(t => t.Name).NotEmpty().WithMessage("Name should not be empty");
    }
}
