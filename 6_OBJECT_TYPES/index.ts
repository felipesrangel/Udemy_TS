//1 - tipo de objeto para função com interface
interface Product{
    name: string
    price: number
    isAvaliable: boolean
}

function showProductDetails(product: Product){
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
    if(product.isAvaliable){
        console.log("O produto está disponível")
    }
}

const shirt: Product = {
    name: "Camisa",
    price: 19.99,
    isAvaliable: true
}

showProductDetails(shirt)
showProductDetails({name: "Tênis", price: 129.99, isAvaliable: false})

// 2 - propriedades opcionais em interfaces

interface User{
    email: string,
    role?: string
}

function showUserDetails(user: User){
    console.log(`O usuário tem o email: ${user.email}`)

    if(user.role){
        console.log(`A função do usuário é: ${user.role}`)
    }
}

const u1:User = {email: "matheus@email.com", role: "admin"}
const u2:User = {email: "joao@email.com"}

showUserDetails(u1)
showUserDetails(u2)

// 3 - readonly

interface Car{
    brand: string
    readonly wheels: number
}

const fusca: Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca)

//fusca.wheels = 5

// 4 - Index signature

interface CoordObject{
    [index: string]:  number
}

let coord: CoordObject = {
    x: 10,

}

coord.y = 15

console.log(coord)

//coord.z = "teste"

// 5 - Extending Interfaces

interface Human{
    name: string
    age: number
}

interface SuperHuman extends Human{
    superpowers: string[]
}

const matheus: Human = {
    name: "Matheus",
    age: 30
}

console.log(matheus)

const goku: SuperHuman = {
    name: "Goku",
    age: 50,
    superpowers: ["Kamehameha", "Genki Dama"]
}

console.log(goku)
console.log(goku.superpowers[0])

// 6 - intersection types
interface Character{
    name: string
}

interface Gun{
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const arnoold: HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
}

console.log(arnoold)
console.log(arnoold.caliber)

// 7 - ReadOnlyArray

let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"]

//myArray[3] = "Mamão"

console.log(myArray)

myArray.forEach((item) => {
    console.log("Fruta: " + item)
})

myArray = myArray.map((item)=>{
    return `Fruta: ${item}`
})

console.log(myArray)

// 8 - Tuplas
type fiveNumber = [number, number, number, number, number]

//number[]

const myNumberArray: fiveNumber = [1,2,3,4,5]
//const myNumberArray2: fiveNumber = [1,2,3,4,5,6]
//const mixedArray: fiveNumber = [1,true, "teste",6]

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser = ["Luiz", 23]

console.log(anotherUser[0])

anotherUser[0] = "João"

console.log(anotherUser[0])

//another[1] = "teste"


// 9 - tuplas com readOnly

function showNumbers(numbers: readonly [number, number]){
    //numbers[0] = 10
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([1,2])


