//Union type
//A union type describes a value that can be one of several types.
class UnionTypes{
    text: string|string[];
    /**
     * 
     * @param text 
     * text parameter can only access one of the type at a time.
     */
    print(text:string|string[]): string{
        this.text=text;
        if(typeof this.text === 'string')
        {
            return this.text;
        }
        return this.text.join(' ');   //Join is used for the array of string.
    }
}

export default UnionTypes;