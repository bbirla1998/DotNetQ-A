var Q147_180=[
{num:147,chapter:"SQL Optimization",q:"How to Optimize SQL Queries?",
en:"Key optimization tips: 1. Use indexes on WHERE/JOIN columns. 2. Avoid SELECT * — select only needed columns. 3. Use WHERE to filter early. 4. Avoid functions on indexed columns in WHERE. 5. Use EXISTS instead of IN for large subqueries. 6. Avoid cursors — use set-based operations. 7. Use execution plan to identify bottlenecks.",
hi:"SQL query optimize karne ke tarike: 1. Index use karo. 2. SELECT * avoid karo. 3. WHERE se early filter karo. 4. Indexed columns par functions avoid. 5. Large subquery mein EXISTS use karo. 6. Cursors avoid karo. 7. Execution plan dekho bottleneck identify karne ke liye.",
code:"-- Bad: SELECT * without filter\nSELECT * FROM Employees;\n-- Good: specific columns + filter\nSELECT Id, Name FROM Employees WHERE DeptId=3 AND IsActive=1;"},

{num:148,chapter:"SQL Optimization",q:"What is Query Execution Plan?",
en:"Execution plan shows how SQL Server will execute a query — which indexes it uses, join strategies, estimated vs actual rows, cost percentages. In SSMS: press Ctrl+L for estimated plan or Ctrl+M to include actual plan. Look for table scans (bad), index seeks (good), missing index warnings. Essential for query performance tuning.",
hi:"Execution plan dikhata hai SQL Server query kaise execute karta hai — kaunse indexes use hote hain, join strategy, estimated vs actual rows, cost. SSMS mein Ctrl+L estimated, Ctrl+M actual plan. Table scan bad hai, index seek good hai. Missing index warnings dekho. Performance tuning ke liye essential hai.",
code:"-- View execution plan in SSMS\nSET STATISTICS IO ON;\nSET STATISTICS TIME ON;\nSELECT * FROM Employees WHERE Email='ram@test.com';\n-- Or use: Ctrl+M before executing"},

{num:149,chapter:"SQL Optimization",q:"How to Improve Query Performance?",
en:"1. Add appropriate indexes. 2. Update statistics regularly. 3. Avoid N+1 queries — use JOINs. 4. Use query hints carefully. 5. Partition large tables. 6. Archive old data. 7. Use read replicas for reporting. 8. Cache frequent results in application layer. 9. Avoid OR in WHERE (use UNION instead). 10. Use covering indexes.",
hi:"Performance improve karne ke tarike: indexes add karo, statistics update karo, N+1 queries avoid karo (JOINs use), large tables partition karo, purana data archive karo, read replicas reporting ke liye, results cache karo, WHERE mein OR avoid karo (UNION use), covering indexes use karo.",
code:"-- Covering index (includes all needed columns)\nCREATE INDEX IX_Cov ON Employees(DeptId) INCLUDE (Name, Salary);\n-- Now this query needs no extra lookup:\nSELECT Name, Salary FROM Employees WHERE DeptId=3;"},

{num:150,chapter:"SQL Optimization",q:"What is Table Partitioning?",
en:"Table partitioning divides a large table into smaller, manageable pieces (partitions) based on a column value (e.g., date). Each partition can be stored separately but the table appears as one. Improves query performance — queries scan only relevant partitions (partition elimination). Useful for large tables with historical data (orders, logs).",
hi:"Table partitioning badi table ko smaller pieces (partitions) mein divide karta hai ek column value ke basis par (jaise date). Table ek lagti hai par andar alag partitions hain. Queries sirf relevant partitions scan karti hain — fast hoti hain. Orders, logs jaise large historical data tables ke liye useful.",
code:"-- Create partition function\nCREATE PARTITION FUNCTION pf_Year(INT)\nAS RANGE LEFT FOR VALUES (2022, 2023, 2024);\n-- Queries on specific year only scan that partition\nSELECT * FROM Orders WHERE Year=2024; -- fast!"},

{num:151,chapter:"SQL Optimization",q:"How to Avoid Deadlocks in SQL?",
en:"Deadlocks occur when two transactions wait for each other's locked resources. Prevention: 1. Access tables in same order in all transactions. 2. Keep transactions short. 3. Use READ COMMITTED SNAPSHOT isolation. 4. Add proper indexes to reduce lock duration. 5. Avoid user interaction inside transactions. 6. Use TRY-CATCH and retry logic.",
hi:"Deadlock tab hota hai jab do transactions ek dusre ke locked resources ka wait kare. Prevention: tables same order mein access karo, transactions short rakho, READ COMMITTED SNAPSHOT use karo, proper indexes add karo lock duration kam karne ke liye, transactions mein user interaction avoid karo.",
code:"-- Same order prevents deadlock\n-- Transaction 1 & 2: always lock Orders THEN Payments\nBEGIN TRAN;\n  SELECT * FROM Orders WITH (UPDLOCK) WHERE Id=1;\n  UPDATE Payments SET Status='Done' WHERE OrderId=1;\nCOMMIT;"},

{num:152,chapter:"SQL Optimization",q:"What is the use of EXISTS in SQL?",
en:"EXISTS checks if a subquery returns any rows — returns TRUE if at least one row exists. More efficient than IN for large datasets because it short-circuits (stops at first match). Used in WHERE clause for conditional filtering. NOT EXISTS finds rows with no matching record. Example: find customers who have at least one order.",
hi:"EXISTS check karta hai ki subquery koi bhi row return kare ya nahi — TRUE return karta hai. IN se efficient hai large datasets mein kyunki first match par ruk jaata hai (short-circuit). WHERE clause mein conditional filtering ke liye. NOT EXISTS — koi match nahi. Jaise kaunse customers ka koi order hai.",
code:"-- EXISTS: customers with orders\nSELECT * FROM Customers c\nWHERE EXISTS (\n  SELECT 1 FROM Orders o WHERE o.CustomerId=c.Id\n);\n-- NOT EXISTS: customers without orders\nWHERE NOT EXISTS (SELECT 1 FROM Orders o WHERE o.CustomerId=c.Id)"},

{num:153,chapter:"SQL Optimization",q:"What is Query Optimization?",
en:"Query optimization is the process of improving SQL query efficiency to reduce execution time and resource usage. Involves: 1. Rewriting queries. 2. Adding/removing indexes. 3. Analyzing execution plans. 4. Updating statistics. 5. Using appropriate JOIN types. 6. Reducing data processed with early filtering. SQL Server's query optimizer automatically chooses execution plans.",
hi:"Query optimization SQL query efficiency improve karne ka process hai — execution time aur resources kam karo. Includes: query rewrite, indexes add/remove, execution plan analyze, statistics update, appropriate JOINs, early filtering. SQL Server ka query optimizer automatically best execution plan choose karta hai.",
code:"-- Before optimization\nSELECT * FROM Orders WHERE YEAR(OrderDate)=2024;\n-- After optimization (index can be used now)\nSELECT * FROM Orders\nWHERE OrderDate >= '2024-01-01' AND OrderDate < '2025-01-01';"},

{num:154,chapter:"SQL Optimization",q:"What is the difference between OLTP and OLAP in SQL?",
en:"OLTP (Online Transaction Processing): designed for real-time transactional operations (INSERT, UPDATE, DELETE). High concurrency, many small fast transactions, normalized schema, low latency. OLAP (Online Analytical Processing): designed for complex analytical queries, reporting, aggregations on large historical data. Denormalized star/snowflake schema, fewer but complex queries. Examples: OLTP=banking system; OLAP=BI dashboards.",
hi:"OLTP: real-time transactions ke liye — INSERT, UPDATE, DELETE, high concurrency, normalized schema, fast small queries. Jaise banking, e-commerce. OLAP: complex analytical queries aur reporting ke liye — large data aggregation, denormalized schema, BI dashboards. OLTP = transaction processing, OLAP = data analysis.",
code:"-- OLTP: fast single row ops\nUPDATE Accounts SET Bal=Bal-500 WHERE Id=1;\n-- OLAP: complex aggregations\nSELECT YEAR(Date), SUM(Revenue) FROM Sales\nGROUP BY YEAR(Date) ORDER BY 1;"},

{num:155,chapter:"SQL Optimization",q:"What is the difference between UNION and JOIN?",
en:"UNION combines rows from multiple queries vertically (stacks results). Requires same number and type of columns. Removes duplicates. JOIN combines columns from multiple tables horizontally (adds columns). Requires a matching condition (ON clause). Think: UNION adds more rows; JOIN adds more columns. They serve fundamentally different purposes.",
hi:"UNION queries ke results vertically combine karta hai (rows stack hoti hain). Same columns chahiye. Duplicates remove. JOIN tables ke columns horizontally combine karta hai (columns add hote hain). Matching condition chahiye. Simple yaad: UNION = zyada rows, JOIN = zyada columns. Dono ka purpose alag hai.",
code:"-- UNION: stack rows\nSELECT Name FROM Employees UNION SELECT Name FROM Contractors;\n-- JOIN: add columns\nSELECT e.Name, d.DeptName FROM Employees e\nINNER JOIN Departments d ON e.DeptId=d.Id;"},

{num:156,chapter:"SQL Advanced",q:"How to get First 3 Maximum Salaries?",
en:"Use SELECT DISTINCT with TOP 3 ORDER BY Salary DESC to get top 3 distinct salary values. Or use DENSE_RANK() and filter where rank <= 3. DISTINCT is important to handle duplicate salaries — without DISTINCT, if multiple employees share top salary, you might get duplicates. Both approaches valid in interviews.",
hi:"SELECT DISTINCT TOP 3 ORDER BY Salary DESC se top 3 distinct salary values milti hain. Ya DENSE_RANK() aur rank <= 3 filter karo. DISTINCT important hai — duplicate salaries handle karne ke liye. Bina DISTINCT ke same salary wale multiple employees aate hain. Dono approaches interview mein valid hain.",
code:"-- DISTINCT approach\nSELECT DISTINCT TOP 3 Salary FROM Employees ORDER BY Salary DESC;\n-- DENSE_RANK approach\nSELECT Salary FROM (\n  SELECT Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) DR\n  FROM Employees) T WHERE DR <= 3;"},

{num:157,chapter:"SQL Advanced",q:"What is the difference between RANK() and DENSE_RANK()?",
en:"RANK(): assigns same rank to ties but skips the next rank(s). Example: 1,1,3,4 (no 2). DENSE_RANK(): assigns same rank to ties without gaps. Example: 1,1,2,3. Use DENSE_RANK() for finding Nth highest value to avoid missing ranks. Use RANK() when you want to know how many rows are 'above' each row including ties.",
hi:"RANK(): ties ko same rank, lekin next rank skip karta hai. Jaise: 1,1,3,4 (2 nahi). DENSE_RANK(): ties same rank, koi gap nahi. Jaise: 1,1,2,3. Nth highest value ke liye DENSE_RANK() use karo — missing ranks ki problem nahi. RANK() tab use karo jab kitne rows upar hain ye jaanna ho including ties.",
code:"SELECT Name, Salary,\n  RANK() OVER (ORDER BY Salary DESC) AS RK,\n  DENSE_RANK() OVER (ORDER BY Salary DESC) AS DRK\nFROM Employees;\n-- If salaries: 80k,80k,70k,60k\n-- RANK:       1,1,3,4\n-- DENSE_RANK: 1,1,2,3"},

{num:158,chapter:"SQL Advanced",q:"What is Savepoint in SQL?",
en:"Savepoint marks a point in a transaction to which you can partially rollback. SAVE TRANSACTION sp1 creates savepoint. ROLLBACK TRANSACTION sp1 rolls back to that point without affecting earlier work. Useful for long transactions with multiple stages — roll back only failed stage. Not all databases support savepoints (MySQL does, SQL Server does).",
hi:"Savepoint transaction mein ek point mark karta hai jahan tak partial rollback ho sake. SAVE TRANSACTION sp1 savepoint banata hai. ROLLBACK TRANSACTION sp1 sirf us point tak rollback karta hai. Long transactions mein useful — sirf failed stage rollback karo. MySQL aur SQL Server dono support karte hain.",
code:"BEGIN TRANSACTION;\n  INSERT INTO Orders VALUES(1,500);\n  SAVE TRANSACTION after_order;\n  INSERT INTO Payments VALUES(1,500);\n  -- Payment failed\n  ROLLBACK TRANSACTION after_order;\n  -- Order still saved\nCOMMIT;"},

{num:159,chapter:"SQL Advanced",q:"How to find the Employees who earn more than their Manager?",
en:"Classic self-join problem. Join Employees table twice — once as employee alias (e), once as manager alias (m). Connect via e.ManagerId = m.EmpId. Filter WHERE e.Salary > m.Salary. Returns employees earning more than direct manager. Tests self-join, alias understanding, and hierarchical data query skills in interviews.",
hi:"Classic self-join question. Employees table ko do baar join karo — employee alias (e) aur manager alias (m). e.ManagerId = m.EmpId se connect. WHERE e.Salary > m.Salary filter. Jo employees apne manager se zyada kamaate hain return hote hain. Self-join aur hierarchical query skills test karta hai.",
code:"SELECT e.Name AS Emp, e.Salary AS EmpSal,\n       m.Name AS Mgr, m.Salary AS MgrSal\nFROM Employees e\nJOIN Employees m ON e.ManagerId = m.EmpId\nWHERE e.Salary > m.Salary;"},

{num:160,chapter:"SQL Advanced",q:"What is the difference between IN and EXISTS?",
en:"IN evaluates the full subquery result and checks each outer row against the list — slower for large subqueries. EXISTS checks if any row is returned (short-circuits on first match) — faster for large correlated subqueries. NULL handling differs: IN with NULL subquery can return unexpected results. EXISTS is generally preferred for correlated subqueries.",
hi:"IN puri subquery result evaluate karta hai phir match karta hai — large subquery mein slow. EXISTS first match par ruk jaata hai — correlated subqueries mein fast. NULL handling alag: IN mein NULL subquery unexpected results de sakta hai. Correlated subqueries mein EXISTS prefer karo.",
code:"-- IN: evaluates full list\nSELECT * FROM Emp WHERE DeptId IN (SELECT Id FROM Dept WHERE Active=1);\n-- EXISTS: short-circuits\nSELECT * FROM Emp e WHERE EXISTS (SELECT 1 FROM Dept d WHERE d.Id=e.DeptId AND d.Active=1);"},

{num:161,chapter:"SQL Advanced",q:"How to find Odd and Even records using ROW_NUMBER?",
en:"Use ROW_NUMBER() OVER (ORDER BY Id) to assign row numbers, wrap in subquery, filter with modulo. Odd records: rn % 2 = 1 (rows 1,3,5...). Even records: rn % 2 = 0 (rows 2,4,6...). This approach works even when Id values are not sequential or have gaps, unlike filtering directly on Id column.",
hi:"ROW_NUMBER() se sequential numbers assign karo, subquery mein wrap karo, modulo se filter karo. Odd: rn % 2 = 1 (1,3,5). Even: rn % 2 = 0 (2,4,6). Ye approach tab bhi kaam karta hai jab Id sequential nahi ya gaps hain — direct Id filter se better hai.",
code:"-- Odd rows\nSELECT * FROM (\n  SELECT *, ROW_NUMBER() OVER (ORDER BY Id) rn FROM Employees\n) T WHERE rn % 2 <> 0;\n-- Even rows: WHERE rn % 2 = 0"},

{num:162,chapter:"SQL Advanced",q:"What is Index Fragmentation and how to fix it?",
en:"Fragmentation degrades index performance over time due to page splits from INSERT/UPDATE/DELETE. Check: sys.dm_db_index_physical_stats. Fix: REORGANIZE (online, defragments leaf level, good for 10-30% fragmentation) or REBUILD (offline by default, recreates index, good for >30% fragmentation). Schedule regular index maintenance jobs.",
hi:"Fragmentation INSERT/UPDATE/DELETE ke page splits se time ke saath index performance degrade karta hai. Check: sys.dm_db_index_physical_stats. Fix: REORGANIZE (online, 10-30% fragmentation ke liye) ya REBUILD (recreate, >30% ke liye). Regular index maintenance jobs schedule karo.",
code:"-- Check fragmentation\nSELECT avg_fragmentation_in_percent, index_id\nFROM sys.dm_db_index_physical_stats(DB_ID(),OBJECT_ID('Employees'),NULL,NULL,'LIMITED');\n-- Fix\nALTER INDEX IX_Email ON Employees REORGANIZE; -- < 30%\nALTER INDEX IX_Email ON Employees REBUILD;    -- > 30%"},

{num:163,chapter:"SQL Advanced",q:"What is Recursive CTE and when to use it?",
en:"Recursive CTE references itself in the recursive member. Has anchor (base case) and recursive part joined by UNION ALL. Used for: org charts, family trees, file/folder hierarchies, bill of materials, graph traversal. Must have termination condition (MAXRECURSION option). Very powerful for hierarchical data that would otherwise require application-layer loops.",
hi:"Recursive CTE mein recursive member khud CTE ko reference karta hai. Anchor (base case) aur recursive part UNION ALL se join. Org chart, family tree, file hierarchy, bill of materials ke liye use hota hai. Termination condition zaroori hai. Hierarchical data ke liye application loop ki zaroorat nahi — CTE handle karta hai.",
code:"WITH Hierarchy AS (\n  SELECT Id, Name, ManagerId, 0 AS Level\n  FROM Employees WHERE ManagerId IS NULL\n  UNION ALL\n  SELECT e.Id, e.Name, e.ManagerId, h.Level+1\n  FROM Employees e JOIN Hierarchy h ON e.ManagerId=h.Id\n)\nSELECT * FROM Hierarchy ORDER BY Level;"},

{num:164,chapter:"SQL Advanced",q:"How to handle NULL in aggregate functions?",
en:"Most aggregate functions (SUM, AVG, MAX, MIN, COUNT) ignore NULL values automatically. COUNT(*) counts all rows including NULLs; COUNT(column) skips NULLs. AVG ignores NULLs — may skew results. Use COALESCE or ISNULL to replace NULLs before aggregation if needed. Be aware of NULL impact on GROUP BY grouping.",
hi:"Zyaatar aggregate functions (SUM, AVG, MAX, MIN) NULL values automatically ignore karte hain. COUNT(*) saari rows count karta hai including NULL; COUNT(column) NULLs skip karta hai. AVG NULLs ignore karta hai — results skew ho sakte hain. Aggregation se pehle COALESCE se NULL replace karo agar zaroori ho.",
code:"SELECT\n  COUNT(*) AS TotalRows,          -- includes NULLs\n  COUNT(Bonus) AS WithBonus,       -- skips NULLs\n  AVG(COALESCE(Bonus,0)) AS AvgBonus -- treat NULL as 0\nFROM Employees;"},

{num:165,chapter:"SQL Advanced",q:"What is CROSS APPLY and OUTER APPLY?",
en:"APPLY operator works like a JOIN but with table-valued functions or correlated subqueries. CROSS APPLY: returns rows from left table only where the right function/subquery returns results (like INNER JOIN). OUTER APPLY: returns all left rows, NULL for right if no results (like LEFT JOIN). Useful with table-valued functions needing per-row parameters.",
hi:"APPLY operator table-valued functions ya correlated subqueries ke saath kaam karta hai. CROSS APPLY: sirf wahi left rows jahan right function results deta ho (INNER JOIN jaise). OUTER APPLY: saare left rows, right NULL ho to bhi (LEFT JOIN jaise). Per-row parameters wali table-valued functions ke saath useful.",
code:"-- Top 3 orders per customer using CROSS APPLY\nSELECT c.Name, o.Amount\nFROM Customers c\nCROSS APPLY (\n  SELECT TOP 3 Amount FROM Orders\n  WHERE CustomerId = c.Id\n  ORDER BY Amount DESC\n) o;"},

{num:166,chapter:"SQL Advanced",q:"What is the difference between Temp Table and Table Variable?",
en:"Table Variable (@table): declared with DECLARE @t TABLE, lives in memory (sometimes TempDB), limited to batch scope, no statistics, no indexes (except PK/UNIQUE). Temp Table (#table): created in TempDB, survives stored procedure calls, supports indexes and statistics, better for large data. Use table variable for small datasets; temp table for large complex operations.",
hi:"Table Variable (@table): DECLARE se, memory mein (sometimes TempDB), batch scope, no statistics, no indexes. Temp Table (#table): TempDB mein, SP calls ke baad bhi survive, indexes aur statistics support. Small data ke liye table variable, large complex operations ke liye temp table better hai.",
code:"-- Table Variable\nDECLARE @TopEmps TABLE (Id INT, Name VARCHAR(50));\nINSERT INTO @TopEmps SELECT TOP 10 Id, Name FROM Employees;\n-- Temp Table\nSELECT TOP 10 Id, Name INTO #TopEmps FROM Employees;\nCREATE INDEX IX ON #TopEmps(Name); -- can add index"},

{num:167,chapter:"SQL Advanced",q:"How to use MERGE statement in SQL?",
en:"MERGE combines INSERT, UPDATE, DELETE in a single statement — upsert operation. Matches source to target based on a condition. WHEN MATCHED: UPDATE. WHEN NOT MATCHED BY TARGET: INSERT. WHEN NOT MATCHED BY SOURCE: DELETE. Useful for syncing tables — load staging data, merge into production. More efficient than separate INSERT/UPDATE/DELETE.",
hi:"MERGE INSERT, UPDATE, DELETE ek statement mein combine karta hai — upsert operation. Source ko target se condition ke basis par match karta hai. MATCHED: UPDATE. NOT MATCHED BY TARGET: INSERT. NOT MATCHED BY SOURCE: DELETE. Tables sync karne ke liye useful — staging data production mein merge karo.",
code:"MERGE Employees AS target\nUSING StagingEmployees AS source ON target.Id = source.Id\nWHEN MATCHED THEN\n  UPDATE SET target.Name=source.Name, target.Salary=source.Salary\nWHEN NOT MATCHED BY TARGET THEN\n  INSERT (Id,Name,Salary) VALUES (source.Id,source.Name,source.Salary)\nWHEN NOT MATCHED BY SOURCE THEN DELETE;"},

{num:168,chapter:"SQL Advanced",q:"What is NOLOCK hint and when to use it?",
en:"WITH(NOLOCK) hint allows reading data without acquiring shared locks — reads uncommitted data (dirty reads). Improves read performance in high-concurrency scenarios by not waiting for locks. Risk: may read data from uncommitted transactions that later rolled back. Use only for reporting queries where slight data inconsistency is acceptable. Never use for financial or critical data.",
hi:"WITH(NOLOCK) hint shared locks acquire kiye bina data read karta hai — uncommitted data read hota hai (dirty read). High-concurrency mein read performance improve hota hai. Risk: rollback hone wala data bhi read ho sakta hai. Sirf reporting queries mein use karo jahan slight inconsistency acceptable ho. Financial data ke liye kabhi nahi.",
code:"-- Fast read, may be slightly stale\nSELECT * FROM Orders WITH(NOLOCK)\nWHERE OrderDate >= '2024-01-01';\n-- Equivalent isolation level\nSET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;"},

{num:169,chapter:"SQL Advanced",q:"What are Window Functions with PARTITION BY?",
en:"PARTITION BY divides rows into groups for window function calculation — like GROUP BY but without collapsing rows. Each partition is computed independently. Example: RANK() OVER (PARTITION BY DeptId ORDER BY Salary DESC) — ranks employees within each department separately. Combined with ROW_NUMBER, SUM, AVG, LAG, LEAD for powerful analytics.",
hi:"PARTITION BY rows ko groups mein divide karta hai window function calculation ke liye — GROUP BY jaise par rows collapse nahi hoti. Har partition alag compute hoti hai. Jaise har department mein employees ko salary se rank karo alag-alag. ROW_NUMBER, SUM, AVG, LAG, LEAD ke saath powerful analytics possible.",
code:"SELECT Name, DeptId, Salary,\n  RANK() OVER (PARTITION BY DeptId ORDER BY Salary DESC) AS DeptRank,\n  SUM(Salary) OVER (PARTITION BY DeptId) AS DeptTotal,\n  AVG(Salary) OVER (PARTITION BY DeptId) AS DeptAvg\nFROM Employees;"},

{num:170,chapter:"SQL Advanced",q:"How to use LAG and LEAD functions?",
en:"LAG() accesses data from a previous row in the same result set without a self-join. LEAD() accesses data from a next row. Syntax: LAG(column, offset, default) OVER (ORDER BY ...). Example: Compare each month's sales with previous month. Calculate month-over-month growth. Very useful for time-series analysis and trend calculations.",
hi:"LAG() same result set mein previous row ka data access karta hai bina self-join ke. LEAD() next row ka data. Syntax: LAG(column, offset, default) OVER (ORDER BY ...). Jaise har mahine ki sales ko pichle mahine se compare karo. Month-over-month growth. Time-series analysis ke liye bahut useful.",
code:"SELECT Month, Revenue,\n  LAG(Revenue, 1, 0) OVER (ORDER BY Month) AS PrevRevenue,\n  Revenue - LAG(Revenue,1,0) OVER (ORDER BY Month) AS Growth\nFROM MonthlySales;"},

{num:171,chapter:"SQL Advanced",q:"How to convert rows to columns in SQL?",
en:"Use PIVOT to convert rows to columns. Or use conditional aggregation with CASE WHEN + MAX/SUM for databases without PIVOT. Example: Convert rows of (Product, Month, Sales) to columns (Product, Jan, Feb, Mar). PIVOT requires knowing column values in advance. For dynamic columns, use Dynamic SQL with PIVOT.",
hi:"PIVOT se rows ko columns mein convert karo. Ya CASE WHEN conditional aggregation se jo databases PIVOT support na karein. Jaise (Product, Month, Sales) rows ko (Product, Jan, Feb, Mar) columns mein. PIVOT column values pehle se jaanna chahiye. Dynamic columns ke liye Dynamic SQL ke saath PIVOT use karo.",
code:"-- PIVOT\nSELECT * FROM Sales\nPIVOT (SUM(Amount) FOR Month IN ([Jan],[Feb],[Mar])) P;\n-- CASE WHEN alternative\nSELECT Product,\n  SUM(CASE WHEN Month='Jan' THEN Amount ELSE 0 END) Jan,\n  SUM(CASE WHEN Month='Feb' THEN Amount ELSE 0 END) Feb\nFROM Sales GROUP BY Product;"},

{num:172,chapter:"SQL Advanced",q:"How to find gaps in sequential data?",
en:"Find missing IDs or gaps in sequential data using self-join or NOT EXISTS. Approach: find IDs where Id+1 does not exist in the table. Or use ROW_NUMBER and compare with actual Id — gaps appear where RN != Id. Useful for finding missing invoice numbers, missing dates in time-series, or gaps in ticket IDs.",
hi:"Sequential data mein gaps dhundhne ke liye self-join ya NOT EXISTS use karo. Jo ID + 1 table mein exist nahi karta wahan gap hai. Ya ROW_NUMBER compare karo actual Id se — jahan RN != Id gap hai. Missing invoice numbers, missing dates, ticket ID gaps dhundhne ke liye useful.",
code:"-- Find gaps in Ids\nSELECT e1.Id + 1 AS GapStart\nFROM Employees e1\nWHERE NOT EXISTS (\n  SELECT 1 FROM Employees e2 WHERE e2.Id = e1.Id + 1\n)\nAND e1.Id < (SELECT MAX(Id) FROM Employees);"}
];
