"use strict";
exports.__esModule = true;
var vehicle = /** @class */ (function () {
    function vehicle() {
        this.vehicle_number = 123;
    }
    vehicle.prototype.drink_energy = function () {
        console.log(this.vehicle_number);
    };
    vehicle.prototype.moveon = function () {
    };
    return vehicle;
}());
exports.vehicle = vehicle;
