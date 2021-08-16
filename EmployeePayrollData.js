class EmployeePayrollData
{
     //property
     id;
     name;
     salary;
     gender;
     startDate;
    //constructor
    constructor(...params)
    {
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
    }
     //getter and setter methods
     get name() {  return this.name;}
     set name(name) { this.name=name; }
     //tostring method
     toString()
     {
         return `id: ${this.id}  name: ${this.name }  salary: ${this.salary} gender: ${this.gender} DateofJoining:${this.startDate}`;
     }
 }
 //creating a object for class 
 let employeePayrollData=new EmployeePayrollData(1,"Ahamed",5000);
 console.log(employeePayrollData.toString());
 //change the name using getter and setter method
 console.log('After Updating Name');
 employeePayrollData.name="Messi";
 console.log(employeePayrollData.toString());

 let newEmployeePayrollData=new EmployeePayrollData(2,"Ahamed",8000,'M',new Date());
console.log(newEmployeePayrollData.toString());
