export class Employee {
    private id: Number;
    private empId: Number;
    private name: String;
    private email: String;
    private salary: Number;
    private dob: String;
    private hometown: String;
    private about: String;

    constructor(id: Number, empId: Number, name: String, email: String, salary: Number, dob: String , hometown: String, about: String) {
        this.id = id;
        this.empId = empId;
        this.name = name;
        this.email = email;
        this.salary = salary;
        this.dob = dob;
        this.hometown = hometown;
        this.about = about;
    }
}
