function concatenateStrings(...strings: string[]): string {
    return strings.reduce((accumulator, current) => accumulator + " " + current);
}

function maxNumber(...nums: number[]): number {
    return Math.max(...nums);
}