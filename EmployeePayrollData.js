class EmployeePayrollData
{
     //property
     id;
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
     get name() {  
         return this._name;
        }
     set name(name) 
     { 
        let namePattern=RegExp('^[A-Z]{1}[a-z]{2,}$');//regex pattern to validate name
        if(namePattern.test(name))
        {
        this._name=name;
        }
        else
        {
            throw "Incorrect name";//throw error if invalid
        }
     }
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
 try
{
employeePayrollData.name='crist';
console.log(employeePayrollData.toString());
}
catch(e)
{
    console.error(e);
}

 let newEmployeePayrollData=new EmployeePayrollData(2,"Ashfaq",8000,'M',new Date());
console.log(newEmployeePayrollData.toString());


