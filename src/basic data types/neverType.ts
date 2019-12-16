/*The never type represent the type of values that never occur. 
The void type can have undefined or null as a value where as never cannot have any value.*/
class neverType{
    error(message: string): never{
        throw new Error(message);
    }
}
export default neverType;