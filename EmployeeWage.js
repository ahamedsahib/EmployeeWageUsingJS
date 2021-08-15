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

//--------UC 7A--------------
let totalempWage=0;
//creating calctotalempWage function to calculate total empwage
let calctotalempWage=(dailywage)=>totalempWage+=dailywage;
//using for each loop iterate empDailyWageArray 
empDailyWageArray.forEach(calctotalempWage);
console.log(`TotalDays:${day} working hours:${totalemphrs} Total Wage:${totalempWage}`);

//UC 7B
let dayCount=0;
//function to count the day and dailwage
MapwithDayAndWage=(dailyWage)=>{
    dayCount++;
    return `Day ${dayCount} : ${dailyWage}`;
}
//Using map method in array
let mapWithdDayCountAndDailyWageArr=empDailyWageArray.map(MapwithDayAndWage);
console.log(`UC-7B Map method\n${mapWithdDayCountAndDailyWageArr.join(" ")}`);
//UC 7C
FulltimeWage=(dailyWage)=>dailyWage.includes("160");
let FulltimeWageArr=mapWithdDayCountAndDailyWageArr.filter(FulltimeWage);
console.log(`UC-7C Filter Full time Employee Days\n${FulltimeWageArr.join(" ")}`);

//7D
let FirstFulltimeWageArr=mapWithdDayCountAndDailyWageArr.find(FulltimeWage);
console.log(`UC-7D Find First Occurence of Fulltime of Employee\n${FirstFulltimeWageArr}`);

//UC 7E
console.log(`UC-7E Check if Every Element have full time Wage: ${FulltimeWageArr.every(FulltimeWage)}`);

//UC 7F
isAnyPartTimeWage=(dailyWage)=>dailyWage.includes("80");
console.log(`UC-7E Check if Any part time Wage: ${mapWithdDayCountAndDailyWageArr.some(isAnyPartTimeWage)}`);
 
//UC 7G
dayCount=0;
TotalDaysworked=(dayCount,dailyWage)=>{
    if(dailyWage>0)
         return dayCount+1;
    return dayCount;
}
console.log(`UC-7G Total Num of Employee Present: ${empDailyWageArray.reduce(TotalDaysworked,0)}`);