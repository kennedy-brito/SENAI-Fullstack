namespace Pagamento
{
  public abstract class Cartao : Pagamento
  {
        protected Cartao()
        {
          this.bandeira = "";
          this.numero = "";
          this.titular = "";
          this.cvv = "";
        }

        public string bandeira { get; set; }
    public string numero { get; set; }
    public string titular { get; set; }
    public string cvv { get; set; }

    public string SalvarCartao(){
      return "cartão salvo";
    }
    
  }
}