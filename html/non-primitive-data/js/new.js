// Array – 12 Times (console.log 0 index value)
let bookprice = [190, 210, 130];
console.log(bookprice[1]);

let fruits = ["apple", "banana", "cherry"];
console.log(fruits[2]);

let vegetables = ["carrot", "potato", "Beans", "Raddish"]
console.log(vegetables[2]);

let car = ["bmw", "audi", "Jaguar"];
console.log(car[1]);

let signal = ["red", "orange", "green"];
console.log(signal[0]);

let language = ["JS", "HTML", "CSS"];
console.log(language[1]);

let movie = ["tamil", "telugu", "malayalam", "kannada"];
console.log(movie[2]);

let mobile = ["android", "iphone"];
console.log(mobile[1]);

let marvels = ["Iron man", "spiderman", "Captain America"];
console.log(marvels[0]);

let news = [true, false, true];
console.log(news[0]);

let values = [100, 200, 300];
console.log(values[0]);

let JavaScript = ["Node", "Express", "React"];
console.log(JavaScript[1]);


// Object Creation – Console 12 Times
let Data = { name: "Mani", age: 25 };
console.log(Data);

let course = { course: "MERN", duration: "6 months" };
console.log(course.duration);

let brands = { brand: "Apple", model: "iPhone" };
console.log(brands);

let place = { city: "Chennai", country: "India" };
console.log(place);

let method = { lang: "JavaScript", type: "Dynamic" };
console.log(method.type);

let software = { os: "Windows", version: 10 };
console.log(software);

let products = { company: "Aptus", product: "ProjectPulse" };
console.log(products);

let colors = { color: "Green", code: "#1d8936ff" };
console.log(colors);

let condition = { framework: "React", library: true };
console.log(condition);

let database = { db: "MongoDB", type: "NoSQL" };
console.log(database);

let data = { server: "Node.js", env: "Backend" };
console.log(data.server);

let web = { ui: "Bootstrap", responsive: true };
console.log(web);



// Array of Objects – 12 Times
// 6 Arrays of Objects
let struct = [{ name: "Mani", age: 25 },
{ name: "Raj", age: 30 }];
console.log(struct);

let shoes = [{ brand: "Nike" },
{ brand: "Puma" }];
console.log(shoes);

let cities = [{ city: "Chennai" },
{ city: "Bangalore" }];
console.log(cities);

let subject = [{ lang: "HTML" },
{ lang: "CSS" }];
console.log(subject);

let program = [{ course: "React" },
{ course: "Node" }];
console.log(program);

let dbs = [{ db: "MongoDB" },
{ db: "Firebase" }];
console.log(dbs);

// 6 Nested Objects
let student = { user: { name: "Mani", age: 25 } };
console.log(student);

let device = { device: { brand: "Apple", type: "iPhone" } };
console.log(device);

let tracker = { company: { name: "Aptus", project: "Pulse" } };
console.log(tracker);

let devlang = { framework: { frontend: "React", backend: "Node" } };
console.log(devlang);

let cars = { car: { brand: "Tesla", model: { name: "Model S", year: 2025 } } };
console.log(cars);

let coursedata = { stack: { frontend: { tech: "React" }, backend: { tech: "Node" } } };
console.log(coursedata);


// Normal, Anonymous, Arrow Functions – 28 Times

// Normal Functions
function greet() {
    console.log("Normal function ");
}

function addNum() {
    console.log(50 + 10);
}
function showData() {
    console.log("Data Loaded");
}

function getName() {
    console.log("Mani");
}

function displayAge() {
    console.log(25);
}

function courseInfo() {
    console.log("MERN Stack");
}

function companyName() {
    console.log("Data Labs");
}

function userDetails() {
    console.log({ name: "Raj", age: 22 });
}

// Anonymous Functions
let sayHi = function () {
    console.log("Hi");
}
let showMsg = function () {
    console.log("Message Shown"); 
}
let sumNum = function () { 
    console.log(15 + 25); 
}
let loadUser = function () { 
    console.log("User Loaded"); 
}
let printCourse = function () { 
    console.log("React"); 
}
let calcArea = function () { 
    console.log(10 * 5); 
}
let makeSound = function () { 
    console.log("Beep"); 
}
let getDate = function () { 
    console.log(new Date()); 
}

// Arrow Functions
let greetArrow = () => console.log("Hello from Arrow");
let addArrow = () => console.log(5 + 10);
let infoArrow = () => console.log("Info Updated");
let nameArrow = () => console.log("Mani");
let printArrow = () => console.log("Arrow Function");
let callArrow = () => console.log("Calling...");
let loopArrow = () => console.log("Loop Running");
let successArrow = () => console.log("Success!");
let finishArrow = () => console.log("Finished!");
let updateArrow = () => console.log("Updated!");
let buildArrow = () => console.log("Build Complete");
let saveArrow = () => console.log("Data Saved");


// Arguments & Parameters – 14 Times

function greetUser(name) { 
  console.log("Hello " + name); 
} 
greetUser("Mani");

function add(a, b) { 
  console.log(a + b); 
} 
add(10, 70);

function multiply(x, y) { 
  console.log(x * y); 
} 
multiply(5, 7);

function divide(num1, num2) { 
  console.log(num1 / num2); 
} 
divide(10, 5);

function showInfo(name, age) { 
  console.log(name, age); 
} 
showInfo("Mani", 25);

function greetCity(city) { 
  console.log("Welcome to " + city); 
} 
greetCity("Chennai");

function power(a, b) { 
  console.log(a ** b); 
} 
power(2, 3);

function subtract(a, b) { 
  console.log(a - b); 
} 
subtract(50, 25);

function printLang(lang) { 
  console.log("Learning " + lang); 
} 
printLang("React");

function displayCourse(course, duration) {
  console.log(course, duration); 
} 
displayCourse("MERN", "6 Months");

function carInfo(brand, model) {
  console.log(brand, model); 
} 
carInfo("Jaguar", "Model Q");

function printColor(color) {
  console.log("Color: " + color); 
} 
printColor("orange");

function showProduct(name, price) { 
  console.log(name, price); 
} 
showProduct("DSLR Camera", 175000);

function showMsg2(message) { 
  console.log(message); 
} 
showMsg2("Danger");




// Optional: Collection of Objects
let collection = {
    students: [
        { name: "Mani", course: "MERN" },
        { name: "Raj", course: "React" },
        { name: "Dev", course: "Node" }
    ],
    company: {
        name: "Data Labs",
        projects: ["ProjectPulse", "AutoTrack", "Infinity"]
    }
};
console.log(collection);

