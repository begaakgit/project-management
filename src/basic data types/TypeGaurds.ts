class Student{
    Study(){
        console.log("Student's class!");
    }
}
class Teacher{
    teach(){
        console.log ("Teacher's class1")
    }
}
class TypeGaurds{
    n: number;
    constructor(n: number){
        this.n=n;
    }
    getPerson(): Student|Teacher{
        if(this.n===1){
            return new Student();
        }else{
            return new Teacher();
        }
    }
    objIns(){
        let person: Student|Teacher = this.getPerson();
        if (person instanceof Student){
            person.Study();
        }
        else{
            person.teach();
        }
    }
}

export default TypeGaurds