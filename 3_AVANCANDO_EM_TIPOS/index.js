"use strict";
//1 - Arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers);
const nomes = ["Luiz", "Joao"];
console.log(nomes);
//2 - Outra sintaxe array
const nums = [100, 200];
nums.push(300);
console.log(nums);
//3 - any
const arr1 = [1, "ola", true, [], { nome: "luiz" }];
console.log(arr1);
arr1.push([1, 2, 3]);
//4 - parametros tipados
function sum(a, b) {
    console.log(a + b);
}
sum(4, 5);
//5 - retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Luiz"));
// 6 - função anônima
setTimeout(function () {
    const sallary = 1000;
    //console.log(parseFloat(sallary))
    //console.log(sallary)
}, 2000);
//7 - tipos de objeto
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
const pessoaObj = { nome: "Luiz", surname: "Rangel" };
//8 - pros opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
//showNumbers(6)
// 9 - validando argumentos opcional
function advancedgreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá ${firstName}, tudo bem?`;
}
console.log(advancedgreeting("Luiz", "Rangel"));
console.log(advancedgreeting("Joao"));
//10 - Union Type
function showBalance(balance) {
    console.log(`O saldo da conta é ${balance}`);
}
showBalance(100);
showBalance("500");
const arr2 = [1, "Teste", true];
//11 - avancando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "usuárop não aprovado!";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(1);
showId("200");
function showCoord(obj) {
    console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoord(coordObj);
const somePerson = { name: "Luiz", age: 23 };
console.log(somePerson);
/*type personType = {
    age: number
}*/
// 15 - literal types
let test;
test: "testando";
//console.log(test)
function showDirection(direction) {
    console.log(`A direcao é: ${direction}`);
}
showDirection("left");
//showDirection("top")
//16 - non null assertion operators
const p = document.getElementById("some-p");
console.log(p?.innerHTML);
// 17 - BIG INT
let n;
//n = 1
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n + 100n);
//18 - symbols
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
