const Mathematics = {
  sum: function sum(x, y) {
    return x + y;
  },
  minus: function minus(x, y) {
    return Mathematics.sum(x, y * -1);
  },
  product: function product(x, y) {
    return Mathematics._calc_(x, y, 0, (x, y, result) => { for (let i = 0; i < y; i++){ result = Mathematics.sum(result, x) }; return result; });
  },
  divide: function divide(x, y) {
    return Mathematics._calc_(x, y, 0, (x, y, result) => { while (Mathematics.minus(x, y) >= 0) { result++; x = Mathematics.minus(x, y); }; return result; });
  },
  power: function power(x, y) {
    return Mathematics._calc_(x, y, 1, (x, y, result) => { for (let i = 0; i < y; i++){ result = Mathematics.product(result, x) }; return result; });
  },
  square: function square(x, y = 2) {
    return Mathematics._calc_(x, y, 0, (x, y, result) => { while (x != 1) { result++ ; x = Mathematics.divide(x, y); }; return result; });
  },
  _calc_: function (x, y, result, cb) { return cb(x, y, result); },
  calc: function calculator(operation, x , y) {
    const result = operation(x, y);

    return (() => {
      return {
        value: result,
        calc: (operation, y) => {
          return calculator(operation, result, y);
        }
      }
    })();
  }
};

console.log(Mathematics.calc(Mathematics.product, 4, 2).value);

console.log(Mathematics.calc(Mathematics.product, 4, 2).calc(Mathematics.square).calc(Mathematics.sum, 3).calc(Mathematics.power, 3).value);
