namespace Pagamento
{
  public abstract class Pagamento
  {
    DateTime dateTime {get;set;}
    protected float Valor
    {
      get {return Valor;}
      set
      {
        if (value <0)
          return;
        
        Valor = value;
      }
    }

    public string Cancelar(){
      return "Cancelado";
    }
  }   
}