
DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
    id INT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    dept_name VARCHAR(100) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (id)
);

INSERT INTO products (id, product_name, dept_name, price, stock_quantity)
VALUES (1010, "Miro painting", "fine art", 3000000.00, 1);

INSERT INTO products (id, product_name, dept_name, price, stock_quantity)
VALUES (3211, "paint set", "art supplies", 1.95, 413);

INSERT INTO products (id, product_name, dept_name, price, stock_quantity)
VALUES (3247, "canvas", "art supplies", 5.95, 200);

INSERT INTO products (id, product_name, dept_name, price, stock_quantity)
VALUES (3255, "clay", "art supplies", 9.99, 15);

INSERT INTO products (id, product_name, dept_name, price, stock_quantity)
VALUES (1716, "map book", "books", 12.95, 3);

INSERT INTO products (id, product_name, dept_name, price, stock_quantity)
VALUES (1492, "tea pot", "kitchenwares", 11.95, 10);

INSERT INTO products (id, product_name, dept_name, price, stock_quantity)
VALUES (9980, "green tea", "beverages", 4.95, 100);

INSERT INTO products (id, product_name, dept_name, price, stock_quantity)
VALUES (7022, "toy car", "toys", 2.95, 743);

INSERT INTO products (id, product_name, dept_name, price, stock_quantity)
VALUES (5575, "self-driving car", "automotive", 72000.00, 5);

INSERT INTO products (id, product_name, dept_name, price, stock_quantity)
VALUES (6000, "auto insurance for self-driving cars", "insurance", 5600.00, 5);



SELECT * FROM products;
