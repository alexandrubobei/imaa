using System.Text;
using imaa.Domain.Repositories;
using imaa.Domain.Repositories.Imports;
using imaa.Infrastructure.Repositories;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace imaa.Infrastructure;

public static class Module
{
    public static void RegisterInfrastructureDependencies(this IServiceCollection services, string tokenKey)
    {
        services.AddTransient<IExampleRepo, ExampleRepo>();
        services.AddTransient<IExcelImportRepository, ExcelImportRepository>();
        // services
        //     .AddIdentityCore<ApplicationUser>(options => options.Password.RequireNonAlphanumeric = false)
        //     .AddRoles<ApplicationRole>()
        //     .AddRoleManager<RoleManager<ApplicationRole>>()
        //     .AddSignInManager<SignInManager<ApplicationUser>>()
        //     .AddRoleValidator<RoleValidator<ApplicationRole>>()
        //     .AddEntityFrameworkStores<BudgetManagerDbContext>();

        // services
        //     .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
        //     .AddJwtBearer
        //     (
        //         options => options.TokenValidationParameters = new TokenValidationParameters
        //         {
        //             ValidateIssuerSigningKey = true,
        //             IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenKey)),
        //             ValidateIssuer = false,
        //             ValidateAudience = false
        //         }
        //     );
    }
}
