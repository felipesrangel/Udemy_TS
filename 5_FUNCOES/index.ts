//1 - void
function withoutReturn():void{
    console.log("Esta função não tem retorno!")
}

withoutReturn()

//2 - callback como argumento

function greeting(name: string): string{
    return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName: string){
    console.log("Preparando a função")

    const greet = f(userName)

    console.log(greet)
}

preGreeting(greeting, "Matheus")
preGreeting(greeting, "João")

// 3 - generics

function firstElemnt<T>(arr: T[]) : T{
    return arr[0]
}

console.log(firstElemnt([1,2,3, true]))
console.log(firstElemnt(["a", "b", "c"]))
//console.log(firstElemnt("Teste"))

function mergeObjects<U, T>(obj1: U, obj2: T){
    return{
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({name: "Luiz"}, {age: 30, job: "Student"})

console.log(newObject)

//4 - constraints

function biggestNumber<T extends number | string>(a: T, b: T): T{
    let biggest : T

    if(+a > +b){
        biggest = a
    }else{
        biggest = b
    }
    
    return biggest
}

console.log(biggestNumber(5,3))
console.log(biggestNumber("12","5"))


// 5 especificar tipos de argumentos

function mergeArrays<T>(arr1: T[], arr2: T[]){
    return arr1.concat(arr2)
}

console.log(mergeArrays([1,2,3], [5,6]))
console.log(mergeArrays<number | string>([1,2,3], ["Testando","Teste"]))


//6 - parametros opcionais
function modernGreeting(name: string, greet?: string){
    if(greet){
        return `Olá ${greet} ${name}, tudo bem?`
    }
    
    return `Olá ${name}, tudo bem?`
}

console.log(modernGreeting("Matheus"))
console.log(modernGreeting("Luiz", "Mestre"))


//7 - parametros default
function somaDefault(n: number, m = 10): number{
    return n + m
}

console.log(somaDefault(10))
console.log(somaDefault(12, 15))


// 8 - unknown

function doSomething(x: unknown){
    if(Array.isArray(x)){
        console.log(x[0])
    }else if(typeof x === "number"){
        console.log("X é um número")
    }
}

doSomething([4,6,3])
doSomething(10)

// 9 - never

function showErrorMessage(msg: string): never{
    throw new Error(msg)
}

//showErrorMessage("Errei")


//10 - rest parameters
function sumAll(...n: number[]){
    return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1,2,3,4,5))
console.log(sumAll(1,236,46513,1564))
//console.log(sumAll("Teste"))

//11 - destructuring com parâmetro

function showProductDetails({name, price}: {name: string, price: number}){
    return `O nome do produto é ${name} e ele custa R$${price}`
}

const shirt = {name: "Camisa", price: 49.99}

console.log(showProductDetails(shirt))
//console.log(showProductDetails({name:"teste", age: 3}))