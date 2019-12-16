import customArray from "../generics/generic";

 

// Generics : See the generic.ts file for definition and little explaination.
// for any type : it can accept any kind of data but we are losing type safety.
function f(args: any): any{
    return args;
}

/**
 * @param args 
 * To make it type-safe, we will use Type parameters. Type parameters are, generally, definded by T or <T>. They denote
 * the data type of passed parameters to a class, interface, and fucntions.
 */
function func<T>(args: T): T{
    return args;
}
function fun<T, U, V>(args1: T, args2:U, args3:V): V{
    return args3;
}

let strr = func<string>("Its printing string value using generics."); // For string.
let numm = func<number>(123); // For number.
let n = fun("adf",784,"dfd");
let gnstr = new customArray<string>();
let gnnum = new customArray<number>();
gnstr.addItems("123");
gnnum.addItems(3);
gnnum.addItems(5);
let a = [];
a = gnstr.getItems();
console.log(a);

/**
 * @param args 
 * This function will only work if we pass a lengthn parameter. if we pass a just number then it will give us error that
 * variable don't have length method.
 * Or we can write fuction definition as: Identity(args: Array<T>): Array<T>
 */
function Identity<T>(args: T[]): T[]{
    console.log(args.length); // Now we know it has .length property so no more error.
    return args;
}
//LIdentity(3);  // Error, number doesn't have a .length property
Identity(a);     // Works fine, because we are passing an array.

// Or we can use interface to resolve this error interface will have the property with the name length.
interface LengthWise{
    length: number;
}
function LIdentity<T extends LengthWise>(args: T): T{
    console.log(args.length); // Now we know it has .length property so no more error.
    return args;
}
LIdentity("Asdfasd");       // 4 is length of an array so it will give us 4. Here is constraint applied on the generic
LIdentity([2,3,4,5]);       // that it cannot be number either it has to be array or string otherwise it will give error.

function findFirst<T>(items:T[], searchFunction:(t:T) => boolean): T{
    let item: T;
    for(let i=0; i<items.length; i++){
        item = items[i];
        if(searchFunction(item)){
            return item;
        }
    }
    return null;
}

let itemes: number[] = [1,2,4,8];
let numb = findFirst<number>(itemes,(n:number) => n %2 ==0);
console.log(numb);
let items2: string[] = ["one", "two", "three"];
let s: string = findFirst<string>(items2, (s: string) => s.indexOf("two") != -1);
console.log(s);

// Generic type alliases
type Tlist<T> = {
    elements:T[]
};
let strList: Tlist<String> = {elements:["1","2"]};
console.log(strList);

// Generic type alliases with intersection.
type Entity<E> = {
    id: number
} & E;
interface item{
    name: string;
    price: number;
}
let itemEntity: Entity<item> = {id:1, name:"ent", price: 34};
console.log(itemEntity);