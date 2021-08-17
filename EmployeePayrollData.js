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
        let idPattern = RegExp("^[1-9][0-9]{0,}$");
        if (idPattern.test(params[0])) this.id = params[0];
        else throw "Invalid Id";

        this.name=params[1];
        
        if(params[2]>0) this.salary = params[2];
        else throw "Invalid Salary cant be zero";
        
        let genderPattern = RegExp("^[M|F]$");
        if(genderPattern.test(params[3])) this.gender = params[3];
        else throw 'Invalid Gender';
        
        if(params[4]<=new Date())
        this.startDate = params[4];
        else throw 'Invalid date';
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
 let employeePayrollData=new EmployeePayrollData(1,"Ahamed",5000,'M',new Date());
 console.log(employeePayrollData.toString());
 //change the name using getter and setter method
 console.log('After Updating Name');
 try
{
employeePayrollData.name='messi';
console.log(employeePayrollData.toString());
}
catch(e)
{
    console.error(e);
}

 let newEmployeePayrollData=new EmployeePayrollData(2,"Ashfaq",8000,'M',new Date('2021-09-16'));
console.log(newEmployeePayrollData.toString());


