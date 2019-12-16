/*We may need to describe the datatype of variables that we do not know when we are writing an application. 
For that purpose we use datatype of any */

class anyType{
    arr : any[];
    pushValues(x){
        this.arr.push(x);
        console.log(this.arr);
    }

}
export default anyType;