import Mobile from "../adt-tasks/Mobile";
import MotorCar from "../adt-tasks/motorCar";

 

// Union of two types. One can be use at a time.
type Product = Mobile|MotorCar;


// @param type : any
let productList1: [Product] = [new Mobile("1", "M1", "gray", "new", 100)];
let p1 = new Mobile("2", "M2", "gray", "new", 100);
let p2 = new Mobile("3", "mobile", "gray", "used", 1200);
let productList2: [Product] = [new MotorCar("3", "Honda", "gray", "new", 100)];
let p3 = new MotorCar("1", "Mehran", "gray", "used", 1500);
let p5 = new MotorCar("2", "Cultus", "gray", "used", 1200);

// push
productList1.push(p1);
productList1.push(p2);
productList1.push(p3);
productList1.push(p5);
console.log("Product added :: 21 ");
console.log(productList1);

// unshift : it will add product at the front of the list.
let p7 = new Mobile("2", "M2", "gray", "new", 100);
productList1.unshift(p7);

//it will remove last element of the list.
productList1.pop();	
//console.log("Product removed  :: 30");

//it removes elements at the begining of a list.
productList1.shift();

//it will return the extracted array based on the parameter.
productList1.slice(1,4);
console.log(productList1);

//Insertion and Removal in between a list or an array.
let p6 = new Mobile("15", "phone", "gray", "used", 1200);
// first param is the index where element needs to be added
// 2nd param is the number of elements to be deleted 
// 3rd param is the number replaces the first param index item
productList1.splice(1, 1, p6)	//it will delete 2nd element and add a new one at that place.
console.log("Product updated  :: 38");
console.log(productList1);

//it will continate two lists
let prlist = productList1.concat(productList2);
console.log("Products are imported  :: 50");
console.log(prlist);
