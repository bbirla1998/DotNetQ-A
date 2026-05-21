var Q121_150=[
{num:121,chapter:"SQL Advanced",q:"What is the difference between Drop, Delete, and Truncate?",
en:"DELETE: DML, removes specific rows with WHERE clause, can be rolled back, fires triggers, slow for large data. TRUNCATE: DDL, removes all rows fast, resets identity, usually cannot be rolled back, does not fire row-level triggers. DROP: DDL, removes entire table (structure + data), cannot be rolled back. DELETE=rows, TRUNCATE=reset, DROP=gone.",
hi:"DELETE: DML, WHERE se specific rows hatao, rollback ho sakta hai, triggers fire, slow. TRUNCATE: DDL, saari rows fast remove, identity reset, rollback nahi (mostly), row triggers nahi. DROP: poori table structure aur data delete, rollback nahi. Simple: DELETE=kuch rows, TRUNCATE=reset table, DROP=table khatam.",
code:"DELETE FROM Logs WHERE Date < '2024-01-01'; -- specific rows\nTRUNCATE TABLE TempLogs;                    -- all rows, fast\nDROP TABLE OldArchive;                      -- table deleted"},

{num:122,chapter:"SQL Advanced",q:"How to calculate Age from Date of Birth in SQL?",
en:"Calculate age by finding difference between current date and Date of Birth. In SQL Server: use DATEDIFF(YEAR, DOB, GETDATE()) but adjust for birthday not yet occurred this year. More accurate: DATEDIFF + adjustment with DATEADD. In MySQL: use TIMESTAMPDIFF(YEAR, DOB, CURDATE()). Always handle the birthday cutoff for precise age.",
hi:"Age calculate karne ke liye current date aur DOB ka difference nikalo. SQL Server mein DATEDIFF(YEAR, DOB, GETDATE()) — par agar birthday abhi nahi aaya to ek minus karo. MySQL mein TIMESTAMPDIFF(YEAR, DOB, CURDATE()) accurate result deta hai. Birthday cutoff handle karna zaroori hai.",
code:"-- SQL Server\nSELECT Name,\n  DATEDIFF(YEAR, DOB, GETDATE()) -\n  CASE WHEN DATEADD(YY, DATEDIFF(YY,DOB,GETDATE()), DOB) > GETDATE() THEN 1 ELSE 0 END AS Age\nFROM Employees;"},

{num:123,chapter:"SQL Advanced",q:"What is Recursive Query in SQL?",
en:"Recursive query uses a CTE that references itself. Has two parts: Anchor member (base case, non-recursive) and Recursive member (references the CTE). Used for hierarchical data like org charts, file systems, bill of materials. SQL Server uses WITH RECURSIVE (or just WITH). Must have a termination condition to avoid infinite loops.",
hi:"Recursive query CTE hai jo khud ko reference karti hai. Anchor member (base case) aur Recursive member (CTE ko reference kare) — do parts hote hain. Hierarchical data jaise org chart, file system ke liye use hoti hai. Termination condition zaroori hai infinite loop se bachne ke liye.",
code:"WITH OrgChart AS (\n  SELECT Id, Name, ManagerId FROM Employees WHERE ManagerId IS NULL\n  UNION ALL\n  SELECT e.Id, e.Name, e.ManagerId FROM Employees e\n  INNER JOIN OrgChart o ON e.ManagerId = o.Id\n)\nSELECT * FROM OrgChart;"},

{num:124,chapter:"SQL Advanced",q:"What is the difference between Temporary Table and CTE?",
en:"CTE: defined with WITH, exists only for single query, no physical storage, readable alternative to subqueries, supports recursion. Temp Table: physical table in TempDB, persists for session duration, can be indexed, referenced multiple times in multiple queries. Use CTE for one-time readability; Temp Table for complex multi-step processing or large datasets.",
hi:"CTE: WITH se define, sirf ek query ke liye, physical storage nahi, readable. Temp Table: TempDB mein physical, session tak persist, index lag sakta hai, multiple queries mein use. CTE ek-baar readability ke liye, Temp Table complex multi-step processing ya large datasets ke liye.",
code:"-- CTE: one query only\nWITH TopSales AS (SELECT TOP 10 * FROM Sales ORDER BY Amount DESC)\nSELECT * FROM TopSales;\n-- Temp Table: multiple queries\nSELECT TOP 10 * INTO #TopSales FROM Sales ORDER BY Amount DESC;\nSELECT * FROM #TopSales;\nUPDATE #TopSales SET Processed=1;"},

{num:125,chapter:"SQL Advanced",q:"How to find Odd and Even records in SQL?",
en:"Use MOD (modulo) operation on the row ID or ROW_NUMBER(). Odd rows: WHERE Id % 2 = 1 (or != 0). Even rows: WHERE Id % 2 = 0. If Id is not sequential, use ROW_NUMBER() in a subquery first, then filter. In SQL Server, use % for modulo. In Oracle, use MOD() function.",
hi:"Row ID ya ROW_NUMBER() par MOD operation use karo. Odd rows: WHERE Id % 2 = 1. Even rows: WHERE Id % 2 = 0. Id sequential nahi ho to pehle ROW_NUMBER() subquery mein use karo phir filter karo. SQL Server mein % modulo operator hai, Oracle mein MOD() function.",
code:"-- Odd rows\nSELECT * FROM Employees WHERE Id % 2 = 1;\n-- Even rows\nSELECT * FROM Employees WHERE Id % 2 = 0;\n-- Using ROW_NUMBER if Id not sequential\nSELECT * FROM (\n  SELECT *, ROW_NUMBER() OVER (ORDER BY Id) rn FROM Employees\n) T WHERE rn % 2 = 1;"},

{num:126,chapter:"SQL Advanced",q:"What is JSON in SQL?",
en:"SQL Server supports JSON data — you can store JSON as NVARCHAR and query it using JSON functions. FOR JSON AUTO/PATH converts query results to JSON. OPENJSON() parses JSON into rows/columns. JSON_VALUE() extracts a scalar value. JSON_QUERY() extracts an object/array. Useful for REST APIs and NoSQL-like storage in relational DB.",
hi:"SQL Server JSON data support karta hai. Query results JSON mein convert karo FOR JSON se. OPENJSON() JSON ko rows/columns mein parse karta hai. JSON_VALUE() scalar value nikalti hai. JSON_QUERY() object/array nikalti hai. REST APIs aur NoSQL-like storage ke liye useful hai.",
code:"-- Query to JSON\nSELECT Id, Name FROM Employees FOR JSON AUTO;\n-- JSON to table\nSELECT * FROM OPENJSON('{\"name\":\"Ram\",\"age\":30}')\n  WITH (name VARCHAR(50), age INT);\n-- Extract value\nSELECT JSON_VALUE(Data,'$.name') FROM JsonTable;"},

{num:127,chapter:"SQL Advanced",q:"What is XML in SQL?",
en:"SQL Server has XML data type for storing and querying XML. FOR XML converts result sets to XML. OPENXML() shreds XML into relational rows. XML methods: .query() (XQuery), .value() (extract value), .exist() (check existence), .nodes() (shred). Useful for legacy integrations and data exchange. JSON has largely replaced XML in modern APIs.",
hi:"SQL Server mein XML data type XML store aur query karne ke liye hai. FOR XML results ko XML mein convert karta hai. OPENXML() XML ko relational rows mein todta hai. .query(), .value(), .exist(), .nodes() XML methods hain. Legacy systems aur data exchange ke liye useful. Modern APIs mein JSON ne XML replace kar diya.",
code:"-- Result to XML\nSELECT Id, Name FROM Employees FOR XML AUTO;\n-- Store XML\nDECLARE @xml XML = '<emp><name>Ram</name></emp>';\nSELECT @xml.value('(/emp/name)[1]','VARCHAR(50)');"},

{num:128,chapter:"SQL Advanced",q:"How to handle NULL values in SQL?",
en:"NULL represents unknown/missing data. Cannot use = or != with NULL; use IS NULL or IS NOT NULL. Functions: ISNULL(col, default) or COALESCE(col, default) to replace NULL. NULL in arithmetic returns NULL. NULL in string concat may return NULL. In ORDER BY, NULL sorts first (ASC) or last (DESC) depending on DB.",
hi:"NULL unknown/missing data represent karta hai. NULL ke saath = ya != use nahi — IS NULL ya IS NOT NULL use karo. ISNULL() ya COALESCE() NULL ko replace karte hain. NULL arithmetic mein NULL deta hai. ORDER BY mein NULL first ya last sort hota hai database ke hisaab se.",
code:"-- Check NULL\nSELECT * FROM Employees WHERE ManagerId IS NULL;\n-- Replace NULL\nSELECT ISNULL(Bonus, 0) AS Bonus FROM Employees;\nSELECT COALESCE(Phone, Mobile, 'N/A') AS Contact FROM Users;"},

{num:129,chapter:"SQL Advanced",q:"What is Dynamic SQL?",
en:"Dynamic SQL builds and executes SQL statements as strings at runtime. Used when query structure is not known at compile time (e.g., dynamic table names, column names, filter conditions). In SQL Server: use EXEC() or sp_executesql. Risk: SQL injection — always use parameterized queries with sp_executesql. Useful for generic stored procedures.",
hi:"Dynamic SQL runtime mein SQL statement string ki tarah build aur execute karta hai. Table name ya column name dynamic ho jab compile time mein pata na ho tab use hota hai. SQL Server mein EXEC() ya sp_executesql. Risk: SQL injection — parameterized sp_executesql use karo. Generic stored procedures ke liye useful.",
code:"DECLARE @table VARCHAR(50) = 'Employees';\nDECLARE @sql NVARCHAR(200) = N'SELECT * FROM ' + @table;\nEXEC sp_executesql @sql;\n-- Safe with params\nDECLARE @id INT = 5;\nSET @sql = N'SELECT * FROM Employees WHERE Id=@empId';\nEXEC sp_executesql @sql, N'@empId INT', @empId=@id;"},

{num:130,chapter:"SQL Advanced",q:"How to calculate Percentage in SQL?",
en:"Calculate percentage using division and multiplication. Cast to decimal/float to avoid integer division. Example: score percentage = (Score * 100.0 / TotalScore). Department salary percentage of total: (DeptSalary * 100.0 / TotalSalary). Use ROUND() for clean output. Use window functions for percentage of group totals.",
hi:"Percentage ke liye division aur multiplication use karo. Decimal ya float mein cast karo — integer division se bacho. Jaise Score * 100.0 / TotalScore. ROUND() se clean output. Window functions se group totals ka percentage nikalo. Department ka total payroll mein contribution percentage window function se.",
code:"-- Simple percentage\nSELECT Name, Score, ROUND(Score * 100.0 / 100, 2) AS Percentage\nFROM ExamResults;\n-- Percentage of total using window function\nSELECT Name, Salary,\n  ROUND(Salary * 100.0 / SUM(Salary) OVER(), 2) AS SalaryPct\nFROM Employees;"},

{num:131,chapter:"SQL Real-Time",q:"How to find Employees who earn more than their Manager?",
en:"Use self join — join Employees table with itself. Alias one as employee (e) and one as manager (m). Join on e.ManagerId = m.EmpId. Filter WHERE e.Salary > m.Salary. This returns all employees whose salary exceeds their direct manager's salary. Classic SQL interview question testing self join knowledge.",
hi:"Self join use karo — Employees table ko apne aap se join karo. Ek alias employee (e), doosra manager (m). e.ManagerId = m.EmpId par join karo. WHERE e.Salary > m.Salary filter karo. Jo employees apne manager se zyada kamaa rahe hain unhe return karta hai. Classic self join interview question.",
code:"SELECT e.Name AS Employee, e.Salary,\n       m.Name AS Manager, m.Salary AS ManagerSalary\nFROM Employees e\nINNER JOIN Employees m ON e.ManagerId = m.EmpId\nWHERE e.Salary > m.Salary;"},

{num:132,chapter:"SQL Real-Time",q:"How to find Duplicate Emails in the Employee Table?",
en:"Group by Email column and use HAVING COUNT(*) > 1 to find emails appearing more than once. This shows which emails are duplicated and how many times. To get full row details of duplicates, use ROW_NUMBER() window function with PARTITION BY Email — rows with row number > 1 are duplicates.",
hi:"Email column par GROUP BY karo aur HAVING COUNT(*) > 1 se duplicates dhundho. Ye dikhata hai kaunse emails duplicate hain aur kitni baar. Full row details ke liye ROW_NUMBER() PARTITION BY Email — row number > 1 wali rows duplicates hain.",
code:"-- Find duplicate emails\nSELECT Email, COUNT(*) AS Count\nFROM Employees\nGROUP BY Email\nHAVING COUNT(*) > 1;\n-- Full duplicate rows\nSELECT * FROM (\n  SELECT *, ROW_NUMBER() OVER (PARTITION BY Email ORDER BY Id) AS RN\n  FROM Employees) T WHERE RN > 1;"},

{num:133,chapter:"SQL Real-Time",q:"How to get the Highest Salary in each Department?",
en:"Use GROUP BY DeptId with MAX(Salary) to get highest salary per department. To get the employee name too, use subquery or window function with DENSE_RANK() PARTITION BY DeptId. The DENSE_RANK() approach handles ties — multiple employees with max salary in same dept all rank 1.",
hi:"GROUP BY DeptId aur MAX(Salary) se har department mein highest salary nikalo. Employee name bhi chahiye to subquery ya DENSE_RANK() PARTITION BY DeptId use karo. DENSE_RANK() ties handle karta hai — same dept mein multiple max salary wale sab rank 1 pe hote hain.",
code:"-- Max salary per dept\nSELECT DeptId, MAX(Salary) AS MaxSalary FROM Employees GROUP BY DeptId;\n-- With employee name using window function\nSELECT * FROM (\n  SELECT *, DENSE_RANK() OVER (PARTITION BY DeptId ORDER BY Salary DESC) AS DR\n  FROM Employees) T WHERE DR = 1;"},

{num:134,chapter:"SQL Real-Time",q:"How to find Employees joined in the last 3 months?",
en:"Filter using DATEADD and GETDATE() — compare JoiningDate with date 3 months ago. DATEADD(MONTH, -3, GETDATE()) gives date 3 months back. Use WHERE JoiningDate >= DATEADD(MONTH, -3, GETDATE()). In MySQL: DATE_SUB(NOW(), INTERVAL 3 MONTH). Useful for HR reports, onboarding dashboards, and retention analysis.",
hi:"DATEADD aur GETDATE() se filter karo — JoiningDate ko 3 mahine pehle ki date se compare karo. DATEADD(MONTH, -3, GETDATE()) se 3 mahine pehle ki date milti hai. WHERE JoiningDate >= us date. MySQL mein DATE_SUB(NOW(), INTERVAL 3 MONTH). HR reports aur onboarding dashboards ke liye useful.",
code:"-- SQL Server\nSELECT * FROM Employees\nWHERE JoiningDate >= DATEADD(MONTH, -3, GETDATE());\n-- MySQL\nSELECT * FROM Employees\nWHERE JoiningDate >= DATE_SUB(NOW(), INTERVAL 3 MONTH);"},

{num:135,chapter:"SQL Real-Time",q:"How to Display the First 5 Records in SQL?",
en:"In SQL Server: SELECT TOP 5 * FROM table ORDER BY Id. In MySQL/PostgreSQL: SELECT * FROM table ORDER BY Id LIMIT 5. In Oracle: SELECT * FROM table WHERE ROWNUM <= 5 (or use FETCH FIRST 5 ROWS ONLY in Oracle 12c+). Always include ORDER BY for consistent results — without it, order is not guaranteed.",
hi:"SQL Server mein: SELECT TOP 5 * FROM table ORDER BY Id. MySQL/PostgreSQL mein: LIMIT 5. Oracle mein: ROWNUM <= 5 ya FETCH FIRST 5 ROWS ONLY (12c+). ORDER BY zaroori hai consistent results ke liye — bina ORDER BY ke row order guaranteed nahi hota.",
code:"-- SQL Server\nSELECT TOP 5 * FROM Employees ORDER BY Id;\n-- MySQL/PostgreSQL\nSELECT * FROM Employees ORDER BY Id LIMIT 5;\n-- Oracle 12c+\nSELECT * FROM Employees ORDER BY Id FETCH FIRST 5 ROWS ONLY;"},

{num:136,chapter:"SQL Real-Time",q:"How to find the Number of Employees in each Department?",
en:"Use COUNT(*) with GROUP BY DeptId or DeptName. Gives count of employees per department. Add JOIN to include department name if stored in separate table. Add ORDER BY COUNT(*) DESC to rank departments by size. HAVING clause can filter departments with minimum employee count.",
hi:"COUNT(*) aur GROUP BY DeptId se har department mein employees ka count nikalo. Department name ke liye JOIN karo. ORDER BY COUNT(*) DESC se departments ko size ke hisaab se rank karo. HAVING se minimum employee count wale departments filter karo.",
code:"SELECT d.DeptName, COUNT(e.Id) AS EmpCount\nFROM Departments d\nLEFT JOIN Employees e ON e.DeptId = d.Id\nGROUP BY d.DeptName\nORDER BY EmpCount DESC;"},

{num:137,chapter:"SQL Real-Time",q:"How to find the Last 3 Records in SQL?",
en:"Order by Id DESC and take TOP 3 (SQL Server) or LIMIT 3 (MySQL). To get them in ascending order, wrap in subquery: SELECT * FROM (SELECT TOP 3 * ORDER BY Id DESC) T ORDER BY Id ASC. Alternatively use ROW_NUMBER() with descending order and filter top 3 ranks.",
hi:"Id DESC order karo aur TOP 3 (SQL Server) ya LIMIT 3 (MySQL) lo. Ascending order mein chahiye to subquery mein wrap karo: TOP 3 DESC ke baad outer query mein ASC sort. Ya ROW_NUMBER() descending se top 3 ranks filter karo.",
code:"-- SQL Server\nSELECT * FROM (SELECT TOP 3 * FROM Employees ORDER BY Id DESC) T ORDER BY Id ASC;\n-- MySQL\nSELECT * FROM (SELECT * FROM Employees ORDER BY Id DESC LIMIT 3) T ORDER BY Id ASC;"},

{num:138,chapter:"SQL Real-Time",q:"How to find Employees without Managers?",
en:"Employees without managers have NULL in the ManagerId column (they are top-level). Use WHERE ManagerId IS NULL. Or use LEFT JOIN: Employees LEFT JOIN Employees (as manager) where manager.EmpId IS NULL — finds employees with no valid manager reference. Useful for org chart roots and hierarchy queries.",
hi:"Jinke ManagerId NULL hai — wo top-level employees hain jinke koi manager nahi. WHERE ManagerId IS NULL use karo. Ya LEFT JOIN self join: employee ki side le aur manager side NULL aaye to manager nahi hai. Org chart roots aur hierarchy queries mein useful hai.",
code:"-- Simple approach\nSELECT * FROM Employees WHERE ManagerId IS NULL;\n-- Self LEFT JOIN approach\nSELECT e.Name FROM Employees e\nLEFT JOIN Employees m ON e.ManagerId = m.EmpId\nWHERE m.EmpId IS NULL;"},

{num:139,chapter:"SQL Real-Time",q:"How to find the First Name starting with 'A'?",
en:"Use LIKE operator with 'A%' pattern to find names starting with 'A'. % wildcard matches any sequence of characters. For case-sensitive match, use COLLATE or BINARY keyword. Can combine with other conditions. LIKE 'A%' finds all names starting with A; LIKE '%a%' finds names containing 'a' anywhere.",
hi:"LIKE operator 'A%' pattern se 'A' se shuru hone wale names dhundho. % wildcard kisi bhi characters match karta hai. Case-sensitive ke liye COLLATE ya BINARY. LIKE 'A%' = 'A' se shuru; LIKE '%a%' = beech mein bhi 'a'. Interview mein LIKE patterns frequently puche jaate hain.",
code:"-- Starts with 'A'\nSELECT * FROM Employees WHERE FirstName LIKE 'A%';\n-- Contains 'am'\nSELECT * FROM Employees WHERE FirstName LIKE '%am%';\n-- Ends with 'a'\nSELECT * FROM Employees WHERE FirstName LIKE '%a';"},

{num:140,chapter:"SQL Real-Time",q:"How to fetch Alternate Rows from a table?",
en:"Use ROW_NUMBER() to assign sequential numbers and filter even or odd rows with MOD. Wrap ROW_NUMBER() in a subquery, then filter rn % 2 = 1 (odd/alternate rows 1,3,5...) or rn % 2 = 0 (even rows 2,4,6...). Always use ORDER BY inside ROW_NUMBER() for consistent results.",
hi:"ROW_NUMBER() se sequential numbers assign karo phir MOD se odd ya even filter karo. ROW_NUMBER() ko subquery mein wrap karo, phir rn % 2 = 1 (odd rows 1,3,5) ya rn % 2 = 0 (even rows 2,4,6). ROW_NUMBER() mein ORDER BY zaroori hai consistent results ke liye.",
code:"SELECT * FROM (\n  SELECT *, ROW_NUMBER() OVER (ORDER BY Id) AS rn\n  FROM Employees) T\nWHERE rn % 2 = 1; -- odd rows (1st, 3rd, 5th...)\n-- Even rows: WHERE rn % 2 = 0"},

{num:141,chapter:"SQL Real-Time",q:"How to swap two columns in SQL?",
en:"Swap column values using UPDATE with simultaneous value exchange. In SQL, use a single UPDATE statement — no temp variable needed. Example: swap FirstName and LastName using UPDATE SET FirstName=LastName, LastName=FirstName. SQL processes both assignments with original values so they correctly swap without intermediate storage.",
hi:"Column values swap karne ke liye ek UPDATE statement mein dono assignments ek saath karo. SQL original values ke saath dono process karta hai — correctly swap hoti hai. Koi temp variable ya ek extra step nahi chahiye. Jaise FirstName aur LastName swap karo ek UPDATE mein.",
code:"-- Swap FirstName and LastName\nUPDATE Employees\nSET FirstName = LastName,\n    LastName = FirstName;\n-- Swap numeric columns\nUPDATE Products\nSET Price = DiscountPrice,\n    DiscountPrice = Price;"},

{num:142,chapter:"SQL Real-Time",q:"How to display the Duplicate Records with their Count?",
en:"Use GROUP BY on the column(s) that define 'duplicate' and COUNT(*). HAVING COUNT(*) > 1 shows only duplicates. Add ORDER BY Count DESC to see most duplicated first. For full row details, join back to original table. Useful for data quality checks, deduplication jobs, and finding data entry errors.",
hi:"Duplicate define karne wale columns par GROUP BY karo aur COUNT(*) lo. HAVING COUNT(*) > 1 sirf duplicates dikhata hai. ORDER BY Count DESC se most duplicated pehle. Full row details ke liye original table se join karo. Data quality checks aur deduplication ke liye useful.",
code:"SELECT Email, Phone, COUNT(*) AS DuplicateCount\nFROM Employees\nGROUP BY Email, Phone\nHAVING COUNT(*) > 1\nORDER BY DuplicateCount DESC;"},

{num:143,chapter:"SQL Real-Time",q:"How to find the Highest Salary without using MAX()?",
en:"Use ORDER BY Salary DESC and TOP 1 (or LIMIT 1 in MySQL) to get the highest salary without MAX(). Alternative: ALL operator — WHERE Salary >= ALL(SELECT Salary FROM Employees). Or use NOT EXISTS with subquery. These are creative SQL approaches often asked in interviews to test deep understanding.",
hi:"MAX() ke bina highest salary: ORDER BY Salary DESC aur TOP 1 ya LIMIT 1. Ya ALL operator: WHERE Salary >= ALL(SELECT Salary). Ya NOT EXISTS subquery. Interview mein creativity test ke liye puche jaate hain. TOP 1 ORDER BY DESC approach sabse simple aur common hai.",
code:"-- TOP 1 approach\nSELECT TOP 1 Salary FROM Employees ORDER BY Salary DESC;\n-- ALL operator\nSELECT Salary FROM Employees\nWHERE Salary >= ALL(SELECT Salary FROM Employees);\n-- NOT EXISTS\nSELECT Salary FROM Employees e1\nWHERE NOT EXISTS (SELECT 1 FROM Employees e2 WHERE e2.Salary > e1.Salary);"},

{num:144,chapter:"SQL Real-Time",q:"How to fetch common records from two tables without JOIN?",
en:"Use INTERSECT to get common records from two tables without JOIN. INTERSECT returns rows that appear in both SELECT results. Alternative: use WHERE EXISTS subquery. Another approach: WHERE column IN (SELECT column FROM table2). INTERSECT is cleanest; subquery approach gives more flexibility for complex conditions.",
hi:"INTERSECT se JOIN ke bina common records fetch karo. INTERSECT dono SELECT results mein aane wali rows return karta hai. Alternative: WHERE EXISTS subquery ya WHERE column IN (SELECT column FROM table2). INTERSECT cleanest hai, subquery approach complex conditions ke liye flexible hai.",
code:"-- INTERSECT\nSELECT Name FROM Employees\nINTERSECT\nSELECT Name FROM Contractors;\n-- IN subquery\nSELECT * FROM Employees\nWHERE Name IN (SELECT Name FROM Contractors);"},

{num:145,chapter:"SQL Real-Time",q:"How to delete Duplicate Records from a table?",
en:"Use ROW_NUMBER() to number duplicate rows, then DELETE where row number > 1 (keeping first occurrence). This preserves one copy and deletes rest. Use CTE for cleaner syntax: define CTE with ROW_NUMBER(), then DELETE from CTE where rn > 1. Always backup before bulk deletes in production.",
hi:"ROW_NUMBER() se duplicate rows number karo phir row number > 1 wali DELETE karo — pehli copy rakh lo. CTE se cleaner syntax: CTE mein ROW_NUMBER() define karo phir CTE se rn > 1 DELETE karo. Production mein bulk delete se pehle backup lena yaad karo.",
code:"WITH DuplicateCTE AS (\n  SELECT *, ROW_NUMBER() OVER (PARTITION BY Email ORDER BY Id) AS rn\n  FROM Employees\n)\nDELETE FROM DuplicateCTE WHERE rn > 1;"},

{num:146,chapter:"SQL Real-Time",q:"How to find the Department with the highest Employee Count?",
en:"Group by DeptId with COUNT(*), order by COUNT DESC, take TOP 1. Or use subquery/CTE to first get counts then filter where count equals MAX count (handles ties). To include department name, join with Departments table. In MySQL, use LIMIT 1 instead of TOP 1.",
hi:"DeptId par GROUP BY aur COUNT(*) karo, COUNT DESC order karo, TOP 1 lo. Ya CTE se counts nikalo phir MAX count ke barabar filter karo — ties handle hoti hain. Department name ke liye Departments table JOIN karo. MySQL mein TOP 1 ki jagah LIMIT 1.",
code:"SELECT TOP 1 d.DeptName, COUNT(e.Id) AS EmpCount\nFROM Employees e\nINNER JOIN Departments d ON e.DeptId = d.Id\nGROUP BY d.DeptName\nORDER BY EmpCount DESC;"}
];
