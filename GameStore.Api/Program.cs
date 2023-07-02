
using GameStore.Api.Data;
using GameStore.Api.Endpoints;
using GameStore.Api.Repositories;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSingleton<IGamesRepository,InMemGameRepository>();
// builder.Services.AddRepositories(builder.Configuration);
var app = builder.Build();

// app.Services.InitializeDb();
app.MapGamesEndpoints();
app.Run();

