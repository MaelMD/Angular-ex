interface BusinessPartner {
    name: string;
    credit: number;
}

interface Contact {
    email: string;
    phone: string;
}

type Customer = BusinessPartner & Contact;

function customerInfos(c: Customer) {
    console.log(`Customer Infos :\n\tname: ${c.name}\n\tcredit: ${c.credit}\n\temail: ${c.email}\n\tphone: ${c.phone}`);
}

let c1: Customer = {
    name: "MD",
    credit: 0, //I'm broke had sa3a hh
    email: "md@gmail.com",
    phone: "0638083535",
}

customerInfos(c1);