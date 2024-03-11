using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace imaa.Persistence;

public static class Module
{
    public static IServiceCollection RegisterPersistenceDependencies(this IServiceCollection services, string connectionString)
    {
        services.AddDbContext<ImmaDbContext>(options => options.UseSqlServer(connectionString));
        services.AddScoped<IImmaDbContext>(provider => provider.GetService<ImmaDbContext>());

        return services;
    }
}
