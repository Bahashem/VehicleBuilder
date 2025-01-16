// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
export default class Motorbike extends Vehicle {
  
    public vin: string;
    public color: string;
    public make: string;
    public model: string;
    public year: number;
    public weight: number;
    public topSpeed: number;
    public wheels: Wheel[];
  
    constructor(
     vin:string,
     color: string,
     make: string,
     model: string,
     year: number,
     weight: number,
     topSpeed: number,
     wheels: Wheel[]
    ){
     super(vin,color,make,model, year, weight, topSpeed);
     if (wheels.length !==2) {
      console.log('Invalid number of wheels. Defaulting to 2 standard wheels.');
      this.wheels = [new Wheel(17, 'DefaultBrand'), new Wheel(17, 'DefaultBrand')];
     } else {
        this.wheels = wheels;
      }
     } 
     wheelie(): void {
      console.log('Motorbike ${this.make} ${this.model} is doing a wheelie!');
     }

     printDetails(): void {
      super.printDetails();
      console.log('Wheels: ${this.wheels.map(wheel => `($wheel.diameter}in, ${wheel.brand})`).joint(', ')}`);
     }
    }
}
export class Vehicle{
  constructor(
    public vin:String,
    public color: string,
    public make: string,
    public model: string,
    public year: number,
    public weight: number,
    public topSpeed: number
  ){}
  printDetails(): void{
    console.log('VIN: ${this.vin}, Make: ${this.make}, Model: ${this.model}, Year: ${this.year}');
    console.log(`Weight:${this.weight} kg, Top Speed: ${this.topSpeed} km/h, Color: ${this.color}`);
  }
}
  // TODO: Declare properties of the Motorbike class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])

  // TODO: Create a constructor that accepts the properties of the Motorbike class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Motorbike class
    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not

  // TODO: Implement the wheelie method
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"

  // TODO: Override the printDetails method from the Vehicle class
  // TODO: The method should call the printDetails method of the parent class
  // TODO: The method should log the details of the Motorbike
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
}

// Export the Motorbike class as the default export
export default Motorbike;
