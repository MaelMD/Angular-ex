var Calculator;
(function (Calculator) {
    var BasicCalculator = /** @class */ (function () {
        function BasicCalculator() {
        }
        BasicCalculator.prototype.add = function (a, b) {
            return a + b;
        };
        BasicCalculator.prototype.subtract = function (a, b) {
            return a - b;
        };
        BasicCalculator.prototype.multiply = function (a, b) {
            return a * b;
        };
        BasicCalculator.prototype.divide = function (a, b) {
            return b !== 0 ? a / b : NaN;
        };
        return BasicCalculator;
    }());
    Calculator.BasicCalculator = BasicCalculator;
})(Calculator || (Calculator = {}));
