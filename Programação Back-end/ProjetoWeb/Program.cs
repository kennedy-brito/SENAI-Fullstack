var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapGet("/clientes", (string nome) => $"o nome do cliente é {nome}");
// app.MapGet("/produtos", () => $"produtos!!!!");

//here i'm redirecting the /produtos request to my produtos.html static page
app.MapGet(
  "/produtos",
  (HttpContext context) =>
  {
    context.Response.Redirect("produtos.html");
  }
  );

//now we are going to show to the front data that we have in the back
var p1 = new Person { id = 1, name = "zezinho" };

//text/plain
// app.MapGet("/fornecedores", () => $"o fornecedor é {p1.id} - {p1.name}");

// //to change a backend data, we send the data in the url
// app.MapGet("/fornecedoresEnviarDados", (int id, string name) =>
// {
//   p1.id = id;
//   p1.name = name;
//   return "Dados enviados";
// }
// );

//returning html text


app.MapGet("/fornecedores", (HttpContext context) =>
{
  var page = "<h1> Fornecedores</h1>";
  page += $"<h2>fornecedor: {p1.id} - {p1.name}<h2>";

  context.Response.WriteAsync(page);
}
);
//using apis to return json
app.MapGet("/api",
/*
so, what's happening?
here i'm creating a function that creates a new object, 
then i'm casting it to a object class, that is the base class of .NET
*/
(Func<object>)(() => 
{
  return new {
    id = p1.id,
    name = p1.name };
})
);

var db = new DataBase();
db.ChargeDatabase();

app.MapGet("/banco", (HttpContext context)=>
{
  var list = db.GetList();
  var data = "";

  foreach (var item in list)
  {
    data += $"<b>ID</b>: {item.id} - <b>Name: {item.name}</b><br>";
  }

  context.Response.WriteAsync(data);

});

app.UseStaticFiles();
app.Run();
