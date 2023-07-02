using GameStore.Api.Dtos;
using GameStore.Api.Entities;
using GameStore.Api.Repositories;

namespace GameStore.Api.Endpoints
{
    public static class GamesEndpoints
    {
        const string GetGameNameEndpointName = "GetGame";
        static List<Game> games = new(){
    new Game(){
        Id=1,
        Name="EA Cricket 2007",
        Genre="Sports",
        Price=20.55M,
        ReleaseDate=new DateTime(2007,01,01),
        ImageUri="https://placeholder.co/100"
    },
    new Game(){
        Id=2,
        Name="Counter Strike",
        Genre="Shooting",
        Price=60.55M,
        ReleaseDate=new DateTime(2008,01,01),
        ImageUri="https://placeholder.co/100"
    }
};
        public static RouteGroupBuilder MapGamesEndpoints(this IEndpointRouteBuilder routes)
        {

            var group = routes.MapGroup("/games").WithParameterValidation();
            group.MapGet("/", (IGamesRepository repository) => repository.GetAll().Select(game => game.AsDto()));
            group.MapGet("/{id}", (IGamesRepository repository, int id) =>
            {
                Game? game = repository.Get(id);
                return game is not null ? Results.Ok(game.AsDto()) : Results.NotFound();
            }).WithName(GetGameNameEndpointName);
            group.MapPost("/", (IGamesRepository repository, CreateGameDto gameDto) =>
            {
                Game game = new()
                {
                    Name = gameDto.Name,
                    Genre = gameDto.Genre,
                    Price = gameDto.Price,
                    ReleaseDate = gameDto.ReleaseDate.ToUniversalTime(),
                    ImageUri = gameDto.ImageUri,

                };
                repository.Create(game);
                return Results.CreatedAtRoute(GetGameNameEndpointName, new { id = game.Id }, game);
            });
            group.MapPut("/{id}", (IGamesRepository repository, int id, UpdateGameDto gameDto) =>
            {
                Game? existingGame = repository.Get(id);

                if (existingGame is null)
                {
                    return Results.NotFound();
                }
                existingGame.Name = gameDto.Name;
                existingGame.Genre = gameDto.Genre;
                existingGame.Price = gameDto.Price;
                existingGame.ReleaseDate = gameDto.ReleaseDate.ToUniversalTime();
                existingGame.ImageUri = gameDto.ImageUri;
                repository.Update(existingGame);
                return Results.NoContent();

            });
            group.MapDelete("/{id}", (IGamesRepository repository, int id) =>
            {
                Game? game = repository.Get(id);
                if (game is not null)
                {
                    repository.Delete(id);

                }
                return Results.NoContent();
            });
            return group;
        }

    }
}