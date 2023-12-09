CREATE DATABASE BibliotecaDB;
USE BibliotecaDB;

CREATE TABLE Livros (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Titulo VARCHAR(255),
    AutorID INT,
    AnoPublicacao INT,
    FOREIGN KEY (AutorID) REFERENCES Autores(ID)
);
CREATE TABLE Autores (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255)
);
INSERT INTO Livros (Titulo, AutorID, AnoPublicacao) VALUES ('Livro1', 1, 2000), ('Livro2', 2, 2010);
DELIMITER //
CREATE TRIGGER LivroInserido
AFTER INSERT
ON Livros FOR EACH ROW
BEGIN
    INSERT INTO LogMensagens (Mensagem) VALUES ('Novo livro inserido: ' || NEW.Titulo);
END;
//
DELIMITER ;

CREATE TABLE LogMensagens (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Mensagem VARCHAR(255),
    DataHora TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);