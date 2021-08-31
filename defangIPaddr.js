//https://leetcode.com/problems/defanging-an-ip-address/
var defangIPaddr = function (address) {
  var new_ip = [];
  for (var i of address) {
    if (i == ".") {
      new_ip += "[.]";
    } else {
      new_ip += i;
    }
  }
  return new_ip;
};
