import  {Menu} from "./Menu";
export interface RestaurantInterface{
     create(name:string,location:string,category:string,items:Menu[]);
     update();
     delete();
}