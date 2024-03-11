function identity<T>(arg: T): T {
    console.log(typeof(arg));
    return arg;
}

identity(5);
identity("MD");
identity(true);