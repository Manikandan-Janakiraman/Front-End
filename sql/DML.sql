CREATE DATABASE construction;
USE construction;

 
CREATE TABLE materials (
    material_id INT,
    material_name VARCHAR(50),
    quantity VARCHAR(30),
    unit VARCHAR(20),
    amount INT
);

INSERT INTO materials (material_id, material_name, quantity, unit, amount) VALUES
(1, "Cement Blocks", "300", "pieces", 18000),
(2, "Red Soil", "2", "loads", 9000),
(3, "PVC Pipes", "60", "pieces", 12000),
(4, "White Cement", "25", "bags", 15000),
(5, "Tiles", "200", "pieces", 25000);

 
CREATE TABLE staff(
    staff_id INT,
    staff_name VARCHAR(20) PRIMARY KEY,
    position_name VARCHAR(40),
    age INT
);

INSERT INTO staff (staff_id, staff_name, position_name, age) VALUES
(11, "Bala", "Senior Engineer", 38),
(12, "Naveen", "Site Supervisor", 34),
(13, "Madhan", "Accountant", 29),
(14, "Harini", "Architect", 31),
(15, "Vikram", "Electrician", 36),
(16, "Kavin", "Plumber", 28),
(17, "Priya", "Safety Officer", 30);

 
CREATE TABLE attendance(
    staff_name VARCHAR(20),
    attendance VARCHAR(3),
    INDEX(staff_name),
    FOREIGN KEY (staff_name) REFERENCES staff(staff_name)
);

INSERT INTO attendance (staff_name, attendance) VALUES
("Bala", "P"),
("Naveen", "A"),
("Madhan", "P"),
("Harini", "P"),
("Vikram", "A"),
("Kavin", "P"),
("Priya", "P");

 
CREATE TABLE stock (
    stock_id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(50),
    quantity VARCHAR(30),
    unit VARCHAR(20),
    amount INT
);

INSERT INTO stock (item_name, quantity, unit, amount) VALUES
("Blue Metal", "3", "tons", 15000),
("Cement", "60", "bags", 24000),
("Iron Sheets", "40", "pieces", 35000),
("Sand", "5", "tons", 20000),
("Wood Logs", "30", "pieces", 18000);

 
CREATE TABLE salary (
    staff_name VARCHAR(20),
    salary_amount INT,
    FOREIGN KEY (staff_name) REFERENCES staff(staff_name)
);

INSERT INTO salary (staff_name, salary_amount) VALUES
("Bala", 55000),
("Naveen", 42000),
("Madhan", 30000),
("Harini", 60000),
("Vikram", 35000),
("Kavin", 32000),
("Priya", 38000);