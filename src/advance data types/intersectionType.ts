export class Student{
    id: string;
    age: number;
}
export class Work{
    companyid: string;
}
export class Test{

    /**
     * 
     * @param intersectedType 
     *
     * IntersectedType now can access all the attributes and the function of 
     * Student and Work class.
     */
    showDetails(intersectedType: Student & Work): void{
        console.log(intersectedType)
    }
}