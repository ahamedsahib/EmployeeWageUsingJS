//UC1
const isAbsent=0;
const WAGE_PER_HR  = 20;
const PART_TIME = 1;
const FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const NO_OF_WORKING_DAYS=20;
const MAX_WORKING_HRS_IN_MONTH = 160;

//generate random value between 0-2(0,1,2) 
let empCheck=Math.floor(Math.random()*10)%3;
if(empCheck==isAbsent)
    console.log("Employee is Absent");
else
    console.log("Employee is present");

//UC2-UC3
let empHrs = 0;
function getWorkingHours()
{
    empCheck=Math.floor(Math.random()*10)%3;
    switch(empCheck)
    {
        case FULL_TIME:
           return FULL_TIME_HRS;
        case PART_TIME:
            return PART_TIME_HRS;
        default:
           return isAbsent;
    }
}
//UC4   
for (let day=0;day<NO_OF_WORKING_DAYS;day++)
{
    empHrs+= getWorkingHours();
}
//UC5
let day=0;
empHrs =0;
while(day++ <NO_OF_WORKING_DAYS && empHrs<=MAX_WORKING_HRS_IN_MONTH)
{
    empHrs += getWorkingHours();
}
console.log(`Total days = ${day-1}`);
console.log(`Total Employee Work hours in a Month = ${empHrs}`);
//Calling getWorkingHours
//calculate total wage based on emphrs
let totalWage =empHrs*WAGE_PER_HR;
console.log(`Total Wage = ${totalWage}`);