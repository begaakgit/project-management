// Typescript, like any other language allows us to play with array of values.
class arrayType{
    printArraysAvg(){
        let arr: number[] = [2,3,5]
        let avg: number= 0;
        for(var i in arr)
        {
            avg+=arr[i];
        }
        avg/=arr.length;
        console.log(avg);

    }
}
export default arrayType;