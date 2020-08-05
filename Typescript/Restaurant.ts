import { RestaurantInterface } from "./RestaurantInterface";
import { Menu } from "./Menu";

export class Restaurant implements RestaurantInterface {
  name:string;
  location:string;
  category:string;
    
  items:Menu[];
  
  create(name:string,location:string, category:string, items:Menu[]) {
        this.name = name;
        this.location=location;
        this.category=category;
        this.items=items;
    }

    update(){
    }

    delete(){
    }
}


