"use strict";
exports.__esModule = true;
exports.Restaurant = void 0;
var Restaurant = /** @class */ (function () {
    function Restaurant() {
    }
    Restaurant.prototype.create = function (name, location, category, items) {
        this.name = name;
        this.location = location;
        this.category = category;
        this.items = items;
    };
    Restaurant.prototype.update = function () {
    };
    Restaurant.prototype["delete"] = function () {
    };
    return Restaurant;
}());
exports.Restaurant = Restaurant;
