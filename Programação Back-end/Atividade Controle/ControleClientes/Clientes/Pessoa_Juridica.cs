namespace Atividade
{
  public class Pessoa_Juridica : Clientes
  {
    public string cnpj{get;set;}
    public string ie{get;set;}
        public override void Pagar_Imposto(float v)
        {
            this.valor = v;
            this.valor_imposto = this.valor * 0.20f;
            this.total = valor + valor_imposto;
        }
    }
}