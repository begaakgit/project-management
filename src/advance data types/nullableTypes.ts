// By default, the type checker considers null and undefined assignable to anything. The --strictNullChecks 
// flag fixes this: when you declare a variable, it doesn’t automatically include null or undefined.

class NullableTypes{
    a: number;
    b?: number;
}

export default NullableTypes;