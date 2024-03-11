using MediatR;

namespace imaa.Application.Common;

public class BaseCommand<T, U> : IRequest<U>
{
    protected BaseCommand(T dto)
    {
        Dto = dto;
    }

    public T Dto { get; set; }
}
