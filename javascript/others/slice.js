// Slice() method

// The slice() method can be used to create a copy of an array or return a portion of an array.
// It is important to note that the slice() method does not alter the original array but instead creates a shallow copy

// slice(optional start parameter, optional end parameter)

const cities = ['Tokyo', 'Cairo', 'Los Angeles', 'Paris', 'Seattle'];

const result = cities.slice();
console.log(result);
// ['Tokyo', 'Cairo', 'Los Angeles', 'Paris', 'Seattle'];

const newCityArr = cities.slice(2);
const lastCities = cities.slice(-2);

console.log('Original: ', cities);
console.log('New: ', newCityArr);
console.log('Last Cities: ', lastCities);

const noCityFound = cities.slice(5);
console.log(noCityFound);

// important
// In this example, we have specified a start index of 2 and end index of 4.
// The new returned array will only include the cities at index 2 and 3 because the end position is not included in the extracted elements.
const selectedCities = cities.slice(2, 4);

console.log(selectedCities);
