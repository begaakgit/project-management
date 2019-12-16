/**
 * Generics : Sometimes we come accross a situation to repeat the same block of code for different types. So instead of 
 * writing repeated block of code, generics let us write a generalized form of methods.
 * Although, there is a type called any, which we can use to achieve the same effect as generics in our code, 
 * any is not type-safe, and chances are that our application can get an exception. Furthermore, we can apply generics 
 * in TypeScript to classes, interfaces, and functions.
 * Generic Class: Like generic functions, we can make our classes generic as well. We’ll pass the type parameter, 
 * as usual, in angle (<>) brackets. Then use it across the class for defining methods and properties.
 */
class customArray<T>{
    private arr: T[];
    constructor(){
        this.arr = [];
    }

    getItems (): T[] {
        return this.arr;
    }

    addItems(item:T){
        this.arr.push(item);
    }
    removeItem(item: T){
        let index = this.arr.indexOf(item);
        if(index>-1){
            this.arr.splice(index,1);
        }
    }
}
export default customArray;