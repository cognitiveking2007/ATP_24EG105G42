/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
*/
const temperatures = [32, 35, 28, 40, 38, 30, 42];
//1.filter() temperatures above 35
let T1=temperatures.filter(temperatures=>temperatures>35)
console.log("1.temperatures above 35 are ",T1)
//2.map() to convert all temperatures from Celsius → Fahrenheit
let M=temperatures.map(temperatures=>(temperatures*(9/5)+32))
console.log("2.Temperatures in fahrenheit ",M)
// 3. reduce() to calculate average temperature
let r=(temperatures.reduce((accumulator,temperatures)=>accumulator+temperatures))/(temperatures.length)
console.log("3.average temperature is ",r)
// 4. find() first temperature above 40
let f=temperatures.find(temperatures=>temperatures>40)
console.log(" 4. first temperature above 40 is ",f)
//  5. findIndex() of temperature 28
let fi=temperatures.findIndex(temperatures=>temperatures===28)
console.log(" 5. findIndex() of temperature 28 is",fi)