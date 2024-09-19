USE clinica_medica;
GO

CREATE PROCEDURE Resumo_Pagamentos @nome_pac varchar(40)
AS
BEGIN
	SELECT p.nome_paciente, SUM(valor_pagar)[total pago]
	FROM	paciente p INNER JOIN 
			consulta c ON c.cpf_pacienteFK = p.cpf INNER JOIN
			pedido_exame pe ON pe.numero_consultaFK = c.numero_consulta
	WHERE p.nome_paciente = @nome_pac
	GROUP BY p.nome_paciente

END

EXEC Resumo_Pagamentos 'Leonardo Ribeiro'