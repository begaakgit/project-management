//tuple types allow us to use ar array with fixed number of elements whose types are known, but need not to be the same.

class tupleType{
    private tple: [string, number];
    constructor(a,b){
        this.tple = [a,b]
    }
    pushValues(s:string , n:number){
        this.tple.push(s,n);
        console.log(this.tple);
    }
}
export default tupleType;