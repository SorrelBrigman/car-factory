/*
  Create a function named Car with one property named `manufactured_date`
  whose value will be Date.now()
 */
function Car () {
  // Create the manufactured date property (see above)
  this.manufactured_date = Date.now();
}

/*
  1. Create a new constructor function for the make of your favorite car.
  2. It must inherit from the more general Car object.
  3. Give it one property, named manufacturer, that holds a string value.
         For, example, this.manufacturer = "Ford".
 */
function Toyota () {
  // Define the manufacturer instance variable
  this.manufacturer = "Toyota";
}
// Set the prototype to a new Car instance

Toyota.prototype = new Car();
/*
  1. Create a constructor function named after your favorite car model.
  2. It must inherit from the specific make type you created in previous step.
  3. Create some instance properties that are specific to the specific
        car model (e.g. horsepower, cargo capacity, etc.)
*/
function Camry (plate) {
  this.type = "sedan";
  this.engine = "4-cylinder";
  this.gasMilage = "amazing";
  this.plate = plate;

}
// Set the prototype to appropriate model you created above and set the model name argument
Camry.prototype = new Toyota;

/*
    Being an avid car collector, you own three different cars all of
    same model from your favorite manufacturer.

    1. Create three new instances of your favorite car.
    2. Create a new property on each object to hold the license plate
       number for each car.
*/
var myFirstFavoriteCar = new Camry("ABC-123");

var mySecondFavoriteCar = new Camry("ZYX-987");

var myThirdFavoriteCar = new Camry("XYZ-321");

/*
  Now let's see some power of prototypal inheritance. Create a function for
  another model that's made by the manufacturer as your previous car. So if
  your first model was Fusion, make another one here for F150, for example.
 */
function Tercel (plate_number) {
  this.type = "wagon";
  this.engine = "2-cylinder";
  this.gasMilage = "awing";
  this.plate = plate_number;
}
/*
  Assign the prototype to the make you define above. Now both models will
  inherit the `manufacturer` property from the make function.
 */

Tercel.prototype = new Toyota;

/*
  Now create an instance of this new car model to put in your garage. Remember
  to give it a plate number.
 */

 var myFirstCar = new Tercel("LAME-123");
