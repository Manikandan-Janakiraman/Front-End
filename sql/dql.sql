create  database employeedetails;
use employeedetails;
create table employee(
emp_id int primary key auto_increment,
emp_name varchar(30),
emp_dept varchar(20),
emp_salary varchar(10),
emp_city varchar(20)


);
INSERT INTO employee (emp_name, emp_dept, emp_salary, emp_city) VALUES
("Vijay", "Finance", 28000, "Chennai"),
("Anitha", "Support", 27000, "Madurai"),
("Mohan", "Developer", 42000, "Coimbatore"),
("Keerthana", "Testing", 31000, "Salem"),
("Sathish", "Design", 29000, "Trichy"),
("Harini", "HR", 26000, "Erode"),
("Prem", "Marketing", 36000, "Chennai");

select emp_dept, count(*) as tot_emp_dept from employee group by emp_dept;
select emp_dept,avg(emp_salary) as avg_salary from employee group by emp_dept;
 select emp_city ,count(*) as tot_city from employee group by emp_city;
select emp_dept, min(emp_salary) as min_salary,max(emp_salary) as max_salary from employee group by emp_dept;
select emp_dept , count(*) as avg_salary from employee group by emp_dept having avg(emp_salary)>30000;
select emp_city ,count(*) as avg_salary from employee group by emp_city ;