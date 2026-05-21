var Q31_60=[
{num:31,chapter:".NET Important",q:"How can we achieve multiple inheritance in C#?",
en:"C# does not support multiple inheritance with classes to avoid the diamond problem. But you can achieve it using interfaces — a class can implement multiple interfaces. Example: class Employee : IWorker, IManager. Each interface can have default implementations in C# 8+. This gives flexibility without the complexity of multiple class inheritance.",
hi:"C# mein class se multiple inheritance nahi hoti, diamond problem se bachne ke liye. Lekin multiple interfaces implement karke achieve hoti hai. Jaise class Employee : IWorker, IManager. C# 8+ mein interfaces mein default implementation bhi aa gayi hai.",
code:"interface IWorker { void Work(); }\ninterface IManager { void Manage(); }\nclass Employee : IWorker, IManager {\n  public void Work(){} public void Manage(){}\n}"},

{num:32,chapter:".NET Important",q:"What is the Single Responsibility Principle?",
en:"Single Responsibility Principle (SRP) states that a class should have only one reason to change — one job, one responsibility. Example: Don't put database logic, email sending, and PDF generation in one class. Create separate classes: UserRepository, EmailService, PdfGenerator. This makes code easier to maintain, test, and modify.",
hi:"SRP kehta hai ki ek class ka sirf ek kaam hona chahiye — ek hi reason to change. Jaise UserRepository sirf database kaam kare, EmailService sirf email bheje. Ek class mein sab kuch daalne se code complex ho jaata hai aur changes risky hote hain.",
code:"// Wrong: one class doing everything\n// Right:\nclass UserRepository { void Save(User u){} }\nclass EmailService { void Send(string to){} }"},

{num:33,chapter:".NET Important",q:"What is the Dependency Inversion Principle?",
en:"Dependency Inversion Principle says high-level modules should not depend on low-level modules; both should depend on abstractions (interfaces). Example: OrderService should depend on IPaymentService interface, not on ConcretePayPalService. This allows swapping implementations without changing the high-level code. Makes code extensible and testable with mock objects.",
hi:"DIP kehta hai ki high-level classes low-level classes par directly depend na karein, balki interfaces par karein. Jaise OrderService IPaymentService par depend kare, direct PayPalService par nahi. Isse implementation swap kar sakte hain bina OrderService badlein. Testing mein mock objects use hote hain.",
code:"interface IPayment { void Pay(decimal amt); }\nclass OrderService {\n  IPayment _pay;\n  OrderService(IPayment p){ _pay=p; }\n}"},

{num:34,chapter:".NET Important",q:"Can we create custom middleware?",
en:"Yes, we can create custom middleware in ASP.NET Core. Create a class with InvokeAsync(HttpContext context) method. Register it using app.UseMiddleware<MyMiddleware>() in Program.cs. Use cases: request logging, IP filtering, custom authentication, response compression, adding custom headers. Custom middleware gives full control over request/response pipeline.",
hi:"Haan, ASP.NET Core mein custom middleware bana sakte hain. Ek class banao jisme InvokeAsync(HttpContext) method ho. Program.cs mein app.UseMiddleware<MyMiddleware>() se register karo. Request logging, IP filtering, custom auth jaise kaam ke liye use hota hai.",
code:"public class LogMiddleware {\n  RequestDelegate _next;\n  public LogMiddleware(RequestDelegate n){ _next=n; }\n  public async Task InvokeAsync(HttpContext ctx){\n    Console.WriteLine(ctx.Request.Path);\n    await _next(ctx);\n  }\n}"},

{num:35,chapter:".NET Important",q:"How do we manage configuration in ASP.NET Core?",
en:"Configuration in ASP.NET Core uses appsettings.json, environment variables, command-line args, and secrets. Access via IConfiguration interface. For strongly-typed config, use Options pattern with services.Configure<MyOptions>(). Environment-specific overrides: appsettings.Development.json overrides appsettings.json in dev. Sensitive data stored in User Secrets or Azure Key Vault.",
hi:"ASP.NET Core mein configuration appsettings.json, environment variables aur secrets se manage hoti hai. IConfiguration se values read karo. Options pattern se strongly-typed config milti hai. Development mein appsettings.Development.json use hoti hai. Sensitive data User Secrets ya Azure Key Vault mein store karo.",
code:"// appsettings.json\n\"Jwt\": { \"Key\": \"secret\", \"Issuer\": \"myapp\" }\n// C#\nvar key = config[\"Jwt:Key\"];"},

{num:36,chapter:".NET Important",q:"What are environment variables in ASP.NET Core?",
en:"Environment variables allow different configurations for different environments (Development, Staging, Production) without changing code. ASPNETCORE_ENVIRONMENT variable sets the current environment. In Production, sensitive values like DB strings are set as environment variables on the server instead of appsettings.json for security. Accessed via IConfiguration.",
hi:"Environment variables different environments (Dev, Staging, Production) ke liye alag configuration dete hain. ASPNETCORE_ENVIRONMENT variable current environment set karta hai. Production mein DB connection string environment variable mein rakho, appsettings mein nahi — security ke liye. IConfiguration se read hote hain.",
code:"// Set in OS or Docker\nASPNETCORE_ENVIRONMENT=Production\nConnectionStrings__Default=Server=prod;..."},

{num:37,chapter:".NET Important",q:"What is attribute routing?",
en:"Attribute routing uses attributes like [Route], [HttpGet], [HttpPost] directly on controllers and actions to define URL patterns. More explicit and flexible than convention-based routing. Supports route parameters, constraints, and optional parameters. Preferred in Web APIs. Example: [HttpGet(\"users/{id:int}\")] maps GET /users/5 to that action.",
hi:"Attribute routing mein [Route], [HttpGet], [HttpPost] jaise attributes directly controller aur action par likhte hain. Convention-based routing se zyada flexible hai. Web API mein prefer kiya jaata hai. Route parameters aur constraints bhi support karta hai.",
code:"[Route(\"api/products\")]\npublic class ProductsController : ControllerBase {\n  [HttpGet(\"{id:int}\")]\n  public IActionResult Get(int id) => Ok(_repo.Get(id));\n}"},

{num:38,chapter:".NET Important",q:"What are the three parts of a JWT token?",
en:"JWT has three parts separated by dots: 1. Header — algorithm type (HS256) and token type (JWT). 2. Payload — claims like user ID, name, role, expiration time. 3. Signature — Header + Payload encoded and signed with a secret key to verify authenticity. Base64URL encoded. Example: xxxxx.yyyyy.zzzzz",
hi:"JWT ke 3 parts hote hain dot se separated: 1. Header — algorithm (HS256) aur token type. 2. Payload — claims jaise user ID, role, expiry. 3. Signature — Header+Payload ko secret key se sign kiya. Ye verify karta hai ki token tamper nahi hua. Format: xxxxx.yyyyy.zzzzz",
code:"// Decode at jwt.io\nHeader: { alg: HS256, typ: JWT }\nPayload: { sub: \"1\", role: \"admin\", exp: 1700000 }\nSignature: HMACSHA256(base64(header)+'.'+base64(payload), secret)"},

{num:39,chapter:".NET Important",q:"What is role-based authentication?",
en:"Role-based authentication restricts access based on the user's role (Admin, User, Manager). JWT token contains role claim. In ASP.NET Core, use [Authorize(Roles='Admin')] attribute on controllers/actions. Only users with that role can access. Roles are assigned during login and embedded in JWT. Useful for multi-level access control.",
hi:"Role-based auth user ke role ke hisaab se access restrict karta hai. JWT mein role claim hota hai. [Authorize(Roles='Admin')] attribute se sirf admins access kar sakte hain. Login par role JWT mein embed hota hai. Multi-level access control ke liye useful hai.",
code:"[Authorize(Roles=\"Admin\")]\n[HttpDelete(\"{id}\")]\npublic IActionResult Delete(int id) { }"},

{num:40,chapter:".NET Important",q:"How do we secure ASP.NET Core APIs?",
en:"API security measures: 1. JWT Authentication — verify token on each request. 2. HTTPS — encrypt data in transit. 3. CORS — restrict allowed origins. 4. Input validation — prevent injection attacks. 5. Rate limiting — prevent DDoS. 6. Store secrets in environment variables/Key Vault. 7. Use [Authorize] attribute on endpoints.",
hi:"API secure karne ke tarike: JWT authentication, HTTPS, CORS restrict karna, input validation, rate limiting, secrets environment variables mein rakhna, [Authorize] attribute use karna. Ye sab milke API ko secure rakhte hain. Never trust input from client — always validate server-side.",
code:"app.UseHttpsRedirection();\napp.UseAuthentication();\napp.UseAuthorization();\n[Authorize] // Controller level\npublic class OrdersController { }"},

{num:41,chapter:".NET Important",q:"What is Eager Loading and Lazy Loading?",
en:"Eager Loading: related data is loaded immediately in the same query using .Include(). Generates a JOIN in SQL. Good when you always need related data. Lazy Loading: related data is loaded on-demand when you access the navigation property. Requires virtual keyword and proxies. Risk of N+1 query problem with lazy loading.",
hi:"Eager Loading: related data ek hi query mein load hoti hai .Include() se — SQL JOIN generate hota hai. Lazy Loading: related data tab load hoti hai jab access karo, virtual keyword chahiye. Lazy loading mein N+1 query problem aa sakta hai jo performance harm karta hai.",
code:"// Eager Loading\nvar orders = db.Orders.Include(o => o.Customer).ToList();\n// Lazy Loading\npublic virtual Customer Customer { get; set; }"},

{num:42,chapter:".NET Important",q:"Why do we use AsNoTracking()?",
en:"By default, EF Core tracks every entity fetched from DB for change detection. AsNoTracking() disables this tracking. Useful for read-only queries where you don't need to update the entity. Significantly improves performance and reduces memory usage. Use for GET endpoints, reports, and dashboards where data is only displayed.",
hi:"EF Core by default fetched entities ko track karta hai changes detect karne ke liye. AsNoTracking() tracking disable karta hai. Read-only queries mein use karo — performance aur memory dono improve hote hain. GET endpoints, reports aur dashboards mein use karna chahiye.",
code:"var users = await db.Users\n  .AsNoTracking()\n  .Where(u => u.IsActive)\n  .ToListAsync();"},

{num:43,chapter:".NET Important",q:"What are Split Queries in EF Core?",
en:"When loading multiple collections with Include(), EF Core by default uses a single SQL query with joins, which can cause data duplication (cartesian explosion). Split Queries solves this by executing separate SQL queries for each collection. Use AsSplitQuery(). Improves performance for complex object graphs with multiple collections.",
hi:"Multiple collections ke saath Include() use karne par EF Core ek bada JOIN query banata hai jisme data duplicate ho sakta hai (cartesian explosion). AsSplitQuery() alag-alag queries run karta hai. Complex object graphs mein performance better hoti hai split queries se.",
code:"var orders = await db.Orders\n  .Include(o => o.Items)\n  .Include(o => o.Tags)\n  .AsSplitQuery()\n  .ToListAsync();"},

{num:44,chapter:".NET Important",q:"How do we use LINQ for pagination?",
en:"Pagination is implemented using Skip() and Take() in LINQ. Skip(n) skips first n records, Take(m) takes next m records. Page number and page size are passed as parameters. Example: page 2 with size 10 = Skip(10).Take(10). Always combine with OrderBy() for consistent results. Used in list APIs to avoid loading all data.",
hi:"Pagination LINQ mein Skip() aur Take() se implement hoti hai. Skip(n) pehle n records skip karta hai, Take(m) agli m lata hai. Page 2 size 10 = Skip(10).Take(10). OrderBy() bhi use karo consistent results ke liye. List APIs mein saara data load avoid karte hain.",
code:"int page=2, size=10;\nvar result = await db.Users\n  .OrderBy(u => u.Id)\n  .Skip((page-1)*size)\n  .Take(size)\n  .ToListAsync();"},

{num:45,chapter:".NET Important",q:"What is the Repository Pattern?",
en:"Repository Pattern abstracts data access logic into a separate layer. Controllers/services interact with IRepository interface, not directly with DbContext. Benefits: decoupled code, easy unit testing with mocks, single place to change data access logic. Common pattern: IUserRepository with methods GetById, GetAll, Add, Update, Delete.",
hi:"Repository Pattern data access logic ko alag layer mein rakhta hai. Controller/service IRepository interface se baat karte hain, DbContext se directly nahi. Isse unit testing mein mock use kar sakte hain. Ek jagah data access logic badlne se poori app update hoti hai.",
code:"interface IUserRepo {\n  Task<User> GetByIdAsync(int id);\n  Task AddAsync(User u);\n}\nclass UserRepo : IUserRepo {\n  AppDbContext _db;\n  public async Task<User> GetByIdAsync(int id) => await _db.Users.FindAsync(id);\n}"},

{num:46,chapter:".NET Important",q:"How do we implement global exception handling?",
en:"Global exception handling catches unhandled exceptions app-wide. In ASP.NET Core: 1. UseExceptionHandler middleware in Program.cs. 2. Custom middleware with try-catch wrapping next(). 3. IExceptionFilter or ExceptionFilterAttribute. 4. ProblemDetails standard format. This prevents raw stack traces in production and returns consistent error responses to clients.",
hi:"Global exception handling poori app ke unhandled exceptions ko ek jagah handle karta hai. UseExceptionHandler middleware ya custom middleware use karo. Ye production mein raw stack trace expose nahi karne deta aur client ko consistent error response deta hai.",
code:"app.UseExceptionHandler(appErr => {\n  appErr.Run(async ctx => {\n    ctx.Response.StatusCode = 500;\n    await ctx.Response.WriteAsJsonAsync(new { error=\"Server Error\" });\n  });\n});"},

{num:47,chapter:".NET Important",q:"Why do we use the using keyword?",
en:"The using keyword ensures that IDisposable objects (like database connections, file streams, HTTP clients) are properly disposed after use, even if an exception occurs. It calls Dispose() automatically at the end of the block. Prevents memory leaks and resource exhaustion. C# 8+ allows using declarations without braces.",
hi:"using keyword IDisposable objects (jaise DB connection, file stream) ko automatically dispose karta hai kaam khatam hone ke baad. Exception ho ya na ho, Dispose() call hota hai. Memory leak aur resource exhaustion se bachata hai. C# 8+ mein using declaration bhi available hai.",
code:"using var conn = new SqlConnection(connectionStr);\nawait conn.OpenAsync();\n// conn.Dispose() auto-called here"},

{num:48,chapter:".NET Advanced",q:"What is microservices architecture?",
en:"Microservices architecture breaks an application into small, independent services, each responsible for a specific business capability. Each service runs in its own process, has its own database, and communicates via HTTP/REST or messaging (RabbitMQ). Example: an e-commerce app with separate services for Orders, Payments, Inventory, Users. Easy to scale individually.",
hi:"Microservices architecture mein application ko chhote independent services mein todtey hain. Har service apna specific kaam karta hai, apna database rakhta hai aur HTTP ya messaging se communicate karta hai. Jaise e-commerce mein Orders, Payments, Inventory alag services hain. Individual scaling easy hoti hai.",
code:"// Each service is an independent ASP.NET Core app\n// OrderService: localhost:5001\n// PaymentService: localhost:5002\n// UserService: localhost:5003"},

{num:49,chapter:".NET Advanced",q:"What is monolithic architecture?",
en:"Monolithic architecture builds the entire application as a single unit — all features (UI, business logic, data access) in one codebase and deployed together. Simple to develop initially. Challenges arise as app grows: slow deployments, hard to scale specific parts, tech stack lock-in, one bug can bring down the whole app.",
hi:"Monolithic architecture mein poori application ek unit mein hoti hai — sabhi features ek codebase mein. Shuru mein simple hota hai. Jab app bada hota hai tab problems aati hain: slow deploy, individual scaling nahi, ek bug puri app crash kar sakta hai.",
code:"// Single ASP.NET Core app with all features\n// Controllers: Auth, Orders, Products, Payments\n// All in one project, deployed together"},

{num:50,chapter:".NET Advanced",q:"Difference between microservices and monolithic architecture?",
en:"Monolithic: single codebase, simple dev/deploy, hard to scale parts independently, one failure = total failure. Microservices: multiple small services, independent deployment, each scalable separately, complex infrastructure (API Gateway, service discovery, distributed tracing needed). Microservices suit large teams and complex domains; monolith is better for small apps/teams.",
hi:"Monolithic ek codebase, simple deploy, par independent scaling nahi. Microservices mein alag services, alag deploy, alag scale — par infrastructure complex hota hai (API Gateway, service discovery chahiye). Bade teams aur complex apps ke liye microservices, chhote projects ke liye monolith better hai.",
code:"Monolith: deploy all → downtime for everything\nMicroservices: deploy OrderService → only orders affected"},

{num:51,chapter:".NET Advanced",q:"Tell me about yourself",
en:"I am a .NET developer with experience in ASP.NET Core Web API, C#, Entity Framework Core, SQL Server, and RESTful API development. I have built full-stack applications including admin panels, authentication systems, and database-driven features. I follow clean code practices using SOLID principles, DI, Repository Pattern, and JWT auth.",
hi:"Main .NET developer hoon. ASP.NET Core Web API, C#, EF Core, SQL Server mein kaam kiya hai. Full-stack applications banaye hain admin panels, authentication systems ke saath. SOLID principles, DI, Repository Pattern aur JWT auth follow karta hoon. Apne recent project mein inhone use kiya.",
code:"// Summary\nTechnologies: C#, ASP.NET Core, EF Core, SQL Server\nPatterns: Repository, DI, JWT Auth\nTools: VS Code, Git, Postman"},

{num:52,chapter:".NET Advanced",q:"Can you explain your recent project?",
en:"I built a Photo Studio management system with Node.js/Express backend and MongoDB. Features include admin CMS for photo uploads, contact form, gallery management, and JWT authentication. Used RESTful APIs, Mongoose for database, Multer for file uploads, and deployed on cloud. Applied MVC pattern, middleware, and environment-based configuration.",
hi:"Maine ek Photo Studio management system banaya Node.js/Express backend aur MongoDB ke saath. Admin CMS, photo upload, contact form, gallery management aur JWT auth include hai. RESTful APIs, Mongoose, Multer use kiya. MVC pattern, middleware aur environment configuration apply kiya.",
code:"// Tech Stack\nBackend: Node.js, Express\nDatabase: MongoDB + Mongoose\nAuth: JWT\nFile Upload: Multer"},

{num:53,chapter:".NET Advanced",q:"What are CLR and CTS in .NET?",
en:"CLR (Common Language Runtime) is the .NET runtime engine — it executes managed code, handles garbage collection, memory management, exception handling, and type safety. CTS (Common Type System) defines a standard set of data types shared across all .NET languages (C#, VB.NET, F#). Example: C# int and VB.NET Integer are the same CTS type System.Int32.",
hi:"CLR (Common Language Runtime) .NET ka runtime engine hai jo code execute karta hai, garbage collection, memory management sambhalta hai. CTS (Common Type System) sabhi .NET languages ke liye common data types define karta hai. C# ka int aur VB.NET ka Integer dono System.Int32 hain.",
code:"// C# int → CLR type System.Int32\nint x = 5;\n// Same as\nSystem.Int32 x = 5;"},

{num:54,chapter:".NET Advanced",q:"What is the difference between .NET Framework and .NET Core?",
en:".NET Framework: Windows-only, older, not actively developed. .NET Core (now .NET 5+): cross-platform (Windows/Linux/Mac), open-source, faster, lighter, actively developed. .NET Core supports Docker containers, microservices, and cloud deployment better. New projects should use .NET 8 (latest LTS). .NET Framework maintained only for legacy Windows apps.",
hi:".NET Framework sirf Windows par, old technology. .NET Core (ab .NET 5+) cross-platform hai — Windows, Linux, Mac par chalata hai. Open-source, fast aur actively develop ho raha hai. Docker, microservices, cloud support better hai. Naye projects mein .NET 8 (LTS) use karo.",
code:".NET Framework: Windows only, IIS\n.NET Core/.NET 5+: Linux/Mac/Windows, Kestrel, Docker"},

{num:55,chapter:".NET Advanced",q:"What are async and await?",
en:"async marks a method as asynchronous, allowing it to use await. await suspends the method until an async operation completes without blocking the thread. Returns a Task or Task<T>. The thread is freed for other work while waiting. Essential for scalable I/O-bound operations like DB calls, API calls, and file reads.",
hi:"async method ko asynchronous banata hai. await operation complete hone tak method suspend karta hai par thread block nahi karta. Thread doosra kaam karta rehta hai. Task ya Task<T> return hoti hai. Database calls, API calls jaise I/O operations ke liye essential hai.",
code:"public async Task<string> FetchDataAsync() {\n  var response = await httpClient.GetAsync(url);\n  return await response.Content.ReadAsStringAsync();\n}"},

{num:56,chapter:".NET Advanced",q:"How do you connect frontend with backend?",
en:"Frontend (React/Angular/Vue) connects to backend (ASP.NET Core API) via HTTP requests using Fetch API or Axios. Backend exposes REST API endpoints. CORS must be enabled on backend. Frontend sends JSON data in request body for POST/PUT, and reads JSON response. JWT token sent in Authorization header for protected endpoints.",
hi:"Frontend (React/Angular) backend (ASP.NET Core API) se HTTP requests ke through connect hota hai. Fetch API ya Axios use karte hain. Backend REST endpoints expose karta hai. CORS enable karna padta hai. Protected endpoints ke liye JWT token Authorization header mein bhejte hain.",
code:"// Frontend\nconst res = await fetch('/api/users', {\n  headers: { Authorization: `Bearer ${token}` }\n});\nconst data = await res.json();"},

{num:57,chapter:".NET Advanced",q:"What is Garbage Collection?",
en:"Garbage Collection (GC) in .NET automatically manages memory. It identifies objects that are no longer referenced and frees their memory. Uses generational collection (Gen 0, 1, 2) — Gen 0 for short-lived objects, Gen 2 for long-lived. Reduces memory leaks. Developers don't manually allocate/free memory like in C/C++.",
hi:"Garbage Collection .NET mein automatic memory management karta hai. Jo objects reference nahi hote unhe GC identify karke memory free karta hai. Gen 0 short-lived objects ke liye, Gen 2 long-lived ke liye. Developers ko manually memory free nahi karni padti jaise C/C++ mein.",
code:"// GC runs automatically\n// Force GC (avoid in production)\nGC.Collect();\n\n// Use IDisposable for manual cleanup\nusing var resource = new MyResource();"},

{num:58,chapter:".NET Advanced",q:"Where do you store secret keys in a project?",
en:"Never store secret keys in code or appsettings.json (checked into source control). Recommended: 1. Environment Variables on server/Docker. 2. .NET User Secrets (development only, stored outside project). 3. Azure Key Vault (production). 4. AWS Secrets Manager. In development, use dotnet user-secrets to safely store keys locally.",
hi:"Secret keys kabhi code ya appsettings.json mein mat rakho (git mein commit ho jaata hai). Sahi tarike: 1. Environment variables. 2. .NET User Secrets (development). 3. Azure Key Vault (production). 4. .env file gitignore mein dalo. Production mein Key Vault best practice hai.",
code:"// Development\ndotnet user-secrets set \"Jwt:Key\" \"mysecretkey\"\n// Production\nenv var: Jwt__Key=mysecretkey"},

{num:59,chapter:".NET Advanced",q:"What are secure ways to store secret keys?",
en:"Secure key storage methods: 1. Azure Key Vault — enterprise-grade, access controlled, audit logged. 2. AWS Secrets Manager — similar to Azure KV. 3. Environment variables — simple but no versioning. 4. HashiCorp Vault — open-source secrets management. 5. Docker secrets. Never commit .env or appsettings with real keys to Git.",
hi:"Secure key storage: Azure Key Vault (enterprise-grade, audit logs), AWS Secrets Manager, Environment variables, HashiCorp Vault. Development mein User Secrets ya .env file gitignore mein. Kabhi bhi real keys git mein commit mat karo — secret leak ho sakti hai.",
code:"// Azure Key Vault in .NET\nbuilder.Configuration.AddAzureKeyVault(\n  new Uri(\"https://mykeyvault.vault.azure.net/\"),\n  new DefaultAzureCredential());"},

{num:60,chapter:".NET Advanced",q:"What is WITH clause in SQL?",
en:"WITH clause in SQL defines a Common Table Expression (CTE) — a temporary named result set within a query. Makes complex queries readable and reusable. Defined with WITH name AS (SELECT ...) then used in the main query. Also supports recursive CTEs for hierarchical data like org charts or tree structures.",
hi:"SQL mein WITH clause CTE (Common Table Expression) define karta hai — ek temporary named result set. Complex queries ko readable banata hai. WITH name AS (SELECT...) define karo phir main query mein use karo. Recursive CTE se hierarchical data jaise org chart query kar sakte hain.",
code:"WITH HighEarners AS (\n  SELECT * FROM Employees WHERE Salary > 50000\n)\nSELECT * FROM HighEarners WHERE Dept = 'IT';"}
];
