"use strict";
// 1 - campos em classe
class User {
}
const matheus = new User();
console.log(matheus);
matheus.name = "Matheus";
matheus.age = 23;
console.log(matheus);
// 2 - constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser("Jão", 22);
console.log(joao);
// 3 - campo readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
console.log(fusca);
console.log(fusca.wheels);
fusca.name = "Fusca Turbo";
//fusca.wheels = 5
// 4 - herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4);
console.log(trator);
console.log(destroyer);
// 5 - métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey Stranger");
    }
}
const jimmy = new Dwarf("Jimmy");
console.log(jimmy.name);
jimmy.greeting();
console.log(jimmy);
// 6 - This
class Truck {
    constructor(modelo, hp) {
        this.modelo = modelo;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo ${this.modelo}, que tem ${this.hp} cavalos de potência`);
    }
}
const volvo = new Truck("Volvo", 400);
const scania = new Truck("Scania", 500);
volvo.showDetails();
scania.showDetails();
// 7 - Getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const luizRangel = new Person("Luiz", "Rangel");
console.log(luizRangel.name);
console.log(luizRangel.fullName);
// 8 - setters
class Coord {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso");
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso");
    }
    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`;
    }
}
const myCoords = new Coord();
myCoords.fillX = 15;
myCoords.fillY = 0;
myCoords.fillY = 10;
console.log(myCoords);
console.log(myCoords.getCoords);
class BlogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é ${this.title}`;
    }
}
const myPost = new BlogPost("Hello World");
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título é: ${this.title}`;
    }
}
// 10 - override em métodos
class Base {
    someMethod() {
        console.log("alguma coisa");
    }
    showName() {
    }
}
class Nova extends Base {
    someMethod() {
        console.log("Testando outra coisa");
    }
}
const myObj = new Nova();
myObj.someMethod();
// 11 - public
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cInstance = new C();
console.log(cInstance.x);
const dInstance = new D();
console.log(dInstance.x);
// 12 - protected
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log("Este método é protegido");
    }
}
class F extends E {
    showX() {
        console.log("X: " + this.x);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
fInstance.showX();
fInstance.showProtectedMethod();
// 13 - private
class PrivateClass {
    constructor() {
        this.name = "private";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log("Método privado");
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObj = new PrivateClass();
console.log(pObj.showName());
pObj.showPrivateMethod();
/*class TestingPrivate extends PrivateClass{
    myMethod(){
        this.privateMethod()
    }
}*/
// 14 - static members
class StaticMembers {
    static staticMethod() {
        console.log("Este é um método estático");
    }
}
StaticMembers.prop = "Teste static";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// 15 - generic class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é: ${this.first}`;
    }
    get showSecond() {
        return `O second é: ${this.second}`;
    }
}
const newItem = new Item("caixa", "surpresa");
console.log(newItem.showFirst);
console.log(newItem.showSecond);
const secondItem = new Item(12, true);
console.log(secondItem.showFirst);
console.log(secondItem.showSecond);
//16 - parameters propertiers
class ParameterPropertiers {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Qtd total: ${this.qty} `;
    }
    get showPrice() {
        return `Qtd total: ${this.price}`;
    }
}
const newShirt = new ParameterPropertiers("camisa", 5, 19.99);
console.log(newShirt.name);
console.log(newShirt.showPrice);
console.log(newShirt.showQty);
// 17 - class expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Jones");
console.log(pessoa);
console.log(pessoa.name);
// 18 - abstract class
class AbstractClass {
}
//const newObj = new AbstractClass();
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é: ${this.name}`);
    }
}
const newAbstractobject = new AbstractExample("Josias");
newAbstractobject.showName();
// 19 - relações entre classes
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
