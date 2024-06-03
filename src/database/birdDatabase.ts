import { Bird } from "../models/bird";

let birds: Bird[] = [];

export const getBirdsFromDB = (): Bird[] => birds;

export const getBirdFromDB = (id: number): Bird | undefined =>
  birds.find((b) => b.id === id);

export const addBirdToDB = (bird: Bird): Bird => {
  const newBird = { ...bird }; //id: nextId++,
  birds.push(newBird);
  return newBird;
};

export const updateBirdInDB = (
  id: number,
  updatedBird: Partial<Bird>
): Bird | undefined => {
  const index = birds.findIndex((b) => b.id === id);
  if (index !== -1) {
    birds[index] = { ...birds[index], ...updatedBird };
    return birds[index];
  }
  return undefined;
};

export const deleteBirdFromDB = (id: number): Bird | undefined => {
  const index = birds.findIndex((b) => b.id === id);
  if (index !== -1) {
    const [deletedBird] = birds.splice(index, 1);
    return deletedBird;
  }
  return undefined;
};
