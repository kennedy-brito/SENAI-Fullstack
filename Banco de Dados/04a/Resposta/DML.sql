USE clinica_medica;
GO
-- inclusão e seleção de dados ---------------------------------------------

-- tabela paciente
INSERT INTO paciente VALUES('012.345.678-90','Leonardo Ribeiro','(11)91234-5678',123456,'Inovamed','Padrão');
INSERT INTO paciente VALUES('123.456.789-12','Bruna Alvez','(15)92345-6789',234567,'Ultramed','Básico');
INSERT INTO paciente VALUES('234.567.890-23','Gilberto Barros','(11)94567-8901',345678,'Inovamed','Especial');
INSERT INTO paciente VALUES('345.678.901-45','Maria Pereira','(12)95678-9012',456789,'Ultramed','Padrão');
INSERT INTO paciente VALUES('456.789.012-34','Arnaldo Coelho','(19)96789-0123',567890,'Inovamed','Especial');

SELECT * FROM paciente;

-- tabela medico
INSERT INTO medico VALUES(102030,'Agildo Nunes','Cardiologia');
INSERT INTO medico VALUES(203040,'Márcia Alvez','Gastrologia');
INSERT INTO medico VALUES(304050,'Roberto Gusmão','Neurologia');
INSERT INTO medico VALUES(405060,'Edna Cardoso','Ortopedia');
INSERT INTO medico VALUES(506070,'Ricardo Souza','Otorrinolaringologia');
INSERT INTO medico VALUES(607080,'Lúcia Marques','Pediatria');
INSERT INTO medico VALUES(708090,'Beatriz Lucena','Oncologia');

SELECT * FROM medico;

-- tabela exame
INSERT INTO exame VALUES(10020,'Hemograma',100.00);
INSERT INTO exame VALUES(10030,'Tomografia',250.00);
INSERT INTO exame VALUES(10040,'Ultrassonografia',550.00);
INSERT INTO exame VALUES(10050,'Ressonância',800.00);
INSERT INTO exame VALUES(10060,'Radiografia',70.00);
INSERT INTO exame VALUES(10070,'Mamografia',150.00);
INSERT INTO exame VALUES(10080,'Endoscopia',300.00);
INSERT INTO exame VALUES(10090,'Colonoscopia',300.00);
INSERT INTO exame VALUES(10100,'Eletrocardiograma',50.00);
INSERT INTO exame VALUES(10110,'Ecocardiograma',120.00);
INSERT INTO exame VALUES(10120,'Audiometria',65.00);

SELECT * FROM exame;

-- campos 'auto incremento' não devem aparecer no insert
-- tabela consulta
INSERT INTO consulta VALUES('2022/12/12','14:30','012.345.678-90',102030);
INSERT INTO consulta VALUES('2022/12/13','08:30','123.456.789-12',203040);
INSERT INTO consulta VALUES('2022/12/13','11:00','123.456.789-12',304050);
INSERT INTO consulta VALUES('2022/12/14','10:00','234.567.890-23',203040);
INSERT INTO consulta VALUES('2022/12/15','15:00','345.678.901-45',405060);
INSERT INTO consulta VALUES('2022/12/16','10:00','123.456.789-12',506070);
INSERT INTO consulta VALUES('2022/12/19','16:45','234.567.890-23',102030);
INSERT INTO consulta VALUES('2022/12/19','18:00','345.678.901-45',607080);
INSERT INTO consulta VALUES('2022/12/20','09:00','012.345.678-90',304050);
INSERT INTO consulta VALUES('2022/12/20','14:20','123.456.789-12',102030);

SELECT * FROM consulta;

-- campo 'auto incremento' não deve aparecer no insert
-- resultados possíveis: (normal, inconsistente, indeterminado, negativo, positivo)
INSERT INTO pedido_exame VALUES('Normal','2022/12/15',0.00,1,10040);
INSERT INTO pedido_exame VALUES('','2022/12/19',0.00,1,10100);
INSERT INTO pedido_exame VALUES('','2022/12/16',0.00,1,10080);
INSERT INTO pedido_exame VALUES('Normal','2022/12/15',0.00,2,10050);
INSERT INTO pedido_exame VALUES('Inconsistente','2022/12/16',0.00,3,10080);
INSERT INTO pedido_exame VALUES('','2022/12/17',0.00,4,10060);
INSERT INTO pedido_exame VALUES('Normal','2022/12/21',0.00,7,10020);
INSERT INTO pedido_exame VALUES('','2022/12/22',0.00,8,10030);
INSERT INTO pedido_exame VALUES('','2022/12/22',0.00,8,10050);

SELECT * FROM pedido_exame;
SELECT * FROM exame;

delete from pedido_exame;

-- reinicia campo numero_pedido --> próximo 2200
-- DBCC CHECKIDENT('pedido_exame', RESEED, 2199)



-- Alteração de dados de tabelas -----------------------------------
SELECT * FROM paciente;
UPDATE paciente SET nome_paciente = 'Aguinaldo Coelho' WHERE cpf = '456.789.012-34';
SELECT * FROM paciente;

SELECT * FROM medico;
UPDATE medico SET especialidade = 'Ginecologia' WHERE crm = 708090;
select * from medico;

SELECT * FROM exame;
UPDATE exame SET preco = 135.00 WHERE codigo = 10110;
SELECT * FROM exame;

-- Exclusão de registros de tabelas --------------------------

SELECT * FROM paciente;
DELETE FROM paciente WHERE cpf = '456.789.012-34';
SELECT * FROM paciente;

SELECT * FROM medico;
DELETE FROM medico WHERE crm = 708090;
SELECT * FROM medico;
