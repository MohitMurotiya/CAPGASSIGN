import { MenuInterface } from "./MenuInterface";


export class Menu implements MenuInterface {
    name:string;
    price:number;

    constructor(name:string, price:number){
        this.name=name;
        this.price=price;
    }

    updateMenu(){

    }

    deleteMenu(){
        
    }
    
}