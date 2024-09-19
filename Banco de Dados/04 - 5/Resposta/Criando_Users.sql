CREATE LOGIN atendente WITH PASSWORD = '12345'

USE clinica_medica
GO

CREATE USER usuario_consulta_insercao FOR LOGIN atendente

GRANT SELECT TO usuario_consulta_insercao
GRANT INSERT TO usuario_consulta_insercao

EXEC clinica_medica.dbo.sp_helprotect @username = 'usuario_consulta_insercao'

select * from paciente;

insert into paciente values('567.890.123-45','Rogerio Ramos','(11)97890-1234',678901,'Inovamed','Básico');

delete from paciente where cpf = '567.890.123-45';

insert into paciente values('789.012.345-67','Abílio Sanches','(11)99012-3456',901234,'Ultramed','Padrão');

