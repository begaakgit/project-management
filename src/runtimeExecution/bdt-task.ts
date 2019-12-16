import Product from "../bdt tasks/product";

 
//Creating products
// using tuple
let tpl: (string | number | boolean | [number]|Product)[] = [1, '2', 'al', false, [1], new Product("4", "laptop", "gray", "new", 100)];

console.log(tpl);
// @param type : never
let dumy: [] = []
// @param type : any
let productList1 = []

// @param type : Array(Product)
let productList2: [Product] = [new Product("4", "laptop", "gray", "new", 100)];

// let productList3 : [[Product]];



let p2 = new Product("2", "mobile", "gray", "used", 1200);
let p3 = new Product("3", "watch", "gray", "used", 1500);
let p5 = new Product("5", "tablet", "gray", "used", 1200);

// push
productList1.push(p2);
productList1.push(p3);
productList1.push(p5);
productList2.push(new Product("2", "mobile", "gray", "used", 1200));
// productList3.push([new Product("2","mobile","gray","used",1200)]);



console.log("Product added :: 36 ");
console.log(productList1);

// deleting Product using pop
productList1.pop();	//it will delete last element of the list.
console.log("Product deleted  :: 41");
//productList1.slice(1);
console.log(productList1);

//Product Updating
let p6 = new Product("15", "phone", "gray", "used", 1200);
// first param is the index where element needs to be added
// 2nd param is the number of elements to be deleted 
// 3rd param is the number replaces the first param index item
productList1.splice(1, 1, p6)	//it will delete 2nd element and will add a new one at that place.
console.log("Product updated  :: 48");
console.log(productList1);

//Importing Product
let prlist = productList1.concat(productList2);
console.log("Products are imported  :: 53");
console.log(prlist);
