class EmployeePayrollData
{
     //property
     id;
     name;
     salary;
     //defining constructor
     constructor(id,name,salary)
     {
         this.id=id;
         this.name=name;
         this.salary=salary;
     }
     //getter and setter methods
     get name() {  return this.name;}
     set name(name) { this.name=name; }
     //tostring method
     toString()
     {
         return `id: ${this.id}  name: ${this.name }  salary: ${this.salary}`;
     }
 }
 //creating a object for class 
 let employeePayrollData=new EmployeePayrollData(1,"Ahamed",5000);
 console.log("Calling constructor and access the property")
 console.log(employeePayrollData.toString());
 //change the name using getter and setter method
 employeePayrollData.name="Messi";
 console.log(employeePayrollData.toString());
