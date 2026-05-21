var Q91_120=[
{num:91,chapter:"SQL Intermediate",q:"What is the use of LIMIT in SQL?",
en:"LIMIT restricts the number of rows returned by a query. Useful for pagination, previewing data, or getting top N records. In SQL Server: use TOP or FETCH NEXT. In MySQL/PostgreSQL: use LIMIT. Example: Get top 10 highest paid employees. Combined with OFFSET for pagination — skip first N rows, take next M.",
hi:"LIMIT query ke result mein rows ki sankhya restrict karta hai. Pagination, data preview ya top N records ke liye useful hai. SQL Server mein TOP ya FETCH NEXT use hota hai. MySQL/PostgreSQL mein LIMIT. Top 10 highest paid employees — LIMIT 10 with ORDER BY Salary DESC.",
code:"-- MySQL/PostgreSQL\nSELECT * FROM Employees ORDER BY Salary DESC LIMIT 10;\n-- SQL Server\nSELECT TOP 10 * FROM Employees ORDER BY Salary DESC;\n-- Pagination\nSELECT * FROM Emp ORDER BY Id OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY;"},

{num:92,chapter:"SQL Intermediate",q:"How to find the Second Highest Salary in SQL?",
en:"Multiple approaches: 1. Use subquery: SELECT MAX(Salary) WHERE Salary < (SELECT MAX(Salary)). 2. Use DENSE_RANK(): partition by salary, get rank=2. 3. Use DISTINCT and OFFSET. Most interview-safe approach uses subquery or window function. Handle ties carefully — DENSE_RANK handles ties better than RANK or simple MAX approach.",
hi:"Multiple approaches: 1. Subquery: SELECT MAX(Salary) jahan salary max se kam ho. 2. DENSE_RANK() se rank=2 wala lo. 3. DISTINCT aur OFFSET. Interview mein subquery ya window function approach sabse safe hai. DENSE_RANK ties handle karta hai — RANK se better.",
code:"-- Subquery approach\nSELECT MAX(Salary) FROM Employees\nWHERE Salary < (SELECT MAX(Salary) FROM Employees);\n-- Window function\nSELECT Salary FROM (\n  SELECT Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) AS Rnk\n  FROM Employees) T WHERE Rnk = 2;"},

{num:93,chapter:"SQL Intermediate",q:"How to find Duplicate Records in a table?",
en:"Use GROUP BY with HAVING COUNT(*) > 1 to find duplicate values. Example: Find duplicate emails — GROUP BY Email HAVING COUNT(*) > 1. To see full duplicate rows, use self join or ROW_NUMBER(). With ROW_NUMBER(), find rows where same key has row number > 1 — those are duplicates.",
hi:"GROUP BY aur HAVING COUNT(*) > 1 se duplicate values dhundho. Jaise Email column mein duplicates: GROUP BY Email HAVING COUNT(*) > 1. Full duplicate rows dekhne ke liye self join ya ROW_NUMBER() use karo. ROW_NUMBER() > 1 wali rows duplicates hain.",
code:"-- Find duplicate emails\nSELECT Email, COUNT(*) as Count\nFROM Users\nGROUP BY Email\nHAVING COUNT(*) > 1;\n-- Full rows using ROW_NUMBER()\nSELECT * FROM (\n  SELECT *, ROW_NUMBER() OVER (PARTITION BY Email ORDER BY Id) rn\n  FROM Users) T WHERE rn > 1;"},

{num:94,chapter:"SQL Intermediate",q:"What is CTE (Common Table Expression)?",
en:"CTE is a temporary, named result set defined using WITH keyword. Makes complex queries readable and reusable within the same query. Better than subqueries for readability. Can be recursive for hierarchical data. CTE exists only for the duration of the query — not stored in database. Example: Define CTE for high earners, then query it.",
hi:"CTE WITH keyword se define kiya jaane wala temporary named result set hai. Complex queries ko readable banata hai. Subqueries se readable hota hai. Recursive CTE se hierarchical data query hoti hai. Sirf current query tak exist karta hai — database mein store nahi hota.",
code:"WITH HighEarners AS (\n  SELECT * FROM Employees WHERE Salary > 70000\n)\nSELECT Name, Dept FROM HighEarners WHERE Dept='IT';"},

{num:95,chapter:"SQL Intermediate",q:"What is Temporary Table in SQL?",
en:"Temporary table is a table created in TempDB that exists only for the current session. Created with # prefix (local temp) or ## prefix (global temp) in SQL Server. Used for storing intermediate results in complex queries. Automatically dropped when session ends. Slower than CTEs for simple cases but useful for multi-step processing.",
hi:"Temporary table TempDB mein create hoti hai aur sirf current session tak exist karti hai. SQL Server mein # (local) ya ## (global) prefix use hota hai. Complex queries mein intermediate results store karne ke liye useful hai. Session end hone par auto delete hoti hai.",
code:"-- Create temp table\nCREATE TABLE #TempEmployees (Id INT, Name VARCHAR(50));\nINSERT INTO #TempEmployees SELECT Id, Name FROM Employees WHERE Active=1;\nSELECT * FROM #TempEmployees;\nDROP TABLE #TempEmployees;"},

{num:96,chapter:"SQL Intermediate",q:"What is Window Function in SQL?",
en:"Window functions perform calculations across a set of table rows related to the current row — without collapsing them into groups like GROUP BY. Use OVER() clause with optional PARTITION BY and ORDER BY. Examples: ROW_NUMBER(), RANK(), DENSE_RANK(), SUM() OVER(), AVG() OVER(), LAG(), LEAD(). Powerful for analytics and reporting queries.",
hi:"Window functions related rows ke saath calculations karte hain bina GROUP BY jaise rows collapse kiye. OVER() clause ke saath use hote hain PARTITION BY aur ORDER BY ke saath. ROW_NUMBER(), RANK(), DENSE_RANK(), LAG(), LEAD() sab window functions hain. Analytics aur reporting mein powerful hain.",
code:"SELECT Name, Salary,\n  RANK() OVER (ORDER BY Salary DESC) AS SalaryRank,\n  SUM(Salary) OVER () AS TotalPayroll\nFROM Employees;"},

{num:97,chapter:"SQL Intermediate",q:"What is the difference between ROW_NUMBER(), RANK(), and DENSE_RANK()?",
en:"ROW_NUMBER(): assigns unique sequential integers to rows — no ties, always unique (1,2,3,4). RANK(): assigns same rank to ties, skips next rank (1,1,3,4 — no 2). DENSE_RANK(): assigns same rank to ties, no gaps (1,1,2,3). Interview tip: If salary 5000 appears twice: ROW_NUMBER=1,2; RANK=1,1,3; DENSE_RANK=1,1,2.",
hi:"ROW_NUMBER(): unique sequential number, ties bhi alag — 1,2,3,4. RANK(): ties ko same rank, next skip — 1,1,3. DENSE_RANK(): ties same rank, no gap — 1,1,2. Interview tip: Salary 5000 do baar: ROW_NUMBER=1,2; RANK=1,1,3; DENSE_RANK=1,1,2. Second highest ke liye DENSE_RANK better hai.",
code:"SELECT Name, Salary,\n  ROW_NUMBER() OVER (ORDER BY Salary DESC) AS RN,\n  RANK()       OVER (ORDER BY Salary DESC) AS RK,\n  DENSE_RANK() OVER (ORDER BY Salary DESC) AS DR\nFROM Employees;"},

{num:98,chapter:"SQL Intermediate",q:"What is CASE Statement in SQL?",
en:"CASE statement adds if-else logic in SQL queries. Two forms: simple CASE (compares expression to values) and searched CASE (uses conditions). Returns a value based on matching condition. Example: Convert numeric status to text labels. Can be used in SELECT, ORDER BY, WHERE, GROUP BY clauses.",
hi:"CASE statement SQL mein if-else logic add karta hai. Two forms: simple CASE (value compare) aur searched CASE (conditions use). Matching condition ka value return karta hai. Status 1 ko 'Active', 0 ko 'Inactive' convert karna ho tab use karo. SELECT, ORDER BY, WHERE sab mein use hota hai.",
code:"SELECT Name, Salary,\n  CASE\n    WHEN Salary > 70000 THEN 'High'\n    WHEN Salary > 40000 THEN 'Medium'\n    ELSE 'Low'\n  END AS SalaryBand\nFROM Employees;"},

{num:99,chapter:"SQL Intermediate",q:"What is COALESCE in SQL?",
en:"COALESCE returns the first non-NULL value from a list of expressions. Takes multiple arguments, returns first non-null. Used to handle NULL values gracefully. Example: Display nickname if available, else first name, else 'Unknown'. Better than ISNULL() which only takes 2 arguments. Works in all major SQL databases.",
hi:"COALESCE given expressions mein se pehla non-NULL value return karta hai. Multiple arguments leta hai. NULL values handle karne ke liye use karo. Jaise nickname ho to dikhaao, nahi to first name, nahi to 'Unknown'. ISNULL() se better hai — multiple options de sakte ho.",
code:"SELECT Name,\n  COALESCE(Nickname, FirstName, 'Unknown') AS DisplayName\nFROM Users;\n-- If Nickname=NULL, FirstName='Ram': returns 'Ram'"},

{num:100,chapter:"SQL Intermediate",q:"What is NVL Function in SQL?",
en:"NVL is an Oracle SQL function that replaces NULL with a specified value. Similar to ISNULL() in SQL Server or COALESCE(). NVL(column, replacement) — if column is NULL, returns replacement. Example: NVL(Bonus, 0) returns 0 if Bonus is NULL. Not available in SQL Server/MySQL — use ISNULL() or COALESCE() instead.",
hi:"NVL Oracle SQL mein NULL ko specified value se replace karta hai. SQL Server mein ISNULL() aur standard SQL mein COALESCE() iska equivalent hai. NVL(column, value) — column NULL ho to value return karo. Jaise NVL(Bonus, 0) — Bonus NULL ho to 0 return hoga.",
code:"-- Oracle\nSELECT NVL(Bonus, 0) FROM Employees;\n-- SQL Server equivalent\nSELECT ISNULL(Bonus, 0) FROM Employees;\n-- Standard SQL\nSELECT COALESCE(Bonus, 0) FROM Employees;"},

{num:101,chapter:"SQL Intermediate",q:"What is Indexing in SQL?",
en:"Index is a database object that speeds up data retrieval. Works like a book's index — instead of scanning every row (full table scan), SQL uses index to find rows fast. Created on columns used frequently in WHERE, JOIN, ORDER BY. Speeds up reads but slows down INSERT/UPDATE/DELETE (index must be maintained).",
hi:"Index data retrieval fast karne wala database object hai. Book ke index jaise kaam karta hai — poori table scan karne ki bajaye SQL index se rows fast dhundhta hai. WHERE, JOIN, ORDER BY mein frequently use hone wale columns par index banao. Reads fast hote hain par writes thodi slow.",
code:"-- Create index\nCREATE INDEX IX_Employees_Email ON Employees(Email);\n-- Now this query is fast:\nSELECT * FROM Employees WHERE Email = 'ram@example.com';"},

{num:102,chapter:"SQL Intermediate",q:"What is Clustered Index?",
en:"Clustered index physically sorts and stores the table rows based on the index key. A table can have only ONE clustered index. Primary key automatically creates a clustered index. The table data itself IS the clustered index (leaf nodes contain actual data). Fastest for range queries and ORDER BY on indexed column.",
hi:"Clustered index table ke rows ko physically index key ke order mein sort aur store karta hai. Ek table mein sirf ek clustered index hota hai. Primary key automatically clustered index banata hai. Table data aur clustered index ek hi hote hain. Range queries aur ORDER BY ke liye fastest hai.",
code:"-- PK creates clustered index automatically\nCREATE TABLE Employees (\n  EmpId INT PRIMARY KEY,  -- clustered index\n  Name VARCHAR(50)\n);\n-- Explicit clustered\nCREATE CLUSTERED INDEX IX_Emp_Id ON Employees(EmpId);"},

{num:103,chapter:"SQL Intermediate",q:"What is Non-Clustered Index?",
en:"Non-clustered index creates a separate structure containing the indexed column values and pointers to the actual data rows. A table can have multiple non-clustered indexes (up to 999 in SQL Server). Does not change physical data order. Leaf nodes contain index key + row locator (clustered key or row ID). Good for lookup queries.",
hi:"Non-clustered index ek alag structure banata hai jisme indexed column values aur actual data rows ke pointers hote hain. Ek table mein multiple non-clustered indexes ho sakte hain. Table data ka physical order change nahi hota. Lookup queries ke liye good hai.",
code:"-- Multiple non-clustered indexes ok\nCREATE NONCLUSTERED INDEX IX_Emp_Email ON Employees(Email);\nCREATE NONCLUSTERED INDEX IX_Emp_Dept ON Employees(DeptId);\nCREATE NONCLUSTERED INDEX IX_Emp_Name ON Employees(Name);"},

{num:104,chapter:"SQL Intermediate",q:"What is the difference between Clustered and Non-Clustered Index?",
en:"Clustered: physically reorders table data, one per table, leaf=actual data, fastest range scans. Non-Clustered: separate structure, multiple per table, leaf=pointer to data, requires extra lookup. Think of Clustered as a sorted phone book (data in order) and Non-Clustered as the book's index (pointer to page number).",
hi:"Clustered: table data physically sort karta hai, ek per table, leaf mein actual data. Non-Clustered: separate structure, multiple per table, leaf mein data pointer. Phone book analogy: Clustered = alphabetically sorted book (data order mein), Non-Clustered = book ke index mein page number pointer.",
code:"Clustered:  PK on EmpId  → table sorted by EmpId\nNon-Clustered: Index on Email → separate B-tree with email+pointer"},

{num:105,chapter:"SQL Intermediate",q:"What is View in SQL?",
en:"A View is a virtual table based on a SQL query. It doesn't store data itself (except indexed views); data comes from underlying tables. Used to simplify complex queries, restrict access (show only allowed columns), and present data differently. Can be queried like a table. Updatable views exist with limitations.",
hi:"View ek virtual table hai jo SQL query par based hai. Data khud store nahi karta — underlying tables se aata hai. Complex queries simplify karne, access restrict karne (sirf allowed columns dikhane) aur data alag tarike se present karne ke liye use hota hai. Table jaise query kar sakte ho.",
code:"CREATE VIEW ActiveEmployees AS\n  SELECT Id, Name, Dept FROM Employees WHERE IsActive = 1;\n-- Use like a table\nSELECT * FROM ActiveEmployees WHERE Dept = 'IT';"},

{num:106,chapter:"SQL Intermediate",q:"What is the difference between View and Table?",
en:"Table: physical storage, contains actual data, DML operations directly modify data. View: virtual, no physical storage (usually), data from underlying tables, shows computed/filtered data. Table exists independently; view depends on tables. Views add a layer of abstraction and security. Indexed views can store data for performance.",
hi:"Table: physical storage, actual data hota hai, DML se directly data change. View: virtual, khud data store nahi karta (usually), underlying tables se aata hai. Table independent hai, view tables par depend karta hai. Views security layer aur abstraction dete hain. Indexed views data store karte hain.",
code:"-- Table: stores data\nINSERT INTO Employees VALUES (1,'Ram','IT');\n-- View: shows filtered data, no storage\nSELECT * FROM ActiveEmployees; -- view query"},

{num:107,chapter:"SQL Intermediate",q:"What is Stored Procedure?",
en:"Stored Procedure is a precompiled set of SQL statements stored in the database and executed as a unit. Accepts parameters (input/output). Benefits: performance (precompiled, execution plan cached), security (users execute SP without direct table access), code reuse, reduced network traffic. Example: sp_GetEmployeeById accepts EmpId, returns employee record.",
hi:"Stored Procedure precompiled SQL statements ka set hai jo database mein store hota hai. Parameters accept karta hai. Benefits: performance (precompiled), security (direct table access nahi), code reuse, network traffic kam. Jaise sp_GetEmployeeById: EmpId le aur employee return kare.",
code:"CREATE PROCEDURE sp_GetEmployee @EmpId INT\nAS\nBEGIN\n  SELECT * FROM Employees WHERE Id = @EmpId;\nEND;\n-- Execute\nEXEC sp_GetEmployee @EmpId = 5;"},

{num:108,chapter:"SQL Intermediate",q:"What is the difference between Function and Stored Procedure?",
en:"Function: must return a value, cannot modify data (no INSERT/UPDATE/DELETE in most cases), can be used in SELECT, WHERE, JOIN. Stored Procedure: may or may not return value, can modify data, called with EXEC, cannot be used inside SELECT. Functions are for computations; SPs for business logic with side effects.",
hi:"Function: value return karna zaroori, data modify nahi kar sakta, SELECT/WHERE mein use ho sakta. Stored Procedure: return optional, data modify kar sakta, EXEC se call hota, SELECT mein use nahi hota. Functions computations ke liye, SPs business logic aur data modification ke liye.",
code:"-- Function (returns value, usable in SELECT)\nCREATE FUNCTION GetFullName(@First VARCHAR, @Last VARCHAR)\nRETURNS VARCHAR(100) AS BEGIN RETURN @First+' '+@Last END;\n-- Use in SELECT\nSELECT dbo.GetFullName(FirstName, LastName) FROM Employees;"},

{num:109,chapter:"SQL Intermediate",q:"What is Trigger in SQL?",
en:"Trigger is a special stored procedure that automatically executes in response to DML events (INSERT, UPDATE, DELETE) on a table. Used for auditing, enforcing business rules, maintaining logs, cascading changes. Types: AFTER trigger (fires after the event) and INSTEAD OF trigger (replaces the event). Cannot be called manually.",
hi:"Trigger ek special stored procedure hai jo automatically execute hota hai jab table par DML event (INSERT/UPDATE/DELETE) hota hai. Auditing, business rules enforce karna, logs maintain karna ke liye use hota hai. AFTER trigger event ke baad fire hota hai, INSTEAD OF uski jagah.",
code:"CREATE TRIGGER trg_AfterInsert ON Employees\nAFTER INSERT AS\nBEGIN\n  INSERT INTO AuditLog(Action, TableName, Date)\n  VALUES('INSERT','Employees', GETDATE())\nEND;"},

{num:110,chapter:"SQL Intermediate",q:"What is Cursor in SQL?",
en:"Cursor allows row-by-row processing of query results — useful when set-based operations aren't sufficient. Works like a pointer that moves through result rows. Steps: DECLARE cursor, OPEN it, FETCH rows in a loop, CLOSE and DEALLOCATE. Performance-intensive — avoid cursors when set-based operations (JOINs, CTEs) can achieve the same result.",
hi:"Cursor query results ko row-by-row process karne deta hai. Pointer ki tarah kaam karta hai jo rows mein move karta hai. Steps: DECLARE, OPEN, FETCH (loop mein), CLOSE, DEALLOCATE. Performance-intensive hai — jab set-based operations (JOIN, CTE) se kaam ho tab cursor avoid karo.",
code:"DECLARE cur CURSOR FOR SELECT Id, Name FROM Employees;\nOPEN cur;\nFETCH NEXT FROM cur INTO @Id, @Name;\nWHILE @@FETCH_STATUS = 0 BEGIN\n  PRINT @Name;\n  FETCH NEXT FROM cur INTO @Id, @Name;\nEND;\nCLOSE cur; DEALLOCATE cur;"},

{num:111,chapter:"SQL Advanced",q:"What is the ACID Property in SQL?",
en:"ACID properties ensure reliable database transactions. A=Atomicity (all or nothing — if part fails, all rolls back). C=Consistency (transaction takes DB from one valid state to another). I=Isolation (concurrent transactions don't interfere). D=Durability (committed transactions persist even after crash). Example: Bank transfer must be atomic — debit and credit both succeed or both fail.",
hi:"ACID properties database transactions ko reliable banate hain. A=Atomicity (poora ya kuch nahi). C=Consistency (valid state mein rahe). I=Isolation (concurrent transactions interfere na karein). D=Durability (committed data crash ke baad bhi rahe). Bank transfer ACID ka best example hai.",
code:"BEGIN TRANSACTION;\n  UPDATE Accounts SET Balance -= 1000 WHERE Id=1; -- Debit\n  UPDATE Accounts SET Balance += 1000 WHERE Id=2; -- Credit\nCOMMIT; -- Both succeed\n-- If error: ROLLBACK; -- Both cancelled"},

{num:112,chapter:"SQL Advanced",q:"What is a Transaction in SQL?",
en:"Transaction is a sequence of SQL operations executed as a single unit. Either all operations succeed (COMMIT) or none take effect (ROLLBACK). Managed using BEGIN TRANSACTION, COMMIT, ROLLBACK. Ensures data consistency and integrity. Example: Transferring money between bank accounts — both debit and credit must succeed together.",
hi:"Transaction SQL operations ka sequence hai jo ek unit ki tarah execute hota hai. Ya to sab succeed ho (COMMIT) ya koi bhi na ho (ROLLBACK). BEGIN TRANSACTION, COMMIT, ROLLBACK se manage hota hai. Bank transfer perfect example hai — debit aur credit dono ek saath succeed ya fail.",
code:"BEGIN TRANSACTION;\nBEGIN TRY\n  UPDATE Acc SET Bal -= 500 WHERE Id=1;\n  UPDATE Acc SET Bal += 500 WHERE Id=2;\n  COMMIT;\nEND TRY\nBEGIN CATCH\n  ROLLBACK;\nEND CATCH"},

{num:113,chapter:"SQL Advanced",q:"What is the difference between COMMIT and ROLLBACK?",
en:"COMMIT permanently saves all changes made in the current transaction to the database. Once committed, changes cannot be undone (except via another DML). ROLLBACK undoes all changes made in the current transaction — reverts to the state before the transaction started. Use in error handling to maintain data integrity.",
hi:"COMMIT transaction ke sare changes permanently database mein save karta hai — undo nahi ho sakta baad mein. ROLLBACK transaction ke sare changes undo karta hai — pehle wali state mein waapas. Error handling mein ROLLBACK use karo data integrity ke liye.",
code:"BEGIN TRANSACTION;\n  DELETE FROM Orders WHERE Status='Cancelled';\n\nIF @@ERROR = 0\n  COMMIT;    -- Save changes\nELSE\n  ROLLBACK;  -- Undo changes"},

{num:114,chapter:"SQL Advanced",q:"What is Savepoint in SQL?",
en:"Savepoint creates a point within a transaction to which you can rollback partially — without rolling back the entire transaction. Useful in long transactions where you want to undo only part of the work. SAVEPOINT name → work → ROLLBACK TO name. Allows fine-grained control over transaction rollback. Supported in Oracle, MySQL, PostgreSQL.",
hi:"Savepoint transaction ke andar ek checkpoint banata hai jahan tak aap partially rollback kar sako — poora rollback nahi. Lambe transactions mein sirf kuch operations undo karne ke liye useful hai. SAVEPOINT name → kaam karo → ROLLBACK TO name. Oracle, MySQL, PostgreSQL mein supported hai.",
code:"BEGIN TRANSACTION;\n  INSERT INTO Orders VALUES(1, 500);\n  SAVE TRANSACTION sp1;  -- savepoint\n  INSERT INTO Orders VALUES(2, 300);\n  ROLLBACK TRANSACTION sp1;  -- undo only 2nd insert\n  COMMIT;  -- 1st insert saved"},

{num:115,chapter:"SQL Advanced",q:"What is the difference between IN and EXISTS?",
en:"IN: checks if a value exists in a list/subquery result. Returns all outer rows where column matches any value in subquery. EXISTS: checks if subquery returns any rows — returns TRUE/FALSE. EXISTS is faster when subquery returns large results (short-circuits on first match). IN is better for small static lists. Both achieve similar results but differ in performance.",
hi:"IN: value specified list ya subquery mein hai ya nahi check karta. EXISTS: subquery koi bhi row return kare ya nahi check karta — TRUE/FALSE. EXISTS large subquery mein fast hai (first match par ruk jaata hai). IN small lists ke liye better. Performance mein EXISTS mostly winner hai.",
code:"-- IN\nSELECT * FROM Employees WHERE DeptId IN (SELECT Id FROM Departments WHERE Name='IT');\n-- EXISTS (faster for large subquery)\nSELECT * FROM Employees e WHERE EXISTS (SELECT 1 FROM Departments d WHERE d.Id=e.DeptId AND d.Name='IT');"},

{num:116,chapter:"SQL Advanced",q:"What is Index Fragmentation?",
en:"Index fragmentation occurs when the logical order of index pages doesn't match the physical order on disk, or when index pages are not full. Causes: frequent INSERT/UPDATE/DELETE operations. Results in slower query performance. Two types: Internal fragmentation (pages not full) and External fragmentation (page order mismatch). Fix: REORGANIZE (light) or REBUILD (heavy) the index.",
hi:"Index fragmentation tab hoti hai jab index pages ka logical order physical order se match na kare, ya pages full na hon. Frequent INSERT/UPDATE/DELETE se hota hai. Query performance slow hoti hai. Internal (pages half-empty) aur External (order mismatch) dono types hain. REORGANIZE ya REBUILD se fix karo.",
code:"-- Check fragmentation\nSELECT * FROM sys.dm_db_index_physical_stats(DB_ID(), OBJECT_ID('Employees'), NULL, NULL, 'DETAILED');\n-- Fix\nALTER INDEX IX_Emp_Email ON Employees REORGANIZE; -- mild\nALTER INDEX ALL ON Employees REBUILD; -- heavy"},

{num:117,chapter:"SQL Advanced",q:"How to fetch common records from two tables?",
en:"Use INTERSECT to find common rows between two queries. Or use INNER JOIN on the common key. Or use WHERE EXISTS with subquery. INTERSECT returns only rows that appear in both result sets — removes duplicates. Example: Find employees who are also customers (by email or name). JOIN on the matching column is most common approach.",
hi:"INTERSECT do queries ke common rows return karta hai. Ya INNER JOIN common key par. Ya WHERE EXISTS subquery. INTERSECT automatically duplicates remove karta hai. Jaise employees jo customers bhi hain (email se match) — INTERSECT ya INNER JOIN se.",
code:"-- INTERSECT\nSELECT Email FROM Employees\nINTERSECT\nSELECT Email FROM Customers;\n-- JOIN approach\nSELECT e.Name FROM Employees e\nINNER JOIN Customers c ON e.Email = c.Email;"},

{num:118,chapter:"SQL Advanced",q:"What is Pivot Table in SQL?",
en:"PIVOT in SQL transforms rows into columns — useful for reporting and cross-tabulation. Example: Convert monthly sales records (rows) into columns (Jan, Feb, Mar) with SUM. SQL Server has built-in PIVOT syntax. MySQL and PostgreSQL use CASE WHEN aggregate approach. Opposite operation (columns to rows) is UNPIVOT.",
hi:"PIVOT SQL mein rows ko columns mein convert karta hai — reporting ke liye useful. Jaise monthly sales rows ko columns (Jan, Feb, Mar) mein badhao SUM ke saath. SQL Server mein built-in PIVOT syntax hai. MySQL mein CASE WHEN aggregate approach use karo. Opposite: UNPIVOT.",
code:"SELECT * FROM Sales\nPIVOT (\n  SUM(Amount)\n  FOR Month IN ([Jan],[Feb],[Mar],[Apr])\n) AS PivotTable;"},

{num:119,chapter:"SQL Advanced",q:"What is Case Sensitivity in SQL?",
en:"SQL keywords (SELECT, FROM, WHERE) are case-insensitive in most databases. But data comparison can be case-sensitive depending on collation settings. In SQL Server, default collation is case-insensitive (SQL_Latin1_General_CP1_CI_AS — CI=Case Insensitive). MySQL default is case-insensitive on Windows. Use BINARY or COLLATE for case-sensitive comparisons.",
hi:"SQL keywords (SELECT, FROM) case-insensitive hote hain. Data comparison collation setting par depend karta hai. SQL Server ka default collation CI (Case Insensitive) hota hai. MySQL Windows par case-insensitive hai by default. Case-sensitive comparison ke liye BINARY ya COLLATE use karo.",
code:"-- Case insensitive (default SQL Server)\nSELECT * FROM Users WHERE Name = 'ram'; -- finds 'Ram','RAM','ram'\n-- Case sensitive\nSELECT * FROM Users WHERE Name COLLATE Latin1_General_CS_AS = 'Ram';"},

{num:120,chapter:"SQL Advanced",q:"How to find the Nth Highest Salary?",
en:"Use DENSE_RANK() window function for reliable Nth highest salary. Or use subquery approach: SELECT TOP 1 FROM (SELECT DISTINCT TOP N Salary ORDER BY DESC) ORDER BY ASC. N=2 gives 2nd highest. DENSE_RANK approach handles ties correctly. Parameterize N using variable. Classic interview question — memorize both approaches.",
hi:"DENSE_RANK() window function se Nth highest salary reliable tarike se milti hai. Ya subquery approach: TOP 1 FROM (DISTINCT TOP N Salary DESC). N=2 for 2nd highest. DENSE_RANK ties handle karta hai correctly. N ko variable mein parameterize kar sakte ho. Classic interview question — dono tarike yaad karo.",
code:"-- DENSE_RANK approach (N=3rd highest)\nSELECT Salary FROM (\n  SELECT Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) AS Rnk\n  FROM Employees) T\nWHERE Rnk = 3; -- change N here"}
];
