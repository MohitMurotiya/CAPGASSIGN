import { Restaurant } from "./Restaurant";
import { Menu } from "./Menu";

class Admin {

    create(name:string,location:string, category:string, items: any = []) {
        let rest1 = new Restaurant();
        rest1.create(name,location,category,items);
        console.log(rest1);
    }

    delete(){

    }
    
}
var item:Menu[];
item=[new Menu("Pizza",100), new Menu("Burger",100), new Menu("Pasta",100)];

var item1:Menu[];
item1=[new Menu("DRINKS",100), new Menu("SHAKES",100)]

let obj = new Admin();
obj.create("ABC","COR","VEG",item);

let obj1 = new Admin();
obj1.create("XYZ","ADI","VEG",item1);
