using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace imaa.Persistence;

public static class DbSeed
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using var context = new ImmaDbContext
        (
            serviceProvider.GetRequiredService<DbContextOptions<ImmaDbContext>>()
        );

        // if (context.TransactionTypes.Any())
        // {
        //     return;
        // }
        //
        // context.TransactionTypes.AddRange
        // (
        //     new TransactionType
        //     {
        //         Name = "Income",
        //         CreatedAt = DateTime.Now,
        //         UpdatedAt = DateTime.Now
        //     },
        //     new TransactionType
        //     {
        //         Name = "Expense",
        //         CreatedAt = DateTime.Now,
        //         UpdatedAt = DateTime.Now
        //     }
        // );

        context.SaveChanges();
    }
}
