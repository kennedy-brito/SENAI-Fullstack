namespace Pagamento
{
  public class Boleto : Pagamento
  {
    public Boleto()
    {
        this.CodigoDeBarras = "";
    }

    private string CodigoDeBarras
    { get; set; }

    public void Registrar()
    {
      Valor -= Valor * 0.12f;
    }
  }
}