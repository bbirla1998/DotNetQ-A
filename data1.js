var Q1_30=[
{num:1,chapter:".NET Most Important",q:"What is a class and object in C#?",
en:"A class is a blueprint or template that defines properties and methods. An object is an instance of that class. For example, 'Car' is a class with properties like color and speed. When you create myCar = new Car(), that is an object. Classes define structure; objects hold actual data and can call methods.",
hi:"Class ek blueprint hoti hai jo properties aur methods define karti hai. Object us class ka ek instance hota hai. Jaise 'Car' ek class hai aur myCar = new Car() ek object hai. Class sirf structure define karti hai, object actual data rakhta hai.",
code:"class Car { public string Color; }\nCar myCar = new Car();\nmyCar.Color = \"Red\";"},

{num:2,chapter:".NET Most Important",q:"What is a constructor?",
en:"A constructor is a special method that runs automatically when an object is created. It has the same name as the class and no return type. Used to initialize object properties. If not defined, C# provides a default constructor. Constructors can be parameterized to accept values at object creation time.",
hi:"Constructor ek special method hai jo object create hone par automatically run hota hai. Iska naam class jaisa hota hai aur return type nahi hoti. Ye object ki properties initialize karta hai. Parameterized constructor values bhi le sakta hai.",
code:"class Car { public Car(string color) { Color = color; } }"},

{num:3,chapter:".NET Most Important",q:"What are access specifiers in C#?",
en:"Access specifiers control visibility of class members. Public: accessible everywhere. Private: only within the class. Protected: class and derived classes. Internal: same assembly only. Protected Internal: combination. Example: a private field is hidden outside the class, while a public method can be called from anywhere in the application.",
hi:"Access specifiers decide karte hain ki class ke members kahan se accessible hain. Public: sabke liye. Private: sirf us class mein. Protected: class aur uski derived classes mein. Internal: same project mein. Ye encapsulation maintain karne ke kaam aate hain.",
code:"public class Demo {\n  private int id;\n  public string Name;\n  protected void Show(){}\n}"},

{num:4,chapter:".NET Most Important",q:"What is an interface in .NET?",
en:"An interface defines a contract — a list of method signatures without implementation. Any class that implements the interface must provide the method bodies. Interfaces support multiple inheritance in C#. Example: IAnimal interface with Speak() method; Dog and Cat classes implement it differently. Used for loose coupling and testability.",
hi:"Interface ek contract hota hai jo sirf method signatures define karta hai, implementation nahi. Jo class interface implement kare use saare methods likhne padte hain. C# mein multiple inheritance interfaces se milti hai. Ye loose coupling ke liye use hota hai.",
code:"interface IAnimal { void Speak(); }\nclass Dog : IAnimal {\n  public void Speak() => Console.WriteLine(\"Woof\");\n}"},

{num:5,chapter:".NET Most Important",q:"What is abstraction in C#?",
en:"Abstraction means hiding complex implementation and showing only essential features to the user. Achieved using abstract classes or interfaces. Example: When you drive a car, you use the steering and pedals without knowing the engine internals. In C#, abstract class can have both abstract methods and concrete methods.",
hi:"Abstraction ka matlab hai andar ki complexity chhupaana aur sirf zaroori cheezein dikhana. Jaise car chalate waqt engine ke baare mein jaanna zaroori nahi. C# mein abstract class aur interface se abstraction achieve hoti hai.",
code:"abstract class Shape {\n  public abstract double Area();\n  public void Display() => Console.WriteLine(Area());\n}"},

{num:6,chapter:".NET Most Important",q:"What are SOLID principles?",
en:"SOLID is a set of 5 design principles for clean code: S=Single Responsibility (one class, one job), O=Open/Closed (open for extension, closed for modification), L=Liskov Substitution (subclass replaceable), I=Interface Segregation (small interfaces), D=Dependency Inversion (depend on abstractions). Following SOLID makes code maintainable, testable, and scalable.",
hi:"SOLID 5 design principles ka set hai: S=Single Responsibility, O=Open/Closed, L=Liskov Substitution, I=Interface Segregation, D=Dependency Inversion. In principles se code clean, maintainable aur testable banta hai. Large projects mein ye bahut zaroori hain.",
code:"// S: Single Responsibility\nclass InvoicePrinter { void Print(Invoice i){} }\nclass InvoiceSaver { void Save(Invoice i){} }"},

{num:7,chapter:".NET Most Important",q:"Difference between Dependency Injection and Dependency Inversion?",
en:"Dependency Inversion Principle (DIP) is a design principle: high-level modules should not depend on low-level modules; both should depend on abstractions. Dependency Injection (DI) is a technique to implement DIP — you inject dependencies from outside rather than creating them inside. DIP is the 'what', DI is the 'how'.",
hi:"Dependency Inversion Principle (DIP) ek design rule hai: high-level classes abstractions par depend karein. Dependency Injection (DI) us rule ko implement karne ka tarika hai — dependencies bahar se inject ki jaati hain. DIP 'kya karna hai' batata hai, DI 'kaise karna hai' batata hai.",
code:"// DI in ASP.NET Core\nbuilder.Services.AddScoped<IEmailService, EmailService>();"},

{num:8,chapter:".NET Most Important",q:"What are the main features of ASP.NET Core?",
en:"ASP.NET Core is cross-platform, open-source, and high-performance. Key features: built-in Dependency Injection, Middleware pipeline, Kestrel web server, Razor Pages, Web API support, Entity Framework Core integration, configuration system, logging, and health checks. It runs on Windows, Linux, and Mac. Much faster and lighter than classic ASP.NET Framework.",
hi:"ASP.NET Core cross-platform aur open-source framework hai. Iske features hain: built-in DI, Middleware pipeline, Web API, EF Core, appsettings.json configuration. Ye Windows, Linux, Mac sab par run karta hai. Classic ASP.NET se kaafi fast aur lightweight hai.",
code:"var builder = WebApplication.CreateBuilder(args);\nbuilder.Services.AddControllers();\nvar app = builder.Build();\napp.MapControllers();\napp.Run();"},

{num:9,chapter:".NET Most Important",q:"What is middleware in ASP.NET Core?",
en:"Middleware is software components that form a pipeline to handle HTTP requests and responses. Each middleware can process the request, pass it to the next, or short-circuit. Examples: Authentication middleware checks JWT token, Logging middleware logs requests, Exception middleware catches errors. Order of middleware matters in Program.cs.",
hi:"Middleware HTTP request aur response handle karne wale components hain jo ek pipeline banate hain. Har middleware request process karta hai aur next ko pass karta hai. Authentication, Logging, Exception handling sab middleware ke examples hain. Program.cs mein order important hota hai.",
code:"app.Use(async (context, next) => {\n  Console.WriteLine(\"Before\");\n  await next();\n  Console.WriteLine(\"After\");\n});"},

{num:10,chapter:".NET Most Important",q:"Difference between app.Use() and app.Run()?",
en:"app.Use() adds middleware that calls the next middleware in the pipeline — it passes control forward. app.Run() is a terminal middleware that does NOT call next — it ends the pipeline. Use app.Use() for intermediate processing like logging or auth, and app.Run() only for final response generation.",
hi:"app.Use() middleware add karta hai jo next ko call karta hai — pipeline continue rehti hai. app.Run() terminal middleware hai jo pipeline rok deta hai, next call nahi karta. Use() intermediate processing ke liye, Run() final response ke liye use hota hai.",
code:"app.Use(async (ctx, next) => { await next(); });\napp.Run(async ctx => {\n  await ctx.Response.WriteAsync(\"Done\");\n});"},

{num:11,chapter:".NET Most Important",q:"Why do we use Program.cs in .NET Core?",
en:"Program.cs is the entry point of an ASP.NET Core application. It configures the web host, registers services in the DI container, sets up the middleware pipeline, and starts the application. In .NET 6+, it uses minimal hosting model. Everything from database connection to authentication is set up here.",
hi:"Program.cs ASP.NET Core app ka entry point hai. Yahan services register hoti hain, middleware pipeline configure hoti hai aur application start hoti hai. .NET 6+ mein minimal hosting model use hota hai. Database, authentication sab yahaan configure hota hai.",
code:"var builder = WebApplication.CreateBuilder(args);\nbuilder.Services.AddDbContext<AppDb>();\nvar app = builder.Build();\napp.UseAuthentication();\napp.Run();"},

{num:12,chapter:".NET Most Important",q:"Why do we use appsettings.json?",
en:"appsettings.json stores application configuration like database connection strings, API keys, JWT settings, email config, and environment-specific settings. It avoids hardcoding values in code. You can have appsettings.Development.json and appsettings.Production.json for different environments. Values are read using IConfiguration interface injected via DI.",
hi:"appsettings.json mein application ki settings store hoti hain jaise DB connection string, API keys, JWT config. Code mein hardcode karne ki zaroorat nahi padti. Environment ke hisaab se alag files bana sakte hain. IConfiguration se values read karte hain.",
code:"// appsettings.json\n{ \"ConnectionStrings\": { \"Default\": \"Server=.;Db=MyDb\" } }\n// C#\nvar conn = config[\"ConnectionStrings:Default\"];"},

{num:13,chapter:".NET Most Important",q:"What are HTTP methods?",
en:"HTTP methods define the action to be performed on a resource. GET: retrieve data. POST: create new resource. PUT: update entire resource. PATCH: partial update. DELETE: remove resource. HEAD: like GET but no body. OPTIONS: get supported methods. In REST APIs, each method maps to a CRUD operation.",
hi:"HTTP methods batate hain ki resource par kya action karna hai. GET data lata hai, POST naya banata hai, PUT update karta hai, PATCH partial update, DELETE hatata hai. REST API mein ye CRUD operations se map hote hain.",
code:"[HttpGet] IActionResult Get(){}\n[HttpPost] IActionResult Create(Dto d){}\n[HttpPut(\"{id}\")] IActionResult Update(int id){}\n[HttpDelete(\"{id}\")] IActionResult Delete(int id){}"},

{num:14,chapter:".NET Most Important",q:"What are HTTP status codes?",
en:"HTTP status codes indicate the result of an HTTP request. 2xx Success: 200 OK, 201 Created, 204 No Content. 3xx Redirect: 301 Moved, 302 Found. 4xx Client Errors: 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found. 5xx Server Errors: 500 Internal Server Error, 503 Service Unavailable.",
hi:"HTTP status codes HTTP request ka result batate hain. 200=OK, 201=Created, 400=Bad Request, 401=Unauthorized, 403=Forbidden, 404=Not Found, 500=Server Error. API design mein sahi status code return karna bahut zaroori hai.",
code:"return Ok(data);          // 200\nreturn Created(...);      // 201\nreturn BadRequest(...);   // 400\nreturn NotFound();        // 404"},

{num:15,chapter:".NET Most Important",q:"What is CORS?",
en:"CORS (Cross-Origin Resource Sharing) is a security feature that controls which domains can access your API. By default, browsers block requests from different origins. In ASP.NET Core, you configure CORS policy to allow specific origins, headers, and methods. Example: your React app on port 3000 calling API on port 5000.",
hi:"CORS (Cross-Origin Resource Sharing) browser ki security feature hai jo different domain se API access control karta hai. Jaise React app port 3000 par API port 5000 call kare. ASP.NET Core mein CORS policy configure karni padti hai allowed origins ke liye.",
code:"builder.Services.AddCors(o => o.AddPolicy(\"Allow\",\n  b => b.WithOrigins(\"http://localhost:3000\")\n        .AllowAnyMethod().AllowAnyHeader()));\napp.UseCors(\"Allow\");"},

{num:16,chapter:".NET Most Important",q:"What is routing in ASP.NET Core Web API?",
en:"Routing maps incoming HTTP requests to specific controller actions. Two types: Convention-based routing (defined in Program.cs) and Attribute routing (using [Route], [HttpGet] etc. on controllers). Attribute routing is preferred in Web APIs. Route templates support parameters like {id}. Route constraints add validation like {id:int}.",
hi:"Routing HTTP requests ko controller actions se match karta hai. Attribute routing mein [Route], [HttpGet] etc. use hote hain. Convention-based routing Program.cs mein hoti hai. Web API mein attribute routing prefer ki jaati hai. Route mein parameters bhi ho sakte hain.",
code:"[Route(\"api/[controller]\")]\n[HttpGet(\"{id:int}\")]\npublic IActionResult GetById(int id) { }"},

{num:17,chapter:".NET Most Important",q:"What is JWT authentication?",
en:"JWT (JSON Web Token) is a compact, self-contained token for secure information transmission. Used for stateless authentication in APIs. After login, server sends JWT to client; client sends it in every request header. Server validates the token without checking a database session. JWT contains Header, Payload, and Signature.",
hi:"JWT (JSON Web Token) ek secure token hai jo authentication ke liye use hota hai. Login ke baad server JWT deta hai, client har request mein bhejta hai. Server token verify karta hai bina database check kiye. JWT mein Header, Payload aur Signature hote hain.",
code:"// Add JWT to header\nAuthorization: Bearer eyJhbGciOiJIUzI1NiJ9..."},

{num:18,chapter:".NET Most Important",q:"How does JWT authentication work?",
en:"1. User logs in with credentials. 2. Server validates and creates JWT with user claims (id, role). 3. JWT is signed with a secret key. 4. Client stores JWT (localStorage/cookie). 5. Client sends JWT in Authorization header on each request. 6. Server validates signature and extracts user info without DB lookup.",
hi:"1. User login karta hai. 2. Server credentials validate karke JWT banata hai. 3. JWT secret key se sign hota hai. 4. Client JWT store karta hai. 5. Har request mein Authorization header mein bhejta hai. 6. Server signature verify karke user pehchanta hai.",
code:"services.AddAuthentication(JwtBearer...)\n  .AddJwtBearer(opt => {\n    opt.TokenValidationParameters = new()\n    { ValidateIssuerSigningKey=true, ... };\n  });"},

{num:19,chapter:".NET Most Important",q:"What is Dependency Injection?",
en:"Dependency Injection is a design pattern where an object's dependencies are provided from outside rather than created internally. This promotes loose coupling and testability. In ASP.NET Core, the built-in IoC container manages object creation and lifetime. Instead of creating a service inside a class, you inject it via constructor.",
hi:"Dependency Injection ek pattern hai jahan object ki dependencies bahar se di jaati hain, andar se create nahi ki jaatein. Isse loose coupling aur testability milti hai. ASP.NET Core mein built-in IoC container dependencies manage karta hai. Constructor injection sabse common tarika hai.",
code:"public class OrderService {\n  private readonly IEmailService _email;\n  public OrderService(IEmailService email) { _email = email; }\n}"},

{num:20,chapter:".NET Most Important",q:"How do we implement Dependency Injection in ASP.NET Core?",
en:"Register services in Program.cs using builder.Services. Use AddSingleton, AddScoped, or AddTransient based on lifetime. Then inject via constructor in controllers or services. ASP.NET Core automatically resolves dependencies. You can also inject into middleware, filters, and Razor pages. Interface-based injection is preferred for testability.",
hi:"Program.cs mein builder.Services mein services register karo. AddSingleton/AddScoped/AddTransient lifetime ke hisaab se use karo. Controller ya service mein constructor se inject karo. ASP.NET Core automatically dependencies resolve karta hai. Interface-based injection testing ke liye best hai.",
code:"builder.Services.AddScoped<IUserRepo, UserRepo>();\n// Controller\npublic UsersController(IUserRepo repo) { _repo = repo; }"},

{num:21,chapter:".NET Most Important",q:"What are DI service lifetimes?",
en:"Three lifetimes in ASP.NET Core DI: Singleton — one instance for the entire app lifetime, shared everywhere (use for stateless services). Scoped — one instance per HTTP request (use for DbContext, repositories). Transient — new instance every time requested (use for lightweight, stateless services). Wrong lifetime causes concurrency bugs.",
hi:"ASP.NET Core mein 3 lifetimes hain: Singleton — poori app mein ek hi instance. Scoped — har HTTP request mein naya instance. Transient — har baar request karne par naya. DbContext ke liye Scoped, stateless services ke liye Transient best hai.",
code:"services.AddSingleton<IConfig, AppConfig>();\nservices.AddScoped<IUserRepo, UserRepo>();\nservices.AddTransient<IEmailSender, EmailSender>();"},

{num:22,chapter:".NET Most Important",q:"What is Entity Framework Core?",
en:"Entity Framework Core (EF Core) is Microsoft's ORM (Object-Relational Mapper) that lets you interact with databases using C# objects instead of raw SQL. It maps C# classes to database tables. Supports LINQ queries, migrations, relationships, and multiple databases (SQL Server, PostgreSQL, SQLite). Code-first and database-first approaches supported.",
hi:"EF Core Microsoft ka ORM hai jo C# objects se database interact karne deta hai bina raw SQL likhe. C# classes database tables se map hoti hain. LINQ queries, migrations, relationships sab support karta hai. SQL Server, PostgreSQL, SQLite sab ke saath kaam karta hai.",
code:"var users = await dbContext.Users\n  .Where(u => u.IsActive)\n  .ToListAsync();"},

{num:23,chapter:".NET Most Important",q:"Why do we use DbContext?",
en:"DbContext is the main class in EF Core that manages database connections and operations. It represents a session with the database. It contains DbSet properties for each entity/table. Used to query, insert, update, and delete records. It tracks changes made to entities and saves them using SaveChangesAsync().",
hi:"DbContext EF Core ki main class hai jo database connection aur operations manage karti hai. Isme DbSet properties hoti hain har table ke liye. Query, insert, update, delete sab iske through hota hai. Changes track karta hai aur SaveChangesAsync() se database update hota hai.",
code:"public class AppDbContext : DbContext {\n  public DbSet<User> Users { get; set; }\n  public DbSet<Order> Orders { get; set; }\n}"},

{num:24,chapter:".NET Most Important",q:"What is DbSet in EF Core?",
en:"DbSet represents a collection of entities of a specific type that can be queried from the database. It is like a table representation in code. DbSet provides methods like Add(), Remove(), Find(), Where(). Defined as properties in DbContext. Every entity/model that maps to a table needs a corresponding DbSet.",
hi:"DbSet ek specific type ke entities ka collection hai jo database table ko represent karta hai. DbSet mein Add(), Remove(), Find(), Where() jaise methods hote hain. DbContext mein DbSet properties define hoti hain. Har table ke liye ek DbSet chahiye.",
code:"// Add record\nvar user = new User { Name = \"Ram\" };\ndbContext.Users.Add(user);\nawait dbContext.SaveChangesAsync();"},

{num:25,chapter:".NET Most Important",q:"What is LINQ in .NET?",
en:"LINQ (Language Integrated Query) lets you query collections (arrays, lists, databases) using C# syntax instead of SQL. Makes code readable and type-safe. Two syntaxes: Query syntax (SQL-like) and Method syntax (lambda). Works with in-memory collections (LINQ to Objects) and databases (LINQ to Entities via EF Core).",
hi:"LINQ (Language Integrated Query) C# mein collections aur databases query karne ka tarika hai. SQL jaise syntax se C# objects query kar sakte hain. Query syntax aur Method syntax dono available hain. EF Core ke saath database queries LINQ se likhte hain.",
code:"// Method syntax\nvar adults = users.Where(u => u.Age >= 18)\n                 .OrderBy(u => u.Name)\n                 .ToList();"},

{num:26,chapter:".NET Most Important",q:"Difference between IEnumerable and IQueryable?",
en:"IEnumerable loads all data into memory first, then filters in-memory — good for in-memory collections. IQueryable builds and sends the query to the database, filtering happens at database level — efficient for large data. Example: IQueryable with .Where() sends WHERE clause to SQL; IEnumerable fetches all rows then filters.",
hi:"IEnumerable pehle saara data memory mein laata hai phir filter karta hai — small collections ke liye theek. IQueryable database par hi query execute karta hai — large data ke liye efficient. EF Core mein IQueryable use karo performance ke liye.",
code:"// IQueryable - SQL WHERE clause banta hai\nIQueryable<User> q = db.Users.Where(u => u.Age > 18);\n// IEnumerable - sab fetch ho jaata hai\nIEnumerable<User> e = db.Users.AsEnumerable().Where(u => u.Age > 18);"},

{num:27,chapter:".NET Most Important",q:"What is DTO?",
en:"DTO (Data Transfer Object) is a simple class used to transfer data between layers or over the network without exposing the entire entity/model. It contains only the fields needed for that specific operation. Prevents over-posting (sending extra data) and over-fetching (returning sensitive data like passwords). Used with AutoMapper in .NET.",
hi:"DTO (Data Transfer Object) ek simple class hai jo sirf zaroori data transfer karne ke liye use hoti hai. Poora entity expose nahi karna padta. Jaise User entity mein password hai par DTO mein nahi. Over-posting aur over-fetching se bachata hai. AutoMapper se mapping hoti hai.",
code:"public class UserDto {\n  public string Name { get; set; }\n  public string Email { get; set; }\n  // No Password field\n}"},

{num:28,chapter:".NET Most Important",q:"What is asynchronous programming?",
en:"Asynchronous programming allows a program to start a task and continue doing other work while waiting for the task to complete. Prevents thread blocking. In .NET, achieved using async/await keywords with Task and Task<T>. Example: reading a file or calling an API — while waiting, the thread can handle other requests.",
hi:"Asynchronous programming mein ek kaam start karke doosra kaam karte rehte hain, result ka wait nahi karte. Thread block nahi hota. .NET mein async/await se implement karte hain. Jaise database call ke dauran thread doosri requests handle karta hai. Server performance badh jaati hai.",
code:"public async Task<User> GetUserAsync(int id) {\n  return await db.Users.FindAsync(id);\n}"},

{num:29,chapter:".NET Most Important",q:"Difference between synchronous and asynchronous programming?",
en:"Synchronous: each task must complete before the next starts. Thread is blocked while waiting. Simple but slow for I/O. Asynchronous: tasks can run without blocking the thread. Thread is freed while waiting for I/O. More complex but highly scalable. In a web server, async allows handling thousands of requests with fewer threads.",
hi:"Synchronous: ek kaam poora hone ke baad doosra shuru hota hai, thread block rehta hai. Asynchronous: kaam shuru karke thread free ho jaata hai aur doosra kaam karta hai. Web server mein async se zyada requests handle ho sakti hain kam threads mein.",
code:"// Sync - blocks thread\nvar user = db.Users.Find(id);\n// Async - frees thread\nvar user = await db.Users.FindAsync(id);"},

{num:30,chapter:".NET Most Important",q:"Why do we use async and await?",
en:"async keyword marks a method as asynchronous. await pauses execution of that method until the awaited task completes, without blocking the thread. The thread is returned to the thread pool to handle other work. This improves scalability — a web API can handle more concurrent requests without creating more threads.",
hi:"async method ko asynchronous banata hai. await us method ki execution rok deta hai jab tak task complete na ho, par thread block nahi hota. Thread pool mein waapas jaata hai doosra kaam karne. Isse web API zyada concurrent requests handle kar sakti hai.",
code:"[HttpGet(\"{id}\")]\npublic async Task<IActionResult> Get(int id) {\n  var item = await _repo.GetAsync(id);\n  return Ok(item);\n}"}
];
