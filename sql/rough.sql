CREATE DATABASE Amazon;
USE Amazon;
CREATE TABLE Product(
	Product_Id INT,
    Product_Name VARCHAR(50),
    Product_Category VARCHAR(50),
    Quantity INT,
    Price INT
    );
    
INSERT INTO Product (Product_Id, Product_Name, Product_Category, Quantity, Price) VALUES
(001,"Laptop", "Electronics", 2, 75000),
(002,"Mobile", "Electronics", 5, 15000),
(003,"Desktop", "Electronics", 1, 40000),
(004,"Watch", "Accessories", 10, 5000),
(005,"Cooless", "Accessories", 7, 500);
    