//UC1 IF ELSE CONDITION
{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if (empCheck == IS_ABSENT) {
      console.log("UC1--- Employee is Absent");
    } else {
      console.log("UC1--- Employee is Present");
    }
  }
  //UC2  Switch Case
  {
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    {
      let empHrs = 0;
      let empCheck = Math.floor(Math.random() * 10) % 3;
      switch (empCheck) {
        case IS_PART_TIME:
          empHrs = PART_TIME_HOURS;
          break;
        case IS_FULL_TIME:
          empHrs = FULL_TIME_HOURS;
          break;
        default:
          empHrs = 0;
      }
      let e
let empWage = empHrs * WAGE_PER_HOUR;
      console.log("UC2--- EmpWage:" + empWage);
    }
  }
  //UC3  Functions
  {
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    var WAGE_PER_HOUR = 20;
function getWorkingHours(empCheck) {
      switch (empCheck) {
        case IS_PART_TIME:
          return PART_TIME_HOURS;
        case IS_FULL_TIME:
          return FULL_TIME_HOURS;
        default:
          return 0;
      }
    }
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("UC3--- Hour:" + empHrs + " EmpWage:" + empWage);
  }
  //uc4 for loop
  {
    const NUM_OF_WORKING_DAYS = 20;
    let totalEmpHrs = 0;
    for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
      let empCheck = Math.floor(Math.random() * 10) % 3;
      totalEmpHrs += getWorkingHours(empCheck);
    }
    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log(
      "UC4--- Number of Days: " +
        NUM_OF_WORKING_DAYS +
        " Total Hrs:" +
        totalEmpHrs +
        " Emp Wage:" +
        empWage
    );
  }
  //UC5 While LOOP
  {
    const MAX_HRS_IN_MONTH = 160;
    const NUM_OF_WORKING_DAYS = 20;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    while (
      totalEmpHrs <= MAX_HRS_IN_MONTH &&
      totalWorkingDays < NUM_OF_WORKING_DAYS
    ) {
      totalWorkingDays++;
      let empCheck = Math.floor(Math.random() * 10) % 3;
      totalEmpHrs += getWorkingHours(empCheck);
    }
    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log(
      "UC5--- Total Days:" + totalWorkingDays +
        " Total Hrs:" +  totalEmpHrs +
        " EmpWage: " + empWage
    );
  }
  //UC6---
  {
    function calcDailyWage(empHrs) {
      return empHrs * WAGE_PER_HOUR;
    }
    const MAX_HRS_IN_MONTH = 160;
    const NUM_OF_WORKING_DAYS = 20;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyWageArr = new Array();
while (
      totalEmpHrs <= MAX_HRS_IN_MONTH &&
      totalWorkingDays < NUM_OF_WORKING_DAYS
    ) {
      totalWorkingDays++;
      let empCheck = Math.floor(Math.random() * 10) % 3;
      let empHrs = getWorkingHours(empCheck);
      totalEmpHrs += empHrs;
      empDailyWageArr.push(calcDailyWage(empHrs));
    }
    let empWage = calcDailyWage(totalEmpHrs);
    console.log("Employee wage array: " + empDailyWageArr.join(" "));
    console.log(
      "UC6--- Total Days: " +
totalWorkingDays +
        " Total Hrs: " +
        totalEmpHrs +
        " Emp Wage: " +
        empWage
    );
    // Array helper Functions
    // UC 7A- Calc total Wage using Array forEach traversal or reduce method
    let totEmpWage = 0;
    function sum(dailyWage) {
      totEmpWage += dailyWage;
    }
    empDailyWageArr.forEach(sum);
    console.log(
      "UC7A- Total Days: " +
        totalWorkingDays +
        " Total Hrs: " +
        totalEmpHrs +
        " Emp Wage: " +
        totEmpWage
    );
  
    function totalWages(totalWage, dailyWage) {
      return totalWage + dailyWage;
    }
console.log(
      "UC7A - Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages)
    );
    //UC 7B - Show the day along with Daily Wage using Array Map Helper Function
    let dailyCntr = 0;
    function mapDayWithWage(dailyWage) {
      dailyCntr++;
      return dailyCntr + " = " + dailyWage;
    }
    let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
    console.log(mapDayWithWageArr);
    //UC 7C - Show Days when Full Time Wage of 160 were earned
    function fulltimeWage(dailyWage) {
        return dailyWage.includes("160");
      }
      let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
      console.log("UC7C - Daily Wage Filter When FullTime Wage is Earned");
      console.log(fullDayWageArr);
      // UC 7D:- Find the first occurences when Full Time Wage was earned using find function
    function findFulltimeWage(dailyWage) {
        return dailyWage.includes("160");
      }
      console.log(
        "UC7D - First time Fulltime wage was earned on Day: " +
          mapDayWithWageArr.find(findFulltimeWage)
      );
      // UC 7E:- Check if Every Element of Full Time Wage is truely holding Full time wage
    function isAllFulltimeWage(dailyWage) {
        return dailyWage.includes("160");
      }
      console.log(
        "UC7E - Check All Element have Full Time Wage: " +
          fullDayWageArr.every(isAllFulltimeWage)
      );
      // UC 7F:- Check if there is any Part Time Wage
    function isAnyPartTimeWage(dailyWage) {
        return dailyWage.includes("80");
      }
      console.log(
        "UC7F - Check if there is any Part Time Wage: " +
          mapDayWithWageArr.some(isAnyPartTimeWage)
      );
      // UC 7G:- Find the number of days the Employee Worked
    function totalDaysWorked(numOfDays, dailyWage) {
        if (dailyWage > 0) return numOfDays + 1;
        return numOfDays;
      }
      console.log(
        "UC 7G - Number of Days Emp Worked: " +
          empDailyWageArr.reduce(totalDaysWorked, 0)
      );
  }
