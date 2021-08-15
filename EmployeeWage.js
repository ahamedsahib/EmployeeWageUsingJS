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
let emphrs = 0;
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
    emphrs+= getWorkingHours();
}
//UC5
let day=0,totalemphrs=0;
emphrs =0;
//initalize empDailyWageArray to store daily wage
let empDailyWageArray=new Array();
//CalcDailywage to calculate daily wage of employee 
let CalcDailywage=(emphrs)=>emphrs*WAGE_PER_HR;
while(day++ <NO_OF_WORKING_DAYS && emphrs<=MAX_WORKING_HRS_IN_MONTH)
{
    emphrs = getWorkingHours();
    totalemphrs += emphrs;
    empDailyWageArray.push(CalcDailywage(emphrs));
}
//calculating total emp wage
let empWage=CalcDailywage(totalemphrs);
console.log(`TotalDays:${day} working hours:${totalemphrs} Total Wage:${empWage}`);
