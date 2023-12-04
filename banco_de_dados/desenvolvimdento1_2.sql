 CREATE TABLE Pessoa (
    id_cpf INT PRIMARY KEY,
    nome VARCHAR(50),
    idade INT
);
CREATE TABLE produto (
   id_comprador INT PRIMARY KEY,
   nomeproduto varchar(60) not NULL,
   preço FLOAT(6) not NULL,
  FOREIGN KEY (id_comprador) REFERENCES pessoa(id_cpf)
 );
 INSERT INTO Pessoa (id_cpf, nome, idade)
VALUES
    (1, 'João', 25),
    (2, 'Maria', 30),
    (3, 'Carlos', 22);
INSERT INTO Produto (id_comprador, nomeproduto, preço)
VALUES
    (1, 'Camiseta', 19.99),
    (2, 'Notebook', 899.99),
    (3, 'Livro', 12.50);
SELECT Pessoa.nome, Pessoa.idade, Produto.nomeproduto, Produto.preço
FROM Pessoa
INNER JOIN Produto ON Pessoa.id_cpf = Produto.id_comprador;

SELECT Pessoa.nome, Pessoa.idade, Produto.nomeproduto, Produto.preço
FROM Pessoa
LEFT JOIN Produto ON Pessoa.id_cpf = Produto.id_comprador;

SELECT Pessoa.nome, Pessoa.idade, Produto.nomeproduto, Produto.preço
FROM Pessoa
RIGHT JOIN Produto ON Pessoa.id_cpf = Produto.id_comprador;

SELECT Pessoa.nome, Pessoa.idade, Produto.nomeproduto, Produto.preço
FROM Pessoa
LEFT JOIN Produto ON Pessoa.id_cpf = Produto.id_comprador

UNION

SELECT Pessoa.nome, Pessoa.idade, Produto.nomeproduto, Produto.preço
FROM Pessoa
RIGHT JOIN Produto ON Pessoa.id_cpf = Produto.id_comprador;
