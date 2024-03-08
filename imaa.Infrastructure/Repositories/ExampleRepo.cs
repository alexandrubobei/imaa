using imaa.Domain.Repositories;

namespace imaa.Infrastructure.Repositories;

public class ExampleRepo : IExampleRepo
{
    public async Task<int> GetSomeDomain()
    {
        return 1;
    }
}
