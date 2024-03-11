"use strict";
function updatePerson(p, a, e) {
    p.age ? [p.age, p.email] = [a, e] : p.email = e;
    return p;
}
let p = { firstName: "MD", lastName: "MD", age: 22, email: "md@gmail.com" };
console.log(p);
console.log(updatePerson(p, 23, "md5@gmail.com"));
