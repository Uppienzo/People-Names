let peopleNamesList = require("../country/state/city/index");
let firstNames = require("../utilities/utils/index");

let getPeopleInCity = (peopleNamesList) => {
  let list_a = firstNames(peopleNamesList);
  return list_a;
};

console.log(getPeopleInCity(peopleNamesList));
module.exports = getPeopleInCity(peopleNamesList);
