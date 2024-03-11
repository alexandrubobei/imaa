using Microsoft.EntityFrameworkCore;

namespace imaa.Persistence;

public class ImmaDbContext : DbContext, IImmaDbContext
{
    public ImmaDbContext()
    {
    }

    public ImmaDbContext(DbContextOptions options) : base(options)
    {
    }
}
