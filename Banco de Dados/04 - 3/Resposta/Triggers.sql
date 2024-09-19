USE clinica_medica;
GO

CREATE TRIGGER Atualiza_pedido_exame
	ON pedido_exame
	AFTER INSERT
	AS
BEGIN
	SET NOCOUNT ON

	-- dados do exame
	DECLARE @num_pedido AS INTEGER,
			@num_cons AS INTEGER,
			@cod_exam AS INTEGER,
			@preco AS MONEY;


	SELECT 
		@num_pedido = i.numero_pedido, 
		@num_cons = i.numero_consultaFK ,
		@cod_exam = i.codigo_exameFK
		FROM inserted i

	--preço do exame pedido
	SELECT 
		@preco = e.preco
		FROM exame e
		WHERE e.codigo = @cod_exam

	-- identificando o plano do paciente
	DECLARE @plano AS VARCHAR(20),
			@cpf_paciente AS VARCHAR(14);

	SELECT @cpf_paciente = c.cpf_pacienteFK	
	FROM consulta as c
	WHERE c.numero_consulta = @num_cons

	SELECT @plano = p.tipo_plano
	FROM paciente p
	WHERE p.cpf = @cpf_paciente
	
	IF @plano = 'Especial'
	BEGIN
		UPDATE pedido_exame SET valor_pagar = @preco*(1 - 100/100.0)
		WHERE numero_pedido = @num_pedido
	END
	IF @plano = 'Padrão'		
	BEGIN
		UPDATE pedido_exame SET valor_pagar = @preco*(1 - 30.0/100)
		WHERE numero_pedido = @num_pedido
	END

	IF @plano = 'Básico'
	BEGIN
		UPDATE pedido_exame SET valor_pagar = @preco*(1 - 10.0/100)
		WHERE numero_pedido = @num_pedido
	END
	PRINT 'Trigger (Atualiza Pedido de Exame) Encerrada'
END