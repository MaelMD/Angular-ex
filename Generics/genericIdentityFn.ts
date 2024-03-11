interface GenericIdentityFn<T> {
    (arg: T): T;
}

interface GenericArray<T> {
    [index: number]: T;
}