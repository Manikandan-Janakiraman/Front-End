CREATE database emp_details;
USE emp_details;

CREATE TABLE Employee1(
id INT PRIMARY KEY NOT NULL, 
user_id VARCHAR(40) UNIQUE , 
emp_Name VARCHAR(50),
emp_Age INT,
emp_Dept VARCHAR(100),
emp_Mobile VARCHAR(10),
emp_City VARCHAR(40), 
emp_Salary VARCHAR(10), 
join_Date DATE 




);

 INSERT INTO Employee1
(id, user_id, emp_Name, emp_Age, emp_Dept, emp_Mobile, emp_City, emp_Salary, join_Date)
VALUES
(1, '201', 'Ajay Kumar', 27, 'IT', '9012345678', 'Chennai', '32000', '2025-12-02'),
(2, '202', 'Harini', 24, 'HR', '9123456780', 'Madurai', '29000', '2025-12-02'),
(3, '203', 'Sathish', 31, 'IT', '9234567890', 'Coimbatore', '36000', '2025-12-02'),
(4, '204', 'Nithya', 26, 'Finance', '9345678901', 'Trichy', '33000', '2025-12-02'),
(5, '205', 'Vignesh', 33, 'Operations', '9456789012', 'Salem', '41000', '2025-12-02'),
(6, '206', 'Keerthana', 25, 'Design', '9567890123', 'Tirunelveli', '30000', '2025-12-02'),
(7, '207', 'Aravind', 28, 'Marketing', '9678901234', 'Erode', '37000', '2025-12-02');

SELECT emp_Dept,SUM(emp_Salary) AS TOTAL_SALARY FROM Employee1 GROUP BY emp_Dept;
SELECT emp_name,emp_Salary, round(emp_Salary) FROM Employee1;
SELECT emp_name FROM Employee1 WHERE length(emp_name)>5;
SET SQL_SAFE_UPDATES = 0;
UPDATE Employee1 SET emp_Name=upper(emp_Name);
SELECT * FROM Employee1;

ALTER TABLE Employee1 ADD Bonus INT;
SELECT * FROM Employee1;