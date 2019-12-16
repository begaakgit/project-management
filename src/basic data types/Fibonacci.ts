class Fibonacci{
    private fibSeries:number;
    constructor(){
        this.fibSeries = 0;
    }
    fibonaci(n: number){
        let a : number =0;
        let b: number =1;
        for(let i=0; i<n; i++){

            this.fibSeries=a+b;
            a=b;
            b=this.fibSeries;
        }
        return this.fibSeries;
    }
}
export default Fibonacci