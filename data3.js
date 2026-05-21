var Q61_90=[
{num:61,chapter:"SQL Basic",q:"What is SQL?",
en:"SQL (Structured Query Language) is a standard language for managing and manipulating relational databases. Used to create tables, insert data, update records, delete data, and query information. SQL is used in databases like SQL Server, MySQL, PostgreSQL, Oracle. DDL, DML, DCL, TCL are its command categories. Every developer needs SQL knowledge.",
hi:"SQL (Structured Query Language) relational databases manage karne ki standard language hai. Tables banana, data insert/update/delete karna, aur query karna sab SQL se hota hai. SQL Server, MySQL, PostgreSQL sab mein SQL use hota hai. Har developer ke liye SQL zaroori hai.",
code:"SELECT * FROM Employees;\nINSERT INTO Employees VALUES (1,'Ram',50000);\nUPDATE Employees SET Salary=60000 WHERE Id=1;\nDELETE FROM Employees WHERE Id=1;"},

{num:62,chapter:"SQL Basic",q:"What is a Database?",
en:"A database is an organized collection of structured data stored electronically. Managed by a Database Management System (DBMS). Relational databases store data in tables with rows and columns. Example: A school database has tables for Students, Courses, Teachers. Non-relational (NoSQL) databases like MongoDB store data as documents.",
hi:"Database ek organized collection hai jahan data electronically store hota hai. DBMS ise manage karta hai. Relational database mein data tables mein rows aur columns mein hota hai. School database mein Students, Courses, Teachers tables hoti hain. MongoDB jaise NoSQL databases documents mein store karte hain.",
code:"-- Create database\nCREATE DATABASE SchoolDB;\n-- Create table\nCREATE TABLE Students (Id INT, Name VARCHAR(50), Age INT);"},

{num:63,chapter:"SQL Basic",q:"What are the types of SQL commands?",
en:"SQL commands are categorized as: DDL (Data Definition Language): CREATE, ALTER, DROP, TRUNCATE — define structure. DML (Data Manipulation Language): SELECT, INSERT, UPDATE, DELETE — manipulate data. DCL (Data Control Language): GRANT, REVOKE — control permissions. TCL (Transaction Control Language): COMMIT, ROLLBACK, SAVEPOINT — manage transactions.",
hi:"SQL commands ke types: DDL (CREATE, ALTER, DROP) — structure define karte hain. DML (SELECT, INSERT, UPDATE, DELETE) — data manipulate karte hain. DCL (GRANT, REVOKE) — permissions control. TCL (COMMIT, ROLLBACK) — transactions manage karte hain. Ye categories interview mein frequently puche jaate hain.",
code:"-- DDL\nCREATE TABLE T1 (Id INT);\n-- DML\nINSERT INTO T1 VALUES(1);\n-- DCL\nGRANT SELECT ON T1 TO User1;\n-- TCL\nCOMMIT;"},

{num:64,chapter:"SQL Basic",q:"What is Primary Key?",
en:"Primary Key is a column (or combination of columns) that uniquely identifies each row in a table. Constraints: must be unique, cannot be NULL, one primary key per table. Example: Employee Id is a primary key — no two employees have the same Id. SQL Server automatically creates a clustered index on primary key.",
hi:"Primary Key ek ya zyada columns hote hain jo table ki har row ko uniquely identify karte hain. Ye unique aur NOT NULL hona chahiye. Table mein sirf ek primary key hoti hai. Jaise Employee table mein EmpId primary key hai — koi duplicate nahi. SQL Server isme clustered index banata hai.",
code:"CREATE TABLE Employees (\n  EmpId INT PRIMARY KEY,\n  Name VARCHAR(50) NOT NULL\n);"},

{num:65,chapter:"SQL Basic",q:"What is Foreign Key?",
en:"Foreign Key is a column that creates a link between two tables. It references the Primary Key of another table. Enforces referential integrity — you can't insert a foreign key value that doesn't exist in the parent table. Example: Orders table has CustomerId as FK referencing Customers.Id. Prevents orphan records.",
hi:"Foreign Key do tables ke beech link banata hai. Ye doosri table ki Primary Key ko reference karta hai. Referential integrity enforce karta hai — aisa record insert nahi hoga jiska parent exist na kare. Jaise Orders mein CustomerId, Customers table ka FK hai.",
code:"CREATE TABLE Orders (\n  OrderId INT PRIMARY KEY,\n  CustomerId INT,\n  FOREIGN KEY (CustomerId) REFERENCES Customers(Id)\n);"},

{num:66,chapter:"SQL Basic",q:"What is UNIQUE Key?",
en:"UNIQUE Key constraint ensures that all values in a column are distinct — no duplicates allowed. Unlike Primary Key, UNIQUE columns can have one NULL value and a table can have multiple UNIQUE constraints. Example: Email column in Users table should be unique — two users can't have the same email address.",
hi:"UNIQUE Key column ke values ko unique rakhta hai — duplicates nahi. Primary Key se alag — UNIQUE column mein ek NULL allowed hai aur ek table mein multiple UNIQUE keys ho sakti hain. Jaise Users table mein Email column unique hona chahiye.",
code:"CREATE TABLE Users (\n  Id INT PRIMARY KEY,\n  Email VARCHAR(100) UNIQUE,\n  Phone VARCHAR(15) UNIQUE\n);"},

{num:67,chapter:"SQL Basic",q:"What is the difference between Primary Key and UNIQUE Key?",
en:"Primary Key: one per table, cannot be NULL, automatically creates clustered index, used to uniquely identify rows. UNIQUE Key: multiple per table, allows one NULL, creates non-clustered index, used to prevent duplicates on other columns. Example: Id is PK; Email and Phone can be UNIQUE keys in the same Users table.",
hi:"Primary Key: table mein sirf ek, NULL nahi allowed, clustered index banata hai. UNIQUE Key: table mein multiple ho sakti hain, ek NULL allowed, non-clustered index banata hai. Id PK hoga, Email aur Phone UNIQUE keys ho sakti hain ek hi table mein.",
code:"-- PK: one, not null\nId INT PRIMARY KEY\n-- UNIQUE: multiple allowed, one null ok\nEmail VARCHAR(100) UNIQUE\nPhone VARCHAR(15) UNIQUE"},

{num:68,chapter:"SQL Basic",q:"What is NOT NULL constraint?",
en:"NOT NULL constraint ensures a column cannot store NULL values — a value must always be provided. Applied at column level during table creation or ALTER. Example: Employee Name should never be empty, so Name VARCHAR(50) NOT NULL. If you try to insert without a value for that column, SQL throws an error.",
hi:"NOT NULL constraint column ko NULL values store karne se rokta hai — value dena zaroori hai. Table create karte ya ALTER karte waqt apply karo. Jaise Employee Name kabhi empty nahi hona chahiye. NULL insert karne ki koshish par SQL error deta hai.",
code:"CREATE TABLE Employees (\n  Id INT NOT NULL,\n  Name VARCHAR(50) NOT NULL,\n  Department VARCHAR(50) -- nullable\n);"},

{num:69,chapter:"SQL Basic",q:"What is Default Constraint?",
en:"DEFAULT constraint automatically assigns a specified value to a column when no value is provided during INSERT. Example: Status column defaulting to 'Active', CreatedAt defaulting to GETDATE(). Reduces need to always specify value for optional columns. Can be set at table creation or added later via ALTER TABLE.",
hi:"DEFAULT constraint INSERT ke waqt value na dene par column mein automatic specified value dalta hai. Jaise Status column ka default 'Active' ho, CreatedAt ka GETDATE(). Optional columns ke liye har baar value specify karne ki zaroorat nahi padti.",
code:"CREATE TABLE Orders (\n  Id INT PRIMARY KEY,\n  Status VARCHAR(20) DEFAULT 'Pending',\n  CreatedAt DATETIME DEFAULT GETDATE()\n);"},

{num:70,chapter:"SQL Basic",q:"What is the difference between DELETE, TRUNCATE, and DROP?",
en:"DELETE: removes specific rows (WHERE clause), DML command, can be rolled back, triggers fire, slower. TRUNCATE: removes all rows, DDL command, faster (no logging per row), cannot be rolled back in most DBs, resets identity. DROP: removes entire table/database including structure. DELETE=rows, TRUNCATE=all rows fast, DROP=whole table.",
hi:"DELETE: specific rows remove karta hai, WHERE clause use hoti hai, rollback ho sakta hai, slow. TRUNCATE: saari rows fast remove karta hai, rollback nahi (mostly), identity reset. DROP: poori table/structure delete karta hai. Simple: DELETE=row, TRUNCATE=all rows, DROP=table itself.",
code:"DELETE FROM Employees WHERE Id=5;  -- specific row\nTRUNCATE TABLE TempLogs;           -- all rows fast\nDROP TABLE OldTable;               -- whole table gone"},

{num:71,chapter:"SQL Basic",q:"What is the difference between WHERE and HAVING?",
en:"WHERE filters rows before grouping — used with SELECT, UPDATE, DELETE. Works on individual row data. HAVING filters groups after GROUP BY — used only with aggregate functions (SUM, COUNT, AVG). Example: WHERE Salary > 50000 filters employees before grouping; HAVING COUNT(*) > 5 filters departments with more than 5 employees.",
hi:"WHERE row-level filtering karta hai GROUP BY se pehle. HAVING GROUP BY ke baad groups filter karta hai — aggregate functions ke saath use hota hai. WHERE individual rows check karta hai, HAVING grouped results check karta hai.",
code:"-- WHERE: filter rows first\nSELECT Dept, COUNT(*) FROM Employees\nWHERE Salary > 30000\nGROUP BY Dept\nHAVING COUNT(*) > 3;"},

{num:72,chapter:"SQL Basic",q:"What are Joins in SQL?",
en:"Joins combine rows from two or more tables based on a related column. Types: INNER JOIN (matching rows only), LEFT JOIN (all left + matching right), RIGHT JOIN (all right + matching left), FULL JOIN (all from both), CROSS JOIN (cartesian product), SELF JOIN (table joins itself). Used to retrieve related data from multiple tables.",
hi:"Join se do ya zyada tables ke rows ek column ke basis par combine hote hain. Types: INNER JOIN (sirf matching), LEFT JOIN (saara left + matching right), RIGHT JOIN, FULL JOIN (dono se saara), CROSS JOIN (cartesian), SELF JOIN. Related tables se data fetch karne ke liye use hota hai.",
code:"SELECT e.Name, d.DeptName\nFROM Employees e\nINNER JOIN Departments d ON e.DeptId = d.Id;"},

{num:73,chapter:"SQL Basic",q:"What is INNER JOIN?",
en:"INNER JOIN returns only rows where there is a matching value in both tables. Non-matching rows from either table are excluded. Most commonly used join. Example: Employees INNER JOIN Departments — only employees who have a department assigned and that department exists are returned. Employees with no dept or invalid deptId are excluded.",
hi:"INNER JOIN sirf wahi rows return karta hai jahan dono tables mein matching values hain. Unmatch rows exclude hoti hain. Sabse common join hai. Jaise Employees INNER JOIN Departments — sirf wahi employees jinke department assigned ho aur exist kare.",
code:"SELECT e.Name, d.Name as Dept\nFROM Employees e\nINNER JOIN Departments d\n  ON e.DeptId = d.Id;"},

{num:74,chapter:"SQL Basic",q:"What is LEFT JOIN?",
en:"LEFT JOIN (LEFT OUTER JOIN) returns all rows from the left table and matching rows from the right table. If no match in right table, NULL is returned for right table columns. Example: All employees returned even if they have no department — DeptName shows NULL. Useful when you want to include unmatched left records.",
hi:"LEFT JOIN left table ki saari rows return karta hai aur right table se sirf matching. Right mein match na ho to NULL aata hai. Jaise saare employees fetch karo — jinke department nahi unke DeptName mein NULL aayega. Unmatched left records include karna ho tab use karo.",
code:"SELECT e.Name, d.Name AS Dept\nFROM Employees e\nLEFT JOIN Departments d\n  ON e.DeptId = d.Id;"},

{num:75,chapter:"SQL Basic",q:"What is RIGHT JOIN?",
en:"RIGHT JOIN (RIGHT OUTER JOIN) returns all rows from the right table and matching rows from the left table. If no match in left table, NULL is returned for left table columns. Opposite of LEFT JOIN. Less commonly used — you can always rewrite a RIGHT JOIN as a LEFT JOIN by swapping table order.",
hi:"RIGHT JOIN right table ki saari rows return karta hai aur left se sirf matching. Left mein match na ho to NULL aata hai. LEFT JOIN ka opposite hai. Kam use hota hai kyunki tables ka order swap karke LEFT JOIN se same result milta hai.",
code:"SELECT e.Name, d.Name AS Dept\nFROM Employees e\nRIGHT JOIN Departments d\n  ON e.DeptId = d.Id;\n-- Returns all departments, even without employees"},

{num:76,chapter:"SQL Basic",q:"What is FULL JOIN?",
en:"FULL JOIN (FULL OUTER JOIN) returns all rows from both tables. Matching rows are combined; non-matching rows from either side show NULL for the other side's columns. Useful for finding records that exist in either table but not in both. Not all databases support it (MySQL uses UNION of LEFT and RIGHT JOINs instead).",
hi:"FULL JOIN dono tables ki saari rows return karta hai. Matching rows combine hoti hain, unmatched mein NULL aata hai. Dono tables mein se sirf ek mein exist karne wale records dhundhne ke liye useful hai. MySQL mein FULL JOIN nahi — LEFT JOIN UNION RIGHT JOIN use karo.",
code:"SELECT e.Name, d.Name\nFROM Employees e\nFULL OUTER JOIN Departments d\n  ON e.DeptId = d.Id;"},

{num:77,chapter:"SQL Basic",q:"What is Self Join?",
en:"Self Join joins a table with itself. Used for hierarchical or recursive relationships within the same table. Example: Employee table has ManagerId referencing the same table's EmpId. Self join lets you find each employee's manager name. Always use aliases to distinguish the two 'copies' of the same table in the query.",
hi:"Self Join ek table ko apne aap se join karta hai. Hierarchical ya recursive relationships ke liye use hota hai. Jaise Employee table mein ManagerId column us hi table ke EmpId ko refer karta hai. Har employee ka manager kaise dhundhe — self join se. Aliases zaroori hote hain.",
code:"SELECT e.Name AS Employee, m.Name AS Manager\nFROM Employees e\nLEFT JOIN Employees m ON e.ManagerId = m.EmpId;"},

{num:78,chapter:"SQL Basic",q:"What is Cross Join?",
en:"Cross Join produces a Cartesian product — every row of the first table is combined with every row of the second table. No ON clause needed. Example: 5 employees × 4 departments = 20 rows. Rarely used in practice (except for generating combinations). Can cause performance issues with large tables. Also called Cartesian join.",
hi:"Cross Join dono tables ka Cartesian product banata hai — pehli table ki har row doosri table ki har row ke saath combine hoti hai. ON clause nahi hota. 5 employees × 4 departments = 20 rows. Real world mein kam use hota hai — combinations generate karne ke liye kabhi kabhi.",
code:"SELECT e.Name, d.DeptName\nFROM Employees e\nCROSS JOIN Departments d;\n-- 5 employees × 4 departments = 20 rows"},

{num:79,chapter:"SQL Basic",q:"What is Union and Union All?",
en:"UNION combines results of two or more SELECT statements into one result set. UNION removes duplicate rows (slower). UNION ALL keeps all rows including duplicates (faster). Both queries must have same number of columns with compatible data types. Example: Combine active and inactive customers from two different queries into one list.",
hi:"UNION do ya zyada SELECT queries ke results combine karta hai. UNION duplicates remove karta hai (slow). UNION ALL duplicates rakhta hai (fast). Dono queries mein same number of columns aur compatible types chahiye. Active aur inactive customers ek list mein combine karne ke liye use karo.",
code:"-- UNION (no duplicates)\nSELECT Name FROM Employees\nUNION\nSELECT Name FROM Contractors;\n-- UNION ALL (keeps duplicates)\nSELECT Name FROM A UNION ALL SELECT Name FROM B;"},

{num:80,chapter:"SQL Basic",q:"What is the difference between UNION and UNION ALL?",
en:"UNION: combines results and removes duplicate rows using DISTINCT internally. Slower due to duplicate checking. UNION ALL: combines all rows including duplicates. Faster because no duplicate checking. Use UNION ALL when you know there are no duplicates or duplicates are acceptable. Always prefer UNION ALL for performance unless dedup is required.",
hi:"UNION duplicate rows remove karta hai — internally DISTINCT lagata hai, slow. UNION ALL saari rows rakhta hai duplicates ke saath — fast. Jab duplicates acceptable hain ya nahi hain, UNION ALL prefer karo performance ke liye. Duplicate checking zaroori ho tab UNION use karo.",
code:"-- Performance test\n-- UNION: removes dups, slower\nSELECT Id FROM T1 UNION SELECT Id FROM T2;\n-- UNION ALL: all rows, faster\nSELECT Id FROM T1 UNION ALL SELECT Id FROM T2;"},

{num:81,chapter:"SQL Basic",q:"What is Normalization?",
en:"Normalization is the process of organizing database tables to reduce data redundancy and improve data integrity. Normal forms: 1NF (atomic values, no repeating groups), 2NF (no partial dependency), 3NF (no transitive dependency), BCNF. Example: Instead of storing city and country in every customer row, create a separate Cities table and reference it.",
hi:"Normalization database tables organize karne ka process hai taaki data redundancy kam ho aur data integrity improve ho. 1NF, 2NF, 3NF, BCNF normal forms hain. Jaise har customer row mein city/country store karne ki bajaye alag Cities table banao — yahi normalization hai.",
code:"-- Not normalized:\nCustomer(Id, Name, City, Country, ZipCode)\n-- Normalized:\nCustomer(Id, Name, CityId)\nCity(CityId, CityName, Country, ZipCode)"},

{num:82,chapter:"SQL Basic",q:"What is Denormalization?",
en:"Denormalization is the process of intentionally adding redundancy to a database to improve read performance. Opposite of normalization. Trades storage and update complexity for faster reads. Used in data warehouses and reporting systems (OLAP). Example: Storing CustomerName directly in Orders table to avoid JOIN every time instead of always joining Customers table.",
hi:"Denormalization jaan-boojhkar redundancy add karna hai read performance improve karne ke liye. Normalization ka opposite. Storage aur update complexity badhti hai par reads fast hote hain. Data warehouses aur reporting systems mein use hota hai. OrdersTable mein CustomerName directly store karna example hai.",
code:"-- Denormalized Orders table\nOrders(Id, CustomerId, CustomerName, ProductName, Total)\n-- CustomerName stored directly to avoid JOIN"},

{num:83,chapter:"SQL Basic",q:"What is the difference between CHAR and VARCHAR?",
en:"CHAR is fixed-length: always stores exactly the specified number of characters (padded with spaces). Faster for fixed-size data. VARCHAR is variable-length: stores only the actual characters, up to the max specified. More storage efficient for variable-length data. Example: CHAR(10) for 'Ram' stores 10 chars; VARCHAR(10) stores 3 chars.",
hi:"CHAR fixed-length hai — har baar specified chars store karta hai, khaali jagah spaces se fill hoti hai. Fast hai fixed data ke liye. VARCHAR variable-length hai — sirf actual characters store karta hai. Storage efficient hai. CHAR(10) 'Ram' ke liye 10 chars; VARCHAR(10) sirf 3 chars.",
code:"-- CHAR: fixed 10 chars always\nPhone CHAR(10)\n-- VARCHAR: variable, max 100\nEmail VARCHAR(100)\n-- Use CHAR for fixed: phone, pin code\n-- Use VARCHAR for variable: name, address"},

{num:84,chapter:"SQL Basic",q:"What is the difference between SQL and MySQL?",
en:"SQL is a language (Structured Query Language) — used to interact with relational databases. MySQL is a database management system (RDBMS) that uses SQL as its language. Other RDBMS using SQL: SQL Server, Oracle, PostgreSQL, SQLite. You write SQL queries; MySQL is the software that runs them. SQL is the language, MySQL is the platform.",
hi:"SQL ek language hai — relational databases se baat karne ke liye. MySQL ek software (RDBMS) hai jo SQL language use karta hai. SQL Server, Oracle, PostgreSQL bhi SQL use karte hain. SQL = language, MySQL = database software. Aap SQL likhte ho aur MySQL ya SQL Server execute karta hai.",
code:"-- SQL (language) query:\nSELECT * FROM Users WHERE Age > 18;\n-- MySQL: runs above SQL\n-- SQL Server: runs above SQL\n-- PostgreSQL: runs above SQL"},

{num:85,chapter:"SQL Basic",q:"What is Auto Increment in SQL?",
en:"Auto Increment automatically generates a unique number for a column whenever a new row is inserted. Used for primary key columns. In SQL Server: IDENTITY(1,1) — starts at 1, increments by 1. In MySQL: AUTO_INCREMENT. Ensures every row gets a unique ID without manually specifying it. Useful for Id, OrderNo, TicketNo columns.",
hi:"Auto Increment new row insert karne par column mein automatically unique number generate karta hai. Primary key ke liye use hota hai. SQL Server mein IDENTITY(1,1), MySQL mein AUTO_INCREMENT. Manually ID specify karne ki zaroorat nahi padti. Id, OrderNo, TicketNo jaise columns ke liye useful hai.",
code:"-- SQL Server\nCREATE TABLE Orders (\n  Id INT IDENTITY(1,1) PRIMARY KEY,\n  Amount DECIMAL\n);\n-- MySQL\nId INT AUTO_INCREMENT PRIMARY KEY"},

{num:86,chapter:"SQL Intermediate",q:"What is Subquery?",
en:"A subquery (inner query/nested query) is a query written inside another query. The inner query executes first and its result is used by the outer query. Types: scalar (returns one value), row (one row), table (multiple rows). Example: Find employees earning more than average salary using subquery for average.",
hi:"Subquery ek query ke andar likhi doosri query hai. Inner query pehle execute hoti hai aur outer query uska result use karti hai. Jaise average salary se zyada earn karne wale employees dhundhne ke liye subquery mein AVG() use karo. Scalar, row, table — teen types hain.",
code:"SELECT Name FROM Employees\nWHERE Salary > (SELECT AVG(Salary) FROM Employees);"},

{num:87,chapter:"SQL Intermediate",q:"What is Nested Query?",
en:"Nested query is a query inside another query — same as subquery. The innermost query runs first, result passed outward. Can be nested multiple levels deep. Example: Find departments where the highest salary is greater than the company average. Use parentheses to wrap each nested level. Complex nested queries can impact performance.",
hi:"Nested query ek query ke andar doosri query hai — subquery ka hi naam hai. Andar wali pehle chalti hai result bahar jaata hai. Multiple levels deep nest ho sakti hai. Performance ke liye zyada nesting avoid karo — CTEs ya JOINs better hain complex cases mein.",
code:"SELECT * FROM Departments\nWHERE DeptId IN (\n  SELECT DeptId FROM Employees\n  WHERE Salary > (SELECT AVG(Salary) FROM Employees)\n);"},

{num:88,chapter:"SQL Intermediate",q:"What is Correlated Subquery?",
en:"A correlated subquery references a column from the outer query. It executes once for each row in the outer query — making it slower than regular subqueries. Example: Find each employee who earns more than the average salary in their own department. Inner query uses outer query's DeptId — they are 'correlated'.",
hi:"Correlated subquery outer query ke column ko reference karti hai. Outer query ki har row ke liye ek baar execute hoti hai — slow hoti hai. Jaise har employee jo apne department ke average se zyada kamata ho — inner query outer query ka DeptId use karti hai. Ye 'correlated' hai.",
code:"SELECT e.Name, e.Salary\nFROM Employees e\nWHERE e.Salary > (\n  SELECT AVG(Salary) FROM Employees\n  WHERE DeptId = e.DeptId  -- correlated\n);"},

{num:89,chapter:"SQL Intermediate",q:"What is GROUP BY in SQL?",
en:"GROUP BY groups rows with the same values in specified columns into summary rows. Used with aggregate functions like COUNT, SUM, AVG, MAX, MIN. Example: Group employees by department to count how many are in each department. Every column in SELECT that is not an aggregate must appear in GROUP BY clause.",
hi:"GROUP BY specified columns mein same values wali rows ko groups mein combine karta hai. COUNT, SUM, AVG, MAX, MIN jaise aggregate functions ke saath use hota hai. Jaise department ke hisaab se employees count karo. SELECT mein jo columns aggregate nahi hain wo GROUP BY mein hone chahiye.",
code:"SELECT DeptId, COUNT(*) AS EmpCount, AVG(Salary) AS AvgSal\nFROM Employees\nGROUP BY DeptId;"},

{num:90,chapter:"SQL Intermediate",q:"What is the difference between Group By and Order By?",
en:"GROUP BY groups rows together for aggregation — changes how data is structured. Used with aggregate functions. ORDER BY sorts the result set in ascending (ASC) or descending (DESC) order — only affects display order, not data structure. They can be used together: GROUP BY first aggregates, then ORDER BY sorts the grouped results.",
hi:"GROUP BY rows ko aggregate karne ke liye group karta hai — data structure change hoti hai. ORDER BY result ko sort karta hai ASC ya DESC — sirf display order affect hota hai. Dono saath use ho sakte hain: GROUP BY pehle, phir ORDER BY grouped results sort karta hai.",
code:"SELECT Dept, AVG(Salary) AS Avg\nFROM Employees\nGROUP BY Dept\nORDER BY Avg DESC; -- highest avg first"}
];
