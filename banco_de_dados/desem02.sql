CREATE TABLE IF NOT EXISTS Compras (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ProdutoID INT,
    Quantidade INT,
    DataCompra DATE
);

DELIMITER //
CREATE PROCEDURE LevantamentoDiario()
BEGIN
    SELECT DataCompra, SUM(Quantidade) AS QuantidadeTotal
    FROM Compras
    GROUP BY DataCompra;
END;
//
DELIMITER ;
CALL LevantamentoDiario();
