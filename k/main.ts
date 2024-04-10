// define a function to create a car object  with optional options ....
function create_car(manufacture,model,...options){

    //initialize a car object with manufacture  and model
    let car = {
        manufacture: manufacture,
        model:model,
    };
    
    // add additional options to the car object 
      options.forEach(option => {
        let [key,value] = option.split(":");
        car [key.trim()] = value.trim();
    });
       return car;
    }
     
    // call the function to create a car object 
    let myc_car = create_car("toyota","fx","color:black","sunroof: true","year:2024" )
    
    // print the variable to insure all the information is store in the object
    console.log(myc_car);

