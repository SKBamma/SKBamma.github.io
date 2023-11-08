//function to convert f to c
export function convertFahrenheit(temperature) {
    let inC = (temperature - 32) * 5 / 9;
    return inC;
}
//testing the function
console.log("in celsius expect 0: ", convertFahrenheit(32));
console.log("in celsius expect -17.7778: ", convertFahrenheit(0));
console.log("in celsius expect 100: ", convertFahrenheit(212));
console.log("expect 37.7778: ", convertFahrenheit(100));
