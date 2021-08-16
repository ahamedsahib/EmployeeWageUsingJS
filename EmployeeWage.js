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
let empDailyWageMap=new Map();
let empDailyHourMap=new Map();
let empWageAndHourArray=new Array();

//CalcDailywage to calculate daily wage of employee 
let CalcDailywage=(emphrs)=>emphrs*WAGE_PER_HR;
while(day++ <NO_OF_WORKING_DAYS && emphrs<=MAX_WORKING_HRS_IN_MONTH)
{
    emphrs = getWorkingHours();
    totalemphrs += emphrs;
    let dailywage=CalcDailywage(emphrs);
    empDailyWageArray.push(dailywage);
    empDailyWageMap.set(day,dailywage);
    empDailyHourMap.set(day,emphrs);
    //create own object and store all details
    empWageAndHourArray.push(
        {
            Day:day,
            DailyEmpHrs:emphrs,
            DailyEmpWage:dailywage,
            //tostring mthod to print the data
            toString()
            {
                return `Day: ${this.Day}  Working hours: ${this.DailyEmpHrs}   Emp Wage : ${this.DailyEmpWage}\n`;
            }
        }
        );
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

//UC 8
totalempWage=0;
console.log(empDailyWageMap);
CalctotalempWage=(totalempWage,dailyWage)=>totalempWage+dailyWage;
console.log(`UC8-Calculate total Emp Wage using Map :${Array.from(empDailyWageMap.values()).reduce(CalctotalempWage,0)} `);

//UC9
TotalWorkingHrs=(totalhrs,dailyhrs)=>totalhrs+dailyhrs;
let totalHours=Array.from(empDailyHourMap.values()).reduce(TotalWorkingHrs,0);
let totalSalary=empDailyWageArray.filter(dailyWage=>dailyWage>0).reduce(TotalWorkingHrs,0);
console.log(`UC-9A Employee Wage with arrow \n Total Hours:${totalHours} totalWage :${totalSalary}`);

let fullTime=new Array();
let partTime=new Array();
let noWorkingDay=new Array();
empDailyHourMap.forEach((value,key)=>
{
    if(value==8) fullTime.push(key);
    
    else if(value==4) partTime.push(key);
  
    else  noWorkingDay.push(key);
});

console.log("UC-9B Full time working days "+fullTime);
console.log("UC-9B Part time working days "+partTime);
console.log("UC-9B No working days "+noWorkingDay);
//UC11A Finding Total hours and total wage using object
let totalWages=empWageAndHourArray
.filter(dailyHrsandWage=>dailyHrsandWage.DailyEmpWage>0)
.reduce((totalwage,dailyHrsandWage)=>totalwage+=dailyHrsandWage.DailyEmpWage,0)
console.log(`UC11 object creation ${totalWages}`);

let totalHoursObject=empWageAndHourArray.filter(dailyHrsAndWage=>dailyHrsAndWage.DailyEmpHrs>0)
                    .reduce((totalHrs,dailyHrsAndWage)=>totalHrs+=dailyHrsAndWage.DailyEmpHrs,0);
console.log(`UC-11A Total empHrs : ${totalHoursObject}  Total wages : ${totalWages}`);
//UC-11B  full time employee using object and arrow function
console.log("UC-11B Full time working day of employee");
empWageAndHourArray.filter(dailyHrsAndWage=>dailyHrsAndWage.DailyEmpHrs==8).forEach(dailyHrsAndWage=>process.stdout.write(dailyHrsAndWage.toString()));
//UC-11C Details of part time employee using object and arrow function
let partTimeDays=empWageAndHourArray.filter(dailyHrsAndWage=>dailyHrsAndWage.DailyEmpHrs==4).map(dailyHrsAndWage=>dailyHrsAndWage.toString());
console.log(`UC-11C Part time working day \n${partTimeDays.join('')}`);
//UC-11D Employee Absent day using object and arrow function
let nonWorkingDay=empWageAndHourArray.filter(dailyHrsAndWage=>dailyHrsAndWage.DailyEmpHrs==0).map(dailyHrsAndWage=>dailyHrsAndWage.toString());
console.log("UC-11D Employee Absent Day\n"+nonWorkingDay.join(''));