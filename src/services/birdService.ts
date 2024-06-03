import Bird from "../models/bird";

class birdService {
  private birds: Bird[];

  constructor() {
    this.birds = [];
  }

  // Save a new bird
  save(bird: Bird): void {
    this.birds.push(bird);
    console.log(`Bird saved: ${bird.getInfo()}`);
  }

  // Update an existing bird by name
  update(name: string, updatedBird: Bird): void {
    const index = this.birds.findIndex((b) => b.name === name);
    if (index !== -1) {
      this.birds[index] = updatedBird;
      console.log(`Bird updated: ${updatedBird.getInfo()}`);
    } else {
      console.log(`Bird not found: ${name}`);
    }
  }

  // Delete a bird by name
  delete(name: string): void {
    const index = this.birds.findIndex((b) => b.name === name);
    if (index !== -1) {
      const deletedBird = this.birds.splice(index, 1)[0];
      console.log(`Bird deleted: ${deletedBird.getInfo()}`);
    } else {
      console.log(`Bird not found: ${name}`);
    }
  }

  // Get all birds
  getAll(): Bird[] {
    return this.birds;
  }
}

export default birdService;
