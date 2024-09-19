USE clinica_medica;
GO

CREATE PROCEDURE Exames_Solicitados
AS
BEGIN
	SELECT m.nome_medico, m.especialidade, m.crm,
			c.numero_consulta,
			p.numero_pedido, p.data_exame, 
			e.codigo, e.especificacao
	FROM	medico m INNER JOIN consulta c ON m.crm = c.crm_medicoFK
			INNER JOIN pedido_exame p ON c.numero_consulta = p.numero_consultaFK INNER JOIN exame e ON e.codigo= p.codigo_exameFK
	ORDER BY m.nome_medico, p.data_exame
END

--DROP PROCEDURE Exames_Solicitados

EXEC Exames_Solicitados