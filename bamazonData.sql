


CREATE DATABASE bamazon_db;

USE bamazon_db;


CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  productname  VARCHAR(100) NOT NULL,
  department VARCHAR(100) NOT NULL,
  price INT (100) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);


INSERT INTO products (productname, department, price, quantity)
VALUES ("TV Stick", "TV", "100", "20");

INSERT INTO products (productname, department, price, quantity)
VALUES ("Super Mario", "Game", "25", "10");

INSERT INTO products (productname, department, price, quantity)
VALUES ("Necklace", "Jewelry", "10", "150");

INSERT INTO products (productname, department, price, quantity)
VALUES ("EW Cam", "Camera ", "550", "50");

INSERT INTO products (productname, department, price, quantity)
VALUES ("Sandbox", "Toys ", "10", "100");

INSERT INTO products (productname, department, price, quantity)
VALUES ("Levi Jeans", "CLothing ", "150", "5");

INSERT INTO products (productname, department, price, quantity)
VALUES ("Makeup Set", "Beauty", "100", "75");

INSERT INTO products (productname, department, price, quantity)
VALUES ("Men Shoes", "Clothing", "150", "55");

INSERT INTO products (productname, department, price, quantity)
VALUES ("Learn ABC", "Books", "10", "500");

INSERT INTO products (productname, department, price, quantity)
VALUES ("Watch", "Jewelry", "100", "5");

SELECT * FROM products

