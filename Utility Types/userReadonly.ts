interface User {
    name: string;
    email: string;
}

const user: Readonly<User> = {
    name: "MD",
    email: "md@gmail.com",
};