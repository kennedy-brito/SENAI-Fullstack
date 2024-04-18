namespace Jogador
{
  public class Jogador
  {

    public string? Nome;
    public string? Posicao; 
    public DateOnly? DataNascimento{get;set;}
    public string? Nacionalidade;
    public string? Altura;
    public string? Peso;

    public void ImprimirDados()
    {
      string dados = $"Nome: {Nome}\nPosição: {Posicao}\nData de Nascimento: {DataNascimento}\nNacionalidade: {Nacionalidade}\nAltura: {Altura}\nPeso: {Peso}";
    
      Console.WriteLine(dados);
    }

    public int? GetIdade(DateOnly date)
    {
      int? idade = 0;
      if(date.Month < DataNascimento?.Month)
      {
        idade = date.Year - DataNascimento?.Year -1;
      }
      else if (date.Month == DataNascimento?.Month && date.Day >= DataNascimento?.Day)
      {
        idade = date.Year - DataNascimento?.Year -1;
      }else
      {
        idade = date.Year - DataNascimento?.Year -1;
      }

      return idade;
    }

    public int timeTillRetirement(DateOnly date)
    {
      int age = GetIdade(date)??30;
      if(Posicao == "defesa")
        return 40-age;
      if(Posicao == "meio-campo")
        return 38-age;
      if(Posicao == "atacante")
        return 35-age;

      return -1;
    }


  }


}