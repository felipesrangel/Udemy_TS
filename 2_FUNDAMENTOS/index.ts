
//1 - numbers
let x: number = 10;

console.log(x);


x = 6;

console.log(typeof x);

const y: number = 12.546681;

console.log(typeof y);
console.log(y);

console.log(y.toPrecision(3));


//2 - string

const firstName: string = "Matheus"

console.log(firstName.toUpperCase());

let fullName: string;

const lastName: string = "Battisti"

fullName = firstName + " " + lastName;

console.log(fullName);
console.log(typeof fullName);

//3 - boolean

let a: boolean = false
console.log(a);
console.log(typeof a);

//4 - inference and annotation

let ann: string = "teste"
let inf = "teste"

