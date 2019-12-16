//Boolean is the simple true/false value.
class BooleanT{
    private isDone : boolean;
    IsItEven (num: number){
        if (num%2==0)
        {
            this.isDone =true;
            return this.isDone;
        }
        else {
            this.isDone = false;
            return this.isDone;
        }

    }
}
export default BooleanT