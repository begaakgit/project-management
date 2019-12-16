/*it is like typecast in other languages, but performs no special checking and restructuring data. 
Type assertion are a way to tell compiler "trust me, I know what I'm doing."*/

class AssertionType{
      someValue : any;

constructor(props) {
    //let strl : number = 0
    this.someValue = props;
    let strl : number = (this.someValue as string).length;
    console.log("The length of a string is "+ strl);
}
}
export default AssertionType;