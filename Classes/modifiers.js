"use strict";
class Person {
    constructor(name) { this.name = name; }
    nameReturn() {
        return this.name;
    }
}
let person1 = new Person("MD");
console.log(person1.nameReturn());
