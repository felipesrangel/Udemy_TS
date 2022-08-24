"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvaliable) {
        console.log("O produto está disponível");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvaliable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Tênis", price: 129.99, isAvaliable: false });
function showUserDetails(user) {
    console.log(`O usuário tem o email: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const u1 = { email: "matheus@email.com", role: "admin" };
const u2 = { email: "joao@email.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coord = {
    x: 10,
};
coord.y = 15;
console.log(coord);
const matheus = {
    name: "Matheus",
    age: 30
};
console.log(matheus);
const goku = {
    name: "Goku",
    age: 50,
    superpowers: ["Kamehameha", "Genki Dama"]
};
console.log(goku);
console.log(goku.superpowers[0]);
const arnoold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnoold);
console.log(arnoold.caliber);
// 7 - ReadOnlyArray
let myArray = ["Maçã", "Laranja", "Banana"];
//myArray[3] = "Mamão"
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
//number[]
const myNumberArray = [1, 2, 3, 4, 5];
//const myNumberArray2: fiveNumber = [1,2,3,4,5,6]
//const mixedArray: fiveNumber = [1,true, "teste",6]
console.log(myNumberArray);
const anotherUser = ["Luiz", 23];
console.log(anotherUser[0]);
anotherUser[0] = "João";
console.log(anotherUser[0]);
//another[1] = "teste"
// 9 - tuplas com readOnly
function showNumbers(numbers) {
    //numbers[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
