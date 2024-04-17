var caminhoDoArquivo = @".\arquivo.txt";

StreamWriter stream = new(caminhoDoArquivo);

stream.WriteLine("Texto Escrito");

stream.Close();

StreamReader reader = new(caminhoDoArquivo);

Console.WriteLine(reader.ReadLine());
