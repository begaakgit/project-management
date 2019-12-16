// IN operator acs as a narrowing expression for types.
import { StudentT, Teacher, TypeGuards} from './TypeGuards';
class inOperator{
    /**
     * 
     * @param person
     * Passing parametername person as an object of Student or Teacher to understand the IN operator.
     * teach() is basically a function in Teacher class and using IN operator we can directly give the 
     * method name as a string to verify wheter it exists in particular class.
     */
    CheckPerson(person: StudentT|Teacher){
        if("teach" in person){
            person.teach()
        }
        else{
            person.Study();
        }
    }
}
export default inOperator;