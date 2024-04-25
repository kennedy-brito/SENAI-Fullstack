using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LHPet.Models
{
  [Table("Cliente")] //specifies what table the class corresponds to
  public class Cliente
  {
    [Key] // inform what attribute corresponds to the primary keys of the db
    [Column("Id")] //specifies what column of the db this attribute corresponds
    [Display(Name = "Id")]
    public int Id {get;set;}

    [Column("Nome")]
    [Display(Name = "Nome")]
    public string Nome {get;set;}
    
    [Column("Cpf")]
    [Display(Name = "Cpf")]
    public string Cpf{get;set;}
    
    [Column("Email")]
    [Display(Name = "Email")]
    public string Email {get;set;}
    
    [Column("Paciente")]
    [Display(Name = "Paciente")]
    public string Paciente {get;set;}
  }
}