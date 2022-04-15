//** Clean Code: Variable */

// * 1. use meaningful and pronounceable variable names 
// var yyyymmdstr = moment().format('YYYY/MM/DD')
var yearMonthDay = moment().format('YYYY/MM/DD')

// * 2. Use ES6 constants when variable values do not change (not re-assign)
// var FIRST_US_PRESIDENT = 'George Washington'
const FIRST_US_PRESIDENT = 'George Washington'

// * 3. Use the same vocabulary for same type of variable 
// getUserInfo()
// getClientData()
// getCustomerRecord()
getUser()

// * 4. use searchable names 
// for (var i = 0; i < 525600; i++) {
//   runCronJob();
// }
var MINUTES_IN_A_YEAR = 525600;
for (var i = 0; i < MINUTES_IN_A_YEAR; i++) {
  runCronJob();
}

// * 5. Use explanatory variables
const cityStateRegex = /^(.+)[,\\s]+(.+?)\s*(\d{5})?$/;
// saveCityState([1], cityStateRegex.match(cityStateRegex)[2])
const match = cityStateRegex.match(cityStateRegex)
const city = match[1]
const state = match[2]
saveCityState(city, state)

// * 6. Don't add unneeded context 
// var Car = {
//   carMaker: 'Honda',
//   carModel: 'Accord',
//   carColor: 'Blue',
// }
// function paintCar(car) {
//   car.carColor = 'Red'
// }

var Car = {
  maker: 'Honda',
  model: 'Accord',
  color: 'Blue',
}
function paint(car) {
  car.color = 'Red'
}

// * 7. Short-circuiting is cleaner than conditions
// function createMicrobrewery(name) {
//   var breweryName;
//   if (name) {
//     breweryName = name
//   } else {
//     breweryName = 'Hipstar Brew Co'
//   }
// }

function createMicrobrewery(name) {
  var breweryName = name || 'Hipstar Brew Co';
}



