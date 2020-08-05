"use strict";
exports.__esModule = true;
var Restaurant_1 = require("./Restaurant");
var Menu_1 = require("./Menu");
var Admin = /** @class */ (function () {
    function Admin() {
    }
    //var list: any = [];
    Admin.prototype.create = function (name, location, category, items) {
        if (items === void 0) { items = []; }
        var rest1 = new Restaurant_1.Restaurant();
        rest1.create(name, location, category, items);
        //list.push(name);
        console.log(rest1);
    };
    return Admin;
}());
var item;
item = [new Menu_1.Menu("Pizza", 100), new Menu_1.Menu("Burger", 100), new Menu_1.Menu("Pasta", 100)];
var item1;
item1 = [new Menu_1.Menu("DRINKS", 100), new Menu_1.Menu("SHAKES", 100)];
var obj = new Admin();
obj.create("ABC", "COR", "VEG", item);
var obj1 = new Admin();
obj1.create("XYZ", "ADI", "VEG", item1);
//var rest1=new Restaurant();
//rest1.create("ABC","COR","VEG",item);
//console.log(rest1);
