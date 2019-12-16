// @User defined type gaurds help the user to declare the type or helps typescript to infere the type, 
//for example, when using a function. OR A type Gaurd is a expression that performs a runtime check that
//guarantees the type in particular scope.

export class StudentT{
    Study(){
        console.log("Student's class!");
    }
}
export class Teacher{
    teach(){
        console.log ("Teacher's class!")
    }
}
export class TypeGuards{
    private n: number;
    /**
     * 
     * @param n 
     *
     * By providing number either 1 or any other, user will help the typescript to infer the type.
     * it means user declaring type by himself just by using the simple filter.
     */
    getPerson(n: number): StudentT|Teacher{
        this.n=n;
        if(this.n===1){
            return new StudentT();
        }else{
            return new Teacher();
        }
    }
    /**
     * This funtion will get object of one of the type according to the user desire( as user has provide the value of n 
     * using above function) and then simply will call the funtion of both classes to ensure which abject was created 
     * either StudenTT or Work.
     * 
     */
    objIns(){
        let person: StudentT|Teacher = this.getPerson(this.n);
        if (person instanceof StudentT){
            person.Study();
        }
        else{
            person.teach();
        }
    }
}
