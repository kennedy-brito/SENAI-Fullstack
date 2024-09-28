using Exo.WebApi.Contexts;
using Exo.WebApi.Models;

namespace Exo.WebApi.Repositories;

public class ProjetoRepository
{
  private readonly ExoContext _context;

  public ProjetoRepository(ExoContext context)
  {
    _context = context;

  }

  //GET todos
  public List<Projeto> Listar()
  {
    return _context.Projetos.ToList();
  }

  //POST
  public void Cadastrar(Projeto projeto)
  {
    _context.Projetos.Add(projeto);
    _context.SaveChanges();
  }

  //GET por id
  public Projeto BuscarPorId(int id)
  {
    return _context.Projetos.Find(id);
  }

  //PUT/PATCH
  public void Atualizar(int id, Projeto projeto)
  {
    Projeto projetoBuscado = _context.Projetos.Find(id);
    if (projetoBuscado is not null)
    {
      projetoBuscado.NomeDoProjeto = projeto.NomeDoProjeto;
      projetoBuscado.Area = projeto.Area;
      projetoBuscado.Status = projeto.Status;
    }

    _context.Projetos.Update(projetoBuscado);
    _context.SaveChanges();
  }

  //DELETE
  public void Deletar(int id)
  {
    Projeto projetoBuscado = _context.Projetos.Find(id);
    _context.Projetos.Remove(projetoBuscado);
    _context.SaveChanges();
  }
}