using GameStore.Api.Entities;

namespace GameStore.Api.Repositories;



public class InMemGameRepository : IGamesRepository
{
    private List<Game> games = new(){
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

    public InMemGameRepository()
    {
    }

    public IEnumerable<Game> GetAll()
    {
        return games;
    }
    public Game? Get(int id)
    {
        return games.Find(game => game.Id == id);
    }
    public void Create(Game game)
    {
        game.Id = games.Max(game => game.Id) + 1;
        games.Add(game);
    }
    public void Update(Game updatedGame)
    {
        int index = games.FindIndex(game => game.Id == updatedGame.Id);

        games[index] = updatedGame;
    }
    public void Delete(int id)
    {
        int index = games.FindIndex(game => game.Id == id);

        games.RemoveAt(index);
    }
}