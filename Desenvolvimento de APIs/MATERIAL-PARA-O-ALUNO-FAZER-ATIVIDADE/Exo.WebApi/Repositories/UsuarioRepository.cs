using Exo.WebApi.Contexts;
using Exo.WebApi.Models;

namespace Exo.WebApi.Repositories;

public class UsuarioRepository
{
  private readonly ExoContext _context;

  public UsuarioRepository(ExoContext context)
  {
    _context = context;

  }

  public Usuario Login(string email, string senha)
  {
    return _context.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);
  }
  //GET todos
  public List<Usuario> Listar()
  {
    return _context.Usuarios.ToList();
  }

  //POST
  public void Cadastrar(Usuario usuario)
  {
    _context.Usuarios.Add(usuario);
    _context.SaveChanges();
  }

  //GET por id
  public Usuario BuscaPorId(int id)
  {
    return _context.Usuarios.Find(id);
  }

  //PUT/PATCH
  public void Atualizar(int id, Usuario Usuario)
  {
    Usuario usuarioBuscado = _context.Usuarios.Find(id);
    
    if (usuarioBuscado is not null)
    {
      usuarioBuscado.Email = Usuario.Email;
      usuarioBuscado.Senha = Usuario.Senha;
    }

    _context.Usuarios.Update(usuarioBuscado);
    _context.SaveChanges();
  }

  //DELETE
  public void Deletar(int id)
  {
    Usuario usuarioBuscado = _context.Usuarios.Find(id);
    _context.Usuarios.Remove(usuarioBuscado);
    _context.SaveChanges();
  }
}