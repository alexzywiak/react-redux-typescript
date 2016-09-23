interface Func<T> {
    ([...args]: any): T;
}

export function returnType<T>(func: Func<T>) {
    return null as T;
}