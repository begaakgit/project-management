/* 
 * INSTANCEOF
 * Instanceof type guards are a way of narrowing types using their constructor. Or when multiple classes extends an 
 * interface then we use the instanceof type guard to check which class have intialized the interface's variable or func.
 * The difference between typeof and instanceof is type of returns the type while instanceof returns a boolean value.
 */
export interface Padder{
    getPaddingString() : string;
}

export class SpaceRepeatingPadder implements Padder{
    constructor(private num: number){}
    getPaddingString(){
        return Array(this.num+1).join(' ');
    }
}
export class StringPadder implements Padder{
    constructor(private str: string){}
    getPaddingString(){
        return this.str;
    }
}