//An enum is a way of giving more friendly names to set of numeric values.

enum Color {red= 1, yellow , green};
class enumType{
    myColor: Color;
    constructor(){
        this.myColor = Color.green;
        console.log(this.myColor);
    }
}
export default enumType;