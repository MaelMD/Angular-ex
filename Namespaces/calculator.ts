namespace Calculator {
    export class BasicCalculator {
        public add(a: number, b: number): number {
            return a+b;
        }
        public subtract(a: number, b: number): number {
            return a-b;
        }
        public multiply(a: number, b: number): number {
            return a*b;
        }
        public divide(a: number, b: number): number {
            return b!== 0 ? a/b : NaN;
        }
    }
}