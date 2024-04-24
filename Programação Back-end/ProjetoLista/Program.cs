var cl1 = new ClientesPF{id = 1, nome="Ana"};

List<ClientesPF> lista = new List<ClientesPF>();

lista.Add(new ClientesPF());

lista.Add(cl1);

lista.Add(new ClientesPF{id=2, nome="Carlos"});


foreach (var aux in lista)
{
  Console.WriteLine($"Cliente: {aux.nome}");
}