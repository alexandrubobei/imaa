using System.Reflection;
using MediatR;
using Microsoft.Extensions.DependencyInjection;

namespace imaa.Application;

public static class Module
{
    public static void RegisterApplicationDependencies(this IServiceCollection services)
    {
        services.AddAutoMapper(Assembly.GetExecutingAssembly());
        services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(Assembly.GetExecutingAssembly()));
    }
}
