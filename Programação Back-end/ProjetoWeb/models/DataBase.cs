using Microsoft.Data.SqlClient;

class DataBase
{
  private List<Person> list = [];

  public void ChargeDatabase()
  {
    //that's the string with the data of the connection
    var builder = new SqlConnectionStringBuilder(
      "User ID=sa;Password=123456;"+
      "Server=WILLIAN\\SQLEXPRESS;"+
      "Database=projetoclientes;" +
      "Trusted_Connection=False;"+
      "TrustServerCertificate=true;"
    );

    //were building the connection
    using (var conn = new SqlConnection(builder.ConnectionString))
    {
      //the sql query
      var sql = " SELECT * FROM clientes";

      //building the command to execute
      using(var command = new SqlCommand(sql, conn))
      {

        //opening the connection
        conn.Open();
        //executing the query
        using (var dataReader = command.ExecuteReader())
        {
          
          //reading the rows
          while(dataReader.Read())
          {
            //populating the list
            list.Add(
              new Person{
                id=Convert.ToInt32(dataReader["id"]),
                name=Convert.ToString(dataReader["nome"])
              }
              
            );
          }
        }
      }
    }
  }

  public List<Person> GetList()
  {
    return list;
  }
}