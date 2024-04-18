namespace Pagamento
{
  public class Debito : Cartao
  {
    private float saldo
    {
      set;get;
    }

    public Debito()
    {
      this.saldo = 600f;
    }
    
    public void Pagar(float valor)
    {
      this.saldo -= valor;
    }
  }
}
