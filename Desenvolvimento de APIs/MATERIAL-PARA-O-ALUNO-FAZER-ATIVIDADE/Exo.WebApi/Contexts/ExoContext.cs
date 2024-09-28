// conexão banco de dados

using Exo.WebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace Exo.WebApi.Contexts;

public class ExoContext : DbContext
{
  public ExoContext() { }

  public ExoContext(DbContextOptions<ExoContext> options) : base(options) { }

  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  {
    if (!optionsBuilder.IsConfigured)
    {
      //string de conexão
      optionsBuilder.UseSqlServer(
        "User Id=sa;Password=123456;" +
        "Server=localhost\\SQLEXPRESS;" +
        "Database=ExoApi;" +
        "Trusted_Connection=False;" +
        //caso de erro de certificado de confiança adicione
        "TrustServerCertificate=true;");


    }
  }

  public DbSet<Projeto> Projetos { get; set; }
}