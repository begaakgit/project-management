import BooleanT from "../basic data types/BooleanT";

import StringType from "../basic data types/StringType";

import numberType from "../basic data types/numberType";

import arrayType from "../basic data types/arrayType";

import tupleType from "../basic data types/tupleType";

import enumType from "../basic data types/enumType";

import voidType from "../basic data types/voidType";

import AssertionType from "../basic data types/assertiontype";

import neverType from "../basic data types/neverType";

 

let btype = new BooleanT();
console.log(btype.IsItEven(4));

let stype = new StringType("i'm using string type.")

let ntype = new numberType();
ntype.addValues(6,6)

let atype = new arrayType();
atype.printArraysAvg();

let ttype = new tupleType("1",1);
ttype.pushValues("45",45);

let anmtype = new enumType(); //printing out in the constructor.

let vtype = new voidType();
vtype.f();

let assertype = new AssertionType("length");

let nvrtype = new neverType();
//nvrtype.error("something went wrong");

let x: any = "hi there";
let s = (<string>x).substring(0,2);
console.log(s);