import { StudentT, Teacher, TypeGuards} from './TypeGuards';
class PredType{
    /**
 * @User-Defined Type Gaurd by using type Predicates
 * To define a type guard, we need to define a function with return type predicate and a predicate takes a 
 * 'parameterName of Type', where parameter should be from the same function signature. The important point is 
 * Typescript knows if user is not using prdecated type then it means user is using other type.
 * let's take an example:
 * @param person 
 * if we are predicating that means our function will only return boolean value so that's why this function is checking
 * either instance of StudentT have been created or not. There are two ways which are given below to check it. One 
 * through instanceof and the second one is commented which is checking either StudentT class members have been 
 * intialized or undefined yet!
 */
isPerson(person: StudentT|Teacher): person is StudentT{
    if(person instanceof StudentT){
        return true;
    }else{
        return false;
    }
    //@return (person as StudentT).Study !== undefined; //Or just use this statement to check either StudentT's 
                                                        //objects created. 
}
pred(predtype : StudentT|Teacher):void{
    if(this.isPerson(predtype)){
        predtype.Study();
    }else{
        predtype.teach()
    }
    //@check.teach() it won't work outside the scope of if-else. Because in IF braces we are assigning the type to check
}
gettingPerson(n: number):StudentT|Teacher{
    let TypeGuard = new TypeGuards();
    return TypeGuard.getPerson(n);
}
}

export default PredType;