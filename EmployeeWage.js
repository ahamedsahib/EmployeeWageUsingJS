//UC1
const isAbsent=0;
const WAGE_PER_HR  = 20;
const PART_TIME = 1;
const FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
//generate random value between 0-2(0,1,2) 
let empCheck=Math.floor(Math.random()*10)%3;
if(empCheck==isAbsent)
    console.log("Employee is Absent");
else
    console.log("Employee is present");

//UC2
let empHrs = 0;
function getWorkingHours(empcheck)
{
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
//Calling getWorkingHours
//calculate total wage based on emphrs
let totalWage = getWorkingHours(empCheck)*WAGE_PER_HR;
console.log(`Total Wage = ${totalWage}`);