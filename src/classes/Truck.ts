// Importing the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

class Truck extends Vehicle implements AbleToTow {
  // properties of the Truck class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Constructor for the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    // Call parent class of vehicle
    super();

    // Initialize properties of the Truck class
    this.vin = vin;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.color = color;

    // Check if the wheels array has 4 elements, if not, creates new wheel objects.
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
    this.wheels = wheels;
    }
    this.towingCapacity = towingCapacity;

  }

// Implements the tow method from the AbleToTow interface
tow(vehicle: Truck | Motorbike | Car): void {
  if (!vehicle.make || !vehicle.model) {
    console.error("Error: Vehicle make and model are undefined.");
    return;
  }

  // Compare the vehicle's weight with towing capacity
  if (vehicle.weight <= this.towingCapacity) {
    console.log(`The ${vehicle.make} ${vehicle.model} is being towed.`);
  } else {
    console.log(`The ${vehicle.make} ${vehicle.model} is too heavy to be towed.`);
  } 
}

    // Override the printDetails method from the Vehicle class
    override printDetails(): void {
      // Call the printDetails method of the parent class, Vehicle
      super.printDetails();
  
      // Print details of the Truck class
      console.log(`VIN: ${this.vin}`);
      console.log(`Make: ${this.make}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
      console.log(`Weight: ${this.weight} lbs`);
      console.log(`Top Speed: ${this.topSpeed} mph`);
      console.log(`Color: ${this.color}`);
      console.log(`Towing Capacity: ${this.towingCapacity} lbs`);

      // Print details of the wheels
      console.log(
        `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
      );
      console.log(
        `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
      );
      console.log(
        `Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
      );
      console.log(
        `Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
      );
}};

// Export the Truck class as the default export
export default Truck;
