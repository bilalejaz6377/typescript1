// define a function to create a car object  with optional options ....
function create_car(manufacture, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //initialize a car object with manufacture  and model
    var car = {
        manufacture: manufacture,
        model: model,
    };
    // add additional options to the car object 
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call the function to create a car object 
var myc_car = create_car("toyota", "fx", "color:black", "sunroof: true", "year:2024");
// print the variable to insure all the information is store in the object
console.log(myc_car);