//       /* UC8: Map Functions
//       Store the Day and the Daily Wage along with the Total Wage
//           - Use Map to store Day wise Wage
//           - Compute the total wage using the Map */
//   {
//     const MAX_HRS_IN_MONTH = 160;
//     const NUM_OF_WORKING_DAYS = 20;
//     let totalEmpHrs = 0;
//     let totalWorkingDays = 0;
//     let empDailyWageArr = new Array();
//     let empDailyWageMap = new Map();
  
//     function calcDailyWage(empHrs) {
//       return empHrs * WAGE_PER_HOUR;
//     }
// while (
//       totalEmpHrs <= MAX_HRS_IN_MONTH &&
//       totalWorkingDays < NUM_OF_WORKING_DAYS
//     ) {
//       totalWorkingDays++;
//       let empCheck = Math.floor(Math.random() * 10) % 3;
//       let empHrs = getWorkingHours(empCheck);
//       totalEmpHrs += empHrs;
//       empDailyWageArr.push(calcDailyWage(empHrs));
//       empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
//     }
//     console.log(empDailyWageMap);
//     function totalWages(totalWage, dailyWage) {
//       return totalWage + dailyWag
// console.log(
//       "UC8 - Total Emp Wage: " +
//         Array.from(empDailyWageMap.values()).reduce(totalWages, 0)
//     );
//   }
// }
//9A
/* Arrow Function:- 
        Arrow Function does what the normal JS Function does or JS Functional Expression does.
        Arrow Function is similar to Lambda Function in Java.
        It can be inline or separately defined as functional variable that can be passed as method parameters
        It really simplifies the code and makes it look elegant 
    */
{
  const MAX_HRS_IN_MONTH = 160;
  const NUM_OF_WORKING_DAYS = 20;
  let totalEmpHrs = 0;
  let totalWorkingDays = 0;
  let empDailyWageArr = new Array();
  let empDailyWageMap = new Map();
  let empDailyHrsMap = new Map();

  function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
  }

  while (
    totalEmpHrs <= MAX_HRS_IN_MONTH &&
    totalWorkingDays < NUM_OF_WORKING_DAYS
  ) {
totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays, empHrs);
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
  }
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
  };
  let totalHours = Array.from(empDailyHrsMap.values())
    .filter((dailyHours) => dailyHours > 0)
    .reduce(findTotal, 0);
  let totalSalary = empDailyWageArr
    .filter((dailyWage) => dailyWage > 0)
    .reduce(findTotal, 0);
