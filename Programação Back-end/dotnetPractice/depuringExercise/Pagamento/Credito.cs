using System.Reflection.Metadata.Ecma335;

namespace Pagamento
{
  public class Credito : Cartao
  {
    private float limite
    {
      set{limite = value;}
      get => limite;
    }

    public Credito()
    {
      this.limite = 3000f;
      // .Cartao();

    }

    public void Pagar(float valor)
    {
      Console.WriteLine("Quantas parcelas foi dividido?");

      int quantasParcelas= Convert.ToInt32(Console.ReadLine()??"1");

      switch (quantasParcelas)
      {
        case <1:
          goto default;

        case <= 6:
          valor*=1.05f;
          break;

        case <= 12:
          valor*=1.08f;
          break;
          

        default:
          Console.WriteLine("Insira um número de parcelas validos");
          break;
      }

      this.limite -= valor;
    }
  }
}