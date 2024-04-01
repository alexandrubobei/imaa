using imaa.Application.Common;
using imaa.Application.Example.DTOs.Imports;

namespace imaa.Application.Example.Commands.Imports;

public class ExcelImportCommand(ExcelImportDto dto) : BaseCommand<ExcelImportDto, bool>(dto);
