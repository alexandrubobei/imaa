using MediatR;

namespace imaa.Application.Common;

public class BaseCommand<T, U> : IRequest<U>
{
    public T Dto { get; set; }
}
