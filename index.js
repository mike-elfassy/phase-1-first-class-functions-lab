const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']))

const returnLastTwoDrivers =  function(drivers) {
    return drivers.slice(-2);
};

console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

console.log(selectingDrivers);

const createFareMultiplier = multiplier => {
    return function(fare) { return fare * multiplier };
};

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
};

console.log(fareDoubler(9));

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
};

console.log(fareTripler(9));

// const selectDifferentDrivers = (drivers, index) => selectingDrivers[index](drivers);
//console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'],0));

const selectDifferentDrivers = function(drivers, cb) {
    return cb(drivers)
};

console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers(drivers)));