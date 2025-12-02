-- Create Database
CREATE DATABASE mahaan;
USE mahaan;

-- 1️⃣ CASTING TABLE
CREATE TABLE casting (
  user_id VARCHAR(5) PRIMARY KEY,
  cast_name VARCHAR(30),
  role_name VARCHAR(30),
  age INT,
  call_sheet VARCHAR(20)
);

-- Mahaan Characters (2022)
INSERT INTO casting (user_id, cast_name, role_name, age, call_sheet) VALUES
("c1", "Vikram", "Gandhi Mahaan", 57, "60"),
("c2", "Dhruv Vikram", "Dada", 29, "55"),
("c3", "Simran", "Nachimuthu", 48, "40"),
("c4", "Bobby Simha", "Sathyavan", 41, "45"),
("c5", "Vani Bhojan", "Charumathi", 35, "30");

SELECT * FROM casting;

-- 2️⃣ DOP TABLE
CREATE TABLE dop (
  id INT,
  eq_name VARCHAR(20),
  unit INT
);

INSERT INTO dop (id, eq_name, unit) VALUES
(1, "Camera", 4),
(2, "Lens", 15),
(3, "Lights", 12),
(4, "Drone", 2);

-- 3️⃣ SALARY TABLE (Foreign Key to casting table)
CREATE TABLE salary (
  user_id VARCHAR(5),
  salary_amount VARCHAR(30),
  INDEX(user_id),
  FOREIGN KEY (user_id) REFERENCES casting(user_id)
);

INSERT INTO salary (user_id, salary_amount) VALUES
("c1", "2Cr"),
("c2", "1Cr"),
("c3", "40L"),
("c4", "60L"),
("c5", "35L");

-- 4️⃣ ATTENDANCE TABLE
CREATE TABLE attendance (
  cast_name VARCHAR(30),
  attendie VARCHAR(20)
);

INSERT INTO attendance (cast_name, attendie) VALUES
("Gandhi Mahaan", "Present"),
("Dada", "Present"),
("Sathyavan", "Absent");

-- 5️⃣ TECHNICIANS TABLE
CREATE TABLE techinicians (
  t_name VARCHAR(30),
  field_name VARCHAR(30)
);

INSERT INTO techinicians (t_name, field_name) VALUES
("Tharun", "Editor"),
("Karthik", "Camera"),
("Varun", "Sound"),
("Anbu", "Lighting"),
("Siva", "Makeup"),
("Ravi", "AD"),
("Meena", "Costume"),
("Arun", "Writer"),
("Sita", "Designer");