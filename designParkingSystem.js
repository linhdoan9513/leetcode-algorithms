//https://leetcode.com/problems/design-parking-system/
var ParkingSystem = function (big, medium, small) {
  this.remaining_slot = [big, medium, small];
};

ParkingSystem.prototype.addCar = function (carType) {
  if (this.remaining_slot[carType - 1] === 0) {
    return false;
  }
  this.remaining_slot[carType - 1]--;
  return true;
};
