namespace CoffeeMaker
{
  public class MaquinaCafe
  {
    int AcucarDisponivel { get; set; }

    public MaquinaCafe()
    {
      AcucarDisponivel = 100;
    }

    public void FazerCafe()
    {
      AcucarDisponivel -= 10;

      Console.WriteLine($"Café feito com 10 gramas");
    }
    public void FazerCafe(int gramas)
    {
      AcucarDisponivel -= gramas;

      Console.WriteLine($"Café feito com {gramas} gramas");
    }
  }
}