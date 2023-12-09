CREATE TABLE IF NOT EXISTS Clientes (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255),
    DataCadastro DATE
);

DELIMITER //
CREATE FUNCTION SomarClientesDiarios(dataCadastroParam DATE)
RETURNS INT
BEGIN
    DECLARE totalClientes INT;
    
    SELECT COUNT(*) INTO totalClientes
    FROM Clientes
    WHERE DataCadastro = dataCadastroParam;

    RETURN totalClientes;
END;
//
DELIMITER ;

SELECT SomarClientesDiarios('2023-12-5') AS TotalClientes;
