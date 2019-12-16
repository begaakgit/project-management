import { Test, Student, Work } from "../advance data types/intersectionType";

import UnionTypes from "../advance data types/unionType";

import { TypeGuards, StudentT, Teacher } from "../advance data types/TypeGuards";

import PredType from "../advance data types/udPredType";

import { SpaceRepeatingPadder, StringPadder, Padder } from "../advance data types/instancofType";
import inOperator from "../advance data types/inOperator";
import NullableTypes from "../advance data types/nullableTypes";

 

//InterSection
//In typescript if one type is intersection of two other types 
//then in a result that type will have all properties from two intersected types.
let itype = new Test();
let x:Student & Work = {id: "123", age: 23, companyid:"343"};
itype.showDetails(x);


//Union type
//A union type describes a value that can be one of several types.
let utype = new UnionTypes();
console.log (utype.print("hello"));
console.log (utype.print(['hello', 'hey']));

//Second Example
type un = Student | Work;
let ux: un = {  //Using attributes of StudentT class. 
    id:"dfs",
    age:9
};
console.log(ux);
ux = {
    companyid:"dfs" //Here Using attributes of Work class. Basically we can choose to work with any type 
                    //which is declared in union type.
};
console.log(ux);

// @Differentiating types Using Type Assertion.
let t = new TypeGuards();
let check = t.getPerson(0);
if((check as StudentT).Study){
     (check as StudentT).Study();
}
else if( (check as Teacher).teach){
     (check as Teacher).teach();
}

// @User-Defined Type Gaurd
t.getPerson(0);
t.objIns();

// @User-Defined Type Gaurd by Predicate.
/**
 * Here Making StudentT class Object manually
 * type pt = StudentT|Teacher;
 * let predtype:pt = new StudentT();
 */

let predtype = new PredType();
//Here user giving a number to get the object of that particular class 
//(1 for StudentT obj or any other number for Teacher).
let objofStuOrTeacher = predtype.gettingPerson(1);
predtype.pred(objofStuOrTeacher);

// @IN Operator (User-Defined Type Guards)
let inoperator = new inOperator();
inoperator.CheckPerson(objofStuOrTeacher);

/**
 * TYPEOF
 * Typeof is basically a type guard (keyword) which helps the user to check the type of variable.These typeof 
 * type guards are recognized in two different forms: typeof v === "typename" and typeof v !== "typename", where 
 * "typename" must be "number", "string", "boolean", or "symbol".
 * DIFFERENCE
 * The difference between typeof and instanceof is type of returns the type while instanceof returns a boolean value.
 */
let num = 5;
console.log(typeof num==="number");

/* 
 * INSTANCEOF
 * Instanceof type guards are a way of narrowing types using their constructor.
 */
/**
 * 
 * @param x 
 * At return type its a simple ifelse statement which is telling us if x would be less than 5 then obj of 
 * SpaceRepeatingPadder will be created otherwise StringPadder's object will be created which is on right-most side.
 */
function getRandomPadder(x:number){
    return x < 5?
    new SpaceRepeatingPadder(12):
    new StringPadder("something");
}
let padder:Padder = getRandomPadder(6);
if(padder instanceof SpaceRepeatingPadder){
    console.log(padder);
}
else if(padder instanceof StringPadder){
    console.log(padder);
}

//Array destructuring 
const testResults: number[] = [3.89, 2.99, 1.38,98];
const [result1, result2, result3,r4] = testResults;
console.log(result1, result2, result3, r4);

// Nullable Types
let nulltype =  new NullableTypes();
// to make something null we have to make it union type with null value.
let str: string|null = "bar";
str = null;
nulltype.a = 12;
nulltype.a = undefined; // error, 'undefined' is not assignable to 'number'
nulltype.b = 13;
nulltype.b = undefined; // ok
nulltype.b = null; // error, 'null' is not assignable to 'number | undefined'

/* Type Alias
 * Type aliases create a new name for a type. Type aliases are sometimes similar to interfaces, but can name 
 * primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.
 * Aliasing doesn’t actually create a new type - it creates a new name to refer to that type.
 * type myTypeName = <a valid TypeScript type>
 */
type chars = string;
function show (str : chars): void{
    console.log (str);
}

// Object properties/function/array types
type product = {name: string, price: number};
let p: product = {name:"10", price:2};
console.log(p);

//function
type StringRemover = (input: string, index: number) => string;
let remover: StringRemover = function (inpu:string, num:number): string{
    return inpu.substring(num);
}
let s = remover("hello world",3);
console.log(s);

// Array
type state = [string, boolean];
let a: state = ["active", true];
console.log(a);

// String literal : String literal types allow us to specify the exact value a string must have. 
type alignment = "left"|"right"|"Center";
function checkAlignment(param: alignment):void{
    console.log(param);
}
checkAlignment("left");

// Numeric literal
type Width = 100|200|300;
function Setwidth(param: Width): void {
    console.log(param);
} 
Setwidth(100);

// Generic type alliases
type Tlist<T> = {
    elements:T[]
};
let strList: Tlist<String> = {elements:["1","2"]};
console.log(strList);

// Generic type alliases with intersection and union.
type Entity<E> = {
    id: number
} & E;
interface item{
    name: string;
    price: number;
}
let itemEntity: Entity<item> = {id:1, name:"ent", price: 34};
console.log(itemEntity);