console.log(
    "UC9A - Emp Wage with Arrow. " +
      "\n\tTotal Hours: " +
      totalHours +
      ", Total Wages: " +
      totalSalary
  );

  let nonWorkingDays = new Array();
  let partWorkingDays = new Array();
  let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value, key, map) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
  });
  console.log("Full Working Days: " + fullWorkingDays);
  console.log("Part Working Days: " + partWorkingDays);
  console.log("Non Working Days: " + nonWorkingDays);
}

/* Arrow Function:- 
        Arrow Function does what the normal JS Function does or JS Functional Expression does.
        Arrow Function is similar to Lambda Function in Java.
        It can be inline or separately defined as functional variable that can be passed as method parameters
        It really simplifies the code and makes it look elegant 
    */
 
        // UC10 : Ability to store the Day, Hours Worked and Wage Earned in a single object.
            const MAX_HRS_IN_MONTH = 160;
            const NUM_OF_WORKING_DAYS = 20;
            let totalEmpHrs = 0;
            let totalWorkingDays = 0;
            let empDailyHrsAndWageArr = new Array();
            while (
              totalEmpHrs <= MAX_HRS_IN_MONTH &&
              totalWorkingDays < NUM_OF_WORKING_DAYS
            ) {
        totalWorkingDays++;
              let empCheck = Math.floor(Math.random() * 10) % 3;
              let empHrs = getWorkingHours(empCheck);
              totalEmpHrs += empHrs;
              empDailyHrsAndWageArr.push({
                dayNum: totalWorkingDays,
                dailyHours: empHrs,
                dailyWage: calcDailyWage(empHrs),
                toString() {
        return (
                    "\nDay" +
                    this.dayNum +
                    " => Working Hours is " +
                    this.dailyHours +
                    " And Wage Earned = " +
                    this.dailyWage
                  );
                },
              });
            }
            console.log(
              "\nUC10 Showing Daily Hours Worked and Wage Earned: " +
                empDailyHrsAndWageArr
            );
//uc11a          
            let totalWages = empDailyHrsAndWageArr
            .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyWage > 0)
            .reduce(
              (totalWage, dailyHrsAndWage) => (totalWage += dailyHrsAndWage.dailyWage),
              0
            );
      let totalHours = empDailyHrsAndWageArr
            .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyWage > 0)
            .reduce(
              (totalHours, dailyHrsAndWage) =>
                (totalHours += dailyHrsAndWage.dailyHours),
              0
            );
            console.log(
              "\nUC 11A - Total Hours: " + totalHours + " Total Wages: " + totalWages
            );
//11b
    //         let fullTimeWorkingDaysStrArr = empDailyHrsAndWageArr
    //   .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyHours == 8)
    //   .forEach((dailyHrsAndWage) => console.log(dailyHrsAndWage.toString()));
    // console.log(
    //   "\nUC 11B - FullTimeWorkingDayStrings: " + fullTimeWorkingDaysStrArr
    // );
    console.log('\UC Full working days',empDailyHrsAndWageArr.filter(Object=>Object.dailyHours>4).map(Object=>Object.dayNum).toString());  
    //11c
    console.log('\UC PartTime working days',empDailyHrsAndWageArr.filter(Object=>Object.dailyHour=4).map(Object=>Object.dayNum).toString());  
    //11d
    console.log('\UC No working days',empDailyHrsAndWageArr.filter(Object=>Object.dailyHours,4).map(Object=>Object.dayNum).toString());  
                 