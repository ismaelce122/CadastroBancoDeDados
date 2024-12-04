CREATE DATABASE ecommerce;

USE ecommerce;

CREATE TABLE produtos (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
descricao TEXT,
categoria VARCHAR(50),
preco DECIMAL(10, 2) NOT NULL,
validade VARCHAR(50)
);

DROP TABLE products;

DROP DATABASE catalogo;

INSERT INTO produtos (nome, descricao, categoria, preco, validade) 
VALUES ('vestido', 'preto', 'longo', '88.99', '20/04/2025');

SELECT * FROM produtos;

DESC produtos;