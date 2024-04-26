using Projeto_Web_Lh_Pets_versão_1;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Projeto Web - LH Pets versão 1");

app.MapGet("/index", (HttpContext _context) =>
{
  _context.Response.Redirect("index.html");
});

app.MapGet("/listaClientes", (HttpContext context) =>
{
  var dba = new Banco();
  dba.imprimirListaConsole();
  context.Response.WriteAsync(dba.GetListaString());
});

app.UseStaticFiles();

app.Run();
