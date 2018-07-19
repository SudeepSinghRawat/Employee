export class Employee {
    public id: Number;
    public empId: Number;
    public name: String;
    public email: String;
    public salary: Number;
    public dob: String;
    public hometown: String;
    public about: String;

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
