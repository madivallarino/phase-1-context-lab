/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(arr){
    let employeeRecord = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: [],
    }

    return employeeRecord
}

function createEmployeeRecords(arr){
    return arr.map((line )=> createEmployeeRecord(line))
}

let createTimeInEvent = function(dateStamp){
    let date = dateStamp.slice(0,10)
    let hour = dateStamp.slice(11,13)
    let multipleHour = hour * 100

    this.timeInEvents.push({
        type: "TimeIn",
        hour: multipleHour,
        date,
    })

    return this
}

let createTimeOutEvent = function(dateStamp){
    let date = dateStamp.slice(0,10)
    let hour = dateStamp.slice(11,13)
    let multipleHour = hour * 100

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: multipleHour,
        date,
    })

    return this
}


let hoursWorkedOnDate = function(dateStamp){ 
  

    for(let key in this.timeOutEvents){
      if(this.timeOutEvents[key].date === dateStamp){
          let integer = this.timeOutEvents[key].hour - this.timeInEvents[key].hour
          return Math.abs(integer / 100)
      }
    }
}

let wagesEarnedOnDate = function(dateStamp){
    let hoursWorked = (hoursWorkedOnDate.call(this,dateStamp))
    let payRate = (this.payPerHour)
    return hoursWorked * payRate  
}

let findEmployeeByFirstName = function(srcArray, name){
    for(let object of srcArray){
        if(object.firstName === name){
           return object
        }
    }
    return undefined
}

let calculatePayroll = function(allWagesFor, array){
    console.log(array)
    // for(let person of array ){
       
    // }
}



let testObject = ["Zach","Big Brains", "The GrandMaster", 10000]
let testObject2 = ["Madison","Whatsup", "Coding Chick", 10000]
let testObject3 = ["Sarah","Water", "Teacher", 10000]
let testObject4 = ["Nicholas","Cool", "Lawyer", 10000]
let testObject5 = ["Benjamin","Chill", "Cook", 10000]

let testTime1 = "2022-08-18 0412"
let testTime2 = "2022-08-18 1212"
let testTime3 = "2022-08-18"


let newEmployee = createEmployeeRecord(testObject)
let newEmployee2 = createEmployeeRecord(testObject2)
let newEmployee3 = createEmployeeRecord(testObject3)
let newEmployee4 = createEmployeeRecord(testObject4)
let newEmployee5 = createEmployeeRecord(testObject5)
// let allEmployees = [newEmployee, newEmployee2, newEmployee3, newEmployee4, newEmployee5]
let name = "Madison"
let TimeIn = createTimeInEvent.call(newEmployee,testTime1)
let TimeOut = createTimeOutEvent.call(TimeIn,testTime2)


let TimeIn2 = createTimeInEvent.call(newEmployee2,testTime1)
let TimeOut2 = createTimeOutEvent.call(TimeIn2,testTime2)
let TimeIn3 = createTimeInEvent.call(newEmployee3,testTime1)
let TimeOut3 = createTimeOutEvent.call(TimeIn3,testTime2)
let TimeIn4 = createTimeInEvent.call(newEmployee4,testTime1)
let TimeOut4 = createTimeOutEvent.call(TimeIn4,testTime2)
let TimeIn5 = createTimeInEvent.call(newEmployee5,testTime1)
let TimeOut5 = createTimeOutEvent.call(TimeIn5,testTime2)
// let hourWorked = hoursWorkedOnDate.call(TimeOut,testTime3)
let wagesEarned = wagesEarnedOnDate.call(TimeOut, testTime3)

let allEmployees = [TimeOut, TimeOut2, TimeOut3, TimeOut4, TimeOut5]

let firstNames = findEmployeeByFirstName(allEmployees, name )




const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

let payRoll = calculatePayroll(allWagesFor, allEmployees)
console.log(payRoll)