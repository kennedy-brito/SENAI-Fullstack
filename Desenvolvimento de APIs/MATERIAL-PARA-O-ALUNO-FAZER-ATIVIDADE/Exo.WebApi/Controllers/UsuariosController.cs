using Exo.WebApi.Models;
using Exo.WebApi.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Exo.WebApi.Controllers;

[Produces("application/json")]
[Route("api/[controller]")]
[ApiController]
public class UsuariosController : ControllerBase
{
  public readonly UsuarioRepository _usuarioRepository;

  public UsuariosController(UsuarioRepository usuarioRepository)
  {
    _usuarioRepository = usuarioRepository;
  }

  // get -> api/usuarios
  [HttpGet]
  public IActionResult Listar()
  {
    return Ok(_usuarioRepository.Listar());
  }

  // post -> api/usuarios
  public IActionResult Cadastrar(Usuario usuario)
  {
    _usuarioRepository.Cadastrar(usuario);
    return StatusCode(201);
  }

  //get -> /api/usuarios/{id}
  [HttpGet("{id}")]
  public IActionResult BuscaPorId(int id)
  {
    Usuario usuario = _usuarioRepository.BuscaPorId(id);

    if (usuario is null)
    {
      return NotFound(); ;

    }

    return Ok(usuario);
  }

  // put -> /api/usuarios/{id}
  // Atualiza.
  [HttpPut("{id}")]
  public IActionResult Atualizar(int id, Usuario usuario)
  {
    _usuarioRepository.Atualizar(id, usuario);
    return StatusCode(204);
  }
  // delete -> /api/usuarios/{id}
  [HttpDelete("{id}")]
  public IActionResult Deletar(int id)
  {
    try
    {
      _usuarioRepository.Deletar(id);
      return StatusCode(204);
    }
    catch (Exception e)
    {
      return BadRequest();
    }
  }

}