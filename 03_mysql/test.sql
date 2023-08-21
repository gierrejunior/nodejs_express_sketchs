-- Active: 1690639334999@@127.0.0.1@3306@sistemadecadastro
CREATE TABLE usuarios( -- Exemplo de criação de tabela usando SQL
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);


-- inserindo dados na tabela
INSERT INTO usuarios(nome, email, idade) VALUES
    ("Gierre Junior", "gierrejunior@gmail.com", 8);

SELECT * FROM usuarios; -- vai mostrar todos os dados da tabela usuarios

INSERT INTO usuarios(nome, email, idade) VALUES
    ("Uriel Aldrich", "Uriel@gmail.com", 7),
    ("John Doe", "john.doe@example.com", 30);

DESCRIBE usuarios;

SELECT * FROM usuarios WHERE idade = 7; -- Seleciona somente usuários que tem 7 anos

SELECT * FROM usuarios WHERE nome = "Uriel Aldrich"; -- Seleciona somente usuáriso com o nome Uriel Aldrich

SELECT * FROM usuarios WHERE idade >= 18;

DELETE FROM usuarios; -- Se rodar só isso, vai apagar todos os registros da tabela

DELETE FROM usuarios WHERE nome = "john Doe"; -- deleta todos os registros com o nome john Doe

UPDATE usuarios SET nome = "Gierre Martins"; -- se rodar assim vai trocar o nome de todos os usuarios para Gierre Martins

UPDATE usuarios SET nome = "Gierre Martins" WHERE nome = "Gierre Junior" ;