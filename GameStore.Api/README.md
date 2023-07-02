## Game Store API

### Secrets management
```powershell
dotnet user-secrets init
```
```
dotnet user-secrets set "ConnectionStrings:GameStoreContext" "Host=DB_HOST;Username=DB_USER;Password=DB_PASSWORD;Database=DB_NAME"
```
```
dotnet user-secrets list
```

### Packages
```
dotnet  add package Npgsql.EntityFrameworkCore.PostgreSQL
dotnet  add package Npgsql.EntityFrameworkCore.PostgreSQL.Desig

```

## Tools
```
dotnet tool install --global dotnet-ef
```

## Migrations
```
dotnet ef migrations add InitialCreate -o ./Data/Migrations
dotnet ef database update
```