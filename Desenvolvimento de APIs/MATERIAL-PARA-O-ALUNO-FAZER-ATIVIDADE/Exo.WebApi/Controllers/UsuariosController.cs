using Exo.WebApi.Models;
using Exo.WebApi.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

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
  // [HttpPost]
  // public IActionResult Cadastrar(Usuario usuario)
  // {
  //   _usuarioRepository.Cadastrar(usuario);
  //   return StatusCode(201);
  // }

  public IActionResult Post(Usuario usuario)
  {
    Usuario usuarioBuscado = _usuarioRepository.Login(usuario.Email, usuario.Senha);

    if (usuarioBuscado is null)
    {
      return NotFound("E-mail ou senha inválidos!");
    }

    //se o usuário for encontrado segue a criação do token

    //define os dados que serão definidos no token - payload
    var claims = new[]
    {
      //armazena na claim o email usuário autenticado
      new Claim(JwtRegisteredClaimNames.Email, usuarioBuscado.Email),

      //armazena na claim o id do usuário autenticado
      new Claim(JwtRegisteredClaimNames.Jti, usuarioBuscado.Id.ToString())
    };

    //define a chave de acesso ao token
    var key = new SymmetricSecurityKey(
      System.Text.Encoding.UTF8.GetBytes("exoapi-chave-autenticacao")
      );

    //define as credenciais do token
    var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

    //gera o token
    var token = new JwtSecurityToken(
      issuer: "exoapi.webapi", //Emissor do token
      audience: "exoapi.webapi", //destinatário do token
      claims: claims, //dados definidos acima
      expires: DateTime.Now.AddMinutes(30), // tempo de expiração
      signingCredentials: creds //credenciais do token
    );

    //retorna ok com o token
    return Ok(
      new { token = new JwtSecurityTokenHandler().WriteToken(token) }
    );
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
  [Authorize]
  [HttpPut("{id}")]
  public IActionResult Atualizar(int id, Usuario usuario)
  {
    _usuarioRepository.Atualizar(id, usuario);
    return StatusCode(204);
  }
  // delete -> /api/usuarios/{id}
  [Authorize]
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