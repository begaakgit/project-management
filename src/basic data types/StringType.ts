//To working with textual data we use string datatype in Typescript.
class StringType{ 
    constructor(props){
        console.log(props);
    }


//This is how we can use template string which can span on multiple lines and have an embedded expressions.
    testingtemplateString(){
        let Fname : string =`Numan ali`;
        let age : number = 22;
        let sentence : string = `hello, my name is ${Fname} and my age is ${age+1}`;
        console.log(sentence);
    }
}
export default StringType;