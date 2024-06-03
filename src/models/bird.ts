class Bird {
    // Properties
    name: string;
    species: string;
    canFly: boolean;
  
    // Constructor
    constructor(name: string, species: string, canFly: boolean = true) {
      this.name = name;
      this.species = species;
      this.canFly = canFly;
    }
  
    // Methods
    fly() {
      if (this.canFly) {
        console.log(`${this.name} is flying!`);
      } else {
        console.log(`${this.name} cannot fly.`);
      }
    }
  
    sing() {
      console.log(`${this.name} is singing!`);
    }
  
    // Getter for bird info
    getInfo() {
      return `Name: ${this.name}, Species: ${this.species}, Can Fly: ${this.canFly}`;
    }
  }

  export default Bird;