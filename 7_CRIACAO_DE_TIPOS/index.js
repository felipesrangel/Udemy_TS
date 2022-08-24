"use strict";
// 1 - generics
function showData(arg) {
    return `O dado é ${arg}`;
}
console.log(showData(5));
console.log(showData("Testando generic"));
console.log(showData(true));
console.log(showData(""));
console.log(showData([4, 23]));
// 2 - constraintem generic
function showProductName(obj) {
    return `O nome do produto é ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Branca" };
const otherProd = { name: "Carro", wheels: 4, engine: 4.0 };
const thirdProd = { price: 19.99, category: "Roupa" };
console.log(showProductName(myObj));
console.log(showProductName(otherProd));
const myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
const myPen = { name: "Caneta BIC", wheels: false, engine: false, color: "Azul" };
console.log(myCar);
console.log(myPen);
// 4 - type parameters
function getSomeKey(obj, key) {
    return `A chave que está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: "Matheus",
    age: 30,
    hasDriverLicense: true
};
console.log(showCharName(myChar, 'name'));
// 6 - typeof type operator
const userName = "Luiz";
const userName2 = "Carlos";
const userName4 = "Joaquim";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
};
function showKm(km) {
    console.log(`O veículo tem a km de : ${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 1000
};
showKm(newCar.km);
const someVar = 5;
const testing = "some text";
