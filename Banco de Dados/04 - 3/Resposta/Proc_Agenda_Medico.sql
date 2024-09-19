USE clinica_medica;
GO

CREATE PROCEDURE Agenda_Medicos 
AS
BEGIN
	SELECT	m.crm, m.nome_medico, m.especialidade, 
			c.numero_consulta, c.data_consulta, c.horario_consulta,
			p.nome_paciente, p.cpf, p.nome_plano, p.tipo_plano
	FROM consulta c, medico m, paciente p
	WHERE	m.crm = c.crm_medicoFK AND
			c.cpf_pacienteFK = p.cpf
	ORDER BY m.nome_medico, c.data_consulta, c.horario_consulta
END
-- drop procedure Agenda_Medicos
EXEC Agenda_Medicos