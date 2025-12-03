-- Joins + Normalization
CREATE DATABASE Flipkart;
USE Flipkart;
CREATE TABLE Customer(
    C_id INT PRIMARY KEY AUTO_INCREMENT,
    C_name VARCHAR(50),
    C_mobile VARCHAR(60)

);



CREATE TABLE Products(
    Prdct_id INT PRIMARY KEY AUTO_INCREMENT,
    C_id INT,
    Prdct_name VARCHAR(50),
    Prdct_mobile VARCHAR(11),
    FOREIGN KEY (C_id) REFERENCES Customer(C_id)

);


CREATE TABLE Orders(
    Order_id INT PRIMARY KEY AUTO_INCREMENT,
    C_id INT,
    Order_Name VARCHAR(50),
    Prdct_mobile VARCHAR(11),
    FOREIGN KEY (C_id) REFERENCES Customer(C_id)
);
INSERT INTO Customer (C_id, C_name, C_mobile) VALUES
(1,'Karthikeyan', '9005671234'),
(2,'Aishwarya', '9016782345'),
(3,'Manoj', '9027893456'),
(4,'Divya', '9038904567');

INSERT INTO Products (C_id, Prdct_name, Prdct_mobile) VALUES
(1, 'Redmi Note 13', '9876501234'),
(2, 'Oppo F27 Pro', '9876612345'),
(3, 'Poco X6 Pro', '9876723456'),
(4, 'Nothing Phone 2a', '9876834567');

INSERT INTO Orders (C_id, Order_Name, Prdct_mobile) VALUES
(1, 'Redmi Back Case', '9876501234'),
(2, 'Oppo Charger Order', '9876612345'),
(3, 'Poco Earbuds Order', '9876723456'),
(4, 'Nothing Cable Order', '9876834567');

 
-- Inner Join Task-2

SELECT 
    p.prdct_name,
    COUNT(o.order_id) AS total_orders
FROM Products p
INNER JOIN Orders o ON p.Prdct_mobile = o.Prdct_mobile
GROUP BY p.prdct_id, p.prdct_name;



-- Left Join Task-1

SELECT 
    c.c_name,
    COUNT(o.order_id) AS total_orders
FROM Customer c
LEFT JOIN Orders o ON c.c_id = o.c_id
GROUP BY c.c_id, c.c_name;



-- Left Join Task-2

SELECT 
    p.prdct_name,
    CASE 
        WHEN o.order_id IS NOT NULL THEN 'yes'
        ELSE 'no'
    END AS was_ordered
FROM Products p
LEFT JOIN Orders o ON p.Prdct_mobile = o.Prdct_mobile
GROUP BY p.prdct_id, p.prdct_name, o.order_id;



-- Right Join Task-1

SELECT 
    o.order_id,
    o.order_name,
    COALESCE(c.c_name, 'customer deleted') AS customer_name
FROM Customer c
RIGHT JOIN Orders o ON c.c_id = o.c_id;


-- Right Join Task-2

SELECT 
    o.order_id,
    o.order_name,
    COALESCE(p.prdct_name, 'product deleted') AS product_name
FROM Products p
RIGHT JOIN Orders o ON p.Prdct_mobile = o.Prdct_mobile;


create table students (
    student_id int primary key auto_increment,
    student_name varchar(100) not null
);

create table courses (
    course_id int primary key auto_increment,
    course_name varchar(100) not null,
    teacher varchar(100) not null
);
INSERT INTO students (student_name) VALUES
('Karthik'),
('Anitha'),
('Rahul'),
('Deepika'),
('Santhosh');
INSERT INTO courses (course_name, teacher) VALUES
('Physics', 'Mr. Naveen'),
('Biology', 'Ms. Shalini'),
('Economics', 'Mr. Harish'),
('Chemistry', 'Ms. Divya'),
('Geography', 'Mr. Senthil');