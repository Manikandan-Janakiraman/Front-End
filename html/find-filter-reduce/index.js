//array      0        1        2
let rr = ["Simbu", "Vikram", "Ashok"];
let jj = [rr[0][0], rr[1][0], rr[2][0]];
console.log('First Letter of the Values:', jj);

//charAt
let wordz = ["Simbu", "Bala", "Arun", "Vikram"];
let letters = wordz.map(word => word.charAt(0));
console.log('First Letters', letters);

//last letter
let ac = ["Simbu", "Vikram", "Ashok"];
let tr = [ac[0][4], ac[1][5], ac[2][4]];
console.log('Last Letter of the Values:', tr);

//str length to find the last letter
let news = ["Simbu", "Bala", "Arun", "Vikram"];
let end = news.map(str => str[str.length - 1]);
console.log('Last Letters', end);

//slice to find the last letter
let newz = ["Simbu", "Bala", "Arun", "Vikram"];
let endz = newz.map(str => str.slice(-1));
console.log('Last Letters', endz);

// for loop to find last letter
let newx = ["Simbu", "Bala", "Arun", "Vikram"];
let emd = [];
for (const str of newx) {
    if (str.length > 0) {
        emd.push(str[str.length - 1]);
    }
} console.log('Last Letter:', emd);

// for loop to find first letter
let newy = ["Simbu", "Bala", "Arun", "Vikram"];
let emz = [];
for (let i = 0; i < newy.length; i++) {
    const string = newy[i];
    if (string.length > 0) {
        emz.push(string[0]);    // emz.push(string.charAt(0));  6 line code 7 line print
    }
} console.log('First Letter:', emz);


// Return first element that matches condition 
const arr = [2, 3, 4, 5]
let even = arr.find((n) => n % 2 == 0)
console.log('Find Even No:', even);

const ar = [2, 3, 4, 5]
let odd = ar.find((n) => n % 2 != 0)
console.log('Find Odd No:', odd);

const category = ["Household", "Electronics", "Furnitures", "Fashion", "book", "wall", "store"]
let amz = category.find(n => n.length <= 5)
console.log('Find Value:', amz);




//Filter (Even, Odd, Length, divisible, remove empty string, compare 2 number, ascending or descending)
const as = [2, 3, 4, 5]
let evens = as.filter((n) => n % 2 == 0)
console.log('Filter Even No:', evens);

const ass = [2, 3, 4, 5]
let odds = ass.filter((n) => n % 2 != 0)
console.log('Filter odd No:', odds);

const check = [77, 6, 90, 25]
let value = check.filter((n) => n >= 25)
console.log('Filter Value:', value);

const string = ["Lenova", "HP", "Dell", "Toshiba"]
let words = string.filter(n => n.length <= 4)
console.log('Filter Length count:', words);

const div = [27, 99, 36, 88]
let values = div.filter((n) => n % 3 === 0)
console.log('Filter Divisible:', values);

const empt = ["Mani", "", "Vel", "Sabarish", "", "vikram", "", "rajni", "vijay", "kamal", ""]
let str = empt.filter((n) => n !== "")
console.log('Filter Empty String', str);

const amount = [499, 599, 699, 799, 199, 99, 300, 149, 899, 999, 1499, 2999, 1000]
let filter = amount.filter((n) => n <= 700)
console.log('Ecommerce Filter:', filter);


//Reduce function in Arithmetic + - * /
const ars = [999, 888, 121, 75];
const sum = ars.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Reduce Function Add:', sum);


const arss = [1000, 971]
const minus = arss.reduce((accumulator, currentValue) => accumulator - currentValue);
console.log('Reduce Function Sub:', minus);


const mul = [10, 20, 30]
const multiply = mul.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log('Reduce Function Multiply:', multiply);


const divs = [50, 10]
const Divisible = divs.reduce((accumulator, currentValue) => accumulator / currentValue);
console.log('Reduce Function Divide:', Divisible);