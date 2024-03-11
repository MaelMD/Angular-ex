class Person {
    private name: string;
    constructor(name: string) { this.name = name; }
    public nameReturn() {
        return this.name;
    }
}

let person1 = new Person("MD");
console.log(person1.nameReturn());
