import Product from "../bdt tasks/product";

 

// @Array with a union type
let tpl: (string|number[]|number|boolean|Product[])[] = ["Something",1,true,[new Product("4", "laptop", "gray", "new", 100),new Product("4a", "laptop", "gray", "new", 100)]];
tpl.push(true);
tpl.push([new Product("5", "laptop", "gray", "new", 100),new Product("5a", "laptop", "gray", "new", 100)]);
let chck :number []= [3,4,3];
tpl.push(chck);
tpl.push(3);
console.log(tpl);
tpl.pop();
console.log(tpl);



// @Array of tuple
let tple: [Product[], number[]][] = [[[new Product("4", "laptop", "gray", "new", 100)],[1,2,3]],
            [[new Product("5", "laptop", "gray", "new", 100),new Product("5a", "laptop", "gray", "new", 100)],[2,3]]];
tple.push([[new Product("6", "laptop", "gray", "new", 100),new Product("6a", "laptop", "gray", "new", 100)],[3,4,5,6]]);
//console.log(tple);
tple.pop();
//console.log(tple);


