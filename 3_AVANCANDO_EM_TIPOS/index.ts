//1 - Arrays
let numbers: number[] = [1,2,3]
numbers.push(5);

console.log(numbers)

const nomes: string[] = ["Luiz", "Joao"]
console.log(nomes)

//2 - Outra sintaxe array
const nums: Array<number> = [100,200];
nums.push(300)

console.log(nums)

//3 - any

const arr1: any = [1, "ola", true, [], {nome: "luiz"}]

console.log(arr1);

arr1.push([1,2,3]);

//4 - parametros tipados

function sum(a: number, b: number){
    console.log(a + b);
}

sum(4,5);

//5 - retorno de função

function greeting(name: string): string{
    return `Olá ${name}`;
}

console.log(greeting("Luiz"));

// 6 - função anônima

setTimeout(function(){
    const sallary: number = 1000

    //console.log(parseFloat(sallary))

    //console.log(sallary)
}, 2000)



//7 - tipos de objeto

function passCoordinates(coord: {x: number, y: number}){
    console.log("X coordinates: " + coord.x)
    console.log("Y coordinates: " + coord.y)
}

const objCoord = {x: 329, y: 84.2}

passCoordinates(objCoord);


const pessoaObj: {nome: string, surname: string} = {nome: "Luiz", surname: "Rangel"};


//8 - pros opcionais
function showNumbers(a: number, b: number, c?: number){
    console.log("A: " + a)
    console.log("B: " + b)
    if(c){
        console.log("C: " + c)
    }
}

showNumbers(1,2,3)
showNumbers(4,5)
//showNumbers(6)

// 9 - validando argumentos opcional
function advancedgreeting(firstName: string, lastName?: string){
    if(lastName !== undefined){
        return `Olá, ${firstName} ${lastName}, tudo bem?`
       
    }

    return `Olá ${firstName}, tudo bem?`
}

console.log(advancedgreeting("Luiz", "Rangel"))
console.log(advancedgreeting("Joao"))


//10 - Union Type

function showBalance(balance: string | number){
    console.log(`O saldo da conta é ${balance}`)
}

showBalance(100)
showBalance("500")

const arr2: Array<number | string | boolean> = [1, "Teste", true]

//11 - avancando em union types

function showUserRole(role: boolean | string){
    if(typeof role === "boolean"){
        return "usuárop não aprovado!"
    }
    return `A função do usuário é: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))

//12 - type alias
type ID = string | number

function showId(id: ID){
    console.log(`O ID é: ${id}`)
}

showId(1)
showId("200")

//13 - interface

interface Point{
    x: number
    y: number
    z: number
}

function showCoord(obj: Point){
 console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`)
}

const coordObj: Point = {
    x: 10,
    y: 15,
    z: 20
}

showCoord(coordObj)

//14 - interface x tuype alias

interface Person{
    name: string
}

interface Person{
    age: number
}

const somePerson: Person = {name: "Luiz", age: 23}

console.log(somePerson)

// ------------------------------
type personType = {
    name: string
}

/*type personType = {
    age: number
}*/


// 15 - literal types

let test: "testando"

test: "testando"

//console.log(test)

function showDirection(direction: "left" | "right" | "center"){
    console.log(`A direcao é: ${direction}`)
}

showDirection("left")
//showDirection("top")


//16 - non null assertion operators

const p = document.getElementById("some-p")
console.log(p?.innerHTML)

// 17 - BIG INT

let n: bigint
//n = 1
n = 1000n
console.log(n)
console.log(typeof n)
console.log(n + 100n)

//18 - symbols

let symbolA:symbol = Symbol("a")
let symbolB = Symbol("a")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)