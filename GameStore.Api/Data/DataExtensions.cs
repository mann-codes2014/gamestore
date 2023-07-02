using GameStore.Api.Repositories;
using Microsoft.EntityFrameworkCore;

namespace GameStore.Api.Data;

public static class DataExtensions
{
    public static void InitializeDb(this IServiceProvider serviceProvider)
    {
        using var scope = serviceProvider.CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<GameStoreContext>();
        dbContext.Database.Migrate();
    }
    public static IServiceCollection AddRepositories(
        this IServiceCollection services,
    IConfiguration configuration
    )
    {
        var connString = configuration.GetConnectionString("GameStoreContext");
        services.AddDbContext<GameStoreContext>(options => options.UseNpgsql(connString));
        services.AddScoped<IGamesRepository, EntityFrameworkRepository>();
        return services;
    }
}