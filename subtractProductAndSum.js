//https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer//
var subtractProductAndSum = function (n) {
  var to_string = Array.from(String(n), Number);
  var product_of_digits = 1;
  var sum = 0;
  for (var i = 0; i < to_string.length; i++) {
    product_of_digits *= to_string[i];
    sum += to_string[i];
  }
  return product_of_digits - sum;
};

//using Number way:
var subtractProductAndSum = function (n) {
  var product_of_digits = 1;
  var sum = 0;
  while (n > 0) {
    var remainder = n % 10;
    if (remainder !== 0) {
      n = (n - remainder) / 10;
      product_of_digits *= remainder;
      sum += remainder;
    } else {
      n = n / 10;
      product_of_digits *= 0;
    }
  }
  return product_of_digits - sum;
};
