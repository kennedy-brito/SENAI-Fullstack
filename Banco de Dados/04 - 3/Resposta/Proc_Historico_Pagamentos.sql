USE clinica_medica;
GO

CREATE PROCEDURE Historico_Pagamentos
AS
BEGIN
	SELECT	p.nome_paciente, p.cpf,
			c.numero_consulta, c.data_consulta, 
			pe.data_exame, pe.valor_pagar,
			e.codigo, e.especificacao
	FROM	pedido_exame pe INNER JOIN 
			exame e ON e.codigo = pe.codigo_exameFK INNER JOIN 
			consulta c ON c.numero_consulta = pe.numero_consultaFK INNER JOIN
			paciente p ON p.cpf = c.cpf_pacienteFK
	ORDER BY p.nome_paciente, pe.data_exame
END

EXEC Historico_Pagamentos
