using imaa.Application.Example.Commands;
using imaa.Domain.Repositories;
using MediatR;

namespace imaa.Application.Example.Handlers;

public class ExampleCommandHandler(IExampleRepo _exampleRepo) : IRequestHandler<ExampleCommand, int>
{
    public async Task<int> Handle(ExampleCommand request, CancellationToken cancellationToken)
    {
        return await _exampleRepo.GetSomeDomain();
    }
}
