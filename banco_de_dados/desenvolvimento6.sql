-- Tabela Aluno
CREATE TABLE Aluno (
    ID INT PRIMARY KEY, 
    nome VARCHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL,
    endereco VARCHAR(40) NOT NULL,
    matricula INT NOT NULL,
    Telefone INT NOT NULL
);

-- Tabela emprestimo
CREATE TABLE emprestimo (
    codigo INT PRIMARY KEY,
    data DATE,
    hora TIME,
    matri_aluno INT,
    data_Devo DATE,
    FOREIGN KEY (matri_aluno) REFERENCES Aluno(matricula)
);

-- Tabela livro
CREATE TABLE livro (
    cod_livro INT PRIMARY KEY,
    Titulo VARCHAR(30) NOT NULL,
    autor VARCHAR(30) NOT NULL,
    Cod_Sessao INT NOT NULL
);

-- Tabela sessao
CREATE TABLE sessao (
    codigo INT PRIMARY KEY,
    descricao VARCHAR(15),
    localizacao VARCHAR(15)
);

-- Tabela livro_emprestimo
CREATE TABLE livro_emprestimo (
    cod_emprestimo INT PRIMARY KEY,
    cod_Livros INT NOT NULL,
    FOREIGN KEY (cod_Livros) REFERENCES livro(Cod_Sessao)
);
