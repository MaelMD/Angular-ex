"use strict";
class Animal {
    constructor(theName) { this.name = theName; }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    move(distanceInMeters) {
    }
}
let pupp = new Dog("Budd");
pupp.move(25);
