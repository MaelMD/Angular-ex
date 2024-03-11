interface Person {
    firstName: string;
    lastName: string;
    age?: number;
    email: string;
}

function updatePerson(p: any, a: number, e: string): Person {
    p.age ? [p.age,p.email] = [a,e] : p.email = e;
    return p;
}

let p = { firstName: "MD", lastName: "MD" , age: 22, email: "md@gmail.com" };
console.log(p);

console.log(updatePerson(p,23,"md5@gmail.com"));
