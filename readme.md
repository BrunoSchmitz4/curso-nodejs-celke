Acessar MySQL com Prompt de Comando (CMD):
mysql -h 'servidor -u 'usuario' -p
mysqç -h localhost -u root -p
senha: 123456

Criar usuário:
CREATE USER 'novousuário'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
CREATE USER 'brunotwo'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';

Liberar permissão para acessar a base de dados:
GRANT ALL PRIVILEGES ON * . * TO 'brunotwo'@'localhost';

Uma vez finalizadas as permissões que você quer definir para os seus novos usuários, certifique-se sempre de recarregar todos os privilégios.
FLUSH PRIVILEGES;