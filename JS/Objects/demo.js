class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

Rectangle.prototype.getArea = function () {
    return this.width*this.height;
}

obj = new Rectangle(10, 40);
obj.height = 5;
console.log(obj.getArea());

/*----------------------------- */
console.log('\n \n');
console.log('Using eval() : ');
var str = {"firstName":"MOHIT","lastName":"MUROTIYA"};
var obj1 = eval(str);
console.log(obj1.firstName + " " + obj1.lastName);

console.log('Using JSON.parse() : ');
const json = '{"firstName":"MOHIT","lastName":"MUROTIYA"}';
const obj2 = JSON.parse(json);
console.log(obj2.firstName + " " + obj2.lastName);

/*----------------------------- */
console.log('\n \n');

var person = {
    firstName: "MOHIT",
    lastName: "MUROTIYA",
    
    getInfo() {
        return this.firstName + ' ' + this.lastName ;
    }
};

console.log(person.getInfo());
person.lastName = "MAHESHWARI";
console.log(person.getInfo());