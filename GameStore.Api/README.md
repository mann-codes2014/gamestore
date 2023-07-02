## Game Store API

### Start SQL server
``` powerShell
docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=mySecretPassword" -p 1433:1433 -v mssql-dev-vol:/var/opt/mssql -d --rm --name mssql-dev mcr.microsoft.com/mssql/server:2022-latest
```
### Secrets management
```powershell
dotnet user-secrets init
```
```
dotnet user-secrets set "ConnectionStrings:GameStoreContext" "Server=localhost; Database=GameStore; User Id=sa; Password=mySecretPassword;TrustServerCertificate=True"
```
```
dotnet user-secrets list
```

### Packages
```
dotnet  add package Microsoft.EntityFrameworkCore.SqlServer
dotnet  add package Microsoft.EntityFrameworkCore.Design

```

## Tools
```
dotnet tool install --global dotnet-ef
```

## Migrations
```
dotnet ef migrations add InitialCreate --output \Data\Migrations
dotnet ef database update
```