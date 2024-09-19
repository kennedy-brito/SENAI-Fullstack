-- CREATE DATABASE clinica_medica;
-- USE clinica_medica;

/*
*
* DEFINIÇÃO DAS TABELAS
*
*
*/

CREATE TABLE paciente(
	cpf VARCHAR(14) PRIMARY KEY,
	nome_paciente VARCHAR(40),
	telefone VARCHAR(14),
	numero_plano INT,
	nome_plano VARCHAR(20),
	tipo_plano VARCHAR(10)
)
GO

CREATE TABLE medico(
	crm INT PRIMARY KEY,
	nome_medico VARCHAR(30),
	especialidade VARCHAR(20)
)
GO
CREATE TABLE consulta(
	numero_consulta INT PRIMARY KEY IDENTITY,
	data_consulta DATE,
	horario_consulta TIME,
	cpf_pacienteFK VARCHAR(14) FOREIGN KEY REFERENCES paciente(cpf),
	crm_medicoFK INT 
		FOREIGN KEY 
		REFERENCES medico(crm) 
		ON DELETE CASCADE
)
GO

CREATE TABLE exame(
	codigo INT PRIMARY KEY,
	especificacao VARCHAR(20),
	preco MONEY
)
GO

CREATE TABLE pedido_exame(
	numero_pedido INT PRIMARY KEY IDENTITY,
	resultado VARCHAR(40),
	data_exame DATE,
	valor_pagar MONEY,
	numero_consultaFK INT 
		FOREIGN KEY 
		REFERENCES consulta(numero_consulta)
		ON DELETE CASCADE,
	codigo_exameFK INT 
		FOREIGN KEY 
		REFERENCES exame(codigo)
		ON DELETE CASCADE
)
