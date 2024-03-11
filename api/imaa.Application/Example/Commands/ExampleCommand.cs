using imaa.Application.Common;
using imaa.Application.Example.DTOs;

namespace imaa.Application.Example.Commands;

public class ExampleCommand(ExampleDto dto) : BaseCommand<ExampleDto, int>(dto);
